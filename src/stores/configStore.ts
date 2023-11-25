import { type Writable, writable } from "svelte/store"

export interface ConfigStore {
    [ key: string ]: Writable<boolean> // for extract key from later

    useDefaultJavaHome: Writable<boolean>
    debugMode: Writable<boolean>
}

export const configStore: ConfigStore = {
    useDefaultJavaHome: writable<boolean>(true),
    debugMode: writable<boolean>(false),
}