<script>
	import Header from '$lib/Header/Header.svelte';
	import TextInput from '$lib/UI/TextInput/index.svelte';

	let email, password;
	let visible = false;

	async function signIn(e) {
		console.log(new FormData(e.target));

		const response = await fetch('/auth/signin', {
			method: 'post',
			body: new FormData(e.target)
		});

		if (response.ok) {
			window.location = '/dashboard';
		} else {
			console.error(await response.text());
		}
	}

	function toggle() {
		document.querySelector('#password').type = visible ? 'password' : 'text';
	}
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<Header />

<main>
	<div class="formContainer">
		<h1>Login</h1>

		<form action="" on:submit|preventDefault={signIn}>
			<input
				class="passwordInput"
				placeholder="email"
				type="email"
				name="email"
				bind:value={email}
			/>

			<!-- <TextInput label="Email" bind:value={email} name="mail" type="email" /> -->

			<label for="" />
			<div class="passwordInput">
				<input
					placeholder="password"
					bind:value={password}
					name="password"
					id="password"
					type="password"
				/>

				<label for="hide" on:click={toggle}>
					<span class="icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
						>
							{#if visible}
								<path
									d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22"
								/>
							{:else}
								<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
								<circle cx="12" cy="12" r="3" />
							{/if}
						</svg>
					</span>
				</label>
				<input type="checkbox" id="hide" bind:checked={visible} />
			</div>

			<p class="forgot">Forgot password?</p>

			<button type="submit">Submit</button>
		</form>

		<p>New here? <a href="/signup">Sign up</a></p>
	</div>
</main>

<style lang="scss">
	main {
		background-color: #eeeeee;
		height: 100vh;

		display: grid;
		place-items: center;

		.formContainer {
			width: 24rem;
			max-width: 24rem;

			padding: 3rem 2rem;

			background-color: hsl(var(--white));
			border-radius: 0.5rem;
			box-shadow: 0px 0px 12px hsla(var(--text) 0.25);

			h1 {
				font-size: 2.25rem;
				margin-bottom: 2ch;
			}

			p {
				font-size: 0.875rem;
				font-weight: 600;

				color: hsla(var(--text) 0.6);

				text-align: center;

				a {
					color: hsl(var(--text));
					text-decoration: none;
				}
			}

			.icon {
				display: flex;
				flex-direction: row;
				align-items: center;
			}

			#hide {
				display: none;
			}

			// input {
			// 	width: 100%;
			// 	outline: none;

			// 	margin-bottom: 2rem;

			// 	border-radius: 0.25rem;
			// 	border: 1px solid rgba(0, 0, 0, 0.3);

			// 	font-size: 1rem;

			// 	padding: 0.625rem 0.75rem;
			// }

			.forgot {
				text-align: end;
			}
		}
	}

	form {
		margin-bottom: 6rem;
	}

	.passwordInput {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		width: 100%;

		padding: 0.625rem 0.75rem;

		margin-bottom: 0.75rem;

		border-radius: 0.25rem;
		border: 1px solid rgba(0, 0, 0, 0.3);

		input {
			border: none;
			margin: 0;
			padding: 0;

			width: 100%;
			outline: 0;
		}

		span {
			width: 100%;

			svg {
				height: 1.25rem;
				width: auto;
			}
		}
	}

	button {
		display: block;

		background-color: #5d5fef;
		border-radius: 10rem;
		border: none;
		padding: 0.5rem 2rem;
		font-weight: 600;
		margin: 2rem auto 0 auto;
		color: #fff;
		cursor: pointer;
	}
</style>
