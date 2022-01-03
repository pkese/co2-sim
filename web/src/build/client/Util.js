import { toArray, defaultArg } from "./fable_modules/fable-library.3.6.3/Option.js";
import { class_type } from "./fable_modules/fable-library.3.6.3/Reflection.js";
import { iterate } from "./fable_modules/fable-library.3.6.3/Seq.js";

export class LitLabs_ScrollToIndex {
    constructor(index, position) {
        this["index@22"] = (index | 0);
        this["position@22"] = position;
    }
    get index() {
        const _ = this;
        return _["index@22"] | 0;
    }
    get position() {
        const _ = this;
        return defaultArg(_["position@22"], "start");
    }
}

export function LitLabs_ScrollToIndex$reflection() {
    return class_type("Lit.TodoMVC.Util.LitLabs.ScrollToIndex", void 0, LitLabs_ScrollToIndex);
}

export function LitLabs_ScrollToIndex_$ctor_2EA9C9D3(index, position) {
    return new LitLabs_ScrollToIndex(index, position);
}

export function Storage_mapInit(decode, storageKey, init, unitVar0) {
    const patternInput = init();
    const defaultModel = patternInput[0];
    const cmd = patternInput[1];
    const matchValue = localStorage.getItem(storageKey);
    if (matchValue === null) {
        return [defaultModel, cmd];
    }
    else {
        const json = matchValue;
        try {
            const stored = decode(json);
            return [stored, cmd];
        }
        catch (e) {
            console.warn(`Cannot decode localStorage '${storageKey}'`, e.message);
            return [defaultModel, cmd];
        }
    }
}

export function Storage_mapUpdate(encode, storageKey, update, msg, model) {
    const patternInput = update(msg, model);
    const newModel = patternInput[0];
    const cmd = patternInput[1];
    localStorage.setItem(storageKey, encode(newModel));
    return [newModel, cmd];
}

export function onEnterOrEscape(onEnter, onEscape, ev) {
    const ev_1 = ev;
    const matchValue = ev_1.key;
    switch (matchValue) {
        case "Enter": {
            onEnter(ev_1);
            break;
        }
        case "Escape": {
            onEscape(ev_1);
            break;
        }
        default: {
        }
    }
}

export function Microsoft_FSharp_Core_FSharpOption$1__Option$1_Iter_Z7D5D6F51(this$, f) {
    iterate(f, toArray(this$));
}

