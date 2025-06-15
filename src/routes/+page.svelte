<script>
	import { goto } from '$app/navigation';
	import { authClient } from '$lib/auth-client';
	import Button from './../lib/components/ui/button/button.svelte';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';

	const session = authClient.useSession(); 
	let newsletterEmail = $state('');
	
	const features = [
		{
			title: "Lightning Fast",
			description: "Built with SvelteKit for optimal performance and smooth user experience.",
			icon: "⚡"
		},
		{
			title: "Secure by Default",
			description: "Enterprise-grade security with built-in authentication and authorization.",
			icon: "🔐"
		},
		{
			title: "Fully Responsive",
			description: "Beautiful design that works perfectly on all devices and screen sizes.",
			icon: "📱"
		}
	];

	const testimonials = [
		{
			name: "Sarah Johnson",
			role: "CEO at TechCorp",
			content: "This platform has transformed how we manage our business. Highly recommended!",
			avatar: "SJ"
		},
		{
			name: "Michael Chen",
			role: "Product Manager",
			content: "The user experience is exceptional. Our team productivity increased by 40%.",
			avatar: "MC"
		},
		{
			name: "Emily Rodriguez",
			role: "Startup Founder",
			content: "Simple, powerful, and exactly what we needed to scale our operations.",
			avatar: "ER"
		}
	];

	function handleNewsletterSubmit() {
		if (newsletterEmail) {
			alert(`Thank you for subscribing with email: ${newsletterEmail}`);
			newsletterEmail = '';
		}
	}
</script>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
	<div class="max-w-7xl mx-auto text-center">
		<h1 class="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
			Build Something
			<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
				Amazing
			</span>
		</h1>
		<p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
			The ultimate platform for modern businesses. Streamline your workflow, boost productivity, 
			and scale your operations with our cutting-edge solution.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
			{#if !session}
				<Button 
					class="px-8 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
					onclick={() => goto('/auth/register')}
				>
					Get Started Free
				</Button>
				<Button 
					variant="outline" 
					class="px-8 py-4 text-lg font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg transition-all duration-200"
					onclick={() => goto('/auth/login')}
				>
					Sign In
				</Button>
			{:else}
				<Button 
					class="px-8 py-4 text-lg font-semibold bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
					onclick={() => goto('/generate')}
				>
					Go to Dashboard
				</Button>
				<Button 
					variant="outline"
					class="px-8 py-4 text-lg font-semibold border-2 border-red-300 text-red-700 hover:bg-red-50 rounded-lg transition-all duration-200"
					onclick={async () => {
						await authClient.signOut();
						await goto("/auth/login");
					}}
				>
					Logout
				</Button>
			{/if}
		</div>
		<div class="text-sm text-gray-500">
			✨ No credit card required • 🚀 Setup in under 2 minutes • 💯 Free 14-day trial
		</div>
	</div>
</section>

<Separator class="my-0" />

<!-- Features Section -->
<section class="py-20 px-4 bg-white">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
				Why Choose Our Platform?
			</h2>
			<p class="text-xl text-gray-600 max-w-2xl mx-auto">
				Discover the features that make us the preferred choice for thousands of businesses worldwide.
			</p>
		</div>
		
		<div class="grid md:grid-cols-3 gap-8">
			{#each features as feature}
				<Card class="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
					<CardHeader class="text-center pb-4">
						<div class="text-4xl mb-4">{feature.icon}</div>
						<CardTitle class="text-2xl font-bold text-gray-900">{feature.title}</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription class="text-gray-600 text-center text-lg leading-relaxed">
							{feature.description}
						</CardDescription>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>
</section>

<Separator />

<!-- Stats Section -->
<section class="py-20 px-4 bg-gray-50">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
				Trusted by Industry Leaders
			</h2>
			<p class="text-xl text-gray-600">Join thousands of satisfied customers worldwide</p>
		</div>
		
		<div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
			<div class="bg-white rounded-lg p-6 shadow-md">
				<div class="text-3xl font-bold text-blue-600 mb-2">50K+</div>
				<div class="text-gray-600">Active Users</div>
			</div>
			<div class="bg-white rounded-lg p-6 shadow-md">
				<div class="text-3xl font-bold text-green-600 mb-2">99.9%</div>
				<div class="text-gray-600">Uptime</div>
			</div>
			<div class="bg-white rounded-lg p-6 shadow-md">
				<div class="text-3xl font-bold text-purple-600 mb-2">1M+</div>
				<div class="text-gray-600">Tasks Completed</div>
			</div>
			<div class="bg-white rounded-lg p-6 shadow-md">
				<div class="text-3xl font-bold text-orange-600 mb-2">24/7</div>
				<div class="text-gray-600">Support</div>
			</div>
		</div>
	</div>
</section>

<Separator />

<!-- Testimonials Section -->
<section class="py-20 px-4 bg-white">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
				What Our Customers Say
			</h2>
			<p class="text-xl text-gray-600">Don't just take our word for it</p>
		</div>
		
		<div class="grid md:grid-cols-3 gap-8">
			{#each testimonials as testimonial}
				<Card class="border-0 shadow-lg">
					<CardContent class="p-6">
						<div class="flex items-center mb-4">
							<div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
								{testimonial.avatar}
							</div>
							<div>
								<div class="font-semibold text-gray-900">{testimonial.name}</div>
								<div class="text-sm text-gray-500">{testimonial.role}</div>
							</div>
						</div>
						<p class="text-gray-700 italic">"{testimonial.content}"</p>
						<div class="flex text-yellow-400 mt-4">
							★★★★★
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>
</section>

<Separator />

<!-- Newsletter Section -->
<section class="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
	<div class="max-w-4xl mx-auto text-center">
		<h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
			Stay in the Loop
		</h2>
		<p class="text-xl text-blue-100 mb-8">
			Get the latest updates, tips, and exclusive offers delivered to your inbox.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
			<input 
				type="email" 
				placeholder="Enter your email address"
				bind:value={newsletterEmail}
				class="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none text-gray-900"
			/>
			<Button 
				class="px-6 py-3 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-200"
				onclick={handleNewsletterSubmit}
			>
				Subscribe
			</Button>
		</div>
		<p class="text-sm text-blue-200 mt-4">
			No spam, unsubscribe at any time.
		</p>
	</div>
</section>

<!-- Footer -->
<footer class="bg-gray-900 text-white py-16 px-4">
	<div class="max-w-7xl mx-auto">
		<div class="grid md:grid-cols-4 gap-8">
			<div>
				<h3 class="text-2xl font-bold mb-4">Your Brand</h3>
				<p class="text-gray-400 mb-4">
					Building the future of business productivity, one feature at a time.
				</p>
				<div class="flex space-x-4">
					<span class="text-2xl cursor-pointer hover:text-blue-400">📧</span>
					<span class="text-2xl cursor-pointer hover:text-blue-400">🐦</span>
					<span class="text-2xl cursor-pointer hover:text-blue-400">📘</span>
					<span class="text-2xl cursor-pointer hover:text-blue-400">📷</span>
				</div>
			</div>
			<div>
				<h4 class="text-lg font-semibold mb-4">Product</h4>
				<ul class="space-y-2 text-gray-400">
					<li><a href="#" class="hover:text-white transition-colors">Features</a></li>
					<li><a href="#" class="hover:text-white transition-colors">Pricing</a></li>
					<li><a href="#" class="hover:text-white transition-colors">API</a></li>
					<li><a href="#" class="hover:text-white transition-colors">Documentation</a></li>
				</ul>
			</div>
			<div>
				<h4 class="text-lg font-semibold mb-4">Company</h4>
				<ul class="space-y-2 text-gray-400">
					<li><a href="#" class="hover:text-white transition-colors">About</a></li>
					<li><a href="#" class="hover:text-white transition-colors">Careers</a></li>
					<li><a href="#" class="hover:text-white transition-colors">Blog</a></li>
					<li><a href="#" class="hover:text-white transition-colors">Contact</a></li>
				</ul>
			</div>
			<div>
				<h4 class="text-lg font-semibold mb-4">Support</h4>
				<ul class="space-y-2 text-gray-400">
					<li><a href="#" class="hover:text-white transition-colors">Help Center</a></li>
					<li><a href="#" class="hover:text-white transition-colors">Community</a></li>
					<li><a href="#" class="hover:text-white transition-colors">Status</a></li>
					<li><a href="#" class="hover:text-white transition-colors">Privacy Policy</a></li>
				</ul>
			</div>
		</div>
		<Separator class="my-8 bg-gray-700" />
		<div class="text-center text-gray-400">
			<p>&copy; 2025 Your Brand. All rights reserved. Built with ❤️ using SvelteKit.</p>
		</div>
	</div>
</footer>
