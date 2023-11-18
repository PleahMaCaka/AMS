<script lang="ts">
    import BigTitleButton from "../../components/panels/create/ServerTypeButton.svelte"
</script>

<p>Choose type of server</p>
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

<style lang="scss">
    @import "../../scss/anim/appear.scss";

    .serv-type-selection {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>