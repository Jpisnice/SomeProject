import { authClient } from "$lib/auth-client";

export const session = authClient.useSession();
