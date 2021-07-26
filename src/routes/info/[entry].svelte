<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	import entries from './_entries.json'
	import marked from 'marked'

	let findMarkdown = function (array, inputId) {
		for (var i = array.length - 1; i >= 0; i--) {
			if (array[i].url === inputId) {
				return array[i].markdown;
			}
		}
	};
	let findTitle = function (array, inputId) {
		for (var i = array.length - 1; i >= 0; i--) {
			if (array[i].url === inputId) {
				return array[i].title;
			}
		}
	};


	export async function load({ page, fetch, session, context }) {
        const pageUrl = await page.params.entry
		const markdownContent = findMarkdown(entries, pageUrl)
		const title = findTitle(entries, pageUrl)
		console.log(markdownContent)
			return {
				props: {
                    entry: pageUrl,
					title: title,
					markdown: markdownContent,
					html: marked(markdownContent)
				}
		}
	}

</script>

<script>
	export let entry;
	export let html;
</script>

<svelte:head>
	<title>{entry}</title>
</svelte:head>


<div class="">
	<div class="">
		{@html html}
	</div>
</div>

<style>


</style>
