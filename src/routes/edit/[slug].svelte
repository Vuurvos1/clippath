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
	import { page } from '$app/stores';
	import supabase from '$lib/db';

	let title = $page.params.slug;
	let post;

	async function getPost() {
		const post = await supabase.from('test').select('room');
		console.log('post', post);
	}

	getPost();

	async function savePost(e) {
		// check if title has changed
		// > update post

		// see if exists

		// if not

		const newPost = await supabase.from('test').insert({ room: title, val: post });
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
