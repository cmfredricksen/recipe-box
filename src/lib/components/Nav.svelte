<script>
	const links = [
		{
			title: "Home",
			path: "/"
		},
		{
			title: "API",
			path: "/api/recipes"
		},
		{
			title: "Tips",
			path: "/tips"
		},
		{
			title: "Blog",
			path: "/blog"
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
