import { writable } from "svelte/store"
import type { InstanceType } from "../types/instance"

export interface Instance {
    /**
     * Name of the instance (display)
     */
    name: string
    /**
     * Type of instance (e.g. vanilla, paper, etc.)
     */
    type: InstanceType
    /**
     * Path to the instance directory
     */
    rootDir: string
    /**
     * Path to the server jar
     */
    runnerJarPath: string
    /**
     * The path to the java executable
     */
    javaPath: string
    /**
     * Additional JVM Flags
     */
    jvmFlags: string[]
    /**
     * Additional server arguments
     */
    serverArgs: string[]
    /**
     * Recommended RAM for the instance
     */
    recommendedRam: number
}


export const instanceStore = writable<Array<Instance>>()
