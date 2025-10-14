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
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .modal-backdrop {
        background-color: darkgrey;
        padding: 1.5rem;
        border-radius: 10%;
        margin: 0 auto;
        max-width: 70%;
    }

    .close-button {
        margin-top: 1rem;
        margin: 0 auto;
        padding: 0.5rem 1rem;
        background-color: navy;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
</style>