<script>
    import { base } from "$app/paths";
    import SelectionCard from "$lib/SelectionCard.svelte";
    import SelectionRow from "$lib/SelectionRow.svelte";

    import { onMount, onDestroy } from 'svelte';
    import { animate } from 'animejs';
    import { setFooterAnimHandler } from '$lib/request_pipe.js';

    let footerInner; // we'll animate this element
    async function pulseFooterOffscreen({
        coverMs = 900,        // match your overlay cover
        sweepMs = 50,        // match your overlay sweep
        holdMs  = 0,         // same hesitate pause (optional)
        coverEase = 'outIn(2.66)',
        sweepEase = 'inCubic',
        liftAtCoverVh = 60,    // how far it moves during the cover (visible lift)
        offscreenVh  = 110    // final distance upward so it exits view
    } = {}) {
        if (!footerInner) return;
        footerInner.style.willChange = 'transform';
        try {
        // Phase 1: small lift to sync with overlay cover

        await new Promise(r => setTimeout(r, 50));

        await animate(footerInner, {
            transform: ['translateY(0vh)', `translateY(-${liftAtCoverVh}vh)`],
            duration: coverMs,
            ease: coverEase
        });

        // optional hesitation
        if (holdMs > 0)
            await animate(footerInner, { duration: holdMs, ease: 'linear' });

        // Phase 2: continue upwards off-screen (no settle)
        await animate(footerInner, {
            transform: [`translateY(-${liftAtCoverVh}vh)`, `translateY(-${offscreenVh}vh)`],
            duration: sweepMs,
            ease: sweepEase
        });
        } finally {
        footerInner.style.willChange = '';
        }
    }

    onMount(() => setFooterAnimHandler(pulseFooterOffscreen));
    onDestroy(() => setFooterAnimHandler(null));

</script>

<div class="header">
    <h1>The Talking Fist's Corner of the Internet</h1>

    <div class="subtitle">
        <p>You've found me! This is my little place on the web. Here, you'll find me documenting various experiences in life. The firsts, the news, the experiments and the mundane.</p>
    </div>
</div>

<SelectionRow />

<footer class="footer">
  <div class="footer-inner" bind:this={footerInner}>
    <p>© 2025 The Talking Fist</p>
  </div>
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
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        position: fixed;
        z-index: 10000;
    }

    .footer-inner {
        transform: translateY(0);  /* AnimeJS animates this property */
        will-change: transform;
        padding: 12px 16px;
    }


</style>
