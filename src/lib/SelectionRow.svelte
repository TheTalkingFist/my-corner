<script>
    import SelectionCard from '$lib/SelectionCard.svelte';
</script>

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

<style>
    .sectionbody {
        margin: 0 auto;
        padding: 10px;
        display: flex;
        justify-content: center;
        flex-direction: row;
        gap: 2rem;
        width: 80%;
        background-color: lightgray;
        border-radius: 10px;
    }
</style>