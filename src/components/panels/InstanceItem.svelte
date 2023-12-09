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
        border: 1px solid #c4c4c4;

        // hey copilot, i want light gray but not too light and little bit transparent
        background-color: rgba(196, 196, 196, 0.62); // thanks copilot
        border-radius: 8px;

        * {
            margin: 0;
            padding: 0;
        }
    }
</style>