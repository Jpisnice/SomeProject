<script lang="ts">
    import type { PageData } from './$types';
    import PageHeader from '$lib/components/page-header.svelte';

    let { data }: { data: PageData } = $props();
</script>

<PageHeader title="Simple Page" />

<div>
    <div class="bg-white p-6 rounded-lg shadow-md border">
        <h2 class="text-xl font-semibold mb-4">Simple Page Example</h2>
        <p class="text-gray-600">This page only has a title, no toolbar.</p>
    </div>
</div>
