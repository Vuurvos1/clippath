<script context="module">
	// import supabase from '$lib/db';

	export async function load({ page, fetch, session, context }) {
		// redirect to login if no session
		if (session) {
			let { data, error } = await supabase
				.from('posts')
				.select()
				.limit(1)
				.eq('title', page.params.slug);

			data = data[0];
			if (!data) {
				data = {};
			}

			return {
				props: {
					_session: session,
					post: data?.post,
					data: data
				}
			};
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

	export let _session;
	_session = JSON.parse(_session);

	export let post;
	export let data;

	let title = $page.params.slug;

	async function savePost(e) {
		// convert to try catch
		// check if title already exists to prevent new entry in database / or switch to using ids instead of titles

		const { data: _data, error } = await supabase.from('posts').upsert({
			id: data.id,
			title: title,
			post: post,
			metadata: {},
			user_id: _session.user.id
		});

		if (error) {
			//  throw error;
			console.log('err', error);
		}

		// update to new data
		data = _data[0];
	}
</script>

<h1>edit slug</h1>
<pre>{JSON.stringify(data, null, 2)}</pre>

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
