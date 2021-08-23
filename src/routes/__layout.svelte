<script>
    import {preferences} from '$lib/scripts/localStore'
    import '../style.css';
</script>


<svelte:head>
    <title>kiteBot</title>
    <meta name="description" content="Canadian developer, word game nerd who loves running and jumping and making widgets on my computer the rest of the time.">
    <meta name="keywords" content="calgary, kelowna, canada, canadian, software, developer, kitebot, playfab + svelte, deathmetta, xbox, microsoft, word game, svelte, playfab">
</svelte:head>


<h1>kite<a href="/">Bot</a></h1>
<p><span><a href="/info">info</a> - <a href="/devlog">devlog</a> - <a href="/info/contact">contact</a> - <a href="/books">reading</a></span></p>
<slot></slot>

<style>
    span {
        font-size: smaller;
    }
    p {
        text-align: center;
    }
</style>