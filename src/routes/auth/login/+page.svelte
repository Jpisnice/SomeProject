<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { authClient } from "$lib/auth-client"; // Ensure this path is correct
	import { goto } from "$app/navigation";
	import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "$lib/components/ui/card";

	let email = "";
	let password = "";
	let error: string | null = null;
	let message: string | null = null; // For potential success messages before redirect or other info
	let loading = false;

	async function handleSubmit() {
		loading = true;
		error = null;
		message = null;

		// Basic client-side validation
		if (!email.includes("@")) {
			error = "Invalid email address.";
			loading = false;
			return;
		}
		if (!password) {
			error = "Password is required.";
			loading = false;
			return;
		}

		await authClient.signIn.email(
			{
				email: email.toLowerCase(),
				password: password,
				callbackURL: "/dashboard", // Optional: if email verification is pending and you want a specific redirect after that
				rememberMe: true // Or false, depending on your preference
			},
			{
				onRequest: () => {
					loading = true;
				},
				onSuccess: (ctx) => {
					loading = false;
					// Successful sign-in, user session is handled by better-auth client
					goto("/", { replaceState: true }); // Redirect to dashboard
				},
				onError: (ctx) => {
					loading = false;
					error = ctx.error.message || "Sign-in failed. Please check your credentials.";
				}
			}
		);
	}
</script>

<div class="container mx-auto flex h-screen items-center justify-center">
	<Card class="w-full max-w-md">
		<CardHeader class="space-y-1">
			<CardTitle class="text-2xl">Sign in to your account</CardTitle>
		</CardHeader>
		<CardContent class="grid gap-4">
			<form on:submit|preventDefault={handleSubmit} class="space-y-6">
				<div>
					<label for="email" class="block text-sm font-medium text-card-foreground">
						Email address
					</label>
					<div class="mt-1">
						<input
							id="email"
							name="email"
							bind:value={email}
							type="email"
							autocomplete="email"
							required
							class="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 text-card-foreground placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
						/>
					</div>
				</div>

				<div>
					<label for="password" class="block text-sm font-medium text-card-foreground">
						Password
					</label>
					<div class="mt-1">
						<input
							id="password"
							name="password"
							bind:value={password}
							type="password"
							autocomplete="current-password"
							required
							class="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 text-card-foreground placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
						/>
					</div>
				</div>

				{#if error}
					<p class="text-sm text-destructive">{error}</p>
				{/if}
				{#if message}
					<p class="text-sm text-primary">{message}</p>
				{/if}

				<div>
					<Button type="submit" class="w-full" disabled={loading}>
						{#if loading}Loading...{:else}Sign in{/if}
					</Button>
				</div>
			</form>
		</CardContent>
		<CardFooter class="flex flex-col items-center space-y-2">
			<p class="mt-2 text-center text-sm text-muted-foreground">
				Don't have an account?
				<a href="/auth/register" class="font-medium text-primary hover:text-primary/80">
					Sign up
				</a>
			</p>
		</CardFooter>
	</Card>
</div>

<style>
	.container {
		min-height: 100vh;
	}
</style>
