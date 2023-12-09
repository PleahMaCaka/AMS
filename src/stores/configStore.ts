import { type Writable, writable } from "svelte/store"

export interface ConfigStore {
    useDefaultJavaHome: Writable<boolean>
    debugMode: Writable<boolean>
}

export const configStore: ConfigStore = {
    useDefaultJavaHome: writable<boolean>(true),
    debugMode: writable<boolean>(false),
}