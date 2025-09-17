<script lang="ts">
	export let as: 'div' | 'section' | 'main' | 'footer' | 'header' = 'div';
	export let className: string = '';
</script>

<svelte:element this={as} class={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
	<slot />
</svelte:element>
