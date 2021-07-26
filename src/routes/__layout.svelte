<script>
    import {preferences} from '$lib/scripts/localStore'
    import '../style.css';
</script>

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