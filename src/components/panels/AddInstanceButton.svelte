<script>
    import BaseInstanceItem from "./BaseInstanceItem.svelte";
</script>

<!-- on:click to redirect using by (window.location.href) is wierd, so use <a> tag instead -->
<BaseInstanceItem>
    <a href="/create">
        <button class="add-inst-btn">
            <img alt="Add" src="/plus.svg" />
        </button>
    </a>
</BaseInstanceItem>

<style lang="scss">

    .add-inst-btn {
        border-radius: 25px;

        width: 100%;
        height: 100%;

        border: dashed #83b1f7 3px;
        background-color: transparent;

        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
        transition-duration: 0.12s;
        cursor: pointer;

        &:hover {
            background-color: rgba(0, 0, 0, 0.05);
            box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
        }
    }
</style>
