<script>
	import feather from 'feather-icons';

	export let icon = '';
	if (!feather.icons[icon]) {
		icon = 'x';
	}

	// console.log(icon);
	// console.log({ ...$$restProps });
</script>

{@html feather.icons[icon].toSvg({ ...$$restProps })}

<style></style>
