<script context="module">
	export const prerender = true;
</script>

<script>
	import Badge from '$lib/UI/Badge.svelte';
	import Icon from '$lib/UI/Icon.svelte';
</script>

<svelte:head>
	<title>Clippath</title>
</svelte:head>

<section>
	<h1>Clippath</h1>

	<p>lorem ipsum</p>

	<Badge>
		<Icon icon="menu" class="bar" />
	</Badge>
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
