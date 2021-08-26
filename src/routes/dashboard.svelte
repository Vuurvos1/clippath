<script context="module">
	export async function load({ page, fetch, session, context }) {
		// redirect to login if no session
		if (!session) {
			return {
				status: 302,
				redirect: '/login'
			};
		} else {
			return { props: { session: session } };
		}
	}
</script>

<script>
	import Sidebar from '$lib/Components/Sidebar.svelte';
	import Badge from '$lib/UI/Badge.svelte';
	import Icon from '$lib/UI/Icon.svelte';

	export let session;
</script>

<Sidebar />

<div class="dashboard">
	<header class="header">
		<h1>Dashboard</h1>

		<div class="header__right">
			<Badge><Icon icon="bell" /></Badge>
			<div class="user">
				<img src="https://picsum.photos/128/128" alt="profile" />
				<Icon icon="chevron-down" />
			</div>
		</div>
	</header>

	<main>
		<section class="content">main content</section>
	</main>
</div>

<style lang="scss">
	:global(.sidebar.closed) {
		& + .dashboard {
			padding-left: var(--sidebar-closed);
		}
	}

	.header {
		position: sticky;
		top: 0;
		right: 0;
		width: 100%;

		padding: 0.75rem 1.25rem;

		background-color: #ffffff;
		box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.35);

		display: flex;
		justify-content: space-between;
		align-items: center;

		h1 {
			font-size: 1rem;
		}

		&__right {
			display: flex;
			flex-direction: row;
			align-items: center;

			:global(.badge) {
				height: 1.5rem;
			}
		}

		.user {
			display: flex;
			flex-direction: row;
			align-items: center;

			margin-left: 0.75rem;
		}

		img {
			width: 1.75rem;
			height: 1.75rem;
			border-radius: 2rem;
			margin-left: 0.75rem;
			margin-right: 0.25rem;
		}
	}

	.dashboard {
		position: relative;
		padding-left: var(--sidebar-open);

		transition: all 0.2s ease;

		.content {
			width: 100%;
		}

		main {
			padding: 2rem;
			background-color: #f3f4f8;
			min-height: 100vh;
		}
	}
</style>
