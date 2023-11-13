<script>
    import Sidebar from "../sidebar/Sidebar.svelte"
</script>

<div class="bp-holder">
    <div class="base-panel">
        <Sidebar />
        <div class="bp-content"></div>
    </div>
</div>
<style lang="scss">
  @import "../../scss/anim/appear.scss";
  @import "../../scss/vars/panel.scss";
  @import "../../scss/vars/sidebar.scss";

  $bp-radius: 25px;
  $bp-content-margin: 6px;

  .bp-holder {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }

  .base-panel {
    position: absolute;
    width: $panel-width;
    height: $panel-height;

    background-color: rgba(253, 253, 253, 0.65);
    border-radius: $bp-radius;

    box-shadow: 0 0 10px rgba(0, 0, 0, .3);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    animation: fade-in 0.32s ease-in-out;
  }

  .bp-content {
    z-index: 1;
    background-color: rgba(253, 253, 253, 0.9);
    border-radius: $bp-radius;

    width: calc(100% - $bp-content-margin * 2);
    height: calc(100% - $bp-content-margin * 2);
    margin: $bp-content-margin;
    box-shadow: 0 0 $bp-content-margin rgba(0, 0, 0, .5);
  }
</style>