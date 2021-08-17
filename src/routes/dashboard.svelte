<script context="module">
	export async function load({ page, fetch, session, context }) {
		// redirect to login if no session

		// console.log('dash sesh', session);
		// session = null;

		if (!session) {
			return {
				status: 302,
				redirect: '/login'
			};
		} else {
			return { props: { session: session } };
		}
	}
</script>

<script>
	import { browser } from '$app/env';

	// import { goto } from '$app/navigation';
	// import { session } from '$app/stores';

	export let session;

	// if (browser) {
	// 	$seshStore = sess;
	// }

	// console.log('session store', $session, sess);

	// if (!$session) {
	// 	goto('/login');
	// }

	// async function logOut() {
	// 	const response = await fetch('/logout', {
	// 		method: 'post'
	// 	});

	// 	console.log(response);

	// 	$session = null;
	// }
</script>

<h1>Dashboard</h1>

<!-- on:submit|preventDefault={logOut} -->
<form action="/logout" method="get">
	<button>Log out</button>
</form>

<style lang="scss"></style>
