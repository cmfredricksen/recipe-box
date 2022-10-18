export const load = async ({ fetch, params }) => {
	const { tag } = params;
	const response = await fetch(`/api/recipes`);
	const allRecipes = await response.json();

	const recipes = allRecipes.filter((recipe) => recipe.meta.tags.includes(tag));

	return {
		tag,
		recipes
	};
};
