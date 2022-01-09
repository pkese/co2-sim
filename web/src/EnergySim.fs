module Energy.Sim

open Shared.Types

type StoragePower =
    | AbsoluteMW of float32
    | PercentCapacity of float32

type StorageConfig = {
    capacity: float32
    power: StoragePower
    efficiencyPercent: float32
  } with
    member this.maxPower =
        match this.power with
        | AbsoluteMW x -> x
        | PercentCapacity x -> this.capacity * x * 0.01f
    member this.maxRelativePowerPercent =
        match this.power with
        | AbsoluteMW x -> x / this.capacity * 100f
        | PercentCapacity x -> x

type SimConfig = {
    installedSolarMW: float32
    installedWindMW: float32
    battery: StorageConfig
    extraNuclearMW: bool * float32
    pumpedStorage: bool * StorageConfig
  } with
    static member current = {
        installedSolarMW = 278f
        installedWindMW = 3f
        battery = { capacity=0f; power=PercentCapacity 25f; efficiencyPercent=90f }
        extraNuclearMW = false, 1100f
        pumpedStorage = false, { capacity=500f; power=AbsoluteMW 400f; efficiencyPercent=70f }
    }
    static member initial = {
        installedSolarMW = 500f
        installedWindMW = 100f
        battery = { capacity=0f; power=PercentCapacity 25f; efficiencyPercent=90f }
        extraNuclearMW = false, 1100f
        pumpedStorage = false, { capacity=500f; power=AbsoluteMW 400f; efficiencyPercent=70f }
    }


let getSeries kind (series:Trace list) =
    series
    |> List.find (fun s -> s.kind=kind)

module Simulate =
    let battery (cfg: StorageConfig) (batLevels: float32[]) (batSource: float32[]) =
        let capacity = float cfg.capacity
        let efficiency = System.Math.Sqrt(float cfg.efficiencyPercent * 0.01)
        let maxPower = float cfg.maxPower
        printfn "storage efficiency=%f, maxPower=%f" efficiency maxPower
        let mutable level = 0.0
        let sink i (amount: float32) =
            let sinkableAmount = float amount / efficiency
            let sinkable = ((min (capacity-level) sinkableAmount) |> max 0.0) |> min maxPower
            level <- level + (sinkable*efficiency)
            batLevels[i] <- float32 level
            float32 (amount - float32 sinkable)
        let source i (amountNeeded:float32) =
            let amount = float amountNeeded / efficiency
            let sourcable = (min level amount) //|> min maxPower
            level <- level - sourcable
            batLevels[i] <- float32 level
            let sourced = sourcable * efficiency
            batSource[i] <- float32 sourced
            float32 (amountNeeded - float32 sourced)
        source, sink

    let fossil (current: float32[]) (projected: float32[]) =
        let sink i amount =
            let sinkable = (current[i] - amount) |> max 0f
            projected[i] <- sinkable // !!
            amount - sinkable
        let source i amountNeeded = 
            let sourcable = min current[i] amountNeeded
            projected[i] <- sourcable
            amountNeeded - sourcable
        source, sink
    
    let import (currentImport: float32[]) (currentExport: float32[]) (projected: float32[]) =
        let sink i amount =
            let available = max (currentImport[i]-currentExport[i]) 0f // if more import than export
            let sinkable = min available amount
            projected[i] <- currentImport[i] - sinkable
            amount - sinkable
        let source i amountNeeded = 
            projected[i] <- currentImport[i]
            amountNeeded
        source, sink

    let excess (projected: float32[]) =
        let sink i amount =
            projected[i] <- amount
        let source i amountNeeded = 
            projected[i] <- 0f
            amountNeeded
        source, sink




let simulate (yStats:YearStats) (cfg:SimConfig) =

    let coal = yStats[Coal]
    let gas = yStats[Gas]
    //let load = yStats[Load]
    let staticProd = yStats[StaticProd]
    //let total = yStats[TotalProd]
    let import = yStats[Import]
    let totalProd = yStats[TotalProd]
    let export = yStats[Export]
    let wind = yStats[Wind]
    let solar = yStats[Solar]
    let nuclear = yStats[Nuclear]

    let kWind = cfg.installedWindMW / wind.capacity.Value
    let kSolar = cfg.installedSolarMW / solar.capacity.Value
    let nuclear' = 
        match cfg.extraNuclearMW, nuclear.capacity with
        | (true, newCapacity), Some capacity ->
            let k = (capacity*0.5f + newCapacity) / (capacity*0.5f)
            printfn "kNuclear = %f (current capacity=%f)" k capacity
            { nuclear with capacity = Some (capacity+newCapacity); data=nuclear.data |> Array.map (( * ) k); total = nuclear.total * k }
        | _ -> nuclear

    let wind' = { wind with capacity=Some (wind.capacity.Value * kWind); data = wind.data |> Array.map (( * ) kWind); total = wind.total * kWind }
    let solar' = { solar with capacity=Some (solar.capacity.Value * kSolar); data = solar.data |> Array.map (( * ) kSolar); total = solar.total * kSolar }
    let nSamples = wind'.data.Length
    let coal' = Array.zeroCreate nSamples
    let gas' = Array.zeroCreate nSamples
    let batLevels = Array.zeroCreate nSamples
    let batAmount = Array.zeroCreate nSamples
    let excess = Array.zeroCreate nSamples
    let import' = Array.zeroCreate nSamples
    let coalSource, coalSink = Simulate.fossil coal.data coal'
    let gasSource, gasSink = Simulate.fossil gas.data gas'
    let batSource, batSink = Simulate.battery cfg.battery batLevels batAmount
    let pumpedLevels = Array.zeroCreate nSamples
    let pumpedAmount = Array.zeroCreate nSamples
    let dummySourceOrSink i x = x
    let pumpedSource, pumpedSink =
        match cfg.pumpedStorage with
        | true, pumpedCfg -> Simulate.battery pumpedCfg pumpedLevels pumpedAmount
        | false, _ -> dummySourceOrSink, dummySourceOrSink
    let excessSource, excessSink = Simulate.excess excess
    let importSource, importSink = Simulate.import import.data export.data import'

    let inline source i amount =
        amount
        |> batSource i
        |> pumpedSource i
        |> importSource i
        |> gasSource i
        |> coalSource i
        //|> excessSource i
        |> fun x -> if x > 0f then failwithf "sourcing should amount to zero on sample %d, have %f" i x
    let inline sink i amount =
        amount
        |> coalSink i
        |> gasSink i
        |> batSink i
        |> pumpedSink i
        |> importSink i
        |> excessSink i


    for i in 0..nSamples-1 do
        let mutable e = wind'.data[i] + solar'.data[i] + nuclear'.data[i] + staticProd.data[i] - totalProd.data[i] // load.data[i]
        if e >= 0f then
            // excess energy

            //!! todo: excess is less than fossilBurn -> discharge other sources to substitute for fossil

            sink i e
        else
            // missing energy
            source i -e

    { yStats with
        isSimulated = true
        traces =
            yStats.traces
            |> Map.add Wind wind'
            |> Map.add Solar solar'
            |> Map.add Nuclear nuclear'
            |> Map.add Coal { coal with data=coal'; total=Array.sum coal' }
            |> Map.add Gas { gas with data=gas'; total=Array.sum gas' }
            |> Map.add BatteryLevel { kind=BatteryLevel; capacity=Some cfg.battery.capacity; data=batLevels; total=Array.sum batLevels }
            |> Map.add Battery { kind=Battery; capacity=Some cfg.battery.capacity; data=batAmount; total=Array.sum batAmount }
            |> Map.add Excess { kind=Excess; capacity=None; data=excess; total=Array.sum excess }
            |> Map.add Import { import with data=import'; total=Array.sum import' }
    }

