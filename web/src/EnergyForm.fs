module Energy.Form

open Lit
open Lit.TodoMVC.Util
open Energy.Data
open Shared.Types
open Fable.Core
open Browser.Types

let private hmr = HMR.createToken()

let register() = ()
let css = id

[<HookComponent>]
let EnergyForm( setSimConfig: Energy.Sim.SimConfig -> unit, initial: Energy.Sim.SimConfig ) =
    Hook.useHmr(hmr)
    let clasName =
        Hook.use_scoped_css <| css $"""
            :host {{
                display: block;
                height: 100%%;
            }}
            .energy-form {{
                padding: 2em;
            }}
            :host input {{
                width:20em;
                color: red;
                text-align: right;
            }}
        """

    let solar, setSolar = Hook.useState($"%.0f{initial.installedSolarMW}")
    let wind, setWind = Hook.useState($"%.0f{initial.installedWindMW}")
    let battery, setBattery = Hook.useState($"%.0f{initial.installedBatteryMWh}")
    let error, setError = Hook.useState("")

    let setWind' ev =
        JS.console.log("x", ev)
        //setWind x

    let extractValues() =
        try
            { Energy.Sim.SimConfig.current with
                installedSolarMW = float32 solar
                installedWindMW = float32 wind
                installedBatteryMWh = float32 battery
                //batteryEfficiency: float32 // 0.9
            } |> Ok
        with
        | e -> Error e.Message


    let submit (e:Event) =
        JS.console.log ("submit:",e);
        let result = extractValues ()
        printfn "submit: %A" result
        //printfn "props: %A" props
        match result with
        | Ok result -> setError ""; setSimConfig result
        | Error text -> setError error
        e.preventDefault()
        false

    html $"""
        <p class="{clasName}">
        <form class="energy-form" action="#">
            <b>Simulirana inštalirana moč:</b><br>
            
            <input type="number" id="wind" name="wind" value="{wind}" size="6" min=0 step=50 @change={EvVal setWind} style="text-align:right;"/>
            <label for="wind">MW vetrnic</label><br/>

            <input type="number" id="solar" name="solar" value="{solar}" size="6" min=0 step=100 @change={EvVal setSolar} style="text-align:right;"/>
            <label for="solar">MW fotopanelov</label><br/>

            <input type="number" id="battery" name="battery" value="{battery}" size="6" step=50 min=0 @change={EvVal setBattery} style="text-align:right;"/>
            <label for="battery">MWh baterij</label><br/>

            <input type="button" value="Izračunaj" @click={submit} >
        </form>
        </p>
    """
