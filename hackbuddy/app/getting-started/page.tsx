'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Send } from 'lucide-react'

export default function GettingStarted() {
  const [code, setCode] = useState('')
  const [question, setQuestion] = useState('')
  const [response, setResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, question }),
      })
      const data = await res.json()
      setResponse(data.response)
    } catch (error) {
      console.error('Error:', error)
      setResponse('An error occurred while processing your request.')
    }
    setIsLoading(false)
  }

  return (
    <div className="container mx-auto px-4 pt-32 pb-20">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">HackBuddy AI Assistant</h1>
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/5 border-white/10 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Ask a Coding Question</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Textarea 
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Paste your code here (optional)..."
                className="min-h-[200px] bg-white/5 border-white/10 text-white"
              />
              <Textarea 
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask your coding question here..."
                className="min-h-[100px] bg-white/5 border-white/10 text-white"
              />
              <Button type="submit" className="bg-[#4ade80] text-[#023430] hover:bg-[#4ade80]/90" disabled={isLoading}>
                <Send className="mr-2 h-4 w-4" />
                {isLoading ? 'Processing...' : 'Ask HackBuddy'}
              </Button>
            </form>
          </CardContent>
        </Card>
        
        {response && (
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <Bot className="h-6 w-6 text-[#4ade80]" />
                HackBuddy Response
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-gray-300 whitespace-pre-wrap">
                {response}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

