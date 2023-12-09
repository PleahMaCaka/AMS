// noinspection JSUnusedGlobalSymbols

export declare global {
    /**
     * @description This feature is non-standard, and it will no work for every user.
     * @link https://github.com/tauri-apps/tauri/issues/3310
     *       https://github.com/microsoft/TypeScript/issues/49253
     *       https://developer.mozilla.org/en-US/docs/Web/CSS/zoom
     */
    export interface CSSStyleDeclaration {
        zoom: number
    }
}
