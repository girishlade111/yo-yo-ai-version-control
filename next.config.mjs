/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Set for GitHub Pages project-subpath hosting
  // (https://girishlade111.github.io/yo-yo-ai-version-control/).
  // Remove when deploying to a root domain (Vercel, Cloudflare Pages, custom domain).
  basePath: "/yo-yo-ai-version-control",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig