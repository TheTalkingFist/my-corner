<script>
    export let show = false;
    export let onClose = () => {};
</script>

{#if show}
    <div class="overlay" on:click={onClose}>
        <div class="modal-backdrop" on:click|stopPropagation>
            <slot></slot>
            <button class="close-button" on:click={onClose}>Close</button>
        </div>
    </div>
{/if}



<style>
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        margin: 0;
        padding: 0;
    }

    .modal-backdrop {
        background-color: #CEE5F2;
        padding: 1.5rem;
        border-radius: 15px;
        max-width: 80%;
        max-height: 80%;
        overflow-y: auto;
        box-sizing: border-box;
        position: relative;
        margin: 0;
        box-shadow:
            0 5px 10px rgba(37, 44, 48, 0.2),
            inset 0 8px 12px rgba(237, 248, 255, 0.3);
        border-top: #edf8ff 2px solid;
        border-bottom: #a4c1d2 3px solid;
    }

    .close-button {
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        background-color: #5B8C5A;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    p {
        color: black;
    }
</style>
