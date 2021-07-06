<script>
	import supabase from '$lib/db';
	// import { session } from '$app/stores';

	let password, email;

	async function signUp() {
		const { user, session: sesh, error } = await supabase.auth.signUp({
			email,
			password
		});
		if (error) {
			console.error(error);
		}
		console.log(user, sesh, error);

		// $session = sesh;
	}
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

<form action="" on:submit|preventDefault={signUp}>
	<input bind:value={email} type="email" />
	<input bind:value={password} type="text" />

	<button type="submit">Submit</button>
</form>

<style lang="scss"></style>
