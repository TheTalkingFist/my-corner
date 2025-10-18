<script>
    export let dest;
    export let title;
    export let image;
</script>

<a href="/{dest}">
    <div style="width: 14rem;" class="cardbody">
        <img src={image} alt={title} class="card-img-top" />
        <div>
            <p class="card-title">{title}</p>
        </div>
    </div>
</a>

<style>
    .cardbody {
        background-color: #CEE5F2;
        border-radius: 10px;
        width: auto;
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        overflow: hidden;
        box-shadow:
            0 5px 10px rgba(37, 44, 48, 0.2),
            inset 0 8px 12px rgba(237, 248, 255, 0.3);
        border-top: #edf8ff 2px solid;
        border-bottom: #a4c1d2 3px solid;
    }

    p {
        font-family: Inter;
        font-weight: bold;
        font-size: 1.5rem;
        color: black;
        text-align: center;
        margin: 1rem 0.75rem;
    }
</style>
