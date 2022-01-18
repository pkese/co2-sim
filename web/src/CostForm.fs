module Energy.CostForm

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

type Costs = {
    roofSolarPercent: float
    roofSolarCostPerKW: float
    utilitySolarCostPerKW: float
    roofSolarBaybackYears: float
    utilitySolarBaybackYears: float
    solarLifeTime: float

    homeBatteryPercent: float
    homeBatteryCostPerKW: float
    utilityBatteryCostPerKW: float
    batteryLifeCycles: float

    nuclearCostPerKW: float
    nuclearPaybackYears: float
    nuclearOperatingCostPerMW: float

    carCO2EmissionsPerKm: float
}

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
                //padding: 2em;
                padding-top: 0.5em;
            }}
            :host input {{
                //width: 6em;
                text-align: right;
            }}
            :host input[type=number] {{
                width: 5em;
                text-align: right;
            }}
            .ico {{ color: #248; }}
            i.ico {{
                width: 1.5em;
                line-height: 2em;
            }}
            span.ico {{
                vertical-align: top;
            }}
            i.fa-circle {{ font-size: 1.2em }}
            .fa-stack {{ font-size: 1em }}
            span>i {{ vertical-align: middle }}
            hr {{
                margin:0.3em;
                max-width: 22em;
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
    let stopCurrentNuclear, setStopCurrentNuclear = Hook.useState(fst initial.extraNuclearMW)
    let toggleStopCurrentNuclear _ = stopCurrentNuclear |> not |> setStopCurrentNuclear
    let buildHydro, setBuildHydro = Hook.useState(fst initial.hydropowerExtraSavaGWh)
    let toggleBuildHydro _ = buildHydro |> not |> setBuildHydro
    let hydro, setHydro = Hook.useState($"%.0f{snd initial.hydropowerExtraSavaGWh}")

    let buildPumped, setBuildPumped = Hook.useState(fst initial.pumpedStorage)
    let toggleBuildPumped _ = buildPumped |> not |> setBuildPumped
    let pumped, setPumped = Hook.useState($"%.0f{(snd initial.pumpedStorage).capacity}")
    let pumpedPow, setPumpedPow = Hook.useState($"%.0f{(snd initial.pumpedStorage).maxPower}")
    let pumpedEfficiency, setPumpedEfficiency = Hook.useState($"%.0f{(snd initial.pumpedStorage).efficiencyPercent}")
    let electricCars, setElectricCars = Hook.useState($"%.0f{initial.electricCarsPercent}")
    let error, setError = Hook.useState("")

    let setWind' ev =
        JS.console.log("x", ev)
        //setWind x

    let extractValues() =
        try
            {
                installedSolarMW = float32 solar
                installedWindMW = float32 wind
                battery = { capacity=float32 battery; power=PercentCapacity (float32 batteryPow); efficiencyPercent=float32 batteryEfficiency }
                pumpedStorage = buildPumped, {capacity=float32 pumped; power=AbsoluteMW (float32 pumpedPow); efficiencyPercent=float32 pumpedEfficiency }
                extraNuclearMW = buildNuclear, float32 nuclear
                stopCurrentNuclear = stopCurrentNuclear
                electricCarsPercent = float32 electricCars
                hydropowerExtraSavaGWh = false, (1440f (* savske *) + 131f (* mokrice *))

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
        <div class="{clasName}">
        <form class="energy-form" action="#">
            <h7>Simulirana inštalirana moč:</h7>
            <br/>
            
            <i class="ico fas fa-sun"></i>
            <input type="number" id="solar" name="solar" value="{solar}" size="6" min=0 step=100 @change={EvVal setSolar} />
            <label for="solar">MW fotopanelov</label><br/>

            <i class="ico fas fa-wind"></i>
            <input type="number" id="wind" name="wind" value="{wind}" size="6" min=0 step=50 @change={EvVal setWind} />
            <label for="wind">MW vetrnic</label><br/>

            <i class="ico fas fa-car-battery"></i>
            <input type="number" id="battery" name="battery" value="{battery}" size="6" step=50 min=0 @change={EvVal setBattery} />
            <label for="battery">MWh baterij z največjo močjo polnjenje/praznjenja</label>
            <input type="number" id="batteryPow" name="batteryPow" value="{batteryPow}" size="3" step=1 min=1 @change={EvVal setBatteryPow} />
            <label for="batteryPow">%% MW/MWh kapacitete</label>
            <br/>

            <i class="ico fas fa-water"></i>
            <input type="checkbox" id="buildPumped" name="buildPumped" value="{buildPumped}" @change={EvVal toggleBuildPumped}>
            <label for="buildPumped">Zgradimo ČHE Kozjak</label>
            <span style="visibility:{if buildPumped then "visible" else "hidden"}">
                <label for="pumped"> s kapaciteto</label>
                <input type="number" id="pumped" name="pumped" value="{pumped}" size="6" step=500 min=0 @change={EvVal setPumped} />
                <label for="pumped">MWh, močjo</label>
                <input type="number" id="pumpedPow" name="pumpedPow" value="{pumpedPow}" size="6" step=20 min=0 @change={EvVal setPumpedPow} />
                <label for="pumpedPow">MW in učinkovitostjo</label>
                <input type="number" id="pumpedEfficiency" pumpedEfficiency="pumped" value="{pumpedEfficiency}" size="6" step=1 min=0 @change={EvVal setPumpedEfficiency} />
                <label for="pumpedEfficiency">%%</label>
            </span>
            <br/>

            <i class="ico fas fa-atom"></i>
            <input type="checkbox" id="buildNuclear" name="buildNuclear" value="{buildNuclear}" @change={EvVal toggleBuildNuclear}>
            <label for="buildNuclear">Zgradimo novo nuklearko </label>
            <span style="visibility:{if buildNuclear then "visible" else "hidden"}">
                <label for="buildNuclear"> z nazivno močjo</label>
                <input type="number" id="nuclear" name="nuclear" value="{nuclear}" size="6" step=100 min=0 @change={EvVal setNuclear} style="text-align:right;" />
                <label for="nuclear">MW</label>
            </span>
            <br/>

            <i class="ico fas fa-times-circle"></i>
            <input type="checkbox" id="stopCurrentNuclear" name="stopCurrentNuclear" value="{stopCurrentNuclear}" @change={EvVal toggleStopCurrentNuclear}>
            <label for="stopCurrentNuclear">Ugasnemo obstoječo nuklearko</label>
            <br/>

            <i class="ico fas fa-car"></i>
            <input type="number" id="electricCars" name="electricCars" value="{electricCars}" size="6" min=0 step=5 @change={EvVal setElectricCars} style="text-align:right;"/>
            <label for="electricCars">%% avtomobilov se vozi na elektriko</label><br/>

            <hr/>
            <i class="ico fas fa-fw"></i>
            <input type="button" value="Izračunaj" @click={submit} >
        </form>
        </div>
        <p/>
    """
