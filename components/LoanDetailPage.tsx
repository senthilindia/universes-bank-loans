import TrustStats from '@/components/TrustStats'
import FAQAccordion from '@/components/FAQAccordion'
import EnquiryForm from '@/components/EnquiryForm'
import { faqSchema, breadcrumbSchema, loanPageSchema } from '@/lib/schema'
import { whatsappLink, callLink } from '@/lib/constants'

export interface LoanDetailPageProps {
  title: string
  subtitle: string
  badge: string
  description: string
  highlights: { label: string; value: string }[]
  overview: string[]
  benefits: string[]
  eligibility: string[]
  documents: string[]
  faqs: { question: string; answer: string }[]
  preselectedType: string
  rateTable: { type: string; rate: string; tenure: string; amount: string }[]
  loanUrl: string
  interestRate: string
  maxAmount: string
}

export default function LoanDetailPage({
  title,
  subtitle,
  badge,
  description,
  highlights,
  overview,
  benefits,
  eligibility,
  documents,
  faqs,
  preselectedType,
  rateTable,
  loanUrl,
  interestRate,
  maxAmount,
}: LoanDetailPageProps) {
  const breadcrumbs = [
    { name: 'Home', url: 'https://universesloans.com' },
    { name: 'Loans', url: 'https://universesloans.com' },
    { name: title, url: `https://universesloans.com${loanUrl}` },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(loanPageSchema({ name: title, description, url: `https://universesloans.com${loanUrl}`, interestRate, amount: maxAmount })) }} />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <a href="/" className="hover:text-brand-800 transition">Home</a>
            <span>/</span>
            <span className="text-charcoal font-medium">{title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="gradient-brand py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
                {badge}
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                {title}
              </h1>
              <p className="text-white/80 text-lg mb-8 max-w-lg">
                {subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#enquiry" className="bg-white text-brand-800 font-semibold px-8 py-4 rounded-xl text-lg hover:bg-gray-100 transition shadow-lg text-center">
                  Apply Now
                </a>
                <a href={callLink()} className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white/10 transition text-center">
                  Call +91 95431 40040
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-white">
                <h3 className="font-heading font-bold text-2xl mb-6">Quick Overview</h3>
                <div className="space-y-4">
                  {highlights.map((item, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/10 pb-3">
                      <span className="text-white/70">{item.label}</span>
                      <span className="font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustStats />

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-8">About {title}</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            {overview.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-8">Benefits & Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-8">Eligibility & Documents Required</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-cream rounded-2xl p-6">
              <h3 className="font-heading font-bold text-xl text-charcoal mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Eligibility Criteria
              </h3>
              <ul className="space-y-2">
                {eligibility.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-brand-600 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-cream rounded-2xl p-6">
              <h3 className="font-heading font-bold text-xl text-charcoal mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Documents Required
              </h3>
              <ul className="space-y-2">
                {documents.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-brand-600 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interest Rate Table */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-8">Interest Rates & Loan Details</h2>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <div className="grid grid-cols-4 bg-brand-800 text-white text-sm font-semibold">
              <div className="p-4">Loan Type</div>
              <div className="p-4 text-center">Interest Rate</div>
              <div className="p-4 text-center">Max Tenure</div>
              <div className="p-4 text-center">Max Amount</div>
            </div>
            {rateTable.map((row, i) => (
              <div key={i} className={`grid grid-cols-4 text-sm ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <div className="p-4 font-medium text-charcoal">{row.type}</div>
                <div className="p-4 text-center text-brand-800 font-semibold">{row.rate}</div>
                <div className="p-4 text-center text-gray-600">{row.tenure}</div>
                <div className="p-4 text-center text-gray-600">{row.amount}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">*Interest rates are indicative and may vary based on profile, credit score, and lender terms.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-8">Frequently Asked Questions</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 gradient-brand text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-white/80 mb-6">Talk to our experts and find the best {title.toLowerCase()} deal for you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#enquiry" className="bg-white text-brand-800 font-semibold px-8 py-4 rounded-xl text-lg hover:bg-gray-100 transition shadow-lg text-center">
              Apply Now
            </a>
            <a href={whatsappLink()} className="bg-[#25D366] text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-[#1ebe5d] transition shadow-lg text-center">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry" className="py-16 bg-cream">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm preselectedType={preselectedType} />
        </div>
      </section>
    </>
  )
}
