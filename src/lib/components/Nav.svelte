<script>
	const links = [
		{
			title: "Home",
			path: "/"
		},
		{
			title: "Recipes",
			path: "/recipes"
		},
		{
			title: "Tips",
			path: "/tips"
		}
	];
</script>

<nav>
	{#each links as { title, path }}
		<a href={path}>{title}</a>
	{/each}
</nav>

<style>
	a {
		margin: 0 1rem;
	}
</style>
