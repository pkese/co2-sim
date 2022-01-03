module Energy.Sim

open Shared.Types


type SimConfig = {
    installedSolarMW: float32
    installedWindMW: float32
    installedBatteryMWh: float32
    batteryEfficiency: float32 // 0.9
  } with
    static member current = {
        installedSolarMW = 278f
        installedWindMW = 3f
        installedBatteryMWh = 0f
        batteryEfficiency = 0.9f
    }
    static member initial = {
        installedSolarMW = 500f
        installedWindMW = 100f
        installedBatteryMWh = 100f
        batteryEfficiency = 0.9f
    }


let getSeries kind (series:Trace list) =
    series
    |> List.find (fun s -> s.kind=kind)

module Simulate =
    let battery (capacity: float32) efficiency (batLevels: float32[]) (batSource: float32[]) =
        let mutable level = 0f
        let sink i amount =
            let sinkable = (min (capacity-level) amount) |> max 0f
            level <- level + sinkable
            batLevels[i] <- level
            amount - sinkable
        let source i amountNeeded =
            let sourcable = min level (amountNeeded/efficiency)
            level <- level - sourcable
            batLevels[i] <- level
            let sourced = sourcable * efficiency
            batSource[i] <- sourced
            amountNeeded - sourced
        source, sink

    let fossil (current: float32[]) (projected: float32[]) =
        let sink i amount =
            let sinkable = min current[i] amount
            projected[i] <- current[i] - sinkable
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

    let kWind = cfg.installedWindMW / wind.capacity.Value
    let kSolar = cfg.installedSolarMW / solar.capacity.Value

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
    let batSource, batSink = Simulate.battery cfg.installedBatteryMWh cfg.batteryEfficiency batLevels batAmount
    let excessSource, excessSink = Simulate.excess excess
    let importSource, importSink = Simulate.import import.data export.data import'

    let inline source i amount =
        amount
        |> batSource i
        |> importSource i
        //|> excessSource i
        |> gasSource i
        |> coalSource i
        |> fun x -> if x > 0f then failwithf "sourcing should amount to zero on sample %d, have %f" i x
    let inline sink i amount =
        amount
        |> coalSink i
        |> gasSink i
        |> batSink i
        |> importSink i
        |> excessSink i


    for i in 0..nSamples-1 do
        let mutable e = wind'.data[i] + solar'.data[i] + staticProd.data[i] - totalProd.data[i] // load.data[i]
        if e >= 0f then
            // excess energy
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
            |> Map.add Coal { coal with data=coal'; total=Array.sum coal' }
            |> Map.add Gas { gas with data=gas'; total=Array.sum gas' }
            |> Map.add BatteryLevel { kind=BatteryLevel; capacity=Some cfg.installedBatteryMWh; data=batLevels; total=Array.sum batLevels }
            |> Map.add Battery { kind=Battery; capacity=Some cfg.installedBatteryMWh; data=batAmount; total=Array.sum batAmount }
            |> Map.add Excess { kind=Excess; capacity=None; data=excess; total=Array.sum excess }
            |> Map.add Import { import with data=import'; total=Array.sum import' }
    }


