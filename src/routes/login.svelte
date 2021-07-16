<script>
	import supabase from '$lib/db';

	let email, password;

	async function signIn(e) {
		// const response = await fetch('/signin', {
		// 	method: 'post',
		// 	body: new FormData(e.target)
		// });

		// if (response.ok) {
		// 	window.location = '/dashboard';
		// } else {
		// 	console.error(await response.text());
		// }

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

<h1>Login</h1>

<form action="" on:submit|preventDefault={signIn}>
	<input bind:value={email} name="email" type="email" />
	<input bind:value={password} name="password" type="password" />

	<button type="submit">Submit</button>
</form>

<style lang="scss"></style>
