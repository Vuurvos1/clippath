<script>
	import Icon from '$lib/UI/Icon.svelte';

	export let icon = '';
	export let active = false;
</script>

<div class="texticon" class:active>
	<Icon {icon} />
	<slot />
</div>

<style lang="scss">
	.texticon {
		display: flex;
		flex-direction: row;
		align-items: center;

		padding: 0.5rem 0.75rem;

		border-radius: 0.5rem;

		background-color: #e4d7ff;

		font-weight: 500;

		:global(.icon) {
			margin-right: 1rem;
		}

		&.active {
			background-color: #e4d7ff;
		}
	}

	:global(.closed) .texticon {
		// background-color: hotpink;

		font-size: 0;
		padding: 0.75rem;

		:global(.icon) {
			margin-right: 0;
		}
	}
</style>
