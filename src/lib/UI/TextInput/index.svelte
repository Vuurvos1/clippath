<script>
	export let type = 'text';
	export let value = '';
	export let name = '';
	export let label = 'sample text';
	// export let placeholder = '';
	export let required = false;

	const setType = (node) => {
		node.type = type;
	};
</script>

<div class="textInput">
	<input id={name} placeholder={label} use:setType {required} bind:value />
	<label for={name}>{label}</label>
</div>

<style lang="scss">
	.textInput {
		margin-bottom: 2rem;
		position: relative;

		label {
			font-size: 1rem;
			position: absolute;
			margin-left: 0.6rem;
			padding: 0 0.2rem;
			left: 1px;
			background-color: hsl(var(--white));
			transform-origin: top left;
			transform: translate(0, 0.625rem) scale(1);
			transition: all 0.1s ease-out;
			color: hsl(var(--text));
		}

		input {
			font-size: 1rem;
			outline: none;
			padding: 0.625rem 0.75rem;
			width: 100%;
			border: 1px solid hsla(var(--text), 0.3);
			border-radius: 0.25rem;
			background-color: hsl(var(--white));

			&:focus ~ label,
			&:not(:placeholder-shown) ~ label {
				transform: translateY(-0.625rem) scale(0.8);
			}
		}
	}
</style>
