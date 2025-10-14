<script>
    export let posttitle = "";
    export let posttrunk = "";
    export let postfooter = "";
    export let postcontent = "";
    import PostModal from "$lib/PostModal.svelte";
    let showModal = false;
</script>


<div class="postcard" on:click={() => (showModal = true)}>
    <h2 class="posttitle">
        {posttitle}
    </h2>

    <p class="postconcat">
        {posttrunk}
    </p>
    
    <div class="postdate">
        <p style="color:black">{postfooter}</p>
    </div>
</div>

<PostModal show={showModal} onClose={() => (showModal = false)}>
    <h2>{posttitle}</h2>
    <p>{postcontent}</p>
    <p><i>{postfooter}</i></p>
</PostModal>


<style>
    .postcard {
        background-color: lightgray;
        border-radius: 10px;
        padding: 1rem;
        margin: 0 auto;
        max-width: 60%;
        display: flex;
        flex-direction: column;
        cursor: pointer;
    }

    .postdate {
        display: flex;
        justify-content: flex-end;
        font-size: 0.7rem;
        color: black;
    }

    .posttitle {
        font-family: 'Inter', sans-serif;
        font-size: 2rem;
        margin: 0 0 0.5rem 0;
        color: black;
    }
</style>