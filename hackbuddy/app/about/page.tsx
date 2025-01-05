import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-20">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">About HackBuddy</h1>
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <p>
              HackBuddy aims to revolutionize the coding experience by providing an AI-powered assistant that helps developers write better code, debug faster, and learn continuously. We believe in the power of AI to augment human creativity and productivity in software development.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-2xl text-white">The Team</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <p>
              I am a passionate solo developer participating in the MLH Hackathon, committed to crafting an innovative coding companion for developers of all skill levels. Combining expertise in software engineering, a keen interest in machine learning, and a focus on intuitive design, this project is driven by the vision to solve real-world challenges faced by modern developers.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Our Technology</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <p>
              HackBuddy leverages cutting-edge AI technology, including the Gemini API, to provide intelligent code analysis, suggestions, and real-time assistance. Our platform is built with modern web technologies like React and Next.js, ensuring a smooth and responsive user experience.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

