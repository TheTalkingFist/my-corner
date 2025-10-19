<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

    import "bootstrap/dist/css/bootstrap.min.css";
	import '../app.css';

    import { goto } from '$app/navigation';
    import TransitionScreen from '$lib/TransitionScreen.svelte';
    import { setPipeNavHandler } from '$lib/request_pipe.js';

    let { children } = $props();

    let tRef;
    let pendingHref = '';
    let footerEl: HTMLElement | null = null;


    function startPipeTo(href) {
        pendingHref = href;
        tRef.run({ duration: 1600, easing: 'easeOutInCirc' });
    }

    // When the overlay is ~halfway up, switch routes
    function halfway() {
        if (pendingHref) {
        const href = pendingHref;
        pendingHref = '';
        goto(href);
        }
    }

    function done() {
        // optional: trigger page enter animation here
    }

  // Register our start function so pages can call it
  // Svelte 5: this runs when the layout script loads
  setPipeNavHandler(startPipeTo);

</script>


<TransitionScreen bind:this={tRef} onhalfway={halfway} ondone={done} />

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
