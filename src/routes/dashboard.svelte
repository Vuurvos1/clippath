<script context="module">
	export async function load({ page, fetch, session, context }) {
		// redirect to login if no session
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
	import Sidebar from '$lib/Components/Sidebar.svelte';

	export let session;
</script>

<h1>Dashboard</h1>

<Sidebar />

<!-- on:submit|preventDefault={logOut} -->
<form action="/auth/logout" method="get">
	<button>Log out</button>
</form>

<style lang="scss"></style>
