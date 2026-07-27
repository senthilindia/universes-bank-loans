import TrustStats from '@/components/TrustStats'
import EnquiryForm from '@/components/EnquiryForm'
import HeroCarousel from '@/components/HeroCarousel'
import CibilScoreBanner from '@/components/CibilScoreBanner'
import ProcessStepsWithImages from '@/components/ProcessStepsWithImages'
import ChairmanQuote from '@/components/ChairmanQuote'
import CoreValues from '@/components/CoreValues'
import EMICalculator from '@/components/EMICalculator'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import QuickActions from '@/components/QuickActions'
import Newsletter from '@/components/Newsletter'
import AppDownload from '@/components/AppDownload'
import ScrollReveal from '@/components/ScrollReveal'
import { localBusinessSchema, faqSchema } from '@/lib/schema'
import { COMPANY } from '@/lib/constants'

const whyChooseFeatures = [
  {
    icon: (
      <svg className="w-6 h-6 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Trusted Partner',
    desc: 'Over 15 years of experience helping customers secure the right financing.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Fast Approval',
    desc: 'Get loan approval within 24-48 hours with minimal paperwork.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Best Rates',
    desc: 'Competitive interest rates negotiated with top banks and NBFCs.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Tamil Nadu Network',
    desc: 'Serving Coimbatore, Tirupur, Erode, Salem and across Tamil Nadu.',
  },
]

const exploreLoanCategories = [
  {
    title: 'Personal Loan',
    desc: 'Quick funds for any personal need — no collateral required.',
    rate: '10.5% onwards',
    amount: 'Up to ₹25 Lakh',
    imageUrl: 'https://images.pexels.com/photos/7947703/pexels-photo-7947703.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    accentColor: 'bg-fuchsia-600',
    borderColor: 'border-l-fuchsia-600',
    href: '/personal-loan',
    icon: (
      <svg className="w-8 h-8 text-fuchsia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: 'Home Loan',
    desc: 'Make your dream home a reality with affordable EMIs.',
    rate: '8.5% onwards',
    amount: 'Up to ₹10 Crore',
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
    accentColor: 'bg-rose-600',
    borderColor: 'border-l-rose-600',
    href: '/home-loan',
    icon: (
      <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Business Loan',
    desc: 'Fuel your business growth with flexible loan options.',
    rate: '11% onwards',
    amount: 'Up to ₹50 Lakh',
    imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    accentColor: 'bg-blue-600',
    borderColor: 'border-l-blue-600',
    href: '/business-loan',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Car Loan',
    desc: 'Drive home your dream car with easy EMI options.',
    rate: '8.75% onwards',
    amount: 'Up to ₹1 Crore',
    imageUrl: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    accentColor: 'bg-slate-600',
    borderColor: 'border-l-slate-600',
    href: '/car-loan',
    icon: (
      <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.146-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25m-2.25 0h-2.25m0 0v-2.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V15m-5.25 0h5.25" />
      </svg>
    ),
  },
  {
    title: 'CGTMSE Loan',
    desc: 'Government-backed collateral-free loans for MSMEs.',
    rate: '11% onwards',
    amount: 'Up to ₹5 Crore',
    imageUrl: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    accentColor: 'bg-emerald-600',
    borderColor: 'border-l-emerald-600',
    href: '/cgtmse-loan',
    icon: (
      <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Education Loan',
    desc: 'Invest in your future with affordable education financing.',
    rate: '9% onwards',
    amount: 'Up to ₹1.5 Crore',
    imageUrl: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    accentColor: 'bg-indigo-600',
    borderColor: 'border-l-indigo-600',
    href: '/education-loan',
    icon: (
      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: 'Loan Against Property',
    desc: 'Unlock the value of your property for any financial need.',
    rate: '9% onwards',
    amount: 'Up to ₹5 Crore',
    imageUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    accentColor: 'bg-amber-600',
    borderColor: 'border-l-amber-600',
    href: '/loan-against-property',
    icon: (
      <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Working Capital',
    desc: 'OD/CC facilities for your daily business operations.',
    rate: '11% onwards',
    amount: 'Up to ₹1 Crore',
    imageUrl: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    accentColor: 'bg-cyan-600',
    borderColor: 'border-l-cyan-600',
    href: '/working-capital',
    icon: (
      <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: 'Collateral-Free Loan',
    desc: 'Get financed without pledging any assets.',
    rate: '12% onwards',
    amount: 'Up to ₹50 Lakh',
    imageUrl: 'https://images.pexels.com/photos/7947703/pexels-photo-7947703.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    accentColor: 'bg-violet-600',
    borderColor: 'border-l-violet-600',
    href: '/collateral-free-loan',
    icon: (
      <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const faqs = [
  {
    question: 'What is the interest rate for home loans in Coimbatore?',
    answer: 'Home loan interest rates in Coimbatore start from 8.5% onwards, depending on the bank, loan amount, and your credit profile. As an authorised channel partner for 15+ banks and NBFCs, Universes can help you negotiate the best possible rate.',
  },
  {
    question: 'How can I get a business loan in Coimbatore without collateral?',
    answer: 'Universes specialises in collateral-free business loans up to ₹5 Crore in Coimbatore. We work with multiple banks and NBFCs that offer unsecured business loans based on your turnover, business vintage, and CIBIL score. Contact us at +91 95431 40040 to explore your options.',
  },
  {
    question: 'What documents are needed for a car loan in Tamil Nadu?',
    answer: 'Typically, you need identity proof (Aadhaar/PAN), address proof, income proof (salary slips or ITR for self-employed), bank statements for the last 6 months, vehicle quotation, and a passport-size photograph. We can guide you through the entire documentation process.',
  },
  {
    question: 'How long does it take to get a loan approved in Coimbatore?',
    answer: 'With Universes, most loan applications in Coimbatore are processed within 24–48 hours. The final disbursal depends on the bank and type of loan, but our streamlined process ensures minimal delays.',
  },
  {
    question: 'Which banks offer the best loan rates in Coimbatore?',
    answer: 'Universes is an authorised channel partner for 15+ banks and NBFCs including SBI, HDFC Bank, ICICI Bank, Axis Bank, and leading NBFCs. We compare rates across all partners to find you the lowest interest rate available in Coimbatore.',
  },
  {
    question: 'Can I get a CGTMSE loan for my startup in Coimbatore?',
    answer: 'Yes, Universes helps startups and MSMEs in Coimbatore secure CGTMSE loans without collateral. The Credit Guarantee Fund Trust for Micro and Small Enterprises scheme offers loans up to ₹5 Crore. We assist with the entire application and documentation process.',
  },
  {
    question: 'What is the minimum CIBIL score for a home loan in Coimbatore?',
    answer: 'Most banks in Coimbatore require a minimum CIBIL score of 750 for home loan approval. However, some NBFCs may consider scores as low as 650 with slightly higher interest rates. Universes can help you find the right lender based on your credit score.',
  },
  {
    question: 'How do I transfer my home loan to a bank in Coimbatore for lower rates?',
    answer: 'Home loan balance transfer involves transferring your existing home loan from one bank to another offering lower interest rates. Universes can help you compare rates from multiple banks in Coimbatore and handle the entire transfer process seamlessly.',
  },
  {
    question: 'What are the tax benefits on home loans in India?',
    answer: 'Under Section 24(b), you can claim up to ₹2 lakh interest deduction on a self-occupied home loan. Under Section 80C, you can claim up to ₹1.5 lakh on principal repayment. For a detailed assessment based on your situation, contact our advisors at +91 95431 40040.',
  },
  {
    question: 'Do you provide loan services in other cities of Tamil Nadu?',
    answer: 'Yes, Universes serves multiple cities across Tamil Nadu including Coimbatore, Tirupur, Erode, Salem, and Mettupalayam. Our network of 15+ banking partners ensures competitive loan options across the state. Call us at +91 95431 40040 to discuss your requirements.',
  },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <HeroCarousel />

      <CibilScoreBanner />

      <TrustStats />

      {/* Why Choose Universes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose {COMPANY.name}</h2>
            <p className="section-subtitle">Your trusted partner in every financial journey</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ScrollReveal animation="fadeLeft">
              <div className="rounded-2xl overflow-hidden shadow-lg relative">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260"
                  alt="Team collaboration at Universes"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent rounded-2xl" />
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fadeRight" delay={200}>
              <div className="space-y-6">
                {whyChooseFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-charcoal">{feature.title}</h3>
                      <p className="text-gray-500 text-sm mt-1">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Explore Loans */}
      <ScrollReveal animation="fadeUp">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 bg-brand-50 text-brand-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-brand-100">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
                Why Apply With Us
              </span>
              <h2 className="section-title">Explore Our Loan Categories</h2>
              <p className="section-subtitle">Find the perfect loan for your financial needs</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {exploreLoanCategories.map((cat, i) => (
                <div
                  key={i}
                  className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-l-4 ${cat.borderColor}`}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={cat.imageUrl}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    {/* Stats on image */}
                    <div className="absolute bottom-3 left-3 right-3 flex gap-2">
                      <span className="bg-white/95 backdrop-blur-sm text-charcoal text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                        {cat.rate}
                      </span>
                      <span className="bg-white/95 backdrop-blur-sm text-charcoal text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                        {cat.amount}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 ${cat.accentColor} bg-opacity-10 rounded-xl flex items-center justify-center`}>
                        {cat.icon}
                      </div>
                      <h3 className="font-heading font-bold text-xl text-charcoal">{cat.title}</h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{cat.desc}</p>
                    <a
                      href={cat.href}
                      className="inline-flex items-center gap-2 text-brand-800 font-semibold text-sm hover:text-brand-900 transition-colors group/link"
                    >
                      Apply Now
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ProcessStepsWithImages />

      <ChairmanQuote />

      <CoreValues />

      <EMICalculator />

      <TestimonialCarousel />

      <QuickActions />

      {/* FAQ Section */}
      <ScrollReveal animation="fadeUp">
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-brand-50 text-brand-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-brand-100">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
                Frequently Asked Questions
              </span>
              <h2 className="section-title">Loan FAQs – Coimbatore & Tamil Nadu</h2>
              <p className="section-subtitle">Everything you need to know about getting a loan in Coimbatore</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer bg-cream hover:bg-brand-50 transition-colors select-none">
                    <h3 className="font-heading font-semibold text-base text-charcoal leading-snug">{faq.question}</h3>
                    <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 pt-2 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Enquiry Form */}
      <ScrollReveal animation="scaleUp">
        <section id="enquiry" className="py-16 bg-cream">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
            <EnquiryForm />
          </div>
        </section>
      </ScrollReveal>

      <Newsletter />

      <AppDownload />
    </>
  )
}
