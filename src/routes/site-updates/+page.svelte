<script>
    import Blurb from "$lib/Blurb.svelte";
    import PostRow from "$lib/PostRow.svelte";
</script>

<h1>Site Updates</h1>

<Blurb blurb="
    Here, I'll be posting updates about the site. This can include new stuff, changing stuff, and stuff I do want to add in the future (once I get better at this whole Svelte and web dev thing).
" />

<PostRow 
    posttitle="Hello, World!"
    postcontent="
        First post! This was supposed to come out, like, 2-3 days ago, but I got busy and distracted. Hopefully I can commit to this for the long term!

        This site's barebones right now, of course. White text on a black background. I still haven't fully decided how I'm going to style this site, but I'll get there soon. Maybe I'll browse some cool sites people have shared on the internet, or something.
        
        Stay tuned!
    "
    postfooter="October 14th, Tuesday"
/>

<style>

</style>

