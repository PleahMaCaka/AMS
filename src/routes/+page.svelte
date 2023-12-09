<script>
    import InstanceItem from "../components/panels/InstanceItem.svelte";
</script>

<div class="flex-col inst-items">
    <InstanceItem />
</div>

<style>
    .inst-items {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
</style>
