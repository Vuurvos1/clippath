<script>
	import feather from 'feather-icons';

	export let icon = '';
	if (!feather.icons[icon]) {
		icon = 'x';
	}

	let _class = '';
	export { _class as class };
</script>

{@html feather.icons[icon].toSvg({ class: `icon ${_class}`, ...$$restProps })}

<style></style>
