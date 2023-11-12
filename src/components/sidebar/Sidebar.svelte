<script>
    import SideButton from "./SideButton.svelte"
</script>

<div class="sb-wrap">
    <div class="sidebar">
        <SideButton
            icon="/mc.png"
        />
        <hr />
    </div>
</div>

<style lang="scss">
  @import "../../scss/vars/sidebar.scss";

  .sidebar {
    position: fixed;
    background-color: rgba(245, 245, 245, 0.85);
    width: $sidebar-width;

    min-height: 160px;
    max-height: 80%;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 1rem 12px;
    border-radius: 1.2rem;
    margin: auto 0;

    z-index: 999;
  }

  .sb-wrap {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
</style>