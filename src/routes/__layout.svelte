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
	// import { browser } from '$app/env';
	// import { session as seshStore } from '$app/stores';
	// import supabase from '$lib/db';
	import Header from '$lib/Header/index.svelte';
	import '../app.css';

	import { page } from '$app/stores';
	export let session;

	// import { session } from '$app/stores';
	// import { supabase } from '$lib/supabaseClient';
	// import { setAuthCookie, unsetAuthCookie } from '$lib/utils/session';

	// // this should run on every page so I put this code in my `__layout.svelte` file
	// supabase.auth.onAuthStateChange(async (event, _session) => {
	// 	if (event !== 'SIGNED_OUT') {
	// 		session.set({ user: _session.user });
	// 		await setAuthCookie(_session);
	// 	} else {
	// 		session.set({ user: { guest: true } });
	// 		await unsetAuthCookie();
	// 	}
	// });

	// if (browser) {
	// 	$seshStore = supabase.auth.session();

	// 	supabase.auth.onAuthStateChange((event, sesh) => {
	// 		console.log('auth state change', event, sesh);
	// 		$seshStore = sesh;
	// 	});
	// }
</script>

<Header />

<main>
	<slot />
</main>

<pre>
	session = {JSON.stringify(session, null, 2)}
</pre>

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
