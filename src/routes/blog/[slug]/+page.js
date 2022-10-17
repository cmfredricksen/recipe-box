export async function load({ params }) {
	const recipe = await import(`../${params.slug}.md`);
	const { title, date } = recipe.metadata;
	const Content = recipe.default;

	return {
		title,
		date,
		Content
	};
}
