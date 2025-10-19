<script>
    let { dest = '#', title = '', body = '', onclick } = $props();

</script>

<a href={dest} onclick={onclick}>
    <div style="width: 14rem;" class="cardbody blue-card-color">
        <div>
            <p class="card-title">{title}</p>
            <p class="card-body" style="font-weight: normal; font-size: 1.25rem;">{body}</p>
        </div>
    </div>
</a>

<style>
    .cardbody {
        background-color: #CEE5F2;
        border-radius: 10px;
        width: auto;
        height: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        overflow: hidden;

    }

    p {
        font-family: Inter;
        font-weight: bold;
        font-size: 1.5rem;
        color: black;
        text-align: center;
        margin: 1rem 0.75rem;
    }

    @keyframes hover-grow {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(1.05);
        }
    }

    @keyframes hover-shrink {
        0% {
            transform: scale(1.05);
        }
        100% {
            transform: scale(1);
        }
    }

    .cardbody:hover {
        animation: hover-grow 0.3s forwards;
        cursor: pointer;
    }

    .cardbody:not(:hover) {
        animation: hover-shrink 0.3s forwards;
    }

</style>
