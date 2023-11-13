<script lang="ts">
    export let icon: string = ""
</script>

<div class="side-btn-wrap">
    <img
        alt="Minecraft"
        class="side-btn-icon"
        src={icon}
    />
</div>

<style lang="scss">
  $side-btn-size: 3rem;

  .side-btn-wrap {
    padding: 0.5rem;
    margin: 0 auto;

    border-radius: 25%;
    border: 1px solid rgba(187, 187, 187, 0.5);
    box-shadow: 0 0 0 1px rgba(187, 187, 187, 0.5);

    width: $side-btn-size;
    height: $side-btn-size;
    background-color: rgba(187, 187, 187, 0.25);
    transition-duration: 0.12s;

    &:hover {
      background-color: rgba(187, 187, 187, 0.75);
      box-shadow: 0 0 0 1px rgba(187, 187, 187, 0.75);
    }
  }

  .side-btn-icon {
    margin: 0 auto;
    width: $side-btn-size;
  }
</style>