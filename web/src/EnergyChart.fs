module Energy.Chart

open System
open Lit
open Lit.TodoMVC.Util
open Energy.Data
open Shared.Types
open Fable.Core
open Browser.Types

let private hmr = HMR.createToken()

let register() = ()
let css = id

[<Emit("""setTimeout(
    () => {
        console.log("chart options",$1);
        Highcharts.chart($0,$1);
    },
    200);
""");>]
let renderHighcharts (containerId:string) (options:obj) =  jsNative

[<Emit("""new Date($0).getTime()""");>]
let jsTimestamp (dateString:string) : double = jsNative


[<Emit("[$0,$1,$2]")>]
let jsArray3 a b c = jsNative

let renderOptions (cfg: Energy.Sim.SimConfig) (ys:Shared.Types.YearStats) (ys':Shared.Types.YearStats) =

    let extractDaily (yStats:YearStats) series =
        let data = yStats[series].data
        let daily = Array.zeroCreate ((data.Length+1) / 24)
        let mutable mx = data[0]
        for i in 0..data.Length-1 do
            let j = i / 24
            let x = data[i]*0.001f + daily[j]
            mx <- max mx x
            daily[j] <- x
        daily, mx

    let battery =
        let bat = 
            match ys'.traces |> Map.tryFind BatteryLevel with
            | None -> None
            | Some b when b.capacityMW = None -> None
            | Some b when b.capacityMW.Value = 0f -> None
            | Some bat ->
                Some (bat.data, bat.capacityMW)
        let pumped =
            match ys'.traces |> Map.tryFind PumpedLevel with
            | None -> None
            | Some b when b.capacityMW = None -> None
            | Some b when b.capacityMW.Value = 0f -> None
            | Some bat ->
                Some (bat.data, bat.capacityMW)
        let sum =
            match bat, pumped with
            | Some x, None -> Some x
            | None, Some x -> Some x
            | Some (bData, bCapacity), Some (pData, pCapacity) ->
                let capacity = (bCapacity |> Option.defaultValue 0f) + (pCapacity |> Option.defaultValue 0f)
                Some (Array.init bData.Length (fun i -> bData[i]+pData[i]), Some capacity)
            | None, None -> None
        match sum with
        | Some (data, capacity) ->
            let capacity = capacity.Value
            let daily = Array.zeroCreate ((data.Length+1) / 24)
            let dailyMin = Array.init ((data.Length+1) / 24) (fun i -> Single.MaxValue)
            let dailyMax = Array.zeroCreate ((data.Length+1) / 24)
            for i in 0..data.Length-1 do
                let j = i / 24
                let x = (data[i] / capacity) * 100f
                dailyMin[j] <- min dailyMin[j] x
                dailyMax[j] <- max dailyMax[j] x
                daily[j] <- daily[j] + (x/24f)
            Some (daily, dailyMin, dailyMax)
        | None -> None

    let solar, mxSolar = extractDaily ys' Solar
    let wind, mxWind = extractDaily ys' Wind
    let water, mxWater = extractDaily ys' Hydro
    let coal, mxCoal = extractDaily ys Coal
    let coal', mxCoal = extractDaily ys' Coal
    let excess, mxExcess = extractDaily ys' Excess
    let startDate = jsTimestamp($"{ys.year}-01-01 0:0:0");

    box {|
        title=box {|text="Graf dnevne proizvodnje"|}
        ``type``="arearange"

        plotOptions = box {|
        |}
        chart = box {| zoomType = "x" |}

        xAxis = {| ``type`` = "datetime" |}
        yAxis = [|
            yield box {| title=box {|text="Proizvodnja GWh"|} |}
            match battery with
            | None -> ()
            | Some _ ->
                yield box {| title=box {|text="Stanje baterije+ČHE %"|}; opposite=true; max=100; min=0 |}
        |]

        series = [|
            yield box {|
                name="Voda"
                data=water
                yAxis=0
                pointStart=startDate; pointInterval=86400_000.0
            |}
            yield box {|
                name= $"Premog {ys.year}"
                data=coal
                color="#888"
                yAxis=0
                pointStart=startDate; pointInterval=86400_000.0
            |}
            yield box {|
                name="Premog simuliran"
                data=coal'
                yAxis=0
                pointStart=startDate; pointInterval=86400_000.0
            |}
            yield box {|
                name="Veter"
                data=wind
                yAxis=0
                pointStart=startDate; pointInterval=86400_000.0
            |}
            yield box {|
                name="Sonce"
                data=solar
                yAxis=0
                pointStart=startDate; pointInterval=86400_000.0
            |}
            yield box {|
                name="Presežek"
                data=excess
                yAxis=0
                color="#c6d"
                pointStart=startDate; pointInterval=86400_000.0
            |}
            match battery with
            | None -> ()
            | Some (daily, dailyMin, dailyMax) ->
                printfn "d0 = %f" startDate
                let data =

                    (dailyMin,dailyMax)
                    //||> Array.mapi2 (fun i mn  mx -> box [|float32 i;mn;mx|])
                    //||> Array.mapi2 (fun i mn  mx -> jsArray3 i mn mx)
                    ||> Array.mapi2 (fun i mn  mx ->
                        let d = startDate + (double i) * 86400_000.0;
                        d,mn,mx)
                yield box {|
                    name="% baterije+ČHE min/max dnevno"
                    ``type``="arearange"
                    data=data
                    yAxis=1
                    color="#8085e9"
                    opacity=0.3
                |}
                yield box {|
                    name="% baterije+ČHE dnevno povprečje"
                    data=daily
                    yAxis=1
                    color="#8085e9"
                    pointStart=startDate; pointInterval=86400_000.0
                |}
        |]
    |}


[<HookComponent>]
let EnergyChart (cfg: Energy.Sim.SimConfig) (ys:Shared.Types.YearStats) (ys':Shared.Types.YearStats) =
    Hook.useHmr(hmr)

    let options = renderOptions cfg ys ys'

    renderHighcharts "chart_container" options

    html $"""
        <p>
            <div id="chart_container" style="width:100%%; height:600px;" />
        </p>
    """
