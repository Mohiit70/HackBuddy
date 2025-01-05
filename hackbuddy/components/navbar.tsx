import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-[#023430]/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold text-white">
          HackBuddy
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link href="/#features" className="text-gray-300 hover:text-white">
            Features
          </Link>
          <Link href="/getting-started" className="text-gray-300 hover:text-white">
            Getting Started
          </Link>
          <Button variant="secondary" className="bg-[#4ade80] text-[#023430] hover:bg-[#4ade80]/90">
            <Link href="https://github.com/Mohiit70/HackBuddy">GitHub Repo</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

