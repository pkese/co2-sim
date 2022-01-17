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
    stopCurrentNuclear: bool
    pumpedStorage: bool * StorageConfig
    electricCarsPercent: float32
    hydropowerExtraSavaGWh: bool * float32
  } with

    static member current = {
        installedSolarMW = 278f
        installedWindMW = 3f
        battery = { capacity=0f; power=PercentCapacity 25f; efficiencyPercent=90f }
        extraNuclearMW = false, 1100f
        pumpedStorage = false, { capacity=8000f; power=AbsoluteMW 400f; efficiencyPercent=70f }
        stopCurrentNuclear = false
        electricCarsPercent = 0f
        hydropowerExtraSavaGWh = false, (1044f (* savske *) + 131f (* mokrice *))
    }

    static member initial' = {
        installedSolarMW = 500f
        installedWindMW = 100f
        battery = { capacity=0f; power=PercentCapacity 25f; efficiencyPercent=90f }
        extraNuclearMW = false, 1100f
        pumpedStorage = false, { capacity=8000f; power=AbsoluteMW 400f; efficiencyPercent=70f }
        stopCurrentNuclear = false
        electricCarsPercent = 0f
        hydropowerExtraSavaGWh = false, (1044f (* savske *) + 131f (* mokrice *))
    }

    static member initial'' = {
        installedSolarMW = 6000f
        installedWindMW = 400f
        battery = { capacity=6000f; power=PercentCapacity 25f; efficiencyPercent=90f }
        extraNuclearMW = false, 1100f
        pumpedStorage = false, { capacity=8000f; power=AbsoluteMW 400f; efficiencyPercent=70f }
        stopCurrentNuclear = false
        electricCarsPercent = 0f
        hydropowerExtraSavaGWh = false, (1044f (* savske *) + 131f (* mokrice *))
    }

    static member initial = SimConfig.current


let getSeries kind (series:Trace list) =
    series
    |> List.find (fun s -> s.kind=kind)

module Balance =
    let battery (cfg: StorageConfig) (batLevels: float32[]) (batSource: float32[]) =
        let capacity = cfg.capacity
        let efficiency = float32 <| System.Math.Sqrt(float cfg.efficiencyPercent * 0.01)
        let maxPower = cfg.maxPower
        printfn "storage efficiency=%f, maxPower=%f" efficiency maxPower
        let mutable level = 0.0f
        fun (next: int -> float32 -> float32) ->
            fun i (amount: float32) ->
                let amount = next i amount
                if amount >= 0f then
                    let available = ((capacity-level) * efficiency) |> min maxPower
                    let sinkable = (min available amount) 
                    level <- level + (sinkable/efficiency)
                    batLevels[i] <- level
                    amount - sinkable
                else
                    let available = (level * efficiency) |> min maxPower
                    let sourcable = (min available -amount)
                    level <- level - (sourcable/efficiency)
                    batLevels[i] <- level
                    batSource[i] <- sourcable
                    amount + sourcable

    let carBattery nCars (batLevels: float32[]) (batSink: float32[]) =
        if nCars < 2f then
            fun (next: int -> float32 -> float32) ->
                fun i (amount: float32) ->
                    next i amount
        else
            let kwhDaily = (15_000./365./100.*22.) * float nCars
            let mwhHourly = kwhDaily / 1000. / 24. |> float32
            let batteryMax = nCars * 60f * 0.001f // 60kWh -> MWh
            let batteryMin = batteryMax * 0.7f // start charging at 75%
            printfn "cars: %.3f<kWh> daily, %.3f<MW> hourly, %.3f<MWh> total battery capacity" (kwhDaily/1000.) mwhHourly batteryMax
            let mutable batLevel = (batteryMin * 3f + batteryMax) / 4f
            fun (next: int -> float32 -> float32) ->
                fun i (amount: float32) ->
                    batLevel <- batLevel - mwhHourly
                    let minCharge = (batteryMin - batLevel) |> max 0f
                    let maxCharge = (batteryMax - batLevel) |> max 0f
                    let amount' = next i (amount-minCharge)
                    let charge = (min amount' maxCharge) |> max minCharge
                    batLevel <- batLevel + charge
                    batLevels[i] <- batLevel
                    batSink[i] <- charge
                    amount' - charge
                    

    let fossil capacity (current: float32[]) (projected: float32[]) =
        let getMaxAvailable =
            match capacity with
            | Some cap -> fun i -> cap
            | None -> fun i -> current[i]
        fun (next: int -> float32 -> float32) ->
            fun i (amount: float32) ->
                // positive = excess energy, negative = missing energy
                let amount = next i (amount - current[i]) // ask children (incl. storage) to substitute for current fosil consumption
                if amount >= 0f then
                    projected[i] <- 0f
                    amount
                else
                    //let sourcable = min current[i] -amount
                    let sourcable = min (getMaxAvailable i) -amount
                    projected[i] <- sourcable
                    amount + sourcable
    
    let import (currentImport: float32[]) (currentExport: float32[]) (projected: float32[]) =
        fun (next: int -> float32 -> float32) ->
            fun i (amount: float32) ->
                let amount = next i amount
                if amount >= 0f then
                    let sinkable = min currentImport[i] amount
                    projected[i] <- currentImport[i] - sinkable
                    amount - sinkable
                else
                    projected[i] <- currentImport[i] - amount
                    0f

    let excess (projected: float32[]) =
        fun (next: int -> float32 -> float32) ->
            fun i (amount: float32) ->
                let amount = next i amount
                if amount >= 0f then
                    projected[i] <- amount
                    0f
                else
                    projected[i] <- 0f
                    amount

    let nothing = fun i amount -> amount
    let dummy =
        fun (next: int -> float32 -> float32) ->
            fun i (amount: float32) -> next i amount




let simulate (yStats:YearStats) (cfg:SimConfig) =

    let coal = yStats[Coal]
    let gas = yStats[Gas]
    //let load = yStats[Load]
    //let total = yStats[TotalProd]
    let import = yStats[Import]
    let export = yStats[Export]
    let wind = yStats[Wind]
    let solar = yStats[Solar]
    let nuclear = yStats[Nuclear]
    let hydro = yStats[Hydro]

    let nSamples = wind.data.Length

    let kWind = cfg.installedWindMW / wind.capacity.Value
    let kSolar = cfg.installedSolarMW / solar.capacity.Value
    let hydro' =
        match cfg.hydropowerExtraSavaGWh with
        | true, extraProduction ->
            let k = (hydro.total + extraProduction*1000f) / hydro.total
            let hydro' = { hydro with capacity = Some (hydro.capacity.Value*k); data=hydro.data |> Array.map (( * ) k); total = hydro.total * k }
            printfn "kHydro = %f (current capacity=%.1f->%.1f) d[100]=%f->%f" k hydro.capacity.Value hydro'.capacity.Value nuclear.data[100] hydro'.data[100]
            hydro'
        | false, _ -> hydro
        
    let nuclear' = 
        match cfg.extraNuclearMW, cfg.stopCurrentNuclear with
        | (true, newCapacity), stopCurrentNuclear ->
            let capacity = nuclear.capacity.Value
            let k =
                if stopCurrentNuclear
                then newCapacity / capacity
                else (capacity + newCapacity) / capacity
            let nuclear' = { nuclear with capacity = Some (capacity*k); data=nuclear.data |> Array.map (( * ) k); total = nuclear.total * k }
            printfn "kNuclear = %f (current capacity=%f) d[100]=%f->%f" k capacity nuclear.data[100] nuclear'.data[100]
            nuclear'
        | (false,_), true -> { nuclear with capacity = Some 0f; data=Array.zeroCreate nSamples; total=0f }
        | _ -> nuclear

    let wind' = { wind with capacity=Some (wind.capacity.Value * kWind); data = wind.data |> Array.map (( * ) kWind); total = wind.total * kWind }
    let solar' = { solar with capacity=Some (solar.capacity.Value * kSolar); data = solar.data |> Array.map (( * ) kSolar); total = solar.total * kSolar }

    let coal' = Array.zeroCreate nSamples
    let gas' = Array.zeroCreate nSamples
    let batLevels = Array.zeroCreate nSamples
    let batAmount = Array.zeroCreate nSamples
    let carBatLevels = Array.zeroCreate nSamples
    let carBatSink = Array.zeroCreate nSamples
    let excess = Array.zeroCreate nSamples
    let import' = Array.zeroCreate nSamples
    let pumpedLevels = Array.zeroCreate nSamples
    let pumpedAmount = Array.zeroCreate nSamples

    let balance =
        let balanceCoal = Balance.fossil coal.capacity coal.data coal'
        let balanceGas = Balance.fossil None gas.data gas'
        let balanceBat = Balance.battery cfg.battery batLevels batAmount
        let balanceCars = Balance.carBattery (cfg.electricCarsPercent * 10000f) carBatLevels carBatSink
        let balancePumped =
            match cfg.pumpedStorage with
            | true, pumpedCfg -> Balance.battery pumpedCfg pumpedLevels pumpedAmount
            | false, _ -> Balance.dummy
        let balanceExcess = Balance.excess excess
        let balanceImport = Balance.import import.data export.data import'
        balanceExcess (balanceImport (balanceCars (balanceCoal (balanceGas (balancePumped (balanceBat Balance.nothing))))))


    for i in 0..nSamples-1 do
        let current = wind.data[i] + solar.data[i] + nuclear.data[i] + hydro.data[i]
        let simulated = wind'.data[i] + solar'.data[i] + nuclear'.data[i] + hydro'.data[i] //- carBatSink[i]
        let unbalanced = balance i (simulated-current)
        if unbalanced > 0.001f then
            failwithf "mismatching balance of %f for datapoint %d" unbalanced i

    { yStats with
        isSimulated = true
        traces =
            yStats.traces
            |> Map.add Wind wind'
            |> Map.add Solar solar'
            |> Map.add Nuclear nuclear'
            |> Map.add Hydro hydro'
            |> Map.add Coal { coal with data=coal'; total=Array.sum coal' }
            |> Map.add Gas { gas with data=gas'; total=Array.sum gas' }
            |> Map.add BatteryLevel { kind=BatteryLevel; capacity=Some cfg.battery.capacity; data=batLevels; total=Array.sum batLevels }
            |> fun m ->
                if fst cfg.pumpedStorage then
                    m
                    |> Map.add PumpedLevel { kind=PumpedLevel; capacity=Some (snd cfg.pumpedStorage).capacity; data=pumpedLevels; total=Array.sum pumpedLevels }
                else m
            |> Map.add Battery { kind=Battery; capacity=Some cfg.battery.capacity; data=batAmount; total=Array.sum batAmount }
            |> Map.add Excess { kind=Excess; capacity=None; data=excess; total=Array.sum excess }
            |> Map.add Import { import with data=import'; total=Array.sum import' }
    }

