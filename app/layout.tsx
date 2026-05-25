import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Monad Developer Onboarding | Deploy Smart Contracts in Minutes',
  description: 'One-click smart contract deployment tool for Monad ecosystem. Deploy ERC20, ERC721, and custom contracts with gas estimation and testnet faucet integration.',
  keywords: ['monad', 'web3', 'smart contracts', 'deployment', 'developer tools', 'blockchain'],
  authors: [{ name: '22bearrrr', url: 'https://github.com/tutubearrr' }],
  openGraph: {
    title: 'Monad Developer Onboarding',
    description: 'Deploy your first smart contract in minutes',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
