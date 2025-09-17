<script lang="ts">
	export let variant: 'primary' | 'secondary' = 'primary';
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let disabled: boolean = false;
	export let className: string = '';
</script>

<button
	{type}
	class={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 ${variant === 'primary' ? 'bg-black text-white hover:bg-zinc-800' : 'border border-zinc-200 bg-white text-black hover:bg-zinc-50'} ${className}`}
	{disabled}
>
	<slot />
</button>
