<script context="module">
	export const prerender = true;
</script>

<script>
	import Header from '$lib/Header/Header.svelte';
</script>

<svelte:head>
	<title>Clippath</title>
</svelte:head>

<section>
	<Header />

	<h1>Clippath</h1>

	<p>lorem ipsum</p>
</section>

<style lang="scss">
	section {
		h1 {
			color: darkorchid;
		}

		p {
			color: hotpink;
		}
	}
</style>
