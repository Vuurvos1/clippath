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
	import { browser } from '$app/env';
	import { session as seshStore } from '$app/stores';
	import supabase from '$lib/db';
	import Header from '$lib/Header/index.svelte';
	import '../app.css';

	import { page } from '$app/stores';
	export let session;

	if (browser) {
		$seshStore = supabase.auth.session();

		supabase.auth.onAuthStateChange((event, sesh) => {
			console.log('auth state change', event, sesh);
			$seshStore = sesh;
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
