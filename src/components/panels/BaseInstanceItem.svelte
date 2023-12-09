<div class="inst-base">
    <slot />
</div>

<style lang="scss">
    .inst-base {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 120px;
        width: 100%;
        margin: 0.5rem;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media (min-width: 520px) {
        .inst-base {
            width: calc(50% - 1rem);
            min-width: 200px;
        }
    }
</style>