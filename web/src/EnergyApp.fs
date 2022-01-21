module Energy.App

open Lit
open Lit.TodoMVC.Util
open Energy.Data
open Shared.Types

let private hmr = HMR.createToken()

let register() =
    Energy.Form.register()
    Energy.Chart.register()
    Energy.CostTable.register()

let colName = function
    | Oil -> "Nafta"
    | Gas -> "Plin"
    | Coal -> "Premog"
    | Solar -> "Sonce"
    | Wind -> "Veter"
    | Nuclear -> "NEK"
    | Hydro -> "Voda"
    | HydroStorage -> "ĆHE"
    | Waste -> "Smeti"
    | StaticProd -> "Statična proizvodnja"
    | NonFosilProd -> "Nefosilna proizvodnja"
    | TotalProd -> "Skupaj"
    | Load -> "Poraba"
    | Import -> "Uvoz"
    | Export -> "Izvoz"
    | Battery -> "Baterija" // source
    | BatteryLevel -> "Nivo baterije"
    | PumpedLevel -> "Nivo ČHE"
    | Excess -> "Presežek"


let installedColumns = [ Wind; Solar; Battery]
let dataColumns = [ Wind; Solar; Battery; Coal; Gas; Nuclear; Hydro; Import; Export; Excess ]

let getYsYearName (ys: YearStats) =
    $"""{ys.year}{if ys.isSimulated then "'" else ""}"""


let renderTraceHeader() = html $"""
    <tr>
        <th></th>
        <th colspan={installedColumns.Length}>Inštalirana moč [MW,MWh]</th>
        <th colspan={dataColumns.Length}>Proizvodnja [GWh]</th>
        <th>Izpusti [T]</th>
    </tr>
    <tr>
        <th>Leto</th>
        { installedColumns
            |> Lit.mapUnique (fun col -> $"{col}") (fun col -> html $"<th>{colName col}</th>")}
        { dataColumns
            |> Lit.mapUnique (fun col -> $"{col}") (fun col -> html $"<th>{colName col}</th>")}
        <th>CO2</th>
    </tr>
"""

let renderTraceRow(ys:YearStats) = 

    let renderCapacityCell kind =
        match ys.traces |> Map.tryFind kind with
        | Some trace -> Lit.ofText <| sprintf "%.0f" (trace.capacityMW |> Option.defaultValue 0f)
        | None -> Lit.nothing
        
    let renderPowerCell kind =
        match ys.traces |> Map.tryFind kind with
        | Some trace -> Lit.ofText <| sprintf "%.1f" (trace.totalMWh/1000f)
        | None -> Lit.nothing

    html $"""
        <tr class={Lit.classes ["table-info", ys.isSimulated]}>
            <th>{getYsYearName ys}</th>
            { installedColumns
                |> Lit.mapUnique (fun col -> $"{col}") (fun col -> html $"<td>{renderCapacityCell col}</td>")}
            { dataColumns
                |> Lit.mapUnique (fun col -> $"{col}") (fun col -> html $"<td>{renderPowerCell col}</td>")}
            <td>{Lit.ofText <| sprintf "%.1f" (YearStats.getTonsCO2 ys)}</td>
        </tr>
    """

let renderDeltaRow (ys:YearStats) (ys':YearStats) = 


    let renderDelta pre post =
        match pre, post with
        | Some pre, Some post ->
            let delta = post / pre
            if delta > 2f
            then Lit.ofText <| sprintf "%.2fx" delta
            else Lit.ofText <| sprintf "%.1f%%" (100f * delta)
        | _, _ -> Lit.nothing

    let renderCapacityCell kind =
        let pre = ys.traces |> Map.tryFind kind |> Option.bind (fun t -> t.capacityMW)
        let post = ys'.traces |> Map.tryFind kind |> Option.bind (fun t -> t.capacityMW)
        renderDelta pre post

    let renderPowerCell kind =
        let pre = ys.traces |> Map.tryFind kind |> Option.map (fun t -> t.totalMWh)
        let post = ys'.traces |> Map.tryFind kind |> Option.map (fun t -> t.totalMWh)
        renderDelta pre post

    html $"""
        <tr>
            <th>Delež</th>
            { installedColumns
                |> Lit.mapUnique (fun col -> $"{col}") (fun col -> html $"<td>{renderCapacityCell col}</td>")}
            { dataColumns
                |> Lit.mapUnique (fun col -> $"{col}") (fun col -> html $"<td>{renderPowerCell col}</td>")}
            <td>{Lit.ofText <| sprintf "%.1f%%" (100f * YearStats.getTonsCO2 ys' / YearStats.getTonsCO2 ys)}</td>
        </tr>
    """

    
[<LitElement("energy-app")>]
let EnergySimulationApp() =
    Hook.useHmr(hmr)
    let _ = LitElement.init(fun cfg ->
        cfg.useShadowDom <- false
    )

    let clasName = Hook.use_scoped_css <| css $"""
        :host {{
            display: block;
            height: 100%%;
            margin: auto;
        }}
        :host.energy-sim {{
            //padding: 2em;
            padding-top: 2em;
        }}
        .energy-table {{
            border: 1px solid black;
            border-collapse: collapse;
            td {{ textAlgn: right }}
            text-align:right;
        }}
        .energy-table td, .energy-table th {{
            border: 1px solid black;
            padding: 0.25em 0.5em 0.25em 0.5em;
            text-align:right;
            //color: red;
        }}
        .energy-table th {{
            text-align: center;
        }}
    """

    let simConfig, setSimConfig = Hook.useState(Energy.Sim.SimConfig.initial)
    let yearStats, setTraces = Hook.useState([])
    Hook.useEffectOnce(fun () ->
        let year = 2020
        fetchJson<Energy.Data.JsonTrace []>($"energy-traces-{year}.json")
        |> Promise.iter (fun data ->
            let yearStats = 
                data
                |> Array.map Shared.Types.Trace.fromJsonTrace
                |> YearStats.fromTraces year false
                |> Shared.Trace.annotateStats
            setTraces [
                yearStats
                Sim.simulate yearStats simConfig
            ]
        )
    )
    let onSimConfigChanged (sc: Sim.SimConfig) =
        if sc <> simConfig then
            setSimConfig(sc)
            match yearStats with
            | ys::_ ->
                printfn "running simulation..."
                setTraces [ ys; Sim.simulate ys sc ]
            | [] -> ()
                

    let renderTrace (trace: Trace) _ =
        html $"<contact-card .contact={trace}></contact-card>"

    let notes =
        let texts = [
            "Za obstoječo NE Krško se šteje samo slovenski del proizvodnje. Za toliko je znižan tudi izvoz."
            "Proizvodnja baterije v tabeli je prikazana kot priskevek baterije k letni proizvodnji: 90% shranjene energije, ki jo baterija vrne v omrežje."
            "Kadar je energije v izobilju, se po vrsti: zaustavi premog, plin, polni baterijo, zmanjša uvoz, preostanek se šteje kot presežek."
            "Avtomobili skupaj delujejo kot ena velika baterija: lastniki avtomobile vsak dan napolnijo do 75%, oz. do 100% kadar je elektrike v izobilju."
            "Ker nimamo specifičnih podatkov za reko Savo, nove HE na Savi simuliramo kot da bi za enak faktor povečali moč vseh slovenskih HE neglede na reko."
        ]
        html $"""
            <h5>{Lit.ofText "Opombe:"}</h5>
            <ul class="list" style="padding-left:2em">
                {
                    texts
                    |> Seq.indexed
                    |> Lit.mapUnique (fst >> string) (fun (i,text) -> html $"<li>{text}</li>")
                }
            </ul>
        """

    let year = yearStats |> List.tryHead |> Option.map (fun ys -> ys.year)

    html $"""
        <div class="energy-sim {clasName} container">
            <div class="row">
            <h2>Scenariji prehoda na trajnostne vire energije</h2>
            <p>Simulacija elektroenergetskega sistema na realnih urnih podatkih donosa sonca in vetra za leto {year}
                <br>ob predpostaviki spremenjenih kapacitet vetrnih, solarnih, nuklearnih elektrarn in shranjavanja energije.
            </p>
            </div>
            <div class="row">
                <h4>Parametri simulacije</h4>
                {Energy.Form.EnergyForm(onSimConfigChanged, simConfig)}
            </div>
            <div class="energy-result row">
                <h4>Rezultat</h4>
                <table class="energy-table table table-bordered">
                    <thead>
                        {renderTraceHeader()}
                    </thead>
                    <tbody>
                        {
                            yearStats
                            |> Lit.mapUnique (fun ys -> $"{ys.year}{ys.isSimulated}") renderTraceRow
                        }
                        {
                            match yearStats with
                            | [ys;ys'] -> renderDeltaRow ys ys'
                            | _ -> Lit.nothing
                        }
                    </tbody>
                </table>
                {notes}
            </div>
            <div>
                {
                    match yearStats with
                    | [ys;ys'] -> CostTable.CostTable simConfig ys ys'
                    | _ -> Lit.nothing
                }
            </div>
            <div class="row">
                { match yearStats with
                    | [] -> Lit.nothing
                    | ys::ys'::_ -> Chart.EnergyChart simConfig ys ys'
                    | ys::[] -> Lit.nothing
                }
            </div>
        </div>
    """
