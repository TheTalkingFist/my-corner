<script>
    export let header="";
    export let text="";
</script>

<div class="textbox">
    <h2>{header}</h2>
    <p>{text}</p>
</div>

<style>
    .textbox {
        background-color: lightgray;
        border-radius: 10px;
        padding: 1rem;
        margin: 0 auto;
        max-width: 60%;
        display: flex;
        flex-direction: column;
    }

    h2 {
        font-family: 'Inter', sans-serif;
        font-size: 2rem;
        margin: 0 0 0.5rem 0;
        color: black;
    }

    p {
        font-family: 'Inter', sans-serif;
        font-size: 1.2rem;
        color: black;
        white-space: pre-wrap;
    }
</style>