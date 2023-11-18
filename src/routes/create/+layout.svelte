<div class="create-page fade-in-up">
    <h1>Create New Server</h1>
    <hr />
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
    }

    h1 {
        margin-bottom: 10px;
    }

    hr {
        opacity: 0.7;
        @include expand-width(40%);
    }
</style>

