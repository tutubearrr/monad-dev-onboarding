const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Deploy contracts in under 2 minutes with our optimized pipeline',
  },
  {
    icon: '🔒',
    title: 'Battle-Tested',
    description: 'All templates use audited OpenZeppelin contracts as foundation',
  },
  {
    icon: '💰',
    title: 'Gas Optimized',
    description: 'Smart gas estimation and optimization to save you money',
  },
  {
    icon: '🎓',
    title: 'Learn as You Build',
    description: 'Interactive tutorials and best practices built into every step',
  },
  {
    icon: '🌐',
    title: 'Testnet Ready',
    description: 'Integrated faucet for instant test tokens - no waiting',
  },
  {
    icon: '📊',
    title: 'Real-time Tracking',
    description: 'Live deployment status with block explorer integration',
  },
]

export default function Features() {
  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Why Developers Love This Tool
        </h2>
        <p className="text-purple-200 text-lg">
          Everything you need to go from idea to deployed contract
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-monad-primary/50 transition-all"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-purple-200 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-monad-primary/20 to-monad-secondary/20 border border-monad-primary/30 rounded-xl p-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">
              Need Help Getting Started?
            </h3>
            <p className="text-purple-200">
              Join our community and get support from experienced developers
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://discord.gg/monad"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white font-semibold border border-white/20 transition-all"
            >
              Join Discord
            </a>
            <a
              href="https://docs.monad.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-monad-primary to-monad-secondary rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-monad-primary/50 transition-all"
            >
              View Docs
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
