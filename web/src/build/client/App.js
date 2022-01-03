import { Union } from "./fable_modules/fable-library.3.6.3/Types.js";
import { class_type, unit_type, MethodInfo, union_type } from "./fable_modules/fable-library.3.6.3/Reflection.js";
import { LitElementAttribute } from "./fable_modules/Fable.Lit.1.4.1/LitElement.fs.js";
import { Hook_getContext_343DAFF1 } from "./fable_modules/Fable.Lit.1.4.1/Hook.fs.js";
import { Lit_get_nothing, LitHelpers_html } from "./fable_modules/Fable.Lit.1.4.1/Lit.fs.js";
import { fmt } from "./fable_modules/fable-library.3.6.3/String.js";
import { equals } from "./fable_modules/fable-library.3.6.3/Util.js";
import { until } from "lit/directives/until.js";
import { defaultArg } from "./fable_modules/fable-library.3.6.3/Option.js";

export class Tab extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Todos", "Virtualizer"];
    }
}

export function Tab$reflection() {
    return union_type("Lit.TodoMVC.App.Tab", [], Tab, () => [[], []]);
}

export const MyApp = (new LitElementAttribute("my-app")).Decorate(function () {
    (this).init((arg) => {
        let a;
        a = (arg.useShadowDom = false);
        return Promise.resolve(undefined);
    });
    const patternInput = Hook_getContext_343DAFF1(this).useState(() => (new Tab(0)));
    const setActiveTab = patternInput[1];
    const activeTab = patternInput[0];
    const renderTab = (tab, text) => LitHelpers_html(fmt`<li class=${(equals(tab, activeTab) ? "is-active" : "")}>
    <a @click=${((ev) => {
        let copyOfStruct = ev;
        copyOfStruct.preventDefault();
        setActiveTab(tab);
    })}>
    ${text}
    </a>
    </li>`);
    const content = (activeTab.tag === 1) ? until(import("./Virtualizer.js").then((m) => m.register).then((fn_1) => LitHelpers_html(fmt`<contact-list></contact-list>`)), defaultArg(void 0, Lit_get_nothing())) : until(import("./Todos.js").then((m) => m.register).then((fn) => LitHelpers_html(fmt`<todo-app local-storage="todo-app"></todo-app>`)), defaultArg(void 0, Lit_get_nothing()));
    return LitHelpers_html(fmt`
    <div class="tabs" style="margin-bottom: 0.5rem;">
    <ul>
    ${renderTab(new Tab(0), "Todos")}
    ${renderTab(new Tab(1), "Virtual Scroll")}
    </ul>
    </div>
    ${content}
    `);
}, new MethodInfo("MyApp", [["arg0", unit_type]], class_type("Lit.TemplateResult")));

