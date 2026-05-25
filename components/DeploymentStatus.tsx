interface DeploymentStatusProps {
  status: {
    status: 'pending' | 'deploying' | 'success' | 'error'
    message: string
    contractAddress?: string
    txHash?: string
    explorerUrl?: string
  }
  onReset: () => void
}

export default function DeploymentStatus({ status, onReset }: DeploymentStatusProps) {
  const renderStatusIcon = () => {
    switch (status.status) {
      case 'pending':
        return <div className="text-6xl animate-pulse">⏳</div>
      case 'deploying':
        return <div className="text-6xl animate-spin">🔄</div>
      case 'success':
        return <div className="text-6xl">✅</div>
      case 'error':
        return <div className="text-6xl">❌</div>
    }
  }

  const renderStatusColor = () => {
    switch (status.status) {
      case 'pending':
        return 'border-yellow-500/50 bg-yellow-500/10'
      case 'deploying':
        return 'border-blue-500/50 bg-blue-500/10'
      case 'success':
        return 'border-green-500/50 bg-green-500/10'
      case 'error':
        return 'border-red-500/50 bg-red-500/10'
    }
  }

  return (
    <div className="max-w-2xl mx-auto py-16">
      <div className={`bg-white/5 backdrop-blur-sm border rounded-xl p-12 text-center ${renderStatusColor()}`}>
        <div className="mb-6">
          {renderStatusIcon()}
        </div>

        <h2 className="text-3xl font-bold text-white mb-4">
          {status.status === 'success' ? 'Deployment Successful!' :
           status.status === 'error' ? 'Deployment Failed' :
           'Deploying Contract...'}
        </h2>

        <p className="text-purple-200 text-lg mb-8">
          {status.message}
        </p>

        {status.status === 'deploying' && (
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-monad-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-3 h-3 bg-monad-secondary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-3 h-3 bg-monad-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
            <p className="text-purple-300 text-sm">
              This may take a few moments. Please don't close this window.
            </p>
          </div>
        )}

        {status.txHash && (
          <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
            <p className="text-purple-300 text-sm mb-2">Transaction Hash:</p>
            <p className="text-white font-mono text-sm break-all">{status.txHash}</p>
          </div>
        )}

        {status.contractAddress && (
          <div className="mb-8 p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/50">
            <p className="text-green-300 text-sm mb-3 font-semibold">Contract Address:</p>
            <p className="text-white font-mono text-lg break-all mb-4">{status.contractAddress}</p>
            
            {status.explorerUrl && (
              <a
                href={status.explorerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white font-semibold transition-all"
              >
                View on Explorer →
              </a>
            )}
          </div>
        )}

        {status.status === 'success' && (
          <div className="space-y-4 mb-8">
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h3 className="text-white font-semibold mb-3">Next Steps:</h3>
              <ul className="text-left text-purple-200 text-sm space-y-2">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">1.</span>
                  <span>Verify your contract on the block explorer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">2.</span>
                  <span>Add the contract address to your wallet</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">3.</span>
                  <span>Share your contract with the community</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">4.</span>
                  <span>Start building your dApp!</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        <div className="flex justify-center gap-4">
          <button
            onClick={onReset}
            className="px-8 py-3 bg-gradient-to-r from-monad-primary to-monad-secondary rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-monad-primary/50 transition-all"
          >
            Deploy Another Contract
          </button>
          
          {status.status === 'success' && (
            <a
              href="https://docs.monad.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white/10 rounded-lg text-white font-semibold border border-white/20 hover:bg-white/20 transition-all"
            >
              Read Docs
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
