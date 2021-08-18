<script context="module">
	export async function load({ page, fetch, session, context }) {
		// redirect to login if no session
		if (session) {
			return {
				props: {
					session
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
	import supabase from '$lib/db';

	export let session;
	session = JSON.parse(session);

	async function getPosts() {
		const { data, error } = await supabase.from('posts').select().eq('user_id', session.user.id);

		if (error) {
			throw new Error(error);
		}

		return data;
	}
</script>

<h1>Edit</h1>

<ul>
	{#await getPosts()}
		<p>loading...</p>
	{:then posts}
		{#each posts as post}
			<li><a href={`/edit/${post.title}`}>{post.title}</a></li>
		{/each}
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</ul>

<style lang="scss">
</style>
