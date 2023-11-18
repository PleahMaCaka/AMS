<script lang="ts">
    import { stateStore } from "../../../stores/stateStore"
</script>

<div class="create-mode fade-in-up">
    <a href="/create/mode/simple">
        <button
            class="create-mode-button"
            class:mod-selected={$stateStore.mode === "simple"}
            on:click={() => $stateStore.mode = "simple"}
        >Simple
        </button>
    </a>
    <a href="/create/mode/advanced">
        <button
            class="create-mode-button"
            class:mod-selected={$stateStore.mode === "advanced"}
            on:click={() => $stateStore.mode = "advanced"}
        >Advanced
        </button>
    </a>
</div>
<slot />

<style lang="scss">
    @import "../../../scss/anim/appear.scss";

    $mode-btn-bg: #eee;

    .create-mode {
        display: flex;
        justify-content: center;
        margin: 10px 0;
    }

    .create-mode-button {
        min-width: 100px;
        margin: 0 10px;
        padding: 10px 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background: $mode-btn-bg;
        cursor: pointer;

        &:hover {
            background: #fdfdfd;
        }
    }

    .mod-selected {
        background: #fdfdfd;
    }
</style>