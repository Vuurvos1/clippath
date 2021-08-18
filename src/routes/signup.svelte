<script>
	let password, email;

	async function signUp(e) {
		const response = await fetch('/auth/signup', {
			method: 'post',
			body: new FormData(e.target)
		});

		if (response.ok) {
			window.location = '/dashboard';
		} else {
			console.error(await response.text());
		}
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
