<script lang="ts">
	import type { Snippet } from 'svelte';
    import * as Sidebar from './ui/sidebar/index';
	
	let {
		title,
		toolbar
	}: {
		title: string;
		toolbar?: Snippet;
	} = $props();
</script>

<div class="flex justify-between items-center mb-4">
	<div class="flex items-center gap-4">
        <Sidebar.Trigger></Sidebar.Trigger>
		<h1 class="text-2xl font-bold">{title}</h1>
	</div>
	<div>
		{#if toolbar}
			{@render toolbar()}
		{/if}
	</div>
</div>
