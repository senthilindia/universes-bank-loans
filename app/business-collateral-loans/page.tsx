import TrustStats from '@/components/TrustStats'
import FAQAccordion from '@/components/FAQAccordion'
import EnquiryForm from '@/components/EnquiryForm'
import { faqSchema } from '@/lib/schema'
import { whatsappLink, callLink } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Business Loan & Collateral-Free Loan in Coimbatore | CGTMSE – Universes',
  description: 'Get business loans, CGTMSE loans, collateral-free loans, and OD/CC/DLOD facilities in Coimbatore. Authorised channel partner for banks & NBFCs. Call +91-95854 89999.',
  keywords: ['business loan Coimbatore', 'collateral free loan Coimbatore', 'CGTMSE loan Coimbatore', 'OD CC DLOD Coimbatore', 'business loan Tamil Nadu'],
}

const businessFAQs = [
  { question: 'What is a business loan?', answer: 'A business loan is a type of financing provided to businesses for working capital, expansion, equipment purchase, or other business purposes. As an authorised channel partner, we help you get the best rates from multiple banks and NBFCs.' },
  { question: 'Who is eligible for a business loan?', answer: 'MSMEs, traders, self-employed professionals, and business owners with at least 2 years of business operations can apply. You need KYC documents, 2 years ITR, and 6 months bank statements.' },
  { question: 'What is CGTMSE loan?', answer: 'CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises) is a government-backed scheme that provides 100% collateral-free loans up to ₹5 Crore for MSMEs. You need Udyam registration to apply.' },
  { question: 'What is a collateral-free loan?', answer: 'A collateral-free loan is one where you do not need to pledge any assets (property, gold, etc.) as security. We offer collateral-free business loans up to ₹50 Lakh based on your business profile and creditworthiness.' },
  { question: 'What is OD/CC/DLOD?', answer: 'OD (Overdraft), CC (Cash Credit), and DLOD are working capital facilities for businesses. OD allows you to withdraw more than your account balance up to a limit. CC is a short-term loan for inventory/raw materials. Interest is charged only on the utilized amount.' },
  { question: 'How long does loan approval take?', answer: 'With Universes, most business loan approvals happen within 24-48 hours. Disbursal can happen as fast as 48 hours after approval, depending on the lender and documentation completeness.' },
  { question: 'What documents are required?', answer: 'Basic documents include: KYC (Aadhaar, PAN, Passport), 2 years ITR, 6 months bank statements, business proof (GST registration, trade license), and a brief business plan. Additional documents may be needed based on loan type.' },
]

export default function BusinessCollateralPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(businessFAQs)) }} />

      {/* Hero */}
      <section className="gradient-brand py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
                Business & Collateral Loans
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Business Loan &<br />Collateral-Free Loan<br />in Coimbatore
              </h1>
              <p className="text-white/80 text-lg mb-8 max-w-lg">
                Fuel your business growth with hassle-free financing. CGTMSE, OD/CC/DLOD, and collateral-free options available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#enquiry" className="bg-white text-brand-800 font-semibold px-8 py-4 rounded-xl text-lg hover:bg-gray-100 transition shadow-lg text-center">
                  Apply Now
                </a>
                <a href={callLink()} className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white/10 transition text-center">
                  Call +91-95854 89999
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-white">
                <h3 className="font-heading font-bold text-2xl mb-6">Quick Overview</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Business Loan', val: 'Up to ₹50 Lakh' },
                    { label: 'CGTMSE Loan', val: 'Up to ₹5 Crore' },
                    { label: 'Collateral-Free', val: 'Up to ₹50 Lakh' },
                    { label: 'Interest Rate', val: '11% onwards' },
                    { label: 'Processing Time', val: '48 hours' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/10 pb-3">
                      <span className="text-white/70">{item.label}</span>
                      <span className="font-semibold">{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustStats />

      {/* Business Loan Details */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-8">Business Loan</h2>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
            <p>A business loan from Universes helps you access funds from top banks and NBFCs at competitive interest rates. Whether you need working capital, funds for expansion, or equipment financing, we find the right match for your business.</p>
            <p>As an authorised channel partner, we have relationships with 15+ lenders, ensuring you get the best possible terms. Our team handles the entire process — from application to disbursal — so you can focus on your business.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {[
              { title: 'Loan Amount', val: 'Up to ₹50 Lakh' },
              { title: 'Interest Rate', val: '11% onwards' },
              { title: 'Tenure', val: '12 to 60 months' },
            ].map((item, i) => (
              <div key={i} className="bg-cream rounded-xl p-4 text-center">
                <div className="text-sm text-gray-500">{item.title}</div>
                <div className="font-heading font-bold text-lg text-brand-800">{item.val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CGTMSE */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-4">CGTMSE Loan — Government-Backed, Collateral-Free</h2>
          <p className="section-subtitle mb-8">Our flagship product for MSMEs</p>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading font-bold text-xl text-charcoal mb-4">What is CGTMSE?</h3>
                <div className="space-y-3 text-gray-600 text-sm">
                  <p>CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises) is a government initiative that provides collateral-free credit to MSMEs. The trust guarantees up to 85% of the loan amount, eliminating the need for collateral or third-party guarantees.</p>
                  <p>This scheme is ideal for first-generation entrepreneurs and small businesses that lack assets to pledge as collateral but have viable business plans.</p>
                </div>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-charcoal mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {[
                    '100% collateral-free loans up to ₹5 Crore',
                    'Government credit guarantee (up to 85%)',
                    'No third-party guarantee required',
                    'Reduced processing fees',
                    'Available for new and existing businesses',
                    'Multiple lender options',
                  ].map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OD/CC/DLOD */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-8">OD / CC / DLOD Facilities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Overdraft (OD)', desc: 'Withdraw more than your account balance up to a sanctioned limit. Interest charged only on the utilized amount. Ideal for managing cash flow gaps.' },
              { title: 'Cash Credit (CC)', desc: 'Short-term financing against inventory or receivables. Perfect for working capital needs. Repay and reborrow as needed within the limit.' },
              { title: 'DLOD', desc: 'Demand Loan cum Overdraft facility combining the benefits of both. Flexible repayment with overdraft convenience for business operations.' },
            ].map((item, i) => (
              <div key={i} className="card">
                <h3 className="font-heading font-bold text-lg text-charcoal mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collateral-Free Loans */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-8">Collateral-Free Loans</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <p className="text-gray-600 mb-4">Don&apos;t have assets to pledge? No problem. We arrange collateral-free loans up to ₹50 Lakh for business owners with 2+ years of operations. The loan is approved based on your business turnover, credit score, and financial health.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-heading font-semibold text-charcoal mb-2">Eligibility</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Business owners with 2+ years of operations</li>
                  <li>• Minimum annual turnover as per lender norms</li>
                  <li>• Good credit score (preferably 650+)</li>
                  <li>• Clean repayment track record</li>
                </ul>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-charcoal mb-2">Documents Required</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• KYC documents (Aadhaar, PAN)</li>
                  <li>• 2 years ITR</li>
                  <li>• 6 months bank statements</li>
                  <li>• Business proof (GST, trade license)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-8">Frequently Asked Questions</h2>
          <FAQAccordion items={businessFAQs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 gradient-brand text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-white/80 mb-6">Get in touch with our experts and find the best loan for your business.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#enquiry" className="bg-white text-brand-800 font-semibold px-8 py-4 rounded-xl text-lg hover:bg-gray-100 transition shadow-lg text-center">
              Apply Now
            </a>
            <a href={whatsappLink('business')} className="bg-[#25D366] text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-[#1ebe5d] transition shadow-lg text-center">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry" className="py-16 bg-cream">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm preselectedType="Business Loan" />
        </div>
      </section>
    </>
  )
}
