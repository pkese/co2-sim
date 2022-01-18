module Lit.TodoMVC.App

open Lit

[<RequireQualifiedAccess>]
type Tab =
    | Energy

[<LitElement("my-app")>]
let MyApp() =
    let _ = LitElement.init(fun cfg ->
        cfg.useShadowDom <- false
    )

    let activeTab, setActiveTab = Hook.useState(Tab.Energy)

    let renderTab tab text =
        html $"""<li class={if tab = activeTab then "is-active" else ""}>
            <a @click={Ev(fun ev ->
                ev.preventDefault()
                setActiveTab tab
            )}>
                {text}
            </a>
        </li>"""

    let content =
        match activeTab with
        | Tab.Energy ->
            Lit.ofImport(Energy.App.register, fun _ ->
                html $"""<energy-app local-storage="energy-app"></energy-app>""")

    (*html $"""
        <div class="tabs" style="margin-bottom: 0.5rem;">
          <ul>
            {renderTab Tab.Energy "Simulacija"}
          </ul>
        </div>
        {content}
    """
    *)
    html $"""
        <energy-app/>
    """
