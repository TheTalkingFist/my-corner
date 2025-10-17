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
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        margin: 0;
        padding: 0;
    }

    .modal-backdrop {
        background-color: grey;
        padding: 1.5rem;
        border-radius: 15px;
        max-width: 80%;
        max-height: 80%;
        overflow-y: auto;
        box-sizing: border-box;
        position: relative;
        margin: 0;
    }

    .close-button {
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        background-color: navy;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
</style>
