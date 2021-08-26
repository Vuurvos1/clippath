<script>
	import Icon from '$lib/UI/Icon.svelte';
	import SidebarLink from '$lib/UI/SidebarLink.svelte';

	let closed = false;
	function closeSidebar() {
		closed = !closed;
	}
</script>

<section class="sidebar" class:closed>
	<div>
		<div class="sidebar__top">
			<div class="logoConainter">
				<Icon icon="scissors" />
				<p>ClipPath</p>
			</div>
			<span on:click={closeSidebar}>
				<Icon class="sidebarToggle" icon="chevron-left" />
			</span>
		</div>

		<div class="sidebar__mid">
			<p>OVERVIEW</p>
			<ul>
				<li>
					<a href="/dashboard"><SidebarLink icon="home"><span>Dashboard</span></SidebarLink></a>
				</li>
				<li>
					<a href="/posts"><SidebarLink icon="file"><span>Posts</span></SidebarLink></a>
				</li>
				<li>
					<a href="/edit"><SidebarLink icon="file"><span>Dashboard</span></SidebarLink></a>
				</li>
			</ul>
		</div>
	</div>

	<div class="sidebar__bottom">
		<a href="/settings"><SidebarLink icon="settings">Settings</SidebarLink></a>

		<form action="/auth/logout" method="get">
			<button><SidebarLink icon="log-out">Settings</SidebarLink></button>
		</form>
	</div>
</section>

<style lang="scss">
	.sidebar {
		width: var(--sidebar-open);
		height: 100vh;

		z-index: 10;
		position: fixed;
		top: 0;
		left: 0;

		display: flex;
		flex-direction: column;
		justify-content: space-between;

		padding: 3.25rem 0.875rem 1.5rem 0.875rem;

		background-color: #ffffff;

		box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.35);

		transition: all 0.2s ease;

		.logoConainter {
			display: flex;
			flex-direction: row;
			align-items: center;

			font-size: 1.5rem;
			font-weight: 500;

			:global(svg) {
				width: 2rem;
				height: 2rem;

				margin-left: 0.5rem;
				margin-right: 0.75rem;
			}
		}

		&__top {
			display: flex;
			flex-direction: row;

			justify-content: space-between;

			margin-bottom: 3.75rem;

			span {
				color: #000;
				display: flex;
				align-items: center;
			}
		}

		&__mid {
			p {
				font-weight: 500;
				font-size: 0.75rem;

				margin-bottom: 0.5rem;
			}
		}

		&__bottom {
			justify-self: flex-end;

			a {
				color: #000000;
				text-decoration: none;

				display: block;

				margin-bottom: 1rem;
			}

			button {
				outline: none;
				border: none;
				background: none;

				display: contents;
			}
		}

		ul {
			display: flex;
			flex-direction: column;

			list-style: none;

			li {
				margin-bottom: 1rem;
			}

			a {
				color: #000;
				text-decoration: none;
			}
		}

		:global(.sidebarToggle) {
			transition: transform 0.15s ease;
		}

		&.closed {
			span {
				position: absolute;
				left: 3.75rem;

				display: flex;
				flex-direction: row;
				align-items: center;

				background-color: #e4d7ff;
				border-radius: 2rem;
			}

			width: var(--sidebar-closed);
			padding-bottom: 1.25rem;
			padding-left: 0.75rem;
			padding-right: 0.75rem;

			:global(.sidebarToggle) {
				transform: rotate(-180deg);
				// transform: scaleX(-1);
			}

			.logoConainter {
				position: relative;

				p {
					font-size: 0;
				}
			}

			.sidebar__top {
				margin-bottom: 4.875rem;

				span {
					padding: 0.25rem;
				}
			}

			li {
				margin-bottom: 0.5rem;
			}

			.sidebar__mid {
				p {
					font-size: 0;
				}
			}

			// a span {
			// 	animation: hideText 0.1s ease;
			// 	animation-fill-mode: forwards;
			// }
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
