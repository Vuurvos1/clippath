<script>
	import { browser } from '$app/env';
	import { session } from '$app/stores';
	import supabase from '$lib/db';
	import Header from '$lib/Header/index.svelte';
	import '../app.css';

	if (browser) {
		$session = supabase.auth.session();

		supabase.auth.onAuthStateChange((event, sesh) => {
			console.log(event, session);
			$session = sesh;
		});
	}
</script>

<Header />

<main>
	<slot />
</main>

<footer />

<style>
</style>
