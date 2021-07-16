<script context="module">
	export async function load({ page, fetch, session, context }) {
		// redirect to login if no session

		console.log(session);
		// session = null;

		if (session) {
			return {};
		} else {
			return {
				status: 302,
				redirect: '/login'
			};
		}
	}
</script>

<script>
	import { goto } from '$app/navigation';
	import { session } from '$app/stores';

	if (!$session) {
		goto('/login');
	}

	async function logOut() {
		$session = null;
	}
</script>

<h1>Dashboard</h1>

<form action="/logout" method="GET" on:submit|preventDefault={logOut}>
	<button>Log out</button>
</form>

<style lang="scss"></style>
