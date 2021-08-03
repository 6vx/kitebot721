<script context="module">
    // import {entries} from './entries'
    import entries from './_entries.json'
</script>

<div class="">
    <h1>info</h1>
    <hr>
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
    div {
        text-align: center;
        list-style-type: none;
    }
    hr {
    width: 50%;
    margin-bottom: 20px;
}

</style>