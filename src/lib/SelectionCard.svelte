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
        background-color: navy;
        border-radius: 10px;
        width: auto;
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    p {
        font-family: Inter;
        font-weight: bold;
        font-size: 1.5rem;
        color: white;
        text-align: center;
        margin: 0.5rem 0.75rem;
    }
</style>
