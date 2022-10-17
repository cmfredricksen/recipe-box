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
					<p>#{tag}</p>
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

	a {
		margin: 1rem 0;
	}

	.recipe-link {
		margin: 1rem 0;
	}

	.tag-box {
		display: flex;
	}

	p {
		margin-right: 1rem;
	}
</style>
