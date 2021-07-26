<script context="module">
    // import {entries} from './entries'
    import entries from './_entries.json'
</script>

<div class="">
    {#each entries as entry}
    <div class="">
        <a href="/devlog/{entry.url}">{entry.title}</a>
    </div>           
    <br>
    <br>
    {/each}
</div>

<style>
    
</style>