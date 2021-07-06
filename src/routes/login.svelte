<script>
	import supabase from '$lib/db';

	let email, password;

	async function signIn() {
		const { user, session, error } = await supabase.auth.signIn({
			email,
			password
		});

		if (error) {
			console.error(error);
		}
	}
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<form action="" on:submit|preventDefault={signIn}>
	<input bind:value={email} type="email" />
	<input bind:value={password} type="text" />

	<button type="submit">Submit</button>
</form>

<style lang="scss"></style>
