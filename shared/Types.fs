module Shared.Types

type TraceKind =
    | Oil
    | Gas
    | Coal
    | Solar
    | Wind
    | Nuclear
    | Hydro
    | HydroStorage
    | Waste
    | StaticProd
    | NonFosilProd
    | TotalProd
    | Load
    | Import
    | Export
    | Battery // source
    | BatteryLevel
    | PumpedLevel
    | Excess
module TraceKind =
    let isWindOrSolar = function Wind | Solar -> true | _ -> false
    let isFossil = function Oil | Gas | Coal -> true | _ -> false
    let isStatic = function Hydro | HydroStorage | Waste -> true | _ -> false
    //let isFossil = function Coal -> true | _ -> false
    //let isStatic = function Oil | Gas | Nuclear | Hydro | HydroStorage | Waste -> true | _ -> false
    let inline isSource x = isWindOrSolar x || isFossil x || isStatic x || x=Nuclear


type Trace = {
    kind: TraceKind
    capacityMW: float32 option
    data: float32[]
    totalMWh: float32
} with
    member trace.Clone() = { trace with data = Array.copy trace.data }

type YearStats = {
    year: int
    isSimulated: bool
    traces: Map<TraceKind,Trace>
  } with
    member this.Item(k:TraceKind) = this.traces[k]
    static member clone ys =
        { ys with
            traces =
                ys.traces
                |> Map.map (fun _ trace -> trace.Clone())
    }
    static member fromTraces year isSimulated traces = {
        year = year
        isSimulated = isSimulated
        traces =
            traces |> Seq.map (fun trace -> trace.kind, trace) |> Map.ofSeq
    }
    static member getTraceList ys = [ for kv in ys.traces -> kv.Value ]

