/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  const repo = 'portfolio'
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

const nextConfig = {
    output: 'export',
    assetPrefix: assetPrefix,
    basePath: basePath,
    images: {
      unoptimized: true,
    },
}

module.exports = nextConfig
