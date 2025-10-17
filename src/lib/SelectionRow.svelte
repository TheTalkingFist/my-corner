<script>
    import SelectionCard from '$lib/SelectionCard.svelte';
</script>

<div class="sawtooth-top">
    <div class="sawtooth-bottom">
        <div class="sectionbody">
            <SelectionCard
                dest="about-me"
                title="About Me"
                image="/images/placeholder.svg"
            />

            <SelectionCard
                dest="about-site"
                title="About This Site"
                image="/images/placeholder.svg"
            />

            <SelectionCard
                dest="site-updates"
                title="Site Updates"
                image="/images/placeholder.svg"
            />
        </div>
    </div>
</div>

<style>
    .sectionbody {
        margin: 0 auto;
        padding: 10px;
        padding-top: 75px;
        display: flex;
        justify-content: center;
        flex-direction: row;
        gap: 2rem;
        width: 100%;
        min-height: 450px;

        border-radius: 10px;

        position: relative;
        z-index: 2;

        background-image:
            url('/images/lightning-bg-white-alpha.png'),
            radial-gradient(#2E70C2, #3C91E6);
        background-size: 10%, cover;
        background-repeat: repeat, no-repeat;
        background-position: center, center;
        background-blend-mode: normal, normal;
        overflow: hidden;

        animation-name: pan-lightning;
        animation-duration: 120s;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }

    .sawtooth-bottom {
        --tooth-h: 14px;      /* tooth height; raise/lower as you like */
        position: relative;
        overflow: hidden;     /* keep contents neatly inside the shape */

        /* bottom-only zig-zag (narrow teeth; 2.5% step) */
        clip-path: polygon(
            0% 0%, 100% 0%, 100% 100%,
            97.5% calc(100% - var(--tooth-h)), 95% 100%,
            92.5% calc(100% - var(--tooth-h)), 90% 100%,
            87.5% calc(100% - var(--tooth-h)), 85% 100%,
            82.5% calc(100% - var(--tooth-h)), 80% 100%,
            77.5% calc(100% - var(--tooth-h)), 75% 100%,
            72.5% calc(100% - var(--tooth-h)), 70% 100%,
            67.5% calc(100% - var(--tooth-h)), 65% 100%,
            62.5% calc(100% - var(--tooth-h)), 60% 100%,
            57.5% calc(100% - var(--tooth-h)), 55% 100%,
            52.5% calc(100% - var(--tooth-h)), 50% 100%,
            47.5% calc(100% - var(--tooth-h)), 45% 100%,
            42.5% calc(100% - var(--tooth-h)), 40% 100%,
            37.5% calc(100% - var(--tooth-h)), 35% 100%,
            32.5% calc(100% - var(--tooth-h)), 30% 100%,
            27.5% calc(100% - var(--tooth-h)), 25% 100%,
            22.5% calc(100% - var(--tooth-h)), 20% 100%,
            17.5% calc(100% - var(--tooth-h)), 15% 100%,
            12.5% calc(100% - var(--tooth-h)), 10% 100%,
            7.5%  calc(100% - var(--tooth-h)), 5% 100%,
            2.5%  calc(100% - var(--tooth-h)), 0% 100%,
            0% 0%
        );
    }

    @keyframes pan-lightning {
        from {
            background-position: 0% 0%, center;
        }
        to {
            background-position: 100% 0%, center;
        }
    }


    /* FIXME: The sawtooth looks cool, but a shadow would look great. The shadow implemented here doesn't work at all */
    /* TODO: Implement panning animation for lightning bolts */

</style>
