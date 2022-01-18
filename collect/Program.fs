//#r "nuget: FSharp.Data, 4.2.6"

open FSharp.Data

open Shared.Types

[<Literal>]
let ResolutionFolder = __SOURCE_DIRECTORY__

type LoadData = CsvProvider<"../data/sample.load.2020.csv", ResolutionFolder=ResolutionFolder, MissingValues="n/e">
type ProdData = CsvProvider<"../data/sample.prod.2020.csv", ResolutionFolder=ResolutionFolder, MissingValues="n/e">

let realLoadFile year = $"../data/Total Load - Day Ahead _ Actual_{year}01010000-{year+1}01010000.csv"
let realProdFile year = $"../data/Actual Generation per Production Type_{year}01010000-{year+1}01010000.csv"

let interpolateNaNs colName (a:float32[]) =
    let mutable nInterp = 0
    for i,x in Array.indexed a do
        if x<>x then
            let x0 = a[i-1]
            let mutable j = i+1
            while j < a.Length && a[j]<>a[j] do j <- j+1
            let dist = float32 (j-i+1)
            let dy =
                if j = a.Length then 0f
                else (a[j] - x0) / dist
            for iInterp in i..j-1 do
                let k = float32 (iInterp-i+1)
                let x' = x0 + k * dy
                a[iInterp] <- x'
                printfn "interpolating: %s[%d] <- %f" colName i x'

                nInterp <- nInterp+1
    if nInterp>0 then printfn $"{nInterp} values interpolated for {colName}"
    a

let parseLoad year =
    let loadCsv = LoadData.Load(ResolutionFolder + "/" + realLoadFile year)
    let loadBuf = ResizeArray(366*24+2)
    for row in loadCsv.Rows do
        loadBuf.Add (float32 row.``Actual Total Load [MW] - BZN|SI``)
    loadBuf.ToArray()
    |> interpolateNaNs "actual_load"

let bmProd = 0x100
let bmFossil = 0x200
let bmRenewable = 0x400

let capacity = {|
    Year = [| 2016; 2017; 2018; 2019; 2020; 2021 |]
    Biomass = [| 17;  17;  17;  17;  23;  21 |]
    FossilBrownCoal = [| 921;  924;  924;  924;  967;  967 |]
    FossilGas = [| 491;  491;  491;  491;  546;  548 |]
    FossilOil = [| 0;  58;  58;  58;  58;  0 |]
    HydroPumpedStorage = [| 180;  180;  180;  180;  180;  180 |]
    HydroRiver = [| 1053;  1053;  1053;  1053;  1111;  1121 |]
    Nuclear = [| 696;  696;  696;  696;  696;  696 |]
    OtherRenewable = [| 0;  0;  1;  1;  0;  0 |]
    Solar = [| 263;  266;  275;  275;  278;  289 |]
    Waste = [| 40;  40;  40;  40;  38;  37 |]
    WindOnshore = [| 3;  3;  3;  3;  3;  3 |]
    TotalGrandCapacity = [| 3664;  3728;  3738;  3738;  3900;  3863 |]
|}

let getCapacityForYear year capArray =
    (capacity.Year, capArray)
    ||> Seq.zip
    |> Seq.choose (fun (y,cap) -> if y=year then Some (float32 cap) else None)
    |> Seq.tryHead



let loadTracesCsv year =
    // parse load
    let loadCsv = LoadData.Load(ResolutionFolder + "/" + realLoadFile year)
    let load = ResizeArray(366*24+2)
    for row in loadCsv.Rows do
        load.Add (float32 row.``Actual Total Load [MW] - BZN|SI``)

    // parse production
    let csv = ProdData.Load(ResolutionFolder + "/" + realProdFile year)
    let biomass = ResizeArray(366*24+2)
    let fCoal = ResizeArray(366*24+2)
    let fGas = ResizeArray(366*24+2)
    let fOil = ResizeArray(366*24+2)
    let solar = ResizeArray(366*24+2)
    let wind = ResizeArray(366*24+2)
    let nuclear = ResizeArray(366*24+2)
    let hydro = ResizeArray(366*24+2)
    let hydroStorage = ResizeArray(366*24+2)
    //let otherRenewable = ResizeArray(366*24+2)
    let waste = ResizeArray(366*24+2)
    for row in csv.Rows do
        biomass.Add(float32 row.``Biomass  - Actual Aggregated [MW]``)
        fCoal.Add(float32 row.``Fossil Brown coal/Lignite  - Actual Aggregated [MW]``)
        fGas.Add(float32 row.``Fossil Gas  - Actual Aggregated [MW]``)
        fOil.Add(float32 row.``Fossil Oil  - Actual Aggregated [MW]``)
        solar.Add(float32 row.``Solar  - Actual Aggregated [MW]``)
        wind.Add(float32 row.``Wind Onshore  - Actual Aggregated [MW]``)
        nuclear.Add(float32 row.``Nuclear  - Actual Aggregated [MW]``)
        hydro.Add(float32 row.``Hydro Run-of-river and poundage  - Actual Aggregated [MW]``)
        hydroStorage.Add(float32 row.``Hydro Pumped Storage  - Actual Aggregated [MW]``)
        //otherRenewable.Add(float32 row.``Other renewable  - Actual Aggregated [MW]``)
        waste.Add(float32 row.``Waste  - Actual Aggregated [MW]``)

    for i in 0 .. nuclear.Count - 1 do
        nuclear[i] <- nuclear[i] * 0.5f

    let makeTrace kind (cap:int[]) (data:ResizeArray<float32>) =
        let data = data.ToArray() |> interpolateNaNs $"{kind}"
        {
            kind = kind
            capacityMW = getCapacityForYear year cap
            data = data
            totalMWh = data |> Array.sum
        }
    [
        makeTrace Coal capacity.FossilBrownCoal fCoal
        makeTrace Solar capacity.Solar solar
        makeTrace Wind capacity.WindOnshore wind
        makeTrace Oil capacity.FossilOil fOil
        makeTrace Gas capacity.FossilGas fGas
        makeTrace Nuclear capacity.Nuclear nuclear
        makeTrace Hydro capacity.HydroRiver hydro
        makeTrace HydroStorage capacity.HydroPumpedStorage hydroStorage
        //makeSeries OtherProd capacity.OtherRenewable otherRenewable
        makeTrace Waste capacity.Waste waste
        makeTrace Load [||] load
    ]

    

type YearTotals = {
    wind: float32
    solar: float32
    battery: float32
    fossil: float32
    import: float32
    export: float32
    excess: float32
    batteryFullTime: float32
    batteryEmptyTime: float32
}


open FSharp.Json
let dumpJson year =
    let traces = loadTracesCsv year
    let cfg = JsonConfig.create(unformatted=true)
    let json = Json.serializeEx cfg traces
    System.IO.File.WriteAllText($"../web/public/energy-traces-{year}.json", json)
  
let dumpCsv year =
    let traces = loadTracesCsv year
    let writeCsv (stream:System.IO.TextWriter) (traces: Trace list) =
        // header
        [ for t in traces -> string t.kind ]
        |> String.concat ","
        |> stream.Write
        stream.Write "\r\n"
        // data
        let datas = traces |> List.map (fun trace -> trace.data)
        for iRow in 0..datas.Head.Length-1 do
            datas
            |> Seq.iteri (fun i data ->
                if i > 0 then stream.Write ','
                let x = data[iRow]
                let ix = int x
                if float32 ix = x
                then stream.Write ix
                else stream.Write x
            )
            stream.Write "\r\n"
    use stream = System.IO.File.CreateText $"tmp/energy-traces-{year}.csv"
    writeCsv stream traces

[2016..2021] |> Seq.iter dumpJson
//[2016..2021] |> Seq.iter dumpCsv


//printfn "totalConsumption: %f" (Array.sum load) // 13416246


