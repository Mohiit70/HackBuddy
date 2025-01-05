import { Button } from "@/components/ui/button"
import { ArrowRight, Youtube } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-20">
      <div className="text-center space-y-8">
        <Link href="https://github.com/Mohiit70/HackBuddy" className="inline-block rounded-full bg-[#4ade80]/10 px-4 py-1.5 text-sm font-medium text-[#4ade80]">
          Start on GitHub
        </Link>
        <h1 className="text-5xl md:text-7xl font-bold text-white max-w-4xl mx-auto leading-tight">
          A better way to code with AI assistance
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Debug code, get improvement suggestions, and boost your productivity with our AI-powered coding companion.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-[#4ade80] text-[#023430] hover:bg-[#4ade80]/90">
            <Link href="/getting-started" className="flex items-center">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="text-black border-white/20">
            <Link href="#" className="flex items-center text-black">
              <Youtube className="mr-2 h-4 w-4" /> Watch Demo
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

