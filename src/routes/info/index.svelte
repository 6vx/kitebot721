<script context="module">
    // import {entries} from './entries'
    import entries from './_entries.json'
</script>

<div class="">
    {#each entries as entry}
    <div class="">
        <li><a href="/info/{entry.url}">{entry.title}</a></li>
    </div>
    {/each}
</div>

<style>
    li {
        padding: 5px 5px 5px 5px;
    }

</style>