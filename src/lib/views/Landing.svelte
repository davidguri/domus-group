<script lang="ts">
	import { Section, Container, Button } from '$lib/components';
</script>

<Section className="pt-24 pb-20">
	<Container>
		<div class="text-center">
			<h1 class="text-4xl font-bold tracking-tight sm:text-6xl">Build with SvelteKit</h1>
			<p class="mt-6 text-lg text-zinc-600">
				A minimal landing page scaffold with components, hooks, utils, and more.
			</p>
			<div class="mt-8 flex items-center justify-center gap-3">
				<Button variant="primary">Get Started</Button>
				<Button variant="secondary">Learn More</Button>
			</div>
		</div>
	</Container>
</Section>

<Section>
	<Container>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			<div>
				<h3 class="text-xl font-semibold">Fast</h3>
				<p class="mt-2 text-zinc-600">
					Svelte compiles your code to tiny, framework-less vanilla JS.
				</p>
			</div>
			<div>
				<h3 class="text-xl font-semibold">Typed</h3>
				<p class="mt-2 text-zinc-600">
					Leverage TypeScript across components, hooks, utils, and stores.
				</p>
			</div>
			<div>
				<h3 class="text-xl font-semibold">Modern</h3>
				<p class="mt-2 text-zinc-600">Tailwind and accessible primitives to ship quickly.</p>
			</div>
		</div>
	</Container>
</Section>
