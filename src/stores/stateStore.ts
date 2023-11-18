import { writable } from "svelte/store"

export interface StateStore {
    mode: "simple" | "advanced"
}

export const stateStore = writable<StateStore>({
    mode: "simple"
})