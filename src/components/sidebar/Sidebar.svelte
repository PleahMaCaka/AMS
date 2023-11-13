<script lang="ts">
    import SideButton from "./SideButton.svelte"

    export let isPinned = true
</script>

<div class="sb" class:sb-is-pinned={isPinned}>
    <button
        class="sb-btn"
        on:click={() => isPinned = !isPinned}
    />
    <SideButton
        icon="/cube-hole.svg"
    />
    <hr />
</div>

<style lang="scss">
  @import "../../scss/vars/sidebar.scss";
  @import "../../scss/vars/panel.scss";

  .sb {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -1rem;

    background-color: rgba(245, 245, 245, 0.85);
    width: $sidebar-width;

    min-height: 160px;
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

  .sb-is-pinned {
    left: -3rem;
    opacity: 1;
    z-index: 2;
  }

  .sb-is-pinned .sb-btn {
    background-color: rgb(255, 40, 40);
  }

  .sb-btn {
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