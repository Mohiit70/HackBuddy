import { HeroSection } from "@/components/hero-section"
import { Features } from "@/components/features"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <Features />
    </main>
  )
}

