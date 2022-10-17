export const load = async ({ fetch }) => {
	const res = await fetch("/api/recipes");
	const recipes = await res.json();

	return {
		recipes
	};
};
