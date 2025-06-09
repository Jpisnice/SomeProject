<script>
	import { goto } from '$app/navigation';
	import { authClient } from '$lib/auth-client';
	import Button from './../lib/components/ui/button/button.svelte';

	const session = authClient.useSession(); 
	var count = $state(0);
</script>

<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
	Welcome to Sveltekit
</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<div class="flex justify-around">
	<Button
	onclick={() => {
		count++;
	}}
>
	Click me Pls
</Button>
{#if session}
  <Button onclick={async()=>{
    await authClient.signOut();
	await goto("/auth/login")
  }}>
    Logout
  </Button>
{/if}
</div>
<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
	{count}
</h1>
