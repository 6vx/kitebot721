<script context="module">
    // import {entries} from './entries'
    import entries from './_entries.json'
</script>

<div class="">
    <h1>recent reading</h1>
    <hr>
    {#each entries as entry}
    <div class="midlist">
        <li><a href="/books/{entry.url}">{entry.title}</a></li>
    </div>           
    {/each}
</div>

<style>
    hr {
        width: 50%;
        margin-bottom: 20px;
    }  
</style>