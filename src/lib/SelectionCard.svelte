<script>
    export let dest;
    export let title;
    export let image;
</script>

<a href="/{dest}">
    <div style="width: 14rem;" class="cardbody">
        <img src={image} alt={title} class="cardimg">
        <div>
            <h5>{title}</h5>
        </div>
    </div>
</a>

<style>
    .cardbody {
        background-color: navy;
        border-radius: 10px;
        width: 50px;
        height: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .cardimg {
        width: 100px;
        max-height: 120px;
        object-fit: contain;
        display: block;
        margin: 3rem auto 0 auto;
    }

    h5 {
        font-family: Inter;
        font-size: 1.5rem;
        color: white;
        text-align: center;
    }
</style>