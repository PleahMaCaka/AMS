<script>
    import "../scss/global.scss"
    import Sidebar from "../components/sidebar/Sidebar.svelte"
    import Titlebar from "../components/Titlebar.svelte"
</script>

<Titlebar />
<Sidebar />
<slot />