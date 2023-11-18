<div class="create-page">
    <slot />
</div>

<style lang="scss">
    @import "../../scss/anim/appear.scss";

    .create-page {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        animation: fade-in-up .13s ease-in-out;
    }
</style>

