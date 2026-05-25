interface Template {
  id: string
  name: string
  description: string
  icon: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  gasEstimate: string
  features: string[]
}

const templates: Template[] = [
  {
    id: 'erc20',
    name: 'ERC20 Token',
    description: 'Create your own fungible token with customizable supply and decimals',
    icon: '🪙',
    difficulty: 'Beginner',
    gasEstimate: '~0.002 MON',
    features: ['Mintable', 'Burnable', 'Pausable', 'Access Control'],
  },
  {
    id: 'erc721',
    name: 'ERC721 NFT',
    description: 'Launch an NFT collection with metadata and minting functionality',
    icon: '🖼️',
    difficulty: 'Beginner',
    gasEstimate: '~0.003 MON',
    features: ['Enumerable', 'URI Storage', 'Royalties', 'Whitelist'],
  },
  {
    id: 'erc1155',
    name: 'ERC1155 Multi-Token',
    description: 'Deploy a multi-token contract for gaming or mixed collections',
    icon: '🎮',
    difficulty: 'Intermediate',
    gasEstimate: '~0.004 MON',
    features: ['Batch Minting', 'Multiple Types', 'Efficient', 'Flexible'],
  },
  {
    id: 'staking',
    name: 'Staking Contract',
    description: 'Enable token holders to stake and earn rewards over time',
    icon: '💎',
    difficulty: 'Intermediate',
    gasEstimate: '~0.005 MON',
    features: ['Flexible APY', 'Lock Periods', 'Reward Distribution', 'Emergency Withdraw'],
  },
  {
    id: 'multisig',
    name: 'Multisig Wallet',
    description: 'Secure treasury management with multiple signature requirements',
    icon: '🔐',
    difficulty: 'Advanced',
    gasEstimate: '~0.006 MON',
    features: ['Multiple Owners', 'Threshold Signatures', 'Transaction Queue', 'Revocable'],
  },
  {
    id: 'custom',
    name: 'Custom Contract',
    description: 'Start from a blank template and build your own logic',
    icon: '⚡',
    difficulty: 'Advanced',
    gasEstimate: 'Variable',
    features: ['Full Control', 'No Restrictions', 'OpenZeppelin Base', 'Best Practices'],
  },
]

interface TemplateSelectorProps {
  onSelect: (templateId: string) => void
}

export default function TemplateSelector({ onSelect }: TemplateSelectorProps) {
  return (
    <div id="templates" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Choose Your Template
        </h2>
        <p className="text-purple-200 text-lg">
          All templates are production-ready and based on audited OpenZeppelin contracts
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-monad-primary/50 hover:shadow-lg hover:shadow-monad-primary/20 transition-all cursor-pointer group"
            onClick={() => onSelect(template.id)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-5xl">{template.icon}</div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                template.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-300 border border-green-500/50' :
                template.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/50' :
                'bg-red-500/20 text-red-300 border border-red-500/50'
              }`}>
                {template.difficulty}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-monad-primary transition-colors">
              {template.name}
            </h3>
            
            <p className="text-purple-200 mb-4 text-sm">
              {template.description}
            </p>

            <div className="mb-4 pb-4 border-b border-white/10">
              <div className="flex items-center justify-between text-sm">
                <span className="text-purple-300">Est. Gas:</span>
                <span className="text-white font-semibold">{template.gasEstimate}</span>
              </div>
            </div>

            <div className="space-y-2">
              {template.features.map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-purple-200">
                  <span className="text-green-400 mr-2">✓</span>
                  {feature}
                </div>
              ))}
            </div>

            <button className="w-full mt-6 px-4 py-3 bg-gradient-to-r from-monad-primary to-monad-secondary rounded-lg text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
              Deploy This Template →
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
