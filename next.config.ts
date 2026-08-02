import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // On Vercel the app is built with the stock Next.js compiler, which also type
  // checks the Cloudflare-only sources (`worker/`, `db/`, `vite.config.ts`).
  // Those files rely on Workers-runtime types, so Vercel builds use a tsconfig
  // that leaves them out. The Sites/vinext build is unaffected.
  ...(process.env.VERCEL ? { typescript: { tsconfigPath: "tsconfig.vercel.json" } } : {}),
};

export default nextConfig;
