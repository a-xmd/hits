// TODO: fix csp
const ContentSecurityPolicy = ``

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/hits',
  /* async headers() {
    return [securityHeaders]
  }, */
}

module.exports = nextConfig
