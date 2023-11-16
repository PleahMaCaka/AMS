<script lang="ts">
    import BigTitleButton from "../../components/panels/create/ServerTypeButton.svelte"
</script>

<div class="create-page">
    <h1>Create New Server</h1>
    <p>Choose type of server</p>
    <hr />
    <h2>Vanilla or Plugin</h2>
    <div class="serv-type-selection">
        <BigTitleButton
            icon="/logo/mc.png"
            title="Vanilla"
            label="None"
        />
        <BigTitleButton
            icon="/logo/paper.png"
            title="Paper"
            label="Recommended"
        />
    </div>
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

        animation: fade-in-up 0.5s ease-in-out;
        animation-duration: 1s;

        h1 {
            margin-bottom: 0;
        }

        hr {
            opacity: 0.7;
            @include expand-width(40%);
        }
    }

    .serv-type-selection {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>