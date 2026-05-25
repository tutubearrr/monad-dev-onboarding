'use client'

import { useState } from 'react'

interface DeploymentFormProps {
  template: string
  onDeploy: (formData: any) => void
  onBack: () => void
  isDeploying: boolean
}

export default function DeploymentForm({ template, onDeploy, onBack, isDeploying }: DeploymentFormProps) {
  const [formData, setFormData] = useState<any>({})
  const [gasEstimate, setGasEstimate] = useState<string>('Calculating...')

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
    // Simulate gas estimation
    setTimeout(() => {
      const randomGas = (Math.random() * 0.005 + 0.002).toFixed(4)
      setGasEstimate(`~${randomGas} MON`)
    }, 500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onDeploy(formData)
  }

  const renderFormFields = () => {
    switch (template) {
      case 'erc20':
        return (
          <>
            <div>
              <label className="block text-purple-200 mb-2 text-sm font-semibold">Token Name</label>
              <input
                type="text"
                placeholder="My Token"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-purple-400 focus:border-monad-primary focus:outline-none"
                onChange={(e) => handleChange('name', e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-purple-200 mb-2 text-sm font-semibold">Token Symbol</label>
              <input
                type="text"
                placeholder="MTK"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-purple-400 focus:border-monad-primary focus:outline-none"
                onChange={(e) => handleChange('symbol', e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-purple-200 mb-2 text-sm font-semibold">Initial Supply</label>
              <input
                type="number"
                placeholder="1000000"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-purple-400 focus:border-monad-primary focus:outline-none"
                onChange={(e) => handleChange('supply', e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-purple-200 mb-2 text-sm font-semibold">Decimals</label>
              <input
                type="number"
                placeholder="18"
                defaultValue="18"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-purple-400 focus:border-monad-primary focus:outline-none"
                onChange={(e) => handleChange('decimals', e.target.value)}
              />
            </div>
          </>
        )
      
      case 'erc721':
        return (
          <>
            <div>
              <label className="block text-purple-200 mb-2 text-sm font-semibold">Collection Name</label>
              <input
                type="text"
                placeholder="My NFT Collection"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-purple-400 focus:border-monad-primary focus:outline-none"
                onChange={(e) => handleChange('name', e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-purple-200 mb-2 text-sm font-semibold">Collection Symbol</label>
              <input
                type="text"
                placeholder="MNFT"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-purple-400 focus:border-monad-primary focus:outline-none"
                onChange={(e) => handleChange('symbol', e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-purple-200 mb-2 text-sm font-semibold">Base URI</label>
              <input
                type="text"
                placeholder="ipfs://..."
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-purple-400 focus:border-monad-primary focus:outline-none"
                onChange={(e) => handleChange('baseURI', e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-purple-200 mb-2 text-sm font-semibold">Max Supply</label>
              <input
                type="number"
                placeholder="10000"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-purple-400 focus:border-monad-primary focus:outline-none"
                onChange={(e) => handleChange('maxSupply', e.target.value)}
                required
              />
            </div>
          </>
        )

      case 'staking':
        return (
          <>
            <div>
              <label className="block text-purple-200 mb-2 text-sm font-semibold">Staking Token Address</label>
              <input
                type="text"
                placeholder="0x..."
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-purple-400 focus:border-monad-primary focus:outline-none"
                onChange={(e) => handleChange('stakingToken', e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-purple-200 mb-2 text-sm font-semibold">Reward Token Address</label>
              <input
                type="text"
                placeholder="0x..."
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-purple-400 focus:border-monad-primary focus:outline-none"
                onChange={(e) => handleChange('rewardToken', e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-purple-200 mb-2 text-sm font-semibold">APY (%)</label>
              <input
                type="number"
                placeholder="12"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-purple-400 focus:border-monad-primary focus:outline-none"
                onChange={(e) => handleChange('apy', e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-purple-200 mb-2 text-sm font-semibold">Lock Period (days)</label>
              <input
                type="number"
                placeholder="30"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-purple-400 focus:border-monad-primary focus:outline-none"
                onChange={(e) => handleChange('lockPeriod', e.target.value)}
                required
              />
            </div>
          </>
        )

      default:
        return (
          <div className="text-center py-8">
            <p className="text-purple-200">Template configuration coming soon...</p>
          </div>
        )
    }
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      <button
        onClick={onBack}
        className="mb-6 text-purple-300 hover:text-white transition-colors flex items-center"
      >
        ← Back to Templates
      </button>

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-white mb-2">
          Configure Your Contract
        </h2>
        <p className="text-purple-200 mb-8">
          Fill in the details below to customize your deployment
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {renderFormFields()}

          <div className="pt-6 border-t border-white/10">
            <div className="flex items-center justify-between mb-6">
              <span className="text-purple-200">Estimated Gas Cost:</span>
              <span className="text-2xl font-bold text-white">{gasEstimate}</span>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <span className="text-2xl mr-3">⚠️</span>
                <div>
                  <p className="text-yellow-200 text-sm font-semibold mb-1">Important</p>
                  <p className="text-yellow-200/80 text-sm">
                    Make sure you have enough MON in your wallet to cover gas fees. 
                    This is a testnet deployment - use test tokens only.
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isDeploying}
              className="w-full px-6 py-4 bg-gradient-to-r from-monad-primary to-monad-secondary rounded-lg text-white font-bold text-lg hover:shadow-lg hover:shadow-monad-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDeploying ? 'Deploying...' : 'Deploy Contract'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
