<script context="module">
	export async function load({ page, fetch, session, context }) {
		// redirect to login if no session
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
	import { page, session } from '$app/stores';
	import supabase from '$lib/db';
	import { goto } from '$app/navigation';

	if (!$session) {
		goto('/login');
	}

	// console.log($session);
	// if (!$session) {
	// 	goto('/login');
	// }

	// export let session;
	// console.log(session);

	let title = $page.params.slug;
	let post;

	async function getPost() {
		// convert to try catch
		// const post = await supabase.from('test').select('room');
		console.log('post', post, $session);
	}

	getPost();

	async function savePost(e) {
		// convert to try catch

		// check if title has changed
		// > update post

		// see if exists

		// if not

		// const user = await supabase.auth.user();

		// console.log('user', user);

		const data = {
			user_id: $session.user.id,
			title: title,
			post: post,
			metadata: {}
		};

		const { error } = await supabase.from('posts').upsert(data, {
			returning: 'minimal' // Don't return the value after inserting
		});

		console.log('err', error);

		// if (error) throw error;
	}
</script>

<h1>edit slug</h1>
<pre>{JSON.stringify($page, null, 2)}</pre>

<form action="" on:submit|preventDefault={savePost}>
	<input bind:value={title} name="title" type="text" />

	<textarea bind:value={post} name="post" id="" />

	<button>save</button>
</form>

<style lang="scss">
	form {
		textarea {
			resize: vertical;
		}
	}
</style>
