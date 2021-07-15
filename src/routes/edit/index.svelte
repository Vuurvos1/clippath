<script context="module">
	export async function load({ page, fetch, session, context }) {
		// redirect to login if no session
		if (session) {
			return {};
		} else {
			return {
				status: 302,
				redirect: '/login'
			};
		}
	}
</script>

<script></script>

Edit

<style lang="scss">
</style>
