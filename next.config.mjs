/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await
import ("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
    reactStrictMode: true,
    // eslint-disable-next-line @typescript-eslint/require-await
    redirects: async() => [{
        source: "/",
        destination: "/dashboard",
        permanent: true,
    }, ],
    images: {
        remotePatterns: [{
                hostname: "ui-avatars.com",
                protocol: "https",
            },
            {
                hostname: "bibip-app-storage-8f58d563204655-staging.s3.eu-central-1.amazonaws.com",
                protocol: "https",
            }
        ]
    },
    /**
     * If you are using `appDir` then you must comment the below `i18n` config out.
     *
     * @see https://github.com/vercel/next.js/issues/41980
     */
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
};

export default config;