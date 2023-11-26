<script>
    export let title = "Not set"
    export let subtitle = "Not set"
</script>

<div class="page-header">
    <h1 class=" page-title">{title}</h1>
    <p class="page-subtitle">{subtitle}</p>
    <hr />
</div>

<style lang="scss">
    @import "../../scss/anim/appear.scss";

    .page-header {
        text-align: center;

        h1 {
            margin: 0;
            font-size: 1.7rem;
        }

        p {
            margin: .5rem 0 1rem 0;
            font-size: 1rem;
            filter: opacity(0.7);
            font-style: italic;
        }

        hr {
            width: 100%;
            @include expand-width(80%, 2s);
        }

        @media (min-width: 768px) {
            h1 {
                font-size: 2.5rem;
            }

            p {
                font-size: 1.2rem;
            }
        }
    }
</style>