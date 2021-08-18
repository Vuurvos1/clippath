<script context="module">
	export const prerender = true;
</script>

<script>
	import Icon from '$lib/Icon/index.svelte';
</script>

<svelte:head>
	<title>Clippath</title>
</svelte:head>

<section>
	<h1>Clippath</h1>

	<p>lorem ipsum</p>

	<Icon icon="menu" />
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
