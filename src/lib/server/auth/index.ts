import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db/index"; // your drizzle instance
 
export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"
    }),
    trustedOrigins: [process.env.VERCEL_URL!,"https://videogen-git-main-janardhan-polles-projects.vercel.app"],
    emailAndPassword: {  
        enabled: true
    },
     cookieCache: {
            enabled: true,
            maxAge: 5 * 60 // Cache duration in seconds
        }
});
