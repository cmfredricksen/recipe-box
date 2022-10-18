export const fetchRecipes = async () => {
	const allRecipes = import.meta.glob("/src/routes/blog/*.md");
	const iterableRecipes = Object.entries(allRecipes);

	const recipes = await Promise.all(
		iterableRecipes.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const recipePath = path.slice(14 - 3);

			return {
				meta: metadata,
				path: recipePath
			};
		})
	);
	return recipes;
};
