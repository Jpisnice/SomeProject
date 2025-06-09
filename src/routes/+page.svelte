<script>
	import Button from './../lib/components/ui/button/button.svelte';
    
    var count = $state(0);
</script>
<h1 class="scroll-m-20 text-balance text-4xl font-extrabold tracking-tight">
    Welcome to Sveltekit
  </h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<Button onclick={()=>{count++}}>
    Click me Pls
</Button>
<h1 class="scroll-m-20 text-balance text-4xl font-extrabold tracking-tight">
    {count}
  </h1>