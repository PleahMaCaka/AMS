<div class="inst-base">
    <slot />
</div>

<style lang="scss">
    $inst-height: 120px;
    $inst-min-width: 200px;
    $inst-width: 45%;
    $inst-margin: 0.5rem;

    .inst-base {
        justify-content: center;
        align-items: center;
        height: $inst-height;
        min-width: $inst-min-width;
        width: $inst-width;
        margin: $inst-margin;

        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
</style>