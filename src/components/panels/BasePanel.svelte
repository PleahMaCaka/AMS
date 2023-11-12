<div class="base-panel">
    <div class="bp-content">

    </div>
</div>

<style lang="scss">
  @import "../../scss/anim/appear";

  $bp-radius: 25px;

  .base-panel {
    position: absolute;
    width: 80vw;
    height: 95vh;
    background-color: rgba(253, 253, 253, 0.65);
    border: 1px solid rgba(0, 0, 0, .1);
    border-radius: $bp-radius;
    box-shadow: 0 0 10px rgba(0, 0, 0, .3);
    margin: 2rem + 0.4rem 4rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    animation: fade-in 0.32s ease-in-out;
  }

  .bp-content {
    width: 90%;
    height: 94%;
    padding: 1rem;
    background-color: rgba(253, 253, 253, 0.9);
    border-radius: $bp-radius;

    box-shadow: 0 0 10px rgba(0, 0, 0, .5);
  }
</style>