import { Code2, Zap, GitBranch, Bot } from 'lucide-react'

export function Features() {
  return (
    <div id="features" className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard
          icon={<Code2 className="h-6 w-6" />}
          title="Smart Code Analysis"
          description="Get instant feedback on your code quality and potential improvements"
        />
        <FeatureCard
          icon={<Zap className="h-6 w-6" />}
          title="Real-time Debugging"
          description="Identify and fix bugs faster with AI-powered debugging suggestions"
        />
        <FeatureCard
          icon={<GitBranch className="h-6 w-6" />}
          title="Version Control"
          description="Seamless integration with your Git workflow"
        />
        <FeatureCard
          icon={<Bot className="h-6 w-6" />}
          title="AI Assistant"
          description="24/7 coding companion to help you write better code"
        />
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#4ade80]/50 transition-colors">
      <div className="h-12 w-12 rounded-lg bg-[#4ade80]/10 flex items-center justify-center text-[#4ade80] mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

