<script context="module">
	// import supabase from '$lib/db';

	export async function load({ page, fetch, session, context }) {
		// redirect to login if no session

		if (session) {
			let { data, error } = await supabase
				.from('posts')
				.select()
				.limit(1)
				.eq('user_id', JSON.parse(session).user.id)
				.eq('id', page.params.slug);

			data = data[0];
			if (!data) {
				data = {};
			}

			return {
				props: {
					_session: session,
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

	import { goto } from '$app/navigation';

	export let _session;

	// export let post;
	export let data;

	let content = data.content;

	let title = $page.params.slug;

	async function savePost(e) {
		// convert to try catch
		// check if title already exists to prevent new entry in database / or switch to using ids instead of titles

		const { data: _data, error } = await supabase.from('posts').upsert({
			id: data.id,
			title,
			content,
			// metadata: {},
			user_id: _session.user.id
		});

		if (error) {
			//  throw error;
			console.log('err', error);
		}

		// update to new data
		data = _data[0];
	}

	async function deletePost(e) {
		const { data: _data, error } = await supabase.from('posts').delete().match({ id: data.id });

		console.log('deleted post');

		if (error) {
			console.log(error);
		} else {
			goto('/dashboard');
		}
	}
</script>

<h1>edit slug</h1>
<pre>{JSON.stringify(data, null, 2)}</pre>

<form action="" on:submit|preventDefault={savePost}>
	<input bind:value={title} name="title" type="text" />

	<textarea bind:value={content} name="post" id="" />

	<button>save</button>
</form>

<button on:click={deletePost}>delete</button>

<style lang="scss">
	form {
		textarea {
			resize: vertical;
		}
	}
</style>
