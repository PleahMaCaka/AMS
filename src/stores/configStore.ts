import { type Writable, writable } from "svelte/store"

export interface ConfigStore {
    useDefaultJavaHome: Writable<boolean>
    debugMode: Writable<boolean>
}

/**
 * Create writable stores for each config for easy to save/load,
 * But it can be occurring performance issue if there are too many configs.
 */
export const configStore: ConfigStore = {
    useDefaultJavaHome: writable<boolean>(true),
    debugMode: writable<boolean>(false),
}