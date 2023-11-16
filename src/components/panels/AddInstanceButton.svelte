<!-- on:click to redirect using by (window.location.href) is wierd, so use <a> tag instead -->
<a href="/create">
    <button class="add-serv-btn">
        <img alt="Add" src="/plus.svg" />
    </button>
</a>

<style lang="scss">
    .add-serv-btn {
        border-radius: 25px;

        width: 45%;
        min-width: 200px;

        height: 120px;
        margin: 0.5rem;

        border: dashed #83b1f7 3px;
        background-color: transparent;

        transition-duration: 0.12s;
        cursor: pointer;

        &:hover {
            background-color: rgba(0, 0, 0, 0.05);
        }
    }
</style>
