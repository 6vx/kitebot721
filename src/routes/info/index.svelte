<script context="module">
    // import {entries} from './entries'
    import entries from './_entries.json'
</script>

<div class="">
    {#each entries as entry}
    <div class="">
        <a href="/info/{entry.url}">{entry.title}</a>
    </div>
    {/each}
</div>

<style>
    
</style>