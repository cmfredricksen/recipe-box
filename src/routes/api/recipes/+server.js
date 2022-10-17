import { fetchRecipes } from "$lib/utils";
import { json } from "@sveltejs/kit";

export const GET = async () => {
	const recipes = await fetchRecipes();

	return json(recipes);
};
