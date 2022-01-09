module Energy.Form

open Lit
open Lit.TodoMVC.Util
open Fable.Core
open Browser.Types

open Energy.Data
open Shared.Types
open Energy.Sim

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
    let battery, setBattery = Hook.useState($"%.0f{initial.battery.capacity}")
    let batteryPow, setBatteryPow = Hook.useState($"%.0f{initial.battery.maxRelativePowerPercent}")
    let batteryEfficiency, setBatteryEfficiency = Hook.useState($"%.0f{initial.battery.efficiencyPercent}")
    let buildNuclear, setBuildNuclear = Hook.useState(fst initial.extraNuclearMW)
    let toggleBuildNuclear _ = buildNuclear |> not |> setBuildNuclear
    let nuclear, setNuclear = Hook.useState($"%.0f{snd initial.extraNuclearMW}")
    let buildPumped, setBuildPumped = Hook.useState(fst initial.pumpedStorage)
    let toggleBuildPumped _ = buildPumped |> not |> setBuildPumped
    let pumped, setPumped = Hook.useState($"%.0f{(snd initial.pumpedStorage).capacity}")
    let pumpedPow, setPumpedPow = Hook.useState($"%.0f{(snd initial.pumpedStorage).maxRelativePowerPercent}")
    let pumpedEfficiency, setPumpedEfficiency = Hook.useState($"%.0f{(snd initial.pumpedStorage).efficiencyPercent}")
    let error, setError = Hook.useState("")

    let setWind' ev =
        JS.console.log("x", ev)
        //setWind x

    let extractValues() =
        try
            { Energy.Sim.SimConfig.current with
                installedSolarMW = float32 solar
                installedWindMW = float32 wind
                battery = { capacity=float32 battery; power=PercentCapacity (float32 batteryPow); efficiencyPercent=float32 batteryEfficiency }
                pumpedStorage = buildPumped, {capacity=float32 pumped; power=AbsoluteMW (float32 pumpedPow); efficiencyPercent=float32 pumpedEfficiency }
                extraNuclearMW = buildNuclear, float32 nuclear
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

    printfn "buildNuclear=%A" buildNuclear
    html $"""
        <p class="{clasName}">
        <form class="energy-form" action="#">
            <b>Simulirana inštalirana moč:</b><br>
            
            <input type="number" id="wind" name="wind" value="{wind}" size="6" min=0 step=50 @change={EvVal setWind} style="text-align:right;"/>
            <label for="wind">MW vetrnic</label><br/>

            <input type="number" id="solar" name="solar" value="{solar}" size="6" min=0 step=100 @change={EvVal setSolar} style="text-align:right;"/>
            <label for="solar">MW fotopanelov</label><br/>

            <input type="number" id="battery" name="battery" value="{battery}" size="6" step=50 min=0 @change={EvVal setBattery} style="text-align:right;"/>
            <label for="battery">MWh baterij z največjo močjo polnjenje/praznjenja</label>
            <input type="number" id="batteryPow" name="batteryPow" value="{batteryPow}" size="3" step=1 min=1 @change={EvVal setBatteryPow} style="text-align:right;"/>
            <label for="batteryPow">%% kapacitete</label>
            <br/>

            <input type="checkbox" id="buildNuclear" name="buildNuclear" value="{buildNuclear}" @change={EvVal toggleBuildNuclear}>
            <label for="buildNuclear">Zgradimo novo nuklearko </label>
            <span style="visibility:{if buildNuclear then "visible" else "hidden"}">
                <label for="buildNuclear"> s kapaciteto</label>
                <input type="nuclear" id="nuclear" name="nuclear" value="{nuclear}" size="6" step=100 min=0 @change={EvVal setNuclear} style="text-align:right;" />
                <label for="nuclear">MW</label>
            </span>
            <br/>

            <input type="checkbox" id="buildPumped" name="buildPumped" value="{buildPumped}" @change={EvVal toggleBuildPumped}>
            <label for="buildPumped">Zgradimo ČHE Kozjak</label>
            <span style="visibility:{if buildPumped then "visible" else "hidden"}">
                <label for="pumped"> s kapaciteto</label>
                <input type="pumped" id="pumped" name="pumped" value="{pumped}" size="6" step=100 min=0 @change={EvVal setPumped} style="text-align:right;"/>
                <label for="pumped">MWh in učinkovitostjo</label>
                <input type="pumpedEfficiency" id="pumpedEfficiency" pumpedEfficiency="pumped" value="{pumpedEfficiency}" size="6" step=100 min=0 @change={EvVal setPumpedEfficiency} style="text-align:right;"/>
                <label for="pumpedEfficiency">%%.</label>
            </span>


            <br/>
            <input type="button" value="Izračunaj" @click={submit} >
        </form>
        </p>
    """
