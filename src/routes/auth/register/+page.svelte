<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { authClient } from "@/auth-client"; // Adjusted import path
	import { goto } from "$app/navigation"; // For redirecting
	import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "$lib/components/ui/card";

	let name = "";
	let email = "";
	let password = "";
	let error: string | null = null;
	let message: string | null = null;
	let loading = false;

	async function handleSubmit() {
		loading = true;
		error = null;
		message = null;

		// Basic client-side validation (can be more extensive)
		if (!name.trim()) {
			error = "Name is required.";
			loading = false;
			return;
		}
		if (!email.includes("@")) {
			error = "Invalid email address.";
			loading = false;
			return;
		}
		if (password.length < 6) {
			error = "Password must be at least 6 characters long.";
			loading = false;
			return;
		}

		const result = await authClient.signUp.email(
			{
				name: name.trim(),
				email: email.toLowerCase(),
				password: password,
				// callbackURL: "/dashboard" // Optional: if you want to redirect after email verification
			},
			{
				onRequest: (ctx) => {
					loading = true;
				},
				onSuccess: (ctx) => {
					loading = false;
					message = "Registration successful! Please check your email to verify your account.";
					// If autoSignIn is true (default) and no email verification is needed immediately,
					// the user might be signed in. You could redirect here.
					// For example: goto("/dashboard"); or goto("/auth/login?registered=true")
					// If email verification is required, they usually won't be signed in yet.
					// Consider redirecting to login or a page that says "check your email"
					goto("/auth/login?message=Registration successful. Please check your email.");
				},
				onError: (ctx) => {
					loading = false;
					error = ctx.error.message || "An unexpected error occurred during registration.";
				}
			}
		);
	}
</script>

<div class="container mx-auto flex min-h-screen items-center justify-center">
	<Card class="w-full max-w-md">
		<CardHeader class="space-y-1">
			<CardTitle class="text-2xl">Create an account</CardTitle>
		</CardHeader>
		<CardContent class="grid gap-4">
			<form on:submit|preventDefault={handleSubmit} class="space-y-6">
				<div>
					<label for="name" class="block text-sm font-medium text-card-foreground">
						Name
					</label>
					<div class="mt-1">
						<input
							id="name"
							bind:value={name}
							type="text"
							autocomplete="name"
							required
							class="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 text-card-foreground placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
						/>
					</div>
				</div>

				<div>
					<label for="email" class="block text-sm font-medium text-card-foreground">
						Email address
					</label>
					<div class="mt-1">
						<input
							id="email"
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
							bind:value={password}
							type="password"
							autocomplete="new-password"
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
						{#if loading}Loading...{:else}Create account{/if}
					</Button>
				</div>
			</form>
		</CardContent>
		<CardFooter class="flex flex-col items-center space-y-2">
			<p class="mt-2 text-center text-sm text-muted-foreground">
				Already have an account?
				<a href="/auth/login" class="font-medium text-primary hover:text-primary/80">
					Sign in
				</a>
			</p>
		</CardFooter>
	</Card>
</div>
