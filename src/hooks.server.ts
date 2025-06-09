import { auth } from "$lib/server/auth"; // path to your auth file
import { svelteKitHandler } from "better-auth/svelte-kit";
import { redirect } from "@sveltejs/kit";

const protectedRoutes = ["/dashboard","/"]; // Add any other routes that need protection


export async function handle({ event, resolve }) {
	const session = await auth.api.getSession({headers:event.request.headers});

	if (protectedRoutes.includes(event.url.pathname)) {
		if (!session?.user) {
			throw redirect(303, "/auth/login");
		}
	}

	return svelteKitHandler({ event, resolve, auth });
}