/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ipfs.io', 'gateway.pinata.cloud'],
  },
  env: {
    NEXT_PUBLIC_MONAD_TESTNET_RPC: process.env.NEXT_PUBLIC_MONAD_TESTNET_RPC,
    NEXT_PUBLIC_MONAD_MAINNET_RPC: process.env.NEXT_PUBLIC_MONAD_MAINNET_RPC,
    NEXT_PUBLIC_EXPLORER_URL: process.env.NEXT_PUBLIC_EXPLORER_URL,
  },
}

module.exports = nextConfig
