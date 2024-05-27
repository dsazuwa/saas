/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    loader: 'custom',
    loaderFile: './lib/loader.ts',
    domains: ['res.cloudinary.com'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  logging: {
    fetches: { fullUrl: true },
  },
};

export default nextConfig;
