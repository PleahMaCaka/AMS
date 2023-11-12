<div class="base-panel">
    <div class="bp-content">
        <slot />
    </div>
</div>

<style lang="scss">
  @import "../../scss/anim/appear.scss";
  @import "../../scss/vars/panel.scss";
  @import "../../scss/vars/sidebar.scss";

  $bp-radius: 25px;

  .base-panel {
    position: absolute;
    width: $panel-width;
    height: $panel-height;

    background-color: rgba(253, 253, 253, 0.65);
    border: 1px solid rgba(0, 0, 0, .1);
    border-radius: $bp-radius;
    box-shadow: 0 0 10px rgba(0, 0, 0, .3);
    margin: 2.5rem 4.4rem;
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    animation: fade-in 0.32s ease-in-out;
  }

  .bp-content {
    //width: $panel-width - 1.5vw;
    //height: $panel-height - 1.5vh;
    width: 100%;
    height: 100%;
    //padding: 20px;
    background-color: rgba(253, 253, 253, 0.9);
    border-radius: $bp-radius;

    box-shadow: 0 0 10px rgba(0, 0, 0, .5);
  }
</style>