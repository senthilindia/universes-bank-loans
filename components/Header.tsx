'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { contact, callLink, whatsappLink } from '@/lib/constants'

const loanMenuItems = [
  {
    href: '/personal-loan',
    label: 'Personal Loan',
    desc: 'Quick funds for any personal need',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    href: '/home-loan',
    label: 'Home Loan',
    desc: 'Make your dream home a reality',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    href: '/business-loan',
    label: 'Business Loan',
    desc: 'Fuel your business growth',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
  {
    href: '/car-loan',
    label: 'Car Loan',
    desc: 'Drive home your dream car',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.146-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25m-2.25 0h-2.25m0 0v-2.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V15m-5.25 0h5.25" />
      </svg>
    ),
  },
  {
    href: '/cgtmse-loan',
    label: 'CGTMSE Loan',
    desc: 'Collateral-free for MSMEs',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    href: '/education-loan',
    label: 'Education Loan',
    desc: 'Invest in your future',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    href: '/loan-against-property',
    label: 'Loan Against Property',
    desc: 'Unlock your property value',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    href: '/working-capital',
    label: 'Working Capital',
    desc: 'OD/CC for daily operations',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/collateral-free-loan',
    label: 'Collateral-Free Loan',
    desc: 'No assets needed',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [loansOpen, setLoansOpen] = useState(false)
  const [mobileLoansOpen, setMobileLoansOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setLoansOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setLoansOpen(false), 200)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo — large and prominent */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <img src="/universes-logo.png" alt="Universes — The Global Expansion" className="w-14 h-14 md:w-20 md:h-20 object-contain" />
            <div className="hidden sm:block">
              <div className="font-heading font-extrabold text-2xl md:text-3xl text-brand-800 leading-tight tracking-tight">UNIVERSES</div>
              <div className="text-[10px] md:text-xs text-gray-500 tracking-wider uppercase">The Global Expansion</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-brand-800 hover:bg-brand-50 rounded-lg transition">
              Home
            </Link>

            {/* Loans dropdown */}
            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition ${loansOpen ? 'text-brand-800 bg-brand-50' : 'text-gray-700 hover:text-brand-800 hover:bg-brand-50'}`}>
                Loans
                <svg className={`w-4 h-4 transition-transform duration-200 ${loansOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {loansOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[380px] pt-3" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(156,41,85,0.15)] border border-gray-100 overflow-hidden">
                    {/* Dropdown header */}
                    <div className="px-5 pt-5 pb-3">
                      <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">Our Loan Products</p>
                    </div>
                    <div className="px-3 pb-2">
                      {loanMenuItems.map((item, i) => (
                        <Link
                          key={i}
                          href={item.href}
                          className="group/item flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-brand-50/60 transition-all duration-200 relative"
                          onClick={() => setLoansOpen(false)}
                        >
                          <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-lg bg-brand-50 text-brand-600 group-hover/item:bg-brand-100 group-hover/item:text-brand-700 transition-colors duration-200">
                            {item.icon}
                          </span>
                          <div className="flex-1 min-w-0">
                            <span className="block text-sm font-semibold text-gray-800 group-hover/item:text-brand-800 transition-colors duration-200">{item.label}</span>
                            <span className="block text-[11px] text-gray-400 group-hover/item:text-gray-500 transition-colors duration-200 truncate">{item.desc}</span>
                          </div>
                          <svg className="w-4 h-4 text-gray-300 group-hover/item:text-brand-500 group-hover/item:translate-x-0.5 transition-all duration-200 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                    <div className="mx-3 mb-3">
                      <Link href="/#enquiry" className="flex items-center justify-center gap-2 bg-gradient-to-r from-brand-800 to-brand-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:from-brand-900 hover:to-brand-800 transition-all duration-200 shadow-md shadow-brand-800/20" onClick={() => setLoansOpen(false)}>
                        Get a Loan
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </Link>
                    </div>
                  </div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45" />
                </div>
              )}
            </div>

            <Link href="/#enquiry" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-brand-800 hover:bg-brand-50 rounded-lg transition">
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a href={callLink()} className="hidden md:flex items-center gap-2 bg-brand-50 text-brand-800 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-brand-100 transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
              {contact.phoneDisplay}
            </a>
            <Link href="/#enquiry" className="hidden sm:inline-flex btn-primary text-sm !px-5 !py-2.5">
              Get a Loan
            </Link>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-gray-700" aria-label="Toggle menu">
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 pb-4 max-h-[85vh] overflow-y-auto">
          <Link href="/" onClick={() => setMobileOpen(false)} className="block px-6 py-3.5 text-gray-700 hover:bg-brand-50 hover:text-brand-800 font-medium border-b border-gray-50">
            Home
          </Link>

          <div className="border-b border-gray-50">
            <button onClick={() => setMobileLoansOpen(!mobileLoansOpen)} className="w-full flex items-center justify-between px-6 py-3.5 text-gray-700 hover:bg-brand-50 hover:text-brand-800 font-medium">
              Loans
              <svg className={`w-4 h-4 transition-transform ${mobileLoansOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileLoansOpen && (
              <div className="bg-gray-50/80 pb-2 pt-1">
                {loanMenuItems.map((item, i) => (
                  <Link key={i} href={item.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-8 py-3 hover:bg-brand-50/50 transition-colors duration-200">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-brand-50 text-brand-600">
                      {item.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <span className="block text-sm font-semibold text-gray-700">{item.label}</span>
                      <span className="block text-[11px] text-gray-400 truncate">{item.desc}</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/#enquiry" onClick={() => setMobileOpen(false)} className="block px-6 py-3.5 text-gray-700 hover:bg-brand-50 hover:text-brand-800 font-medium border-b border-gray-50">
            Contact
          </Link>

          <div className="px-6 pt-4 space-y-2">
            <a href={callLink()} className="btn-primary w-full text-center block text-sm">Call {contact.phoneDisplay}</a>
            <a href={whatsappLink()} className="btn-whatsapp w-full text-center block text-sm">WhatsApp Us</a>
          </div>
        </div>
      )}
    </header>
  )
}
