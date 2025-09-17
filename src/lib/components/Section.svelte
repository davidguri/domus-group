<script lang="ts">
	import Container from './Container.svelte';
	export let className: string = '';
</script>

<section class={`py-16 ${className}`}>
	<Container>
		<slot />
	</Container>
</section>
