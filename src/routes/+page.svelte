<script>
    import { base } from "$app/paths";
    import SelectionCard from "$lib/SelectionCard.svelte";
    import SelectionRow from "$lib/SelectionRow.svelte";
</script>

<div class="header">
    <h1>The Talking Fist's Corner of the Internet</h1>

    <div class="subtitle">
        <p>You've found me! This is my little place on the web. Here, you'll find me documenting various experiences in life. The firsts, the news, the experiments and the mundane.</p>
    </div>
</div>

<SelectionRow />

<footer class="footer">
    <p>© 2025 The Talking Fist</p>
</footer>


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
        margin-bottom: 2rem;
        font-weight: bold;
    }

    h1 {
        margin-top: 2rem;
        margin-bottom: 1.5rem;
        text-align: center;
        color: white;
        font-size: 3em;
    }

    .header {
        /* the actual paint */
        background-color: #5B8C5A;
        color: white;
        text-align: center;

        /* sizing and spacing */
        height: auto;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }


    .subtitle {
        width: 50%;
        margin: auto;
        margin-top: 10px;
        margin-bottom: 20px;
    }

    .footer {
        text-align: center;
        padding: 1rem;
        color: white;
        font-family: Inter;
        height: 80px;
    }

</style>
