<script lang="ts">
    import { invoke } from "@tauri-apps/api"
    import { amsConfig } from "../../api/AmsConfig"
    import ToggleOption from "../../components/settings/ToggleOption.svelte"
    import JustButton from "../../components/share/JustButton.svelte"
    import { configStore } from "../../stores/configStore"
</script>

<div class="settings-page">
    <h1>Settings</h1>
    <hr />
    <div class="option-container">
        <ToggleOption
            title="Use Default JAVA_HOME"
            description="Use the default JAVA_HOME environment variable instead of the one specified in the settings."
            store={configStore.useDefaultJavaHome}
        />
        <ToggleOption
            title="Debug Mode"
            description="Enable debug mode to see more information in the console."
            store={configStore.debugMode}
        />
        <div class="flex-row">
            <JustButton
                external={true}
                name="Open Config Folder"
                execute={async () => {await invoke("open_explorer", { path: await amsConfig.getConfigPath() })}}
            />
        </div>
    </div>
</div>

<style lang="scss">
    @import "../../scss/anim/appear.scss";

    .settings-page {
        display: block;
        box-sizing: border-box;
        width: 100%;
        height: 100%;

        animation: fade-in-up 0.2s ease-in-out;

        h1 {
            font-size: 2.5rem;
            font-weight: 500;
            text-align: center;
        }

        hr {
            @include expand-width(40%, 0.73s);
        }
    }

    .option-container {
        height: auto;
        margin: 0 10%;
    }
</style>