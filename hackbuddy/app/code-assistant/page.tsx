'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Bot, Send } from 'lucide-react'

export default function CodeAssistant() {
  const [code, setCode] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you'll integrate with Gemini API once the key is added
    setResponse("AI response will appear here once API key is configured...")
  }

  return (
    <div className="container mx-auto px-4 pt-32 pb-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Code Assistant</h1>
        <div className="grid gap-8">
          <Card className="p-6 bg-white/5 border-white/10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Textarea 
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Paste your code here..."
                className="min-h-[200px] bg-white/5 border-white/10 text-white"
              />
              <Button type="submit" className="bg-[#4ade80] text-[#023430] hover:bg-[#4ade80]/90">
                <Send className="mr-2 h-4 w-4" />
                Analyze Code
              </Button>
            </form>
          </Card>
          
          {response && (
            <Card className="p-6 bg-white/5 border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-[#4ade80]/10 flex items-center justify-center text-[#4ade80]">
                  <Bot className="h-4 w-4" />
                </div>
                <h2 className="text-xl font-semibold text-white">AI Response</h2>
              </div>
              <div className="text-gray-300 whitespace-pre-wrap">
                {response}
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

