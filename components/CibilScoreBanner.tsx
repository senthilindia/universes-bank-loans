'use client'

import { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

export default function CibilScoreBanner() {
  const [score, setScore] = useState(750)

  const scoreColor = score >= 750 ? '#22c55e' : score >= 650 ? '#eab308' : '#ef4444'
  const scoreLabel = score >= 750 ? 'Excellent' : score >= 650 ? 'Good' : 'Needs Improvement'

  const circumference = 2 * Math.PI * 45
  const offset = circumference - (score / 900) * circumference

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Top decorative wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0 0H1440V30C1440 30 1200 60 720 60C240 60 0 30 0 30V0Z" fill="#FCF8F1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <ScrollReveal animation="fadeLeft">
            <div>
              <span className="inline-flex items-center gap-2 bg-brand-50 text-brand-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-brand-100">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Free Credit Check
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 leading-tight">
                Know Your <span className="gradient-text">CIBIL Score</span> Before You Apply
              </h2>
              <p className="text-gray-600 text-lg mb-6 max-w-lg">
                Your credit score determines your loan eligibility and interest rate. Check it for free and improve your chances of approval.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: '✓', text: '100% free — no hidden charges' },
                  { icon: '✓', text: 'Instant score display' },
                  { icon: '✓', text: 'Personalized loan recommendations' },
                  { icon: '✓', text: 'No impact on your credit score' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{item.icon}</span>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
              <a
                href="#enquiry"
                className="inline-flex items-center gap-2 bg-brand-800 text-white font-semibold px-8 py-4 rounded-xl text-base hover:bg-brand-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Check My Score
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </ScrollReveal>

          {/* Right: Interactive gauge card */}
          <ScrollReveal animation="fadeRight" delay={200}>
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-50 to-cream-100 rounded-3xl -z-10" />

              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10">
                {/* Gauge */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-48 h-48">
                    <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                      {/* Background circle */}
                      <circle
                        cx="50" cy="50" r="45"
                        fill="none"
                        stroke="#f1f5f9"
                        strokeWidth="8"
                      />
                      {/* Score arc */}
                      <circle
                        cx="50" cy="50" r="45"
                        fill="none"
                        stroke={scoreColor}
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        className="gauge-animate transition-all duration-1000"
                      />
                    </svg>
                    {/* Center text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-5xl font-heading font-bold" style={{ color: scoreColor }}>
                        {score}
                      </span>
                      <span className="text-sm font-medium text-gray-500 mt-1">{scoreLabel}</span>
                    </div>
                  </div>
                </div>

                {/* Score range bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span>300</span>
                    <span>900</span>
                  </div>
                  <div className="h-2 rounded-full bg-gradient-to-r from-red-400 via-yellow-400 to-green-400" />
                </div>

                {/* Score categories */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className={`py-2 rounded-lg ${score < 650 ? 'bg-red-50 text-red-700 font-semibold' : 'bg-gray-50 text-gray-400'}`}>
                    <div className="font-bold">300–649</div>
                    <div>Poor</div>
                  </div>
                  <div className={`py-2 rounded-lg ${score >= 650 && score < 750 ? 'bg-yellow-50 text-yellow-700 font-semibold' : 'bg-gray-50 text-gray-400'}`}>
                    <div className="font-bold">650–749</div>
                    <div>Good</div>
                  </div>
                  <div className={`py-2 rounded-lg ${score >= 750 ? 'bg-green-50 text-green-700 font-semibold' : 'bg-gray-50 text-gray-400'}`}>
                    <div className="font-bold">750–900</div>
                    <div>Excellent</div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-bounce-subtle">
                Free
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
