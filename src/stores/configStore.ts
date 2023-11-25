import { writable } from "svelte/store"

export const configStore = {
    useDefaultJavaHome: writable<boolean>(true),
    debugMode: writable<boolean>(false),
}