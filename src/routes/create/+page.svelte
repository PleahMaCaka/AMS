<script lang="ts">
    import BigTitleButton from "../../components/panels/create/ServerTypeButton.svelte"
    import PageTitle from "../../components/share/PageTitle.svelte"
</script>

<div class="create-page">
    <PageTitle
        title="Create a new server"
        subtitle="Select the type of server you want to create."
    />
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

        margin-top: 1rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;

        animation: fade-in-up .5s ease-in-out;
    }

    .serv-type-selection {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>

