/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  async rewrites() {
    return [
      // Next's file-system router does not reliably serve dot-prefixed app/
      // directories, so the MCP server card lives under app/api/ and is exposed
      // at its well-known path here. Both the extensionless path (SEP-1960) and
      // the .json path (SEP-1649) resolve to the same document.
      { source: '/.well-known/mcp', destination: '/api/well-known/mcp' },
      { source: '/.well-known/mcp.json', destination: '/api/well-known/mcp' },
    ];
  },
  async headers() {
    return [
      {
        // acceptmarkdown.com requires Vary: Accept on the negotiated responses.
        // It has to live here rather than in middleware — a Vary set on
        // NextResponse.next() is overwritten when Next writes its own router
        // Vary, while a config header merges into it. Scoped away from
        // immutable build assets so their cache keys stay one-dimensional.
        source: '/((?!_next/static|_next/image|api/md).*)',
        headers: [{ key: 'Vary', value: 'Accept' }],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
    ];
  },
};

export default nextConfig;
