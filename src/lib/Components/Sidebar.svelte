<script>
	import TextIcon from '$lib/UI/TextIcon.svelte';
</script>

<sidebar>
	<ul>
		<li>
			<a href="/"><TextIcon icon="home">Dashboard</TextIcon></a>
		</li>
		<li>
			<a href="/"><TextIcon icon="folder">Lorem</TextIcon></a>
		</li>
		<li>
			<a href="/"><TextIcon icon="file">Posts</TextIcon></a>
		</li>
		<li>
			<a href="/"><TextIcon icon="users">Team</TextIcon></a>
		</li>
	</ul>
</sidebar>

<style lang="scss">
	ul {
		display: flex;
		flex-direction: column;

		li {
			margin-bottom: 1rem;
		}
	}
</style>
