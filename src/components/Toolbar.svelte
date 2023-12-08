<script lang="ts">
    import { appWindow } from "@tauri-apps/api/window"

    const onMinimize = () => {
        appWindow.minimize()
    }

    // const onMaximize = () => {
    //     appWindow.isMaximized().then((isMaximized) => {
    //         if (isMaximized) {
    //             appWindow.unmaximize()
    //         } else {
    //             appWindow.maximize()
    //         }
    //     })
    // }

    const onClose = () => {
        appWindow.close()
    }
</script>

<div class="tb-wrap" data-tauri-drag-region>
    <div class="titlebar" data-tauri-drag-region>
        <img alt="Logo" data-tauri-drag-region src="/favicon.png" />
        <p data-tauri-drag-region>{document.title}</p>
        <div class="tb-controls">
            <button on:click={onMinimize}>-</button>
            <button on:click={onClose}>x</button>
        </div>
    </div>
</div>

<style lang="scss">
    @import "../scss/vars/panel.scss";

    $color: #83b1f7;

    $tb-height: 2rem;
    $tb-item-height: $tb-height - 0.3rem;

    $tb-item-padding: 0.7rem;

    .tb-wrap {
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }

    .titlebar {
        background-color: $color;
        height: $tb-height;

        position: fixed;
        width: $panel-width;

        display: flex;
        align-items: center;
        justify-content: space-between;

        user-select: none;

        border-radius: 10px;

        p {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            font-weight: bold;
            color: #fdfdfd;
        }

        img {
            height: $tb-item-height;
            width: $tb-item-height;
            padding-left: $tb-item-padding;
        }

        button {
            height: $tb-item-height;
            width: $tb-item-height;
            border: none;
            background-color: transparent;
            color: white;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            align-items: center;

            &:hover {
                background-color: rgba(0, 0, 0, 0.1);
                transition: background-color 0.13s ease-in-out;
            }
        }

        .tb-controls {
            padding-right: $tb-item-padding;
        }

    }
</style>