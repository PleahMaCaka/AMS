import { invoke } from "@tauri-apps/api"
import { appConfigDir } from "@tauri-apps/api/path"
import { get } from "svelte/store"
import { configStore } from "../stores/configStore"


export const amsConfig = new class _ { // can't using `void new class` because of typecheck (IICE)
    private convertToJson(): string {
        const config = {
            useDefaultJavaHome: get(configStore.useDefaultJavaHome),
            debugMode: get(configStore.debugMode),
        }
        return JSON.stringify(config)
    }

    public async getConfigPath(): Promise<string> {
        return `${await appConfigDir()}config.json`
    }

    public async save() {
        await invoke("save_config", {
            path: await this.getConfigPath(),
            config: this.convertToJson()
        })
        if (get(configStore.debugMode))
            console.debug("Config saved!")
    }

    public async load() {
        const config = JSON.parse(
            await invoke("load_config", {
                path: await this.getConfigPath()
            })
        )

        if (get(configStore.debugMode))
            console.debug("Config loaded!")

        configStore.useDefaultJavaHome.set(config.useDefaultJavaHome)
        configStore.debugMode.set(config.debugMode)
    }
}