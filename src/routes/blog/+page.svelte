<script>
	export let data;
</script>

<h1>Recipes</h1>

<div class="recipe-list">
	{#each data.recipes as recipe}
		<div class="recipe-link">
			<a href={recipe.path.replace(".md", "")}>{recipe.meta.title}</a>
			<div class="tag-box">
				{#each recipe.meta.tags as tag}
					<a href={`/src/routes/blog/${tag}`}>#{tag}</a>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style>
	.recipe-list {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: baseline;
	}

	.recipe-link {
		margin-top: 1.5rem;
	}

	.tag-box {
		display: flex;
	}

	.tag-box a {
		font-size: 0.9rem;
		margin-right: 1rem;
		color: var(--clr-medium);
	}

	.tag-box a:hover {
		color: var(--clr-light);
	}
</style>
