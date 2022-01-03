
module Energy.Data

open FSharp.Reflection

open Shared.Types
open Lit.TodoMVC.Util

type JsonTrace =
    abstract kind: string
    abstract capacity: float32 option
    abstract data: float32[]
    abstract total: float32

let stringToKindMap =
    FSharpType.GetUnionCases(typeof<Shared.Types.TraceKind>)
    |> Array.map (fun ci ->
        printfn $"'{ci.Name}' -> {FSharpValue.MakeUnion(ci,[||]) :?> Shared.Types.TraceKind}"
        ci.Name, FSharpValue.MakeUnion(ci,[||]) :?> Shared.Types.TraceKind)
    |> Map.ofArray

type Trace with
    static member fromJsonTrace (t:JsonTrace) : Trace =
        {
            kind = stringToKindMap[t.kind]
            capacity=t.capacity
            data=t.data
            total=t.total
        }


let jsonData = promise {
    let data = fetchJson<JsonTrace[]>("contacts.json")
    printfn "%A" data
    //|> Promise.then (fun data -> printfn "%A" data)
}
