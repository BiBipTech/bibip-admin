import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    /**
     * Specify your server-side environment variables schema here. This way you can ensure the app
     * isn't built with invalid env vars.
     */
    server: {
        NODE_ENV: z
            .enum(["development", "test", "production"])
            .default("development"),
        NEXTAUTH_SECRET: process.env.NODE_ENV === "production" ?
            z.string().min(1) : z.string().min(1).optional(),
        NEXTAUTH_URL: z.preprocess(
            // This makes Vercel deployments not fail if you don't set NEXTAUTH_URL
            // Since NextAuth.js automatically uses the VERCEL_URL if present.
            (str) => (process.env.VERCEL_URL ? process.env.VERCEL_URL : str),
            // VERCEL_URL doesn't include `https` so it cant be validated as a URL
            process.env.VERCEL ? z.string().min(1) : z.string().url(),
        ),
        // Add `.min(1) on ID and SECRET if you want to make sure they're not empty
        COGNITO_CLIENT_ID: z.string(),
        COGNITO_CLIENT_SECRET: z.string(),
        BIBIP_ADMIN_PANEL_API_ENDPOINT: z.string().url(),
    },

    /**
     * Specify your client-side environment variables schema here. This way you can ensure the app
     * isn't built with invalid env vars. To expose them to the client, prefix them with
     * `NEXT_PUBLIC_`.
     */
    client: {
        NEXT_PUBLIC_AWS_APPSYNC_GRAPHQL_ENDPOINT: z.string(),
        NEXT_PUBLIC_AWS_APPSYNC_API_KEY: z.string(),
        NEXT_PUBLIC_BIBIP_S3_BUCKET_API_ENDPOINT: z.string().url(),
    },

    /**
     * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
     * middlewares) or client-side so we need to destruct manually.
     */
    runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        COGNITO_CLIENT_ID: process.env.COGNITO_CLIENT_ID,
        COGNITO_CLIENT_SECRET: process.env.COGNITO_CLIENT_SECRET,
        BIBIP_ADMIN_PANEL_API_ENDPOINT: process.env.BIBIP_ADMIN_PANEL_API_ENDPOINT,
        NEXT_PUBLIC_AWS_APPSYNC_GRAPHQL_ENDPOINT: process.env.NEXT_PUBLIC_AWS_APPSYNC_GRAPHQL_ENDPOINT,
        NEXT_PUBLIC_AWS_APPSYNC_API_KEY: process.env.NEXT_PUBLIC_AWS_APPSYNC_API_KEY,
        NEXT_PUBLIC_BIBIP_S3_BUCKET_API_ENDPOINT: process.env.NEXT_PUBLIC_BIBIP_S3_BUCKET_API_ENDPOINT,
    },
    /**
     * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
     * This is especially useful for Docker builds.
     */
    skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});