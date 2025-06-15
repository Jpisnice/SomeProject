{#snippet toolbar()}
	<div class="flex gap-2">
		<button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
			New Project
		</button>
		<button class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
			Import
		</button>
	</div>
{/snippet}

<script lang="ts">
    import type { PageData } from './$types';
    import PageHeader from '$lib/components/page-header.svelte';

    let { data }: { data: PageData } = $props();
</script>

<PageHeader title="Generate Video" {toolbar} />

<div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-lg shadow-md border">
            <h2 class="text-xl font-semibold mb-2">Create New Project</h2>
            <p class="text-gray-600 mb-4">Start a new generation project from scratch</p>
            <button class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
                Get Started
            </button>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md border">
            <h2 class="text-xl font-semibold mb-2">Templates</h2>
            <p class="text-gray-600 mb-4">Choose from pre-built templates</p>
            <button class="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors">
                Browse Templates
            </button>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md border">
            <h2 class="text-xl font-semibold mb-2">Recent Projects</h2>
            <p class="text-gray-600 mb-4">Continue working on recent projects</p>
            <button class="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600 transition-colors">
                View All
            </button>
        </div>
    </div>
</div>