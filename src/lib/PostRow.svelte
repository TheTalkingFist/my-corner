<script>
    export let posttitle = "";
    export let posttrunk = "";
    export let postfooter = "";
    export let postcontent = "";
    import PostModal from "$lib/PostModal.svelte";
    let showModal = false;

    // Auto-generate trunk from postcontent if posttrunk is empty
    $: displayTrunk = posttrunk || (postcontent.length > 130 ? postcontent.substring(0, 130).trim() + "..." : postcontent);
</script>


<div class="postcard" on:click={() => (showModal = true)} on:keydown={(e) => e.key === 'Enter' && (showModal = true)} role="button" tabindex="0">
    <h2 class="posttitle">
        {posttitle}
    </h2>

    <p class="posttrunk">
        {displayTrunk}
    </p>

    <div class="postdate">
        <p style="color:black">{postfooter}</p>
    </div>
</div>

<PostModal show={showModal} onClose={() => (showModal = false)}>
    <h2>{posttitle}</h2>
    <p class="postcontent">{postcontent}</p>
    <p class="postfooter"><i>{postfooter}</i></p>
</PostModal>


<style>
    .postcard {
        background-color: #CEE5F2;
        border-radius: 10px;
        padding: 1rem;
        margin: 0 auto;
        margin-bottom: 20px;
        max-width: 60%;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        box-shadow:
            0 5px 10px rgba(37, 44, 48, 0.2),
            inset 0 8px 12px rgba(237, 248, 255, 0.3);
        border-top: #edf8ff 2px solid;
        border-bottom: #a4c1d2 3px solid;
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

    .posttrunk {
        font-family: 'Inter', sans-serif;
        font-size: 1.2rem;
        margin: 0 0 1rem 0;
        color: black;
        white-space: pre-wrap;
    }

    .postcontent{
        width: 80%;
        margin: 0 auto;
        white-space: pre-wrap;
        color: black;
    }

    .postfooter {
        font-size: 1.25rem;
        text-align: right;
        margin-top: 1rem;
        margin-bottom: 0.75rem;
    }

    p, h2 {
        color: black;
    }
</style>
