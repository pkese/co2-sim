import { defaultArg } from "./fable_modules/fable-library.3.6.3/Option.js";
import { HMRTypes_HMRToken__RequestUpdate_4E60E31B, HMRTypes_HMRToken__get_TriggeredByDependency, HMR_get_hot, HMRTypes_HMRToken__set_TriggeredByDependency_Z1FBCCD16, HMRTypes_HMRToken_Get_Z721C83C5 } from "./fable_modules/Fable.Lit.1.4.1/HMR.fs.js";
import { Union, Record } from "./fable_modules/fable-library.3.6.3/Types.js";
import { lambda_type, unit_type, MethodInfo, union_type, option_type, list_type, record_type, bool_type, string_type, class_type } from "./fable_modules/fable-library.3.6.3/Reflection.js";
import { newGuid } from "./fable_modules/fable-library.3.6.3/Guid.js";
import { sortBy, map, filter, cons, ofArray } from "./fable_modules/fable-library.3.6.3/List.js";
import { Cmd_none } from "./fable_modules/Fable.Elmish.3.1.0/cmd.fs.js";
import { Lit_HookContext__HookContext_useTransition_Z72156604, Lit_HookContext__HookContext_useEffectOnChange_31A5188A, Lit_HookContext__HookContext_use_scoped_css_Z721C83C5, Hook_getContext_343DAFF1, Hook_useHmr_ZF11B4D8, HookComponentAttribute } from "./fable_modules/Fable.Lit.1.4.1/Hook.fs.js";
import { Lit_mapUnique, Lit_classes_5A743451, Lit_refValue_6E15182A, LitHelpers_html } from "./fable_modules/Fable.Lit.1.4.1/Lit.fs.js";
import { isNullOrWhiteSpace, fmt } from "./fable_modules/fable-library.3.6.3/String.js";
import { Storage_mapUpdate, Storage_mapInit, Microsoft_FSharp_Core_FSharpOption$1__Option$1_Iter_Z7D5D6F51, onEnterOrEscape } from "./Util.js";
import * as motion from "@lit-labs/motion";
import { Prop_Of_6B8EFA6B, LitElementAttribute } from "./fable_modules/Fable.Lit.1.4.1/LitElement.fs.js";
import { toString, Auto_generateBoxedEncoder_Z20B7B430 } from "./fable_modules/Thoth.Json.6.0.0/Encode.fs.js";
import { unsafeFromString, Auto_generateBoxedDecoder_79988AEF } from "./fable_modules/Thoth.Json.6.0.0/Decode.fs.js";
import { comparePrimitives, curry, uncurry } from "./fable_modules/fable-library.3.6.3/Util.js";
import { Program_mkHidden, LitElmishExtensions_useElmish } from "./fable_modules/Fable.Lit.Elmish.1.4.0/Lit.Elmish.fs.js";

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

export class Elmish_Todo extends Record {
    constructor(Id, Description, Completed) {
        super();
        this.Id = Id;
        this.Description = Description;
        this.Completed = Completed;
    }
}

export function Elmish_Todo$reflection() {
    return record_type("Lit.TodoMVC.Todos.Elmish.Todo", [], Elmish_Todo, () => [["Id", class_type("System.Guid")], ["Description", string_type], ["Completed", bool_type]]);
}

export function Elmish_Todo_New_Z721C83C5(description) {
    return new Elmish_Todo(newGuid(), description, false);
}

export class Elmish_State extends Record {
    constructor(Todos, Edit, Sort) {
        super();
        this.Todos = Todos;
        this.Edit = Edit;
        this.Sort = Sort;
    }
}

export function Elmish_State$reflection() {
    return record_type("Lit.TodoMVC.Todos.Elmish.State", [], Elmish_State, () => [["Todos", list_type(Elmish_Todo$reflection())], ["Edit", option_type(Elmish_Todo$reflection())], ["Sort", bool_type]]);
}

export class Elmish_Msg extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["ToggleSort", "AddNewTodo", "DeleteTodo", "ToggleCompleted", "StartEdit", "FinishEdit"];
    }
}

export function Elmish_Msg$reflection() {
    return union_type("Lit.TodoMVC.Todos.Elmish.Msg", [], Elmish_Msg, () => [[], [["description", string_type]], [["Item", class_type("System.Guid")]], [["Item", class_type("System.Guid")]], [["Item", Elmish_Todo$reflection()]], [["Item", option_type(Elmish_Todo$reflection())]]]);
}

export function Elmish_init() {
    const todos = ofArray([Elmish_Todo_New_Z721C83C5("Learn F#"), Elmish_Todo_New_Z721C83C5("Have fun with Lit!")]);
    return [new Elmish_State(todos, void 0, false), Cmd_none()];
}

export function Elmish_update(msg, model) {
    if (msg.tag === 1) {
        const description = msg.fields[0];
        const todo = Elmish_Todo_New_Z721C83C5(description);
        return [new Elmish_State(cons(todo, model.Todos), void 0, model.Sort), Cmd_none()];
    }
    else if (msg.tag === 2) {
        const guid = msg.fields[0];
        const todos = filter((t) => (t.Id !== guid), model.Todos);
        return [new Elmish_State(todos, model.Edit, model.Sort), Cmd_none()];
    }
    else if (msg.tag === 3) {
        const guid_1 = msg.fields[0];
        const todos_1 = map((t_1) => {
            if (t_1.Id === guid_1) {
                return new Elmish_Todo(t_1.Id, t_1.Description, !t_1.Completed);
            }
            else {
                return t_1;
            }
        }, model.Todos);
        return [new Elmish_State(todos_1, model.Edit, model.Sort), Cmd_none()];
    }
    else if (msg.tag === 4) {
        const edit = msg.fields[0];
        return [new Elmish_State(model.Todos, edit, model.Sort), Cmd_none()];
    }
    else if (msg.tag === 5) {
        if (msg.fields[0] != null) {
            const t1 = msg.fields[0];
            const todos_2 = map((t2) => {
                if (t1.Id === t2.Id) {
                    return t1;
                }
                else {
                    return t2;
                }
            }, model.Todos);
            return [new Elmish_State(todos_2, void 0, model.Sort), Cmd_none()];
        }
        else {
            return [new Elmish_State(model.Todos, void 0, model.Sort), Cmd_none()];
        }
    }
    else {
        return [new Elmish_State(model.Todos, model.Edit, !model.Sort), Cmd_none()];
    }
}

export const NewTodoEl = (new HookComponentAttribute()).Decorate(function (dispatch) {
    Hook_useHmr_ZF11B4D8(hmr, this);
    const inputRef = Hook_getContext_343DAFF1(this).useRef(() => (void 0));
    const addNewTodo = (_arg1) => {
        const matchValue = inputRef.contents;
        if (matchValue != null) {
            const input = matchValue;
            const value = input.value;
            input.value = "";
            const matchValue_1 = value.trim();
            if (matchValue_1 === "") {
            }
            else {
                const v = matchValue_1;
                dispatch(new Elmish_Msg(1, v));
            }
        }
    };
    return LitHelpers_html(fmt`
    <div class="field has-addons">
    <div class="control is-expanded">
    <input class="input is-medium"
    type="text"
    aria-label="New todo description"
    ${Lit_refValue_6E15182A(inputRef)}
    @keyup=${((ev) => {
        onEnterOrEscape(addNewTodo, (value_1) => {
        }, ev);
    })}>
    </div>
    <div class="control">
    <button class="button is-primary is-medium"
    aria-label="Add new todo"
    @click=${addNewTodo}>
    <i role="img" class="bi-plus-lg"></i>
    </button>
    </div>
    </div>
    `);
}, new MethodInfo("NewTodoEl", [["dispatch", lambda_type(Elmish_Msg$reflection(), unit_type)]], class_type("Lit.TemplateResult")));

export const TodoEl = (new HookComponentAttribute()).Decorate(function (dispatch, edit, todo) {
    Hook_useHmr_ZF11B4D8(hmr, this);
    const transitionMs = 500;
    let className;
    const rules = `
    :host {
    transition-duration: ${transitionMs}ms;
    border: 2px solid lightgray;
    border-radius: 10px;
    margin: 5px 0;
    }
    :host.transition-enter {
    opacity: 0;
    transform: scale(2);
    }
    :host.transition-leave {
    opacity: 0;
    transform: scale(0.1);
    }
    .is-clickable {
    user-select: none;
    }
    `;
    className = Lit_HookContext__HookContext_use_scoped_css_Z721C83C5(Hook_getContext_343DAFF1(this), rules);
    let isEditing;
    if (edit == null) {
        isEditing = false;
    }
    else {
        const edit_1 = edit;
        isEditing = (edit_1.Id === todo.Id);
    }
    const hasFocus = Hook_getContext_343DAFF1(this).useRef(() => false);
    const inputRef = Hook_getContext_343DAFF1(this).useRef(() => (void 0));
    Lit_HookContext__HookContext_useEffectOnChange_31A5188A(Hook_getContext_343DAFF1(this), isEditing, (_arg1) => {
        let pattern_matching_result;
        if (_arg1) {
            if (!hasFocus.contents) {
                pattern_matching_result = 0;
            }
            else {
                pattern_matching_result = 1;
            }
        }
        else {
            pattern_matching_result = 1;
        }
        switch (pattern_matching_result) {
            case 0: {
                Microsoft_FSharp_Core_FSharpOption$1__Option$1_Iter_Z7D5D6F51(inputRef.contents, (i) => {
                    i.select();
                });
                break;
            }
            case 1: {
                break;
            }
        }
    });
    const transition = Lit_HookContext__HookContext_useTransition_Z72156604(Hook_getContext_343DAFF1(this), transitionMs, void 0, () => {
        dispatch(new Elmish_Msg(2, todo.Id));
    });
    let inner;
    if (isEditing) {
        const applyEdit = (_arg2) => {
            Microsoft_FSharp_Core_FSharpOption$1__Option$1_Iter_Z7D5D6F51(inputRef.contents, (input) => {
                dispatch(new Elmish_Msg(5, new Elmish_Todo(todo.Id, input.value.trim(), todo.Completed)));
            });
        };
        const cancelEdit = (_arg3) => {
            dispatch(new Elmish_Msg(5, void 0));
        };
        inner = LitHelpers_html(fmt`
        <div class="column is-10">
        <input class="input"
        type="text"
        aria-label="Edit todo"
        ${Lit_refValue_6E15182A(inputRef)}
        value=${todo.Description}
        @keyup=${((ev) => {
            onEnterOrEscape(applyEdit, cancelEdit, ev);
        })}
        @blur=${cancelEdit}>
        </div>
        <div class="column is-2">
        <button class="button is-primary" aria-label="Save edit"
        @click=${applyEdit}>
        <i role="img" class="bi-save"></i>
        </button>
        </div>
        `);
    }
    else {
        inner = LitHelpers_html(fmt`
        <div class="column is-9">
        <p class="subtitle is-clickable"
        @dblclick=${((_arg1_1) => {
            dispatch(new Elmish_Msg(4, todo));
        })}>
        ${todo.Description}
        </p>
        </div>
        <div class="column is-3">
        <button class=${Lit_classes_5A743451([["button", true], ["is-success", todo.Completed]])}
        aria-label=${(todo.Completed ? "Mark uncompleted" : "Mark completed")}
        @click=${((_arg2_1) => {
            dispatch(new Elmish_Msg(3, todo.Id));
        })}>
        <i role="img" class="bi-check-lg"></i>
        </button>
        <button class="button is-primary" aria-label="Edit"
        @click=${((_arg3_1) => {
            dispatch(new Elmish_Msg(4, todo));
        })}>
        <i role="img" class="bi-pencil"></i>
        </button>
        <button class="button is-danger" aria-label="Delete"
        @click=${((_arg4) => {
            transition.triggerLeave();
        })}>
        <i role="img" class="bi-trash"></i>
        </button>
        </div>
        `);
    }
    return LitHelpers_html(fmt`<div class="columns ${className} ${transition.className}" ${motion.animate()}>${inner}</div>`);
}, new MethodInfo("TodoEl", [["dispatch", lambda_type(Elmish_Msg$reflection(), unit_type)], ["edit", option_type(Elmish_Todo$reflection())], ["todo", Elmish_Todo$reflection()]], class_type("Lit.TemplateResult")));

export const TodoApp = (new LitElementAttribute("todo-app")).Decorate(function () {
    let storageKey_1;
    Hook_useHmr_ZF11B4D8(hmr, this);
    const props = (this).init((arg) => {
        let a;
        const cfg = arg;
        cfg.useShadowDom = false;
        a = (cfg.props = {
            localStorage: Prop_Of_6B8EFA6B(void 0, "local-storage"),
        });
        return Promise.resolve(undefined);
    })[1];
    const className = Lit_HookContext__HookContext_use_scoped_css_Z721C83C5(Hook_getContext_343DAFF1(this), "\n        :host {\n            margin: 0 auto;\n            max-width: 800px;\n            padding: 20px;\n        }\n    ");
    let patternInput_3;
    const init = Elmish_init;
    const update = (msg, model) => Elmish_update(msg, model);
    const storageKey = props.localStorage;
    let patternInput_2;
    let pattern_matching_result, storageKey_2;
    if (storageKey != null) {
        if ((storageKey_1 = storageKey, !isNullOrWhiteSpace(storageKey_1))) {
            pattern_matching_result = 0;
            storageKey_2 = storageKey;
        }
        else {
            pattern_matching_result = 1;
        }
    }
    else {
        pattern_matching_result = 1;
    }
    switch (pattern_matching_result) {
        case 0: {
            const storageKey_3 = storageKey_2.trim();
            let patternInput_1;
            let encoder;
            const enc = Auto_generateBoxedEncoder_Z20B7B430(Elmish_State$reflection(), void 0, void 0, void 0);
            encoder = ((model_1) => toString(0, enc(model_1)));
            let decoder;
            const dec = Auto_generateBoxedDecoder_79988AEF(Elmish_State$reflection(), void 0, void 0);
            decoder = ((json) => unsafeFromString(uncurry(2, dec), json));
            patternInput_1 = [encoder, decoder];
            const encoder_1 = patternInput_1[0];
            const decoder_1 = patternInput_1[1];
            patternInput_2 = [() => Storage_mapInit(decoder_1, storageKey_3, init, void 0), (msg_1) => ((model_2) => Storage_mapUpdate(encoder_1, storageKey_3, update, msg_1, model_2))];
            break;
        }
        case 1: {
            patternInput_2 = [init, curry(2, update)];
            break;
        }
    }
    const update_1 = patternInput_2[1];
    const init_1 = patternInput_2[0];
    patternInput_3 = LitElmishExtensions_useElmish(Hook_getContext_343DAFF1(this), () => Program_mkHidden(init_1, uncurry(2, update_1)));
    const model_3 = patternInput_3[0];
    const dispatch = patternInput_3[1];
    const todos = (!model_3.Sort) ? model_3.Todos : sortBy((t) => t.Description.toLocaleLowerCase(), model_3.Todos, {
        Compare: (x, y) => comparePrimitives(x, y),
    });
    return LitHelpers_html(fmt`
    <div class=${className}>
    <div class="title">
    <slot name="title"></slot>
    </div>
    ${NewTodoEl(dispatch)}
    <label class="checkbox">
    <input type="checkbox"
    ?checked=${model_3.Sort}
    @change=${((_arg1) => {
        dispatch(new Elmish_Msg(0));
    })}>
    Sort by description
    </label>
    ${Lit_mapUnique((t_1) => t_1.Id, (todo) => TodoEl(dispatch, model_3.Edit, todo), todos)}
    </div>
    `);
}, new MethodInfo("TodoApp", [["arg0", unit_type]], class_type("Lit.TemplateResult")));

