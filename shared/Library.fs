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
                capacity =
                    sources |> List.sumBy (fun t -> t.capacity |> Option.defaultValue 0f) |> Some
                data = data
                total = data |> Array.sum
            }
        let staticSources, otherSources =
            sources |> List.partition (fun trace -> trace.kind |> TraceKind.isStatic)
        let staticProduction =
            let data = sumMany staticSources
            { 
                kind = StaticProd
                capacity = None
                data = data
                total = data |> Array.sum
            }
        let importExport = 
            let load = sinks |> List.find (fun t -> t.kind = Load)
            let prod = totalProduction.data
            let cons = load.data
            let import = Array.zeroCreate prod.Length
            let export = Array.zeroCreate prod.Length
            for i in 0..prod.Length-1 do
                let x = cons[i] - prod[i]
                if x > 0f then import[i] <- x
                else export[i] <- -x
            [
                { kind=Import; capacity=None; data=import; total=Array.sum import }
                { kind=Export; capacity=None; data=export; total=Array.sum export }
            ]


        YearStats.fromTraces ys.year ys.isSimulated [ 
            yield totalProduction
            yield staticProduction
            yield! staticSources
            yield! otherSources
            yield! importExport
            yield! sinks
        ]
