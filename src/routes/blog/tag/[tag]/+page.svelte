<script>
	export let data;
	const { recipes, meta } = data;
	console.log(recipes);
	console.log();
	console.log();
</script>

<h1>{data.tag}</h1>

{#each recipes as recipe}
	<ul>
		<li>
			<a href={recipe.path.replace(".md", "")}>
				{recipe.meta.title}
			</a>
		</li>
	</ul>
{/each}
