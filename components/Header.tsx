'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)

  const connectWallet = async () => {
    if (typeof window.ethereum === 'undefined') {
      alert('Please install MetaMask to use this app')
      return
    }

    setIsConnecting(true)
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      setWalletAddress(accounts[0])
    } catch (error) {
      console.error('Failed to connect wallet:', error)
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnectWallet = () => {
    setWalletAddress(null)
  }

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  return (
    <header className="border-b border-purple-500/20 bg-monad-dark/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-monad-primary to-monad-secondary rounded-lg flex items-center justify-center">
              <span className="text-2xl">🚀</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Monad Onboarding</h1>
              <p className="text-xs text-purple-300">Deploy in Minutes</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://docs.monad.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-white transition-colors text-sm"
            >
              Docs
            </a>
            <a
              href="https://github.com/tutubearrr/monad-dev-onboarding"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-white transition-colors text-sm"
            >
              GitHub
            </a>
            
            {walletAddress ? (
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-sm">
                  {formatAddress(walletAddress)}
                </div>
                <button
                  onClick={disconnectWallet}
                  className="px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 hover:bg-red-500/30 transition-colors text-sm"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <button
                onClick={connectWallet}
                disabled={isConnecting}
                className="px-6 py-2 bg-gradient-to-r from-monad-primary to-monad-secondary rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-monad-primary/50 transition-all disabled:opacity-50"
              >
                {isConnecting ? 'Connecting...' : 'Connect Wallet'}
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
