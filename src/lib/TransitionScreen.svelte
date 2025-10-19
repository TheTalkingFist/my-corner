<script>
    // @ts-nocheck
    import { animate } from 'animejs';

    let { onhalfway, ondone } = $props();
    let el = null;

    /** Cover-first, then swap, then sweep */
    export async function run(options = {}) {
    const {
        coverEase = 'outIn(2.66)',   // phase 1 easing
        sweepEase = 'inCubic',    // phase 2 easing (gentler than inQuart)
        coverMs = 1000,            // phase 1 duration
        sweepMs = 400,            // phase 2 duration
        holdMs = 0               // tiny pause once fully covered
    } = options ?? {};

    if (!el) return;

    // Always start below the viewport
    el.style.transform = 'translateY(100vh)';

    // Phase 1: raise until the overlay fully covers (top edge at 0vh)
    await animate(el, {
        transform: ['translateY(100vh)', 'translateY(-10vh)'],
        duration: coverMs,
        ease: coverEase
    });

    // Optional micro-hold to emphasize the "hesitation"
    if (holdMs > 0) {
        await animate(el, { duration: holdMs, ease: 'linear' });
    }

    // Swap routes now — overlay is 100% covering, so the change is invisible
    if (typeof onhalfway === 'function') onhalfway();

    // Phase 2: finish the sweep off the top (element height is 150vh)
    await animate(el, {
        transform: ['translateY(0vh)', 'translateY(-150vh)'],
        duration: sweepMs,
        ease: sweepEase
    });

    if (typeof ondone === 'function') ondone();
    }


</script>

<div id="transition-screen" bind:this={el} aria-hidden="true">
</div>

<style>

    :root {
        --tooth-h: 14px;
    }

    #transition-screen {
        position: fixed;
        inset: 0;
        background: var(--pink);
        transform: translateY(150%);
        height: 150vh;
        z-index: 9999;
        will-change: transform;

        clip-path: polygon(
            0% var(--tooth-h),
            2.5% 0%, 5% var(--tooth-h),
            7.5% 0%, 10% var(--tooth-h),
            12.5% 0%, 15% var(--tooth-h),
            17.5% 0%, 20% var(--tooth-h),
            22.5% 0%, 25% var(--tooth-h),
            27.5% 0%, 30% var(--tooth-h),
            32.5% 0%, 35% var(--tooth-h),
            37.5% 0%, 40% var(--tooth-h),
            42.5% 0%, 45% var(--tooth-h),
            47.5% 0%, 50% var(--tooth-h),
            52.5% 0%, 55% var(--tooth-h),
            57.5% 0%, 60% var(--tooth-h),
            62.5% 0%, 65% var(--tooth-h),
            67.5% 0%, 70% var(--tooth-h),
            72.5% 0%, 75% var(--tooth-h),
            77.5% 0%, 80% var(--tooth-h),
            82.5% 0%, 85% var(--tooth-h),
            87.5% 0%, 90% var(--tooth-h),
            92.5% 0%, 95% var(--tooth-h),
            97.5% 0%, 100% var(--tooth-h),
            100% 100%, 0% 100%
        );
    }
</style>
