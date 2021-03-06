import * as au from "../aurelia";
import { LookupState } from "./lookup-state";
import { ILookupOptionsFunctionParameter } from "./i-lookup-options-function-parameter";
import { DiscardablePromise } from "../common/discardable-promise";
export declare class MdLookup {
    private element;
    private taskQueue;
    constructor(element: Element, taskQueue: au.TaskQueue);
    static searching: symbol;
    static error: symbol;
    errorMessage: string;
    static id: number;
    controlId: string;
    dropdown: HTMLElement;
    dropdownUl: HTMLElement;
    input: HTMLInputElement;
    labelElement: HTMLLabelElement;
    validationContainer: HTMLElement;
    logger: au.Logger;
    filter: string;
    searchPromise: DiscardablePromise<any[]>;
    suppressFilterChanged: boolean;
    filterChanged(): Promise<void>;
    setFilter(filter: string): void;
    label: string;
    value: any;
    suppressValueChanged: boolean;
    valueChanged(newValue: any, oldValue: any): Promise<void>;
    setValue(value: string): void;
    optionsFunction: (p: ILookupOptionsFunctionParameter<any>) => Promise<any[]>;
    getOptions: (p: ILookupOptionsFunctionParameter<any>) => Promise<any[]>;
    displayFieldName: ((option: any) => string) | string;
    valueFieldName: ((option: any) => any) | string;
    readonly: boolean;
    placeholder: string;
    debounce: number;
    preloadOptions: boolean;
    LookupState: typeof LookupState;
    state: LookupState;
    bindingContext: object;
    options: any[];
    optionsChanged(): void;
    isOpen: boolean;
    updateFilterBasedOnValue(): Promise<void>;
    fixDropdownSizeIfTooBig(): void;
    open(): void;
    close(): void;
    blur(): void;
    focus(): void;
    updateLabel(): void;
    bind(bindingContext: object, overrideContext: object): Promise<void>;
    attached(): Promise<void>;
    detached(): void;
    select(option: any): void;
    getDisplayValue(option: any): any;
    mdUnrenderValidateResults: (results: au.ValidateResult[], renderer: au.MaterializeFormValidationRenderer) => void;
    mdRenderValidateResults: (results: au.ValidateResult[], renderer: au.MaterializeFormValidationRenderer) => void;
}
