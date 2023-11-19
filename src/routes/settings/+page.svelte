<div class="settings-page">
    <h1>Settings</h1>
    <hr />
</div>

<style lang="scss">
    @import "../../scss/anim/appear.scss";

    .settings-page {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;

        animation: fade-in-up 0.2s ease-in-out;

        hr {
            @include expand-width(40%, 0.73s)
        }
    }
</style>