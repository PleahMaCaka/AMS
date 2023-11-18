<script lang="ts">
    import type { ServerLabel } from "../../../types/ServerLabel"

    export let icon = ""
    export let title = "Not set"
    export let label: ServerLabel = "None"
</script>

<a href="/create/mode/simple" class="no-deco">
    <div class="serv-type-btn center-flex-column">
        <div class="serv-type-content center-flex-column">
            <img alt="icon" src={icon} />
            <h3>{title}</h3>
        </div>
        <p class:hidden={label === "None"}
           class:label-recommended={label === "Recommended"}
           class:label-warning={label === "Warning"}
        >{label}</p>
    </div>
</a>

<style lang="scss">
    @import "../../../scss/centered.scss";
    @import "../../../scss/utils.scss";

    $serv-type-size: 130px;

    .serv-type-btn {
        width: 115px;
        height: 170px;
        margin: .5rem;

        * {
            margin: 0;
        }

        .serv-type-content {
            background-color: #83b1f7;
            //background: linear-gradient(45deg, #83b1f7, #4e8cee);
            box-shadow: 0 0 5px 0 rgba(0, 0, 0, .5);

            width: 100%;
            height: 100%;

            border-radius: 10px;
            margin-bottom: .5rem;

            transition-duration: .13s;
            cursor: pointer;

            img {
                width: 80px;
                height: 80px;
                filter: brightness(.85) drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
                margin-top: .5rem;
                margin-bottom: .2rem;
            }

            h3 {
                color: #fdfdfd;
                font-size: 1.2rem;
                font-weight: 300;
            }

            &:hover {
                filter: brightness(.9);
            }
        }

        p {
            color: #fdfdfd;
            box-shadow: 0 0 5px 0 rgba(0, 0, 0, .5);
            font-size: 1rem;
            font-weight: 300;
            border-radius: 5px;
            padding: .1rem .4rem;
        }
    }

    .label-recommended {
        background-color: hotpink;
    }

    .label-warning {
        background-color: #f7b183;
    }
</style>
