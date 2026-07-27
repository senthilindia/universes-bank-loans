'use client'

import { useState, FormEvent } from 'react'
import { whatsappLink } from '@/lib/constants'

const loanTypes = [
  'Business Loan',
  'Home Loan',
  'Car Loan',
  'CGTMSE Loan',
  'Loan Against Property',
  'Collateral-Free Loan',
  'OD/CC/DLOD',
  'Personal Loan',
  'Gold Loan',
  'Education Loan',
  'Working Capital Loan',
  'Home Loan Balance Transfer',
  'Other',
]

export default function EnquiryForm({ preselectedType }: { preselectedType?: string }) {
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [loanType, setLoanType] = useState(preselectedType || '')
  const [loanAmount, setLoanAmount] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, mobile, loanType, loanAmount, message }),
      })

      if (res.ok) {
        setStatus('sent')
        window.location.href = '/thank-you'
      } else {
        const data = await res.json().catch(() => ({}))
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="font-heading font-bold text-xl text-charcoal mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-6">We&apos;ve received your enquiry. Our team will contact you within 24 hours.</p>
        <a href={whatsappLink()} className="btn-whatsapp inline-block">Continue on WhatsApp</a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
      <h3 className="font-heading font-bold text-xl text-charcoal mb-1">Get a Free Loan Consultation</h3>
      <p className="text-sm text-gray-500 mb-6">Fill the form and our expert will call you within 24 hours.</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-800 focus:border-transparent bg-gray-50" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number *</label>
          <input type="tel" required value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Enter your 10-digit mobile number" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-800 focus:border-transparent bg-gray-50" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Loan Type *</label>
          <select required value={loanType} onChange={(e) => setLoanType(e.target.value)} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-800 focus:border-transparent bg-gray-50">
            <option value="">Select loan type</option>
            {loanTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount (approx.)</label>
          <input type="text" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} placeholder="e.g. 10 Lakh" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-800 focus:border-transparent bg-gray-50" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message (optional)</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={3} placeholder="Tell us about your requirements..." className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-800 focus:border-transparent bg-gray-50 resize-none" />
        </div>

        {errorMsg && <p className="text-red-600 text-sm">{errorMsg}</p>}

        <button type="submit" disabled={status === 'sending'} className="btn-primary w-full text-center disabled:opacity-50">
          {status === 'sending' ? 'Sending...' : 'Submit Enquiry'}
        </button>

        <p className="text-xs text-gray-400 text-center">By submitting, you agree to our Privacy Policy. We&apos;ll never spam you.</p>
      </div>
    </form>
  )
}
