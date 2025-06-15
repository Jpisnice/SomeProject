<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import * as Sidebar from '$lib/components/ui/sidebar/index';
	import AppSidebar from '@/components/app-sidebar.svelte';
	
	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<Sidebar.Provider>
	<AppSidebar />
	<Sidebar.Inset>
		<main class="p-2">
			{@render children()}
		</main>
	</Sidebar.Inset>
</Sidebar.Provider>
