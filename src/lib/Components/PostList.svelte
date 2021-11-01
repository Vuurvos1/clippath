<script context="module">
	export async function load({ page, fetch, session, context }) {
		// console.log(session);
		// return { props: { session: session } };
		// this no workie
		// const { data, error } = await supabase.from('posts').select();
		// console.log('data', data, 'err', error);
		// if (!error) {
		// 	return { props: { posts: data } };
		// } else {
		// 	// return status
		// 	return error;
		// }
	}
</script>

<script>
	import supabase from '$lib/db';

	// move this to the server
	import { session } from '$app/stores';
	const sesh = JSON.parse($session);

	let postname = '';

	async function getPosts() {
		return supabase.from('posts').select('title, id').eq('user_id', sesh.user.id);
	}

	async function formSubmit() {
		console.log(sesh.user);

		// user_id: sesh.user.id

		const { data, error } = await supabase.from('posts').insert({
			title: postname,
			user_id: sesh.user.id
		});

		console.log(sesh.user, data, error, postname);
	}
</script>

<section>
	{#await getPosts()}
		<p>loading posts...</p>
	{:then response}
		<p>list</p>
		<!-- <pre>  
      {JSON.stringify(response, null, 2)}
    </pre> -->

		{#if response.data}
			<ul>
				{#each response.data as post, i}
					<li>
						<a href="/edit/{post.id}">{post.title}</a>
					</li>
				{/each}
			</ul>
		{:else}
			<p>no data found</p>
		{/if}
	{/await}

	<div>
		<form action="" on:submit|preventDefault={formSubmit}>
			<input type="text" bind:value={postname} placeholder="post name" name="postName" />
			<button>Create new post</button>
		</form>
	</div>
</section>

<style lang="scss"></style>
