'use client'

import { useState, useEffect } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

const loanTypes = [
  { label: 'Personal Loan', icon: '👤', min: 50000, max: 2500000, rate: 10.5, minTenure: 6, maxTenure: 60 },
  { label: 'Business Loan', icon: '💼', min: 100000, max: 5000000, rate: 11, minTenure: 12, maxTenure: 60 },
  { label: 'Home Loan', icon: '🏠', min: 1000000, max: 100000000, rate: 8.5, minTenure: 120, maxTenure: 360 },
  { label: 'Car Loan', icon: '🚗', min: 200000, max: 10000000, rate: 8.75, minTenure: 12, maxTenure: 84 },
  { label: 'CGTMSE', icon: '🛡️', min: 100000, max: 50000000, rate: 11, minTenure: 12, maxTenure: 120 },
  { label: 'LAP', icon: '🏢', min: 500000, max: 50000000, rate: 9, minTenure: 12, maxTenure: 180 },
]

function formatAmount(val: number): string {
  if (val >= 10000000) return `₹${(val / 10000000).toFixed(1)} Cr`
  if (val >= 100000) return `₹${(val / 100000).toFixed(1)} L`
  if (val >= 1000) return `₹${(val / 1000).toFixed(0)}K`
  return `₹${val}`
}

export default function EMICalculator() {
  const [selected, setSelected] = useState(1)
  const lt = loanTypes[selected]
  const [amount, setAmount] = useState(lt.min * 2)
  const [tenure, setTenure] = useState(Math.min(lt.minTenure + 12, lt.maxTenure))
  const [animatedEmi, setAnimatedEmi] = useState(0)

  const r = lt.rate / 100 / 12
  const emi = amount * r * Math.pow(1 + r, tenure) / (Math.pow(1 + r, tenure) - 1)
  const totalPayment = emi * tenure
  const totalInterest = totalPayment - amount

  // Animate EMI number
  useEffect(() => {
    const target = Math.round(emi)
    const duration = 400
    const start = animatedEmi
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setAnimatedEmi(Math.round(start + (target - start) * eased))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [emi])

  const handleLoanSelect = (i: number) => {
    setSelected(i)
    setAmount(loanTypes[i].min * 2)
    setTenure(Math.min(loanTypes[i].minTenure + 12, loanTypes[i].maxTenure))
  }

  const principalPercent = totalPayment > 0 ? (amount / totalPayment) * 100 : 50
  const interestPercent = totalPayment > 0 ? (totalInterest / totalPayment) * 100 : 50

  return (
    <section className="py-20 bg-gray-50" id="emi">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-brand-50 text-brand-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-brand-100">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              EMI Calculator
            </span>
            <h2 className="section-title">Dream Bigger, Plan Smarter</h2>
            <p className="section-subtitle">Calculate your monthly payments instantly</p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="scaleUp" delay={100}>
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Loan type tabs */}
            <div className="flex overflow-x-auto border-b border-gray-100 scrollbar-hide">
              {loanTypes.map((lt, i) => (
                <button
                  key={i}
                  onClick={() => handleLoanSelect(i)}
                  className={`flex items-center gap-2 px-5 py-4 text-sm font-semibold whitespace-nowrap transition-all border-b-3 min-w-fit ${
                    selected === i
                      ? 'text-brand-800 border-brand-800 bg-brand-50/50'
                      : 'text-gray-500 border-transparent hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-base">{lt.icon}</span>
                  {lt.label}
                </button>
              ))}
            </div>

            <div className="p-6 md:p-10">
              <div className="grid lg:grid-cols-5 gap-10 items-start">
                {/* Left: Results (3 cols) */}
                <div className="lg:col-span-3 space-y-6">
                  {/* Hero EMI result */}
                  <div className="bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
                    {/* Decorative circles */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full" />
                    <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/5 rounded-full" />

                    <p className="text-white/70 text-sm font-medium mb-1">Monthly Payable Amount</p>
                    <p className="text-4xl md:text-5xl font-heading font-bold leading-tight">
                      ₹{animatedEmi.toLocaleString('en-IN')}
                    </p>
                    <p className="text-white/50 text-xs mt-2">
                      for {tenure} months ({(tenure / 12).toFixed(1)} years)
                    </p>

                    {/* Breakdown row */}
                    <div className="grid grid-cols-2 gap-4 mt-6 pt-5 border-t border-white/10">
                      <div>
                        <p className="text-white/50 text-xs mb-1">Principal Amount</p>
                        <p className="text-xl font-heading font-bold">₹{amount.toLocaleString('en-IN')}</p>
                      </div>
                      <div>
                        <p className="text-white/50 text-xs mb-1">Interest Payable</p>
                        <p className="text-xl font-heading font-bold">₹{Math.round(totalInterest).toLocaleString('en-IN')}</p>
                      </div>
                    </div>
                  </div>

                  {/* Donut + breakdown */}
                  <div className="flex items-center gap-6">
                    {/* Donut chart */}
                    <div className="relative w-32 h-32 flex-shrink-0">
                      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                        <circle cx="50" cy="50" r="38" fill="none" stroke="#f3f4f6" strokeWidth="10" />
                        <circle
                          cx="50" cy="50" r="38" fill="none"
                          stroke="#ee72a0"
                          strokeWidth="10"
                          strokeDasharray={`${interestPercent * 2.3876} ${238.76 - interestPercent * 2.3876}`}
                          strokeDashoffset="0"
                          strokeLinecap="round"
                          className="transition-all duration-700 ease-out"
                        />
                        <circle
                          cx="50" cy="50" r="38" fill="none"
                          stroke="#9C2955"
                          strokeWidth="10"
                          strokeDasharray={`${principalPercent * 2.3876} ${238.76 - principalPercent * 2.3876}`}
                          strokeDashoffset={`${-interestPercent * 2.3876}`}
                          strokeLinecap="round"
                          className="transition-all duration-700 ease-out"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-[10px] text-gray-400">Total</span>
                        <span className="text-sm font-heading font-bold text-charcoal">
                          {formatAmount(Math.round(totalPayment))}
                        </span>
                      </div>
                    </div>

                    {/* Legend + breakdown */}
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-brand-800" />
                          <span className="text-sm text-gray-600">Principal</span>
                        </div>
                        <span className="text-sm font-semibold text-charcoal">{principalPercent.toFixed(0)}%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-brand-400" />
                          <span className="text-sm text-gray-600">Interest</span>
                        </div>
                        <span className="text-sm font-semibold text-charcoal">{interestPercent.toFixed(0)}%</span>
                      </div>
                      <div className="border-t border-gray-100 pt-2 flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Total Payment</span>
                        <span className="text-sm font-bold text-charcoal">{formatAmount(Math.round(totalPayment))}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Sliders (2 cols) */}
                <div className="lg:col-span-2 space-y-7">
                  {/* Loan Amount */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm font-semibold text-gray-700">Loan Amount</label>
                      <div className="flex items-center bg-gray-50 rounded-xl border border-gray-200 overflow-hidden focus-within:border-brand-800 focus-within:ring-1 focus-within:ring-brand-800/20 transition">
                        <span className="text-gray-400 text-sm pl-3">₹</span>
                        <input
                          type="number"
                          value={amount}
                          onChange={(e) => {
                            const v = Number(e.target.value)
                            if (v >= lt.min && v <= lt.max) setAmount(v)
                          }}
                          className="w-28 text-right text-sm font-semibold text-charcoal py-2.5 pr-3 bg-transparent focus:outline-none"
                        />
                      </div>
                    </div>
                    <input
                      type="range"
                      min={lt.min}
                      max={lt.max}
                      step={Math.max(10000, Math.round(lt.min / 10))}
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="w-full accent-brand-800 h-1.5 cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-gray-400 mt-1.5">
                      <span>{formatAmount(lt.min)}</span>
                      <span>{formatAmount(lt.max)}</span>
                    </div>
                  </div>

                  {/* Interest Rate */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm font-semibold text-gray-700">Interest Rate</label>
                      <span className="text-sm font-bold text-brand-800 bg-brand-50 px-3 py-1 rounded-lg">{lt.rate}% p.a.</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5 relative">
                      <div
                        className="bg-gradient-to-r from-brand-600 to-brand-800 h-1.5 rounded-full transition-all duration-500"
                        style={{ width: `${((lt.rate - 5) / 20) * 100}%` }}
                      />
                      <div
                        className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-brand-800 rounded-full border-2 border-white shadow-md"
                        style={{ left: `calc(${((lt.rate - 5) / 20) * 100}% - 8px)` }}
                      />
                    </div>
                    <div className="flex justify-between text-[11px] text-gray-400 mt-1.5">
                      <span>5%</span>
                      <span>25%</span>
                    </div>
                  </div>

                  {/* Tenure */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm font-semibold text-gray-700">Loan Tenure</label>
                      <div className="flex items-center bg-gray-50 rounded-xl border border-gray-200 overflow-hidden focus-within:border-brand-800 focus-within:ring-1 focus-within:ring-brand-800/20 transition">
                        <input
                          type="number"
                          value={tenure}
                          onChange={(e) => {
                            const v = Number(e.target.value)
                            if (v >= lt.minTenure && v <= lt.maxTenure) setTenure(v)
                          }}
                          className="w-14 text-right text-sm font-semibold text-charcoal py-2.5 pr-1 bg-transparent focus:outline-none"
                        />
                        <span className="text-gray-400 text-xs px-2.5">Months</span>
                      </div>
                    </div>
                    <input
                      type="range"
                      min={lt.minTenure}
                      max={lt.maxTenure}
                      value={tenure}
                      onChange={(e) => setTenure(Number(e.target.value))}
                      className="w-full accent-brand-800 h-1.5 cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-gray-400 mt-1.5">
                      <span>{lt.minTenure} months</span>
                      <span>{(lt.maxTenure / 12).toFixed(0)} years</span>
                    </div>
                  </div>

                  {/* Apply CTA */}
                  <a
                    href="#enquiry"
                    className="flex items-center justify-center gap-2 w-full bg-brand-800 text-white font-semibold py-4 rounded-xl text-sm hover:bg-brand-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
                  >
                    Apply Now
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
