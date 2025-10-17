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
