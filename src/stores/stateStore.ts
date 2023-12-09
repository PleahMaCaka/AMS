import { writable } from "svelte/store"

export interface StateStore {
    mode: "simple" | "advanced"
}

/**
 * State of current creation details
 */
export const stateStore = writable<StateStore>({
    mode: "simple"
})