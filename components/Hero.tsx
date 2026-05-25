export default function Hero() {
  return (
    <div className="text-center py-16 px-4">
      <div className="inline-block mb-4 px-4 py-2 bg-monad-primary/20 border border-monad-primary/50 rounded-full text-monad-primary text-sm font-semibold">
        ✨ Built for Monad Ecosystem
      </div>
      
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
        Deploy Your First
        <br />
        <span className="bg-gradient-to-r from-monad-primary via-monad-secondary to-monad-accent bg-clip-text text-transparent">
          Smart Contract
        </span>
        <br />
        in Minutes
      </h1>
      
      <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
        No complex setup. No confusing commands. Just connect your wallet, 
        choose a template, and deploy. Perfect for developers new to Monad.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
          <div className="text-2xl font-bold text-white">5+</div>
          <div className="text-sm text-purple-300">Templates</div>
        </div>
        <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
          <div className="text-2xl font-bold text-white">&lt;2min</div>
          <div className="text-sm text-purple-300">Deploy Time</div>
        </div>
        <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
          <div className="text-2xl font-bold text-white">$0</div>
          <div className="text-sm text-purple-300">Platform Fee</div>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <a
          href="#templates"
          className="px-8 py-4 bg-gradient-to-r from-monad-primary to-monad-secondary rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-monad-primary/50 transition-all"
        >
          Get Started →
        </a>
        <a
          href="https://docs.monad.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-lg text-white font-semibold border border-white/20 hover:bg-white/20 transition-all"
        >
          View Docs
        </a>
      </div>
    </div>
  )
}
