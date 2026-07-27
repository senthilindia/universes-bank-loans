'use client'

import { useState } from 'react'

export default function ProcessSteps() {
  const steps = [
    { num: '01', title: 'Enquire', desc: 'Fill the form or call us with your loan requirements.' },
    { num: '02', title: 'Documents', desc: 'Share your KYC, income proof, and bank statements.' },
    { num: '03', title: 'Get Offers', desc: 'We compare offers from multiple banks & NBFCs for you.' },
    { num: '04', title: 'Disbursal', desc: 'Get funds disbursed in as fast as 48 hours.' },
  ]

  return (
    <section className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">4 simple steps to get your loan</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="text-center relative">
              <div className="w-16 h-16 gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-white font-heading font-bold text-xl">{step.num}</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-charcoal mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-brand-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
