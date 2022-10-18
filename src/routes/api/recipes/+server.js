import { fetchRecipes } from "$lib/utils/fetchRecipes";
import { json } from "@sveltejs/kit";

export const GET = async () => {
	const recipes = await fetchRecipes();

	return json(recipes);
};
