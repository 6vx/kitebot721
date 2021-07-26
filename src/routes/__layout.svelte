<script>
    import {preferences} from '$lib/scripts/localStore'
    import '../style.css';
</script>


<svelte:head>
    <title>kiteBot</title>
</svelte:head>


<p>kite<a href="/">Bot</a>/tim<a href="/info/about">Godin</a></p>
<p><span><a href="/info">info</a> <a href="/devlog">devlog</a></span></p>
<br>
<slot></slot>

<style>
    span {
        font-size: smaller;
    }
    p {
        text-align: center;
    }
</style>