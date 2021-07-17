<!-- <script></script> -->

<header>
	<nav>
		<ul>
			<li><a href="/">home</a></li>
			<li><a href="/login">login</a></li>
			<li><a href="/signup">signup</a></li>
			<li><a href="/dashboard">dashboard</a></li>
			<li><a href="/edit">edit</a></li>
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

		nav {
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
