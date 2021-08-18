<script>
	export let hidden = false;

	let _class = null;
	export { _class as class };
</script>

<div class={`badge ${_class}`} class:hidden {...$$restProps}>
	<slot />
</div>

<style lang="scss">
	.badge {
		display: inline-block;
		position: relative;

		&::after {
			content: '';
			position: absolute;
			top: -0.1875em;
			right: -0.125em;
			width: 0.625em;
			height: 0.625em;
			border-radius: 50%;
			// change bg col and box shadow to variables
			background-color: #ff5757;
			box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 3px 5px 0px,
				rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
		}

		&.hidden::after {
			display: none;
		}
	}
</style>
