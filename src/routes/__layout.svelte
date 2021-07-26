<script>
    import {preferences} from '$lib/scripts/localStore'
    import '../style.css';
</script>

<p>kite<a href="/">bot</a> - <span><a href="/info">info</a> <a href="/devlog">devlog</a></span></p>
<br>
<slot></slot>

<style>
    span {
        font-size: smaller;
    }
</style>