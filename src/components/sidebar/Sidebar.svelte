<script lang="ts">
    import SideButton from "./SideButton.svelte"

    export let isPinned = true
</script>

<div class="sidebar" class:sb-is-pinned={isPinned}>
    <button
        class="sidebar-pin"
        on:click={() => isPinned = !isPinned}
    />
    <div class="sidebar-content">
        <a href="/">
            <SideButton icon="/cube-hole.svg" />
        </a>
        <div class="sidebar-end">
            <hr />
            <a href="/settings">
                <SideButton icon="/settings.svg" />
            </a>
        </div>
    </div>
</div>

<style lang="scss">
    @import "../../scss/vars/sidebar.scss";
    @import "../../scss/vars/panel.scss";

    .sidebar {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -1rem;

        background-color: rgba(245, 245, 245, 0.85);
        width: $sidebar-width;

        min-height: 155px;
        height: 0; // required for settings button to be at the bottom (flex-end)
        max-height: 80%;

        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        padding: 1rem 12px;
        border-radius: 1.2rem;

        opacity: 0.65;
        z-index: 1;

        transition-duration: 0.2s;

        &:hover {
            left: -3rem;
            opacity: 1;
            z-index: 2;
        }
    }

    .sidebar-content {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .sidebar-end {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: flex-end;

        hr {
            width: 100%;
        }
    }

    .sb-is-pinned {
        left: -3rem;
        opacity: 1;
        z-index: 2;
    }

    .sb-is-pinned .sidebar-pin {
        background-color: rgb(255, 40, 40);
    }

    .sidebar-pin {
        position: absolute;
        top: 0;
        left: 0;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background-color: rgb(255, 90, 0);
        border: none;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        transition-duration: 0.12s;

        &:hover {
            background-color: rgb(255, 40, 40);
        }
    }
</style>