namespace Shared

open Shared.Types 

module Trace =

    let sumMany (traces: Trace seq) =
        let mutable maxLen = 0
        let mutable minLen = System.Int32.MaxValue
        let arrays = [|
            for s in traces ->
                maxLen <- max maxLen s.data.Length
                minLen <- min minLen s.data.Length
                s.data
        |]
        if maxLen=minLen then
            Array.init maxLen (fun i ->
                let mutable x = 0f
                for a in arrays do x <- x + a.[i]
                x
            )
        else
            Array.init maxLen (fun i ->
                let mutable x = 0f
                for a in arrays do
                    if a.Length > i then x <- x + a.[i]
                x
            )

    let annotateStats ys =
        let traces = ys |> YearStats.getTraceList
        let sources, sinks =
            traces |> List.partition (fun trace -> trace.kind |> TraceKind.isSource)
        let totalProduction =
            let data = sumMany sources
            { 
                kind = TotalProd
                //capacity = getCapacityForYear year capacity.TotalGrandCapacity
                capacityMW =
                    sources |> List.sumBy (fun t -> t.capacityMW |> Option.defaultValue 0f) |> Some
                data = data
                totalMWh = data |> Array.sum
            }
        let staticSources, otherSources =
            sources |> List.partition (fun trace -> trace.kind |> TraceKind.isStatic)
        let staticProduction =
            let data = sumMany staticSources
            { 
                kind = StaticProd
                capacityMW = None
                data = data
                totalMWh = data |> Array.sum
            }
        let importExport = 
            let load = sinks |> List.find (fun t -> t.kind = Load)
            let production = totalProduction.data
            let consumption = load.data
            let import = Array.zeroCreate production.Length
            let export = Array.zeroCreate production.Length
            for i in 0..production.Length-1 do
                let missing = consumption[i] - production[i]
                if missing > 0f then import[i] <- missing
                else export[i] <- -missing
            [
                { kind=Import; capacityMW=None; data=import; totalMWh=Array.sum import }
                { kind=Export; capacityMW=None; data=export; totalMWh=Array.sum export }
            ]


        YearStats.fromTraces ys.year ys.isSimulated [ 
            yield totalProduction
            yield staticProduction
            yield! staticSources
            yield! otherSources
            yield! importExport
            yield! sinks
        ]
