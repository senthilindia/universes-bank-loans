'use client'

import { useState, useRef, useEffect, FormEvent } from 'react'
import intents from '@/data/chatbot-intents.json'
import { whatsappLink, callLink } from '@/lib/constants'

interface Message {
  role: 'bot' | 'user'
  content: string
  quickReplies?: string[]
}

function findReply(input: string): { reply: string; quickReplies?: string[] } {
  const lower = input.toLowerCase().trim()

  // Exact match first
  for (const intent of intents) {
    if (intent.triggers.some((t) => lower === t)) {
      return { reply: intent.reply, quickReplies: intent.quickReplies }
    }
  }

  // Partial match
  for (const intent of intents) {
    if (intent.triggers.some((t) => lower.includes(t))) {
      return { reply: intent.reply, quickReplies: intent.quickReplies }
    }
  }

  // Word-level match for short inputs
  const words = lower.split(/\s+/)
  for (const intent of intents) {
    for (const trigger of intent.triggers) {
      if (words.some(w => trigger.includes(w) && w.length > 2)) {
        return { reply: intent.reply, quickReplies: intent.quickReplies }
      }
    }
  }

  const fallback = intents.find((i) => i.intent === 'fallback')
  return { reply: fallback?.reply || "I'm not sure about that. Please call us at +91-95854 89999.", quickReplies: fallback?.quickReplies }
}

function quickReplyToAction(reply: string): { type: 'link' | 'input'; value: string } | null {
  const lower = reply.toLowerCase()
  if (lower.includes('whatsapp') || lower.includes('talk to an agent') || lower.includes('talk to a human')) {
    return { type: 'link', value: whatsappLink('chatbot') }
  }
  if (lower.includes('call now') || lower.includes('call instead')) {
    return { type: 'link', value: callLink() }
  }
  if (lower.includes('open whatsapp')) return { type: 'link', value: whatsappLink('chatbot') }
  if (lower.includes('visit office') || lower.includes('get directions')) {
    return { type: 'link', value: 'https://maps.google.com/?q=105/1+Annapurna+Layout+New+Siddhapudur+Coimbatore+641044' }
  }
  if (lower.includes('check cibil') || lower.includes('cibil score')) {
    return { type: 'link', value: 'https://www.mycibil.com/' }
  }
  if (lower.includes('open emi calculator') || lower.includes('calculate emi')) {
    return { type: 'link', value: '/#emi' }
  }
  if (lower.includes('go to form') || lower.includes('start application') || lower.includes('apply now') || lower.includes('check my eligibility') || lower.includes('get a quote') || lower.includes('get started')) {
    return { type: 'link', value: '/#enquiry' }
  }

  // Loan-specific quick replies
  if (lower.includes('business loan')) return { type: 'input', value: 'business loan eligibility' }
  if (lower.includes('home loan')) return { type: 'input', value: 'home loan eligibility' }
  if (lower.includes('car loan')) return { type: 'input', value: 'car loan eligibility' }
  if (lower.includes('cgtmse')) return { type: 'input', value: 'cgtmse loan' }
  if (lower.includes('collateral')) return { type: 'input', value: 'collateral free loan' }
  if (lower.includes('personal loan')) return { type: 'input', value: 'personal loan' }
  if (lower.includes('gold loan')) return { type: 'input', value: 'gold loan' }
  if (lower.includes('education loan')) return { type: 'input', value: 'education loan' }
  if (lower.includes('lap') || lower.includes('property loan') || lower.includes('home loan transfer') || lower.includes('balance transfer')) return { type: 'input', value: lower.includes('transfer') ? 'balance transfer' : 'loan against property' }
  if (lower.includes('od') || lower.includes('cc') || lower.includes('working capital')) return { type: 'input', value: 'working capital loan' }
  if (lower.includes('mudra')) return { type: 'input', value: 'mudra loan' }
  if (lower.includes('nri')) return { type: 'input', value: 'nri loan' }
  if (lower.includes('compare') || lower.includes('rates') || lower.includes('interest')) return { type: 'input', value: 'interest rates' }
  if (lower.includes('documents') || lower.includes('what do i need')) return { type: 'input', value: 'documents required' }
  if (lower.includes('process') || lower.includes('how')) return { type: 'input', value: 'how to apply' }
  if (lower.includes('contact') || lower.includes('address') || lower.includes('location')) return { type: 'input', value: 'contact' }
  if (lower.includes('charges') || lower.includes('fee') || lower.includes('cost')) return { type: 'input', value: 'processing fee' }
  if (lower.includes('prepay') || lower.includes('foreclose')) return { type: 'input', value: 'prepayment' }
  if (lower.includes('disbursal') || lower.includes('fast') || lower.includes('urgent')) return { type: 'input', value: 'urgent loan' }
  if (lower.includes('tax')) return { type: 'input', value: 'tax benefit' }
  if (lower.includes('startup') || lower.includes('new business')) return { type: 'input', value: 'startup loan' }
  if (lower.includes('guarantor') || lower.includes('co-applicant')) return { type: 'input', value: 'guarantor' }
  if (lower.includes('bank') || lower.includes('lender') || lower.includes('nbfc')) return { type: 'input', value: 'partner banks' }
  if (lower.includes('services') || lower.includes('our services')) return { type: 'input', value: 'about universes' }

  return null
}

const TOP_QUESTIONS = [
  'Business Loan',
  'Home Loan',
  'Car Loan',
  'CGTMSE Loan',
  'Interest Rates',
  'Talk to a human',
]

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      content: "Hello! Welcome to Universes — Coimbatore's trusted loan advisory.\n\nI can help you with business loans, home loans, car loans, CGTMSE, and more.\n\nWhat would you like to know?",
      quickReplies: TOP_QUESTIONS,
    },
  ])
  const [input, setInput] = useState('')
  const messagesEnd = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  function handleQuickReply(reply: string) {
    const lower = reply.toLowerCase()
    if (lower === 'talk to a human') {
      window.open(whatsappLink('chatbot'), '_blank')
      return
    }

    setMessages((prev) => [...prev, { role: 'user', content: reply }])
    setIsTyping(true)

    setTimeout(() => {
      const { reply: botReply, quickReplies } = findReply(lower)
      setIsTyping(false)
      setMessages((prev) => [...prev, { role: 'bot', content: botReply, quickReplies }])
    }, 500 + Math.random() * 400)
  }

  function handleSend(e: FormEvent) {
    e.preventDefault()
    if (!input.trim()) return
    const msg = input.trim()
    setInput('')

    setMessages((prev) => [...prev, { role: 'user', content: msg }])
    setIsTyping(true)

    setTimeout(() => {
      const { reply, quickReplies } = findReply(msg)
      setIsTyping(false)
      setMessages((prev) => [...prev, { role: 'bot', content: reply, quickReplies }])
    }, 600 + Math.random() * 400)
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isOpen ? 'bg-gray-700 hover:bg-gray-800' : 'bg-brand-800 hover:bg-brand-900'
        }`}
        aria-label={isOpen ? 'Close chatbot' : 'Open chatbot'}
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
        )}
        {/* Pulse animation when closed */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping" />
        )}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="absolute bottom-20 left-0 w-[380px] max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col" style={{ height: '520px' }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-800 to-brand-700 p-4 text-white flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-semibold text-sm">Universes Assistant</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <p className="text-xs text-white/70">Online now • Coimbatore</p>
                </div>
              </div>
              <a href={whatsappLink('chatbot')} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/15 rounded-lg flex items-center justify-center hover:bg-white/25 transition" title="Chat on WhatsApp">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50/50">
            {messages.map((msg, i) => (
              <div key={i}>
                <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'bot' && (
                    <div className="w-7 h-7 bg-brand-100 rounded-full flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-brand-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                    </div>
                  )}
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                    msg.role === 'user'
                      ? 'bg-brand-800 text-white rounded-br-sm'
                      : 'bg-white text-gray-800 rounded-bl-sm shadow-sm border border-gray-100'
                  }`}>
                    {msg.content}
                  </div>
                </div>
                {msg.quickReplies && msg.role === 'bot' && i === messages.length - 1 && !isTyping && (
                  <div className="flex flex-wrap gap-1.5 mt-2 ml-9">
                    {msg.quickReplies.map((qr, j) => {
                      const action = quickReplyToAction(qr)
                      if (action?.type === 'link') {
                        return (
                          <a key={j} href={action.value} target="_blank" rel="noopener noreferrer" className="text-xs bg-brand-50 text-brand-800 px-3 py-1.5 rounded-full hover:bg-brand-100 transition font-medium border border-brand-200">
                            {qr}
                          </a>
                        )
                      }
                      return (
                        <button key={j} onClick={() => handleQuickReply(qr)} className="text-xs bg-brand-50 text-brand-800 px-3 py-1.5 rounded-full hover:bg-brand-100 transition font-medium border border-brand-200">
                          {qr}
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
            ))}
            {/* Typing indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 ml-9">
                <div className="bg-white rounded-2xl rounded-bl-sm shadow-sm border border-gray-100 px-4 py-3 flex gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEnd} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-100 bg-white flex-shrink-0">
            <form onSubmit={handleSend} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about loans, eligibility, rates..."
                className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-800 focus:border-transparent bg-gray-50"
              />
              <button type="submit" disabled={!input.trim()} className="bg-brand-800 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-brand-900 transition disabled:opacity-50 disabled:cursor-not-allowed">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </form>
            <div className="flex justify-center mt-2 gap-3">
              <a href={whatsappLink('chatbot')} target="_blank" rel="noopener noreferrer" className="text-[10px] text-gray-400 hover:text-[#25D366] transition flex items-center gap-1">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Continue on WhatsApp
              </a>
              <a href={callLink()} className="text-[10px] text-gray-400 hover:text-brand-800 transition flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call now
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
