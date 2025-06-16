import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db/index"; // your drizzle instance
 
export const auth = betterAuth({
    baseURL: process.env.VERCEL_URL || "http://localhost:3000",
    database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"
    }),
    trustedOrigins: [process.env.VERCEL_URL!],
    emailAndPassword: {  
        enabled: true
    },
     cookieCache: {
            enabled: true,
            maxAge: 5 * 60 // Cache duration in seconds
        }
});
