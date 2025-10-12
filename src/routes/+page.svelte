<script>
    import { base } from "$app/paths";
    import SelectionCard from "$lib/SelectionCard.svelte";
    import SelectionRow from "$lib/SelectionRow.svelte";
</script>


<h1 style="font-family: Inter">The Talking Fist's Corner of the Internet</h1>

<div class="subtitle">
    <p>You've found me! This is my little place on the web. Here, you'll find me documenting various experiences in life. The firsts, the news, the experiments and the mundane.</p>
</div>

<SelectionRow />

<style>
    @font-face {
        font-family: Inter;
        font-style: normal;
        src: url('/fonts/Inter-VariableFont_opsz,wght.ttf');
    }

    p {
        text-align: center;
        color: white;
        font-size: 1.5em;
        font-family: Inter;
    }

    h1 {
        text-align: center;
        color: white;
        font-size: 3em;
    }

    :global(body) {
        background-color: black;
    }

    .subtitle {
        background-color: black;
        width: 50%;
        margin: auto;
        margin-top: 20px;
    }
</style>