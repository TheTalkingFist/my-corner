<script>
    import Blurb from "$lib/Blurb.svelte";
    import PostRow from "$lib/PostRow.svelte";


</script>

<h1 class="reveal">Site Updates</h1>

<div class="reveal">
    <Blurb blurb="
        Here, I'll be posting updates about the site. This can include new stuff, changing stuff, and stuff I do want to add in the future (once I get better at this whole Svelte and web dev thing).
    " />
</div>

<div class="postrows reveal">
    <PostRow
        posttitle="Nothing Burger"
        postcontent="
    Hi. I missed a post yesterday. School's starting up again, and the modules are... dull. Also, I wanted to take a sorta quick break after implementing the whole transition thing, that was a doozy.

    My Balatro official card deck came in today, and I love it! It looks pretty damn cool.

    I hope I'll be able to come up with some more new stuff for this site soon. I'd hate to leave it dead.

    Again, thanks for reading this hand's little rambles!
        "
        postfooter="October 27th, Monday"
    />

<div class="postrows reveal">
    <PostRow
        posttitle="Colors, and the Mario UI"
        postcontent="
    Hi again! I've decided on a color scheme for the site, which you can see right now! I used coolors.co to help me pick out a pleasant, yet vibrant and fun set of colors.

    I also watched Hyperplexed's 'Websites Need More Mario UI' video and youtube, and got... inspired. So, the home page now has a panning lightning pattern and some pretty cool sawtooth decorations I'd say.

    As for what comes next, I've just imported AnimeJS as of writing this post. I'm hoping I can add some really cool page-to-page transitions. Maybe even by the end of today!

    Thanks for reading this hand's little rambles!
        "
        postfooter="October 19th, Sunday"
    />

    <PostRow
        posttitle="Hello, World!"
        postcontent="
    First post! This was supposed to come out, like, 2-3 days ago, but I got busy and distracted. Hopefully I can commit to this for the long term!

    This site's barebones right now, of course. White text on a black background. I still haven't fully decided how I'm going to style this site, but I'll get there soon. Maybe I'll browse some cool sites people have shared on the internet, or something.

    Stay tuned!
        "
        postfooter="October 14th, Tuesday"
    />
</div>

<style>
    h1 {
        margin-bottom: 0.75rem;
    }

    .postrows {
        margin-top: 2rem;
    }

    @keyframes element-slide-in {
        0% {
            opacity: 0;
            transform: translateY(20vh);
        }
        100% {
            opacity: 1;
            transform: translateY(0vh);
        }
    }

    .reveal {
        transform: translateY(100vh);
        animation: slide-up 0.75s cubic-bezier(.22,1,.36,1) forwards;
    }

    .reveal:nth-of-type(1) { animation-delay: 160ms; }
    .reveal:nth-of-type(2) { animation-delay: 240ms; }
    .reveal:nth-of-type(3) { animation-delay: 320ms; }

    @keyframes slide-up {
        to {
            transform: translateY(0);
        }
    }

</style>
