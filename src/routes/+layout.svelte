<script>
    import "../scss/global.scss"
    import Titlebar from "../components/Toolbar.svelte"
    import BasePanel from "../components/panels/BasePanel.svelte"
    import { onMount } from "svelte"
    import { amsConfig } from "../api/AmsConfig"

    onMount(() => {
        document.body.style.zoom = 0.8

        amsConfig.load()
    })
</script>

<Titlebar />
<BasePanel>
    <slot />
</BasePanel>
