<script context="module">
	export async function load({ page, fetch, session, context }) {
		return {
			props: {
				session
			}
		};
	}
</script>

<script>
	// import { page } from '$app/stores';
	export let session;
</script>

<header>
	<nav>
		{#if session}
			<div class="loggedin">
				<!-- content here -->
				<!-- notification -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-bell"
					><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path
						d="M13.73 21a2 2 0 0 1-3.46 0"
					/></svg
				>
				<!-- profile dropdown -->

				<div class="profile-pic" />

				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg
				>
			</div>
		{:else}
			<!-- default navigation -->
			<ul>
				<li><a href="/">home</a></li>
				<li><a href="/login">login</a></li>
				<li><a href="/signup">signup</a></li>
				<li><a href="/dashboard">dashboard</a></li>
				<li><a href="/edit">edit</a></li>
			</ul>
		{/if}
	</nav>
</header>

<style lang="scss">
	header {
		position: fixed;
		top: 0;
		left: 0;

		width: 100vw;

		background-color: #fff;
		box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.35);

		.profile-pic {
			background-color: hotpink;
			border-radius: 10rem;
			width: 1.75rem;
			height: 1.75rem;
		}

		.loggedin {
			height: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-end;
		}

		nav {
			height: 3.25rem;
			ul {
				display: flex;
				flex-direction: row;

				li {
					margin-right: 1rem;
					list-style: none;
				}
			}
		}
	}
</style>
