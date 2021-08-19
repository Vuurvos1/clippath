<script context="module">
	export async function load({ page, fetch, session, context }) {
		return {
			props: {
				session
			}
		};
	}
</script>

<script>
	import '../app.css';

	import { page } from '$app/stores';
	export let session;
</script>

<svelte:head>
	<title>Clippath</title>
</svelte:head>

<slot />

<!-- <pre>
	session = {JSON.stringify(session, null, 2)}
</pre> -->
<style>
	pre {
		position: absolute;
		bottom: 1rem;
		right: 1rem;
	}
</style>
