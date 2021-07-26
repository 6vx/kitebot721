/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
 export async function get({ params }) {
	// the `title` parameter is available because this file
	// is called [title].json.js
	const { title } = params;

	const article = title;

	if (article) {
		return {
			body: {
				article
			}
		};
	}
}