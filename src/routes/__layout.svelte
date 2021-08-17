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
	import Header from '$lib/Header/index.svelte';
	import '../app.css';

	import { page } from '$app/stores';
	export let session;
</script>

<Header />

<main>
	<slot />
</main>

<!-- <pre>
	session = {JSON.stringify(session, null, 2)}
</pre> -->

<footer />

<style>
	main {
		margin-top: 3rem;
	}

	pre {
		position: absolute;
		bottom: 1rem;
		right: 1rem;
	}
</style>
