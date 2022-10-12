<script>
	import "../global.css";
	import Header from "$lib/components/Header.svelte";
</script>

<Header />
<div class="wrapper">
	<slot />
</div>

<style>
	.wrapper {
		width: 70%;
		margin: 0 auto;
		padding: 1rem;
		background-color: var(--clr-grey);
	}
</style>
