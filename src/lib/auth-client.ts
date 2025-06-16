import { createAuthClient } from "better-auth/svelte"
import { env } from '$env/dynamic/private';
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: env.DATABASE_URL
})