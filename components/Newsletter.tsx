'use client'

import { useState, FormEvent } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="py-14 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="font-heading font-bold text-xl md:text-2xl text-charcoal mb-2">
            Get exclusive access to simplified Personal Finance Information
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Join our Newsletter for the latest updates, tips, and offers
          </p>

          {submitted ? (
            <div className="bg-green-50 text-green-700 rounded-xl px-6 py-4 text-sm font-medium">
              Thank you for subscribing! We&apos;ll keep you updated.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-0 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-cream-100 border border-gray-200 border-r-0 rounded-l-xl px-5 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-800/20 focus:border-brand-800 transition"
              />
              <button
                type="submit"
                className="gradient-brand text-white px-5 py-3 rounded-r-xl hover:opacity-90 transition flex items-center justify-center"
                aria-label="Subscribe"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
