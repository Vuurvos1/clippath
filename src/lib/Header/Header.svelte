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
		<!-- default navigation -->
		<ul>
			<li><a href="/">home</a></li>
			<li><a href="/login">login</a></li>
			<li><a href="/signup">signup</a></li>
		</ul>
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
