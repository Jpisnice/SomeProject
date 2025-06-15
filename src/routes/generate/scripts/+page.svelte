{#snippet toolbar()}
	<div class="flex gap-2">
		<button class="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors">
			New Script
		</button>
		<button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
			Run All
		</button>
	</div>
{/snippet}

<script lang="ts">
    import type { PageData } from './$types';
    import PageHeader from '$lib/components/page-header.svelte';

    let { data }: { data: PageData } = $props();
</script>

<PageHeader title="Scripts" {toolbar} />

<div>
    <div class="bg-white p-6 rounded-lg shadow-md border">
        <h2 class="text-xl font-semibold mb-4">Script Management</h2>
        <p class="text-gray-600 mb-4">Manage and execute your generation scripts</p>
        
        <div class="space-y-4">
            <div class="border rounded p-4">
                <h3 class="font-medium">Data Processing Script</h3>
                <p class="text-sm text-gray-500">Last run: 2 hours ago</p>
                <button class="mt-2 px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600">
                    Run
                </button>
            </div>
            
            <div class="border rounded p-4">
                <h3 class="font-medium">Model Training Script</h3>
                <p class="text-sm text-gray-500">Last run: 1 day ago</p>
                <button class="mt-2 px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600">
                    Run
                </button>
            </div>
        </div>
    </div>
</div>