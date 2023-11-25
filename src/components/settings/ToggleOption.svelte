<script lang="ts">

    import type { Writable } from "svelte/store"
    import { get } from "svelte/store"

    export let title: string = "Toggle Option!"
    export let description: string = "Do you know about that? A toggle option is a checkbox that can be toggled on or off."

    export let store: Writable<boolean> | undefined = undefined

    function toggleCheckbox() {
        if (store === undefined)
            return console.log(`The Store is not connected in the "${title}" toggle option.`)

        store.update((value) => !value)
        console.log(get(store))
    }
</script>

<div class="toggle-option-container">
    <section>
        <h3>{title}</h3>
        <button class="toggle-ckbx" on:click={toggleCheckbox}>
            <input type="checkbox" bind:checked={$store} />
            <span></span>
        </button>
    </section>
    <p>{description}</p>
</div>

<style lang="scss">
    .toggle-option-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;

        p {
            margin: 2px 0 0 0;
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
                }
            }
        }
    }
</style>