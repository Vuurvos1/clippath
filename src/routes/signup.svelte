<script>
	import supabase from '$lib/db';

	let password, email;

	async function signUp(e) {
		const response = await fetch('/register', {
			method: 'post',
			body: new FormData(e.target)
		});

		if (response.ok) {
			window.location = '/dashboard';
		} else {
			console.error(await response.text());
		}

		// const { user, session: sesh, error } = await supabase.auth.signUp({
		// 	email,
		// 	password
		// });
		// if (error) {
		// 	console.error(error);
		// }
		// console.log(user, sesh, error);
	}
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

<h1>Sign up</h1>

<form action="" on:submit|preventDefault={signUp}>
	<input bind:value={email} name="email" type="email" />
	<input bind:value={password} name="password" type="password" />

	<button type="submit">Submit</button>
</form>

<style lang="scss"></style>
