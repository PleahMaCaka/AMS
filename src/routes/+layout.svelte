<script>
    import "../scss/global.scss"
    import Titlebar from "../components/Titlebar.svelte"
    import BasePanel from "../components/panels/BasePanel.svelte"
    import { onMount } from "svelte"

    onMount(() => {
        document.body.style.zoom = 0.8
    })
</script>

<Titlebar />
<BasePanel>
    <slot />
</BasePanel>
