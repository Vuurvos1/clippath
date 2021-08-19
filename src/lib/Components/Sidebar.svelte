<script>
	import Icon from '$lib/UI/Icon.svelte';
	import TextIcon from '$lib/UI/TextIcon.svelte';

	let open = false;
	function closeSidebar() {
		console.log(closeSidebar);
		open = !open;
	}
</script>

<section class="sidebar" class:open>
	<div>
		<div class="sidebar__top">
			<div class="logoConainter">
				<Icon icon="scissors" />
				<p>ClipPath</p>
			</div>
			<span on:click={closeSidebar}>
				<Icon class="sidebarToggle" icon="chevrons-left" />
			</span>
		</div>

		<ul>
			<li>
				<a href="/dashboard"><TextIcon icon="home"><span>Dashboard</span></TextIcon></a>
			</li>
			<li>
				<a href="/"><TextIcon icon="folder"><span>Lorem</span></TextIcon></a>
			</li>
			<li>
				<a href="/edit"><TextIcon icon="file"><span>Posts</span></TextIcon></a>
			</li>
			<li>
				<a href="/"><TextIcon icon="users"><span>Team</span></TextIcon></a>
			</li>
		</ul>
	</div>

	<div class="sidebar__bottom">
		<a href="/settings">Settings</a>

		<form action="/auth/logout" method="get">
			<button>Sign out</button>
		</form>
	</div>
</section>

<style lang="scss">
	.logoConainter {
		display: flex;
		flex-direction: row;

		margin-bottom: 2rem;
	}
	.sidebar {
		width: 16rem;
		height: 100vh;

		z-index: 10;
		position: fixed;
		top: 0;
		left: 0;

		display: flex;
		flex-direction: column;
		justify-content: space-between;

		padding: 1.25rem 1.5rem;

		background-color: #ffffff;

		box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.35);

		transition: all 0.2s ease;

		&__top {
			display: flex;
			flex-direction: row;

			padding-left: 0.5rem;

			justify-content: space-between;

			span {
				color: rgba(0, 0, 0, 0.6);
			}
		}

		&__bottom {
			padding-left: 0.5rem;
			padding-bottom: 1rem;

			justify-self: flex-end;
			a,
			button {
				font-weight: 600;
				font-size: 0.85rem;
				display: inline-block;
			}
			a {
				color: #000000;
				text-decoration: none;

				margin-bottom: 0.25rem;
			}

			button {
				outline: none;
				border: none;
				background: none;
			}
		}

		ul {
			display: flex;
			flex-direction: column;
			list-style: none;

			li {
				margin-bottom: 1rem;
				border-radius: 0.25rem;

				a {
					color: #000000;
					text-decoration: none;
					font-weight: 600;

					display: flex;
					flex-direction: row;
					align-items: center;

					padding: 0.25rem 0.5rem;
					span {
						margin-left: 0.75rem;
					}
				}

				&:hover {
					background-color: rgba(0, 144, 201, 0.35);
				}
			}

			a span {
				transition: opacity 0.05s ease;
			}
		}

		:global(.sidebarToggle) {
			transition: transform 0.15s ease-in;
		}

		&.open {
			width: 8rem;

			:global(.sidebarToggle) {
				// transform: rotate(-180deg);
				transform: scaleX(-1);
			}

			.logoConainter p {
				font-size: 0;
			}

			a span {
				animation: hideText 0.1s ease;
				animation-fill-mode: forwards;
			}
		}
	}

	@keyframes hideText {
		0% {
			opacity: 1;
		}

		100% {
			opacity: 0;
			visibility: hidden;
		}
	}
</style>
