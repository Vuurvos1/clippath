<script>
	import Icon from '$lib/UI/Icon.svelte';

	export let icon = '';
</script>

<div class="texticon">
	<Icon {icon} />
	<slot />
</div>

<style lang="scss">
	.texticon {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
</style>
