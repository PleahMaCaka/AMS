<script>
    import "../scss/global.scss"
    import Titlebar from "../components/Titlebar.svelte"
    import BasePanel from "../components/panels/BasePanel.svelte"
</script>

<Titlebar />
<BasePanel>
    <slot />
</BasePanel>