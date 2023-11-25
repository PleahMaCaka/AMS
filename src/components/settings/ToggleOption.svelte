<script lang="ts">
    import type { Writable } from "svelte/store"
    import { amsConfig } from "../../api/AmsConfig"

    export let title: string = "Toggle Option!"
    export let description: string = "Do you know about that? A toggle option is a checkbox that can be toggled on or off."

    export let store: Writable<boolean> | undefined = undefined
    export let disable: boolean = false

    async function toggleCheckbox() {
        if (store === undefined)
            return console.log(`The Store is not connected in the "${title}" toggle option.`)

        store.update((value) => !value)
        await amsConfig.save()
    }
</script>

<div class="toggle-option-container">
    <section>
        <h3>{title}</h3>
        <button class:is-disabled={disable}
                on:click={toggleCheckbox}
                disabled={disable}
        >
            <input type="checkbox" bind:checked={$store} disabled={disable} />
            <span />
        </button>
    </section>
    <p>{description}</p>
</div>

<style lang="scss">
    .is-disabled {
        opacity: 0.5 !important;
        box-shadow: 0 0 0 0.2rem rgba(255, 0, 0, 0.5) !important;
        cursor: not-allowed !important;
    }

    .toggle-option-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        margin: 0.6rem 0 0 0;

        p {
            margin: 0.2rem 0 0 0;
        }

        section {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            height: 100%;

            h3 {
                margin: 0;
                padding: 0;
                font-size: 1.3rem;
                font-weight: 550;
            }

            input {
                display: none;
            }

            button {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                width: 50px;
                height: 30px;
                border-radius: 15px;
                background-color: #d0d0d0;
                cursor: pointer;
                border: none;
                transition: background-color .13s ease-in-out;

                &:hover {
                    background-color: #d0d0d0;
                }

                &:active {
                    background-color: #c0c0c0;
                }

                &:focus {
                    outline: none;
                }

                span::after {
                    content: "";
                    display: block;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background-color: #fff;
                    transition: transform 0.2s ease-in-out;
                    transform: translateX(-10px);
                }

                input:checked + span::after {
                    transform: translateX(10px);
                    transition-duration: 0.13s;
                    background-color: #656565;
                }
            }
        }
    }
</style>