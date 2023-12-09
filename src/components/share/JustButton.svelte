<script>
    export let external = false
    export let name = "Just Button!"

    export let execute = () => {
        console.log("Just button is clicked!")
    }
</script>

<div class="jb-container">
    <button on:click={execute}>
        {#if external}
            <svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none"
                 xmlns="http://www.w3.org/2000/svg" color="#fff">
                <path d="M21 3L15 3M21 3L12 12M21 3V9" stroke="#fff" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                <path d="M21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H11"
                      stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
            </svg>
        {/if}
        {name}
    </button>
</div>

<style lang="scss">
    .jb-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        margin: 12px 4px;

        button {
            display: flex;
            align-items: center;
            background-color: #4989ec;
            border: none;
            color: white;
            padding: 12px 16px;
            text-align: center;
            text-decoration: none;
            font-size: 16px;
            cursor: pointer;
            border-radius: 8px;
            transition: background-color 0.1s ease-in-out;

            &:hover {
                background-color: #3e7bd5;
            }
        }

        svg {
            margin-right: 4px;
            width: 16px;
            height: 16px;
        }
    }
</style>