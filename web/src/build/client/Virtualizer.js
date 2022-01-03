import { defaultArg } from "./fable_modules/fable-library.3.6.3/Option.js";
import { HMRTypes_HMRToken__RequestUpdate_4E60E31B, HMRTypes_HMRToken__get_TriggeredByDependency, HMR_get_hot, HMRTypes_HMRToken__set_TriggeredByDependency_Z1FBCCD16, HMRTypes_HMRToken_Get_Z721C83C5 } from "./fable_modules/Fable.Lit.1.4.1/HMR.fs.js";
import { Prop_Of_6B8EFA6B, LitElementAttribute } from "./fable_modules/Fable.Lit.1.4.1/LitElement.fs.js";
import { Hook_get_emptyDisposable, Hook_getContext_343DAFF1, Hook_useHmr_ZF11B4D8 } from "./fable_modules/Fable.Lit.1.4.1/Hook.fs.js";
import { Lit_get_nothing, LitHelpers_html, LitHelpers_css } from "./fable_modules/Fable.Lit.1.4.1/Lit.fs.js";
import { fmt } from "./fable_modules/fable-library.3.6.3/String.js";
import { singleton } from "./fable_modules/fable-library.3.6.3/List.js";
import { class_type, unit_type, MethodInfo } from "./fable_modules/fable-library.3.6.3/Reflection.js";
import * as virtualizer from "@lit-labs/virtualizer";

const hmr = (() => {
    const active_1 = defaultArg(void 0, true);
    let token = null;
    try {
        token = HMRTypes_HMRToken_Get_Z721C83C5(import.meta.url);
        HMRTypes_HMRToken__set_TriggeredByDependency_Z1FBCCD16(token, false);
        if (import.meta.hot) {
            import.meta.hot.accept((newModule) => {
                if (!active_1) {
                    import.meta.hot.invalidate();
                }
                else if (!HMRTypes_HMRToken__get_TriggeredByDependency(token)) {
                    HMRTypes_HMRToken__RequestUpdate_4E60E31B(token, newModule);
                }
            });
        }
    }
    catch (matchValue) {
    }
    return token;
})();

export function register() {
}

export const ContactCard = (new LitElementAttribute("contact-card")).Decorate(function () {
    Hook_useHmr_ZF11B4D8(hmr, this);
    const props = (this).init((arg) => {
        let a;
        const cfg = arg;
        cfg.styles = singleton(LitHelpers_css(fmt`
        :host {
        display: block;
        width: 100%;
        margin: 0.25em 0;
        cursor: pointer;
        }
        div, details {
        padding: 1em;
        color: white;
        display: block;
        }
        `));
        a = (cfg.props = {
            contact: Prop_Of_6B8EFA6B(void 0, ""),
        });
        return Promise.resolve(undefined);
    })[1];
    const patternInput_1 = Hook_getContext_343DAFF1(this).useState(() => false);
    const setOpen = patternInput_1[1];
    const isOpen = patternInput_1[0];
    const matchValue = props.contact;
    if (matchValue != null) {
        const contact = matchValue;
        return LitHelpers_html(fmt`
        <details style="background: ${contact.color}">
        <summary @click=${((_arg1) => {
            setOpen(!isOpen);
        })}>
        ${contact.name}
        </summary>
        <p style="display: ${(isOpen ? "block" : "none")};">
        ${contact.mediumText}
        </p>
        </details>
        `);
    }
    else {
        return Lit_get_nothing();
    }
}, new MethodInfo("ContactCard", [["arg0", unit_type]], class_type("Lit.TemplateResult")));

export const ContactList = (new LitElementAttribute("contact-list")).Decorate(function () {
    Hook_useHmr_ZF11B4D8(hmr, this);
    (this).init((arg) => {
        let a;
        a = (arg.styles = singleton(LitHelpers_css(fmt`
        :host {
        display: block;
        height: 100%;
        }
        .contact-list {
        height: 100%;
        }
        `)));
        return Promise.resolve(undefined);
    });
    let patternInput;
    const v = [];
    patternInput = Hook_getContext_343DAFF1(this).useState(() => v);
    const setContacts = patternInput[1];
    const contacts = patternInput[0];
    Hook_getContext_343DAFF1(this).useEffectOnce(() => {
        const pr = fetch("contacts.json").then(x => x.json());
        void (pr.then(setContacts));
        return Hook_get_emptyDisposable();
    });
    const renderContact = (contact, _arg1) => LitHelpers_html(fmt`<contact-card .contact=${contact}></contact-card>`);
    return LitHelpers_html(fmt`
    <div class="contact-list">
    ${virtualizer.scroll({
        items: contacts,
        renderItem: renderContact,
        layout: virtualizer.Layout1d,
    })}
    </div>
    `);
}, new MethodInfo("ContactList", [["arg0", unit_type]], class_type("Lit.TemplateResult")));

