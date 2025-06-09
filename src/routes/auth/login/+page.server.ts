// import type { Actions } from './$types';
// import { auth } from "$lib/server/auth";
// import { fail, redirect } from "@sveltejs/kit"; // Added redirect

// export const actions = {
// 	default: async ({ request, url }) => { // Added url for potential future use (e.g., redirect back)
// 		const formData = await request.formData();
// 		const email = formData.get("email");
// 		const password = formData.get("password");

// 		if (
// 			!email ||
// 			typeof email !== "string" ||
// 			!password ||
// 			typeof password !== "string"
// 		) {
// 			return fail(400, { error: "Invalid email or password", email: email as string });
// 		}

// 		try {
// 			const response = await auth.api.signInEmail({
// 				body: {
// 					email: email.toLowerCase(),
// 					password: password
// 				},
// 				asResponse: true
// 			});
			
// 			// Check if better-auth itself is issuing a redirect (e.g., for MFA, email verification)
// 			if (response.redirected || (response.status >= 300 && response.status < 400 && response.headers.has("location"))) {
// 				return response; // SvelteKit will follow this redirect
// 			}

// 			if (response.ok) { // Authentication successful (2xx status)
// 				// Cookies should have been set by better-auth via the response headers.
// 				// Now, redirect to a protected page.
// 				// You might want to redirect to a specific page, e.g., url.searchParams.get('redirectTo') || '/dashboard'
// 				throw redirect(303, '/dashboard'); // Redirect to home page or dashboard
// 			} else { // Authentication failed (4xx or 5xx status from better-auth)
// 				let errorBody = { error: "Authentication failed. Please check your credentials." };
// 				try {
// 					const body = await response.json();
// 					errorBody = { error: body.error || body.message || errorBody.error };
// 			} catch (e) {
// 					// Failed to parse JSON body, stick with the generic error or use response.statusText
// 					console.error("Failed to parse error response body:", e);
// 					if (response.statusText) {
// 						errorBody = { error: response.statusText };
// 					}
// 				}
// 				return fail(response.status, { ...errorBody, email: email.toLowerCase() });
// 			}

// 		} catch (e: any) {
// 			console.error("Authentication error:", e);
// 			// If 'e' is an error object from better-auth, it might have more specific details.
// 			// For now, returning a generic error.
// 			// Check if 'e' itself might be a Response or has a status
// 			if (e.status && typeof e.body === 'object') {
// 				return fail(e.status, { ...(e.body as object), email: email.toLowerCase() });
// 			}
// 			return fail(500, { error: e.message || "An unexpected error occurred during sign-in.", email: email.toLowerCase() });
// 		}
// 	}
// } satisfies Actions;

// This file is no longer needed as login is handled client-side.
// You can delete this file or leave it empty.
