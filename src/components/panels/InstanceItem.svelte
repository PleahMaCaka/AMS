<script>
    import BaseInstanceItem from "./BaseInstanceItem.svelte";
</script>

<BaseInstanceItem>
    <div class="inst-item">
        <h3>Instance Item</h3>
    </div>
</BaseInstanceItem>

<style lang="scss">
    .inst-item {
        width: 100%;
        height: 100%;
        border: 1px solid black;

        * {
            margin: 0;
            padding: 0;
        }
    }
</style>