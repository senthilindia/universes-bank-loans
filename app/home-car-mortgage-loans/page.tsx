import TrustStats from '@/components/TrustStats'
import FAQAccordion from '@/components/FAQAccordion'
import EnquiryForm from '@/components/EnquiryForm'
import { faqSchema } from '@/lib/schema'
import { whatsappLink, callLink } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home Loan, Car Loan & Mortgage Loan in Coimbatore – Universes',
  description: 'Get home loans, car loans, and loan against property in Coimbatore at competitive interest rates. Authorised channel partner. Call +91-95854 89999.',
  keywords: ['home loan Coimbatore', 'car loan Coimbatore', 'mortgage loan Coimbatore', 'loan against property Coimbatore', 'home loan Tamil Nadu'],
}

const homeCarFAQs = [
  { question: 'What is the interest rate for a home loan?', answer: 'Home loan interest rates start from 8.5% p.a. onwards. The exact rate depends on your credit score, income, loan amount, and the lender. We compare offers from multiple banks to get you the best rate.' },
  { question: 'What is the maximum home loan amount?', answer: 'We help you get home loans up to ₹10 Crore, subject to your eligibility and the property value. The loan-to-value ratio is typically 75-90% of the property value.' },
  { question: 'How long does home loan approval take?', answer: 'With Universes, home loan approval typically takes 3-7 working days. The entire process from application to disbursal usually takes 2-3 weeks, depending on the lender and property verification.' },
  { question: 'What is the eligibility for a car loan?', answer: 'Salaried individuals with minimum 1 year of employment and self-employed individuals with 2 years of business operations can apply. You need KYC, income proof, vehicle quotation, and bank statements.' },
  { question: 'Can I get a loan against my existing property?', answer: 'Yes! Loan Against Property (LAP) allows you to leverage your residential or commercial property to get funds up to ₹5 Crore. Interest rates start from 9% p.a. with tenure up to 15 years. There are no restrictions on end-use of funds.' },
  { question: 'What is the difference between home loan and loan against property?', answer: 'A home loan is specifically for purchasing a residential property. A loan against property (LAP) uses your existing property as collateral for any purpose — business expansion, education, marriage, etc. LAP typically has slightly higher interest rates than home loans.' },
  { question: 'What documents are needed for a home loan?', answer: 'You need: KYC documents (Aadhaar, PAN, Passport), income proof (salary slips / ITR), 6 months bank statements, property documents (sale deed, approved plan, encumbrance certificate), and passport-size photos.' },
]

export default function HomeCarMortgagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(homeCarFAQs)) }} />

      {/* Hero */}
      <section className="gradient-brand py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
                Home, Car & Mortgage Loans
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Home Loan, Car Loan<br />& Mortgage Loan<br />in Coimbatore
              </h1>
              <p className="text-white/80 text-lg mb-8 max-w-lg">
                Make your dreams a reality. Competitive interest rates, long tenure, and quick disbursal from top lenders.
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
                <h3 className="font-heading font-bold text-2xl mb-6">Loan Comparison</h3>
                <div className="space-y-4">
                  {[
                    { type: 'Home Loan', rate: '8.5% onwards', amount: 'Up to ₹10 Cr' },
                    { type: 'Car Loan', rate: '8.75% onwards', amount: 'Up to ₹1 Cr' },
                    { type: 'LAP', rate: '9% onwards', amount: 'Up to ₹5 Cr' },
                  ].map((item, i) => (
                    <div key={i} className="bg-white/10 rounded-xl p-4">
                      <div className="font-semibold">{item.type}</div>
                      <div className="flex justify-between mt-1 text-sm text-white/70">
                        <span>{item.rate}</span>
                        <span>{item.amount}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustStats />

      {/* Home Loan */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-8">Home Loan</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">Make your dream home a reality with our home loan solutions. We partner with leading banks to offer you the lowest interest rates and flexible repayment options. Whether it&apos;s your first home or an upgrade, we make the process seamless.</p>
              <ul className="space-y-2">
                {['Low interest rates from 8.5% p.a.', 'Long tenure up to 30 years', 'Balance transfer facility', 'Top-up loan available', 'Doorstep service'].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-cream rounded-2xl p-6">
              <h4 className="font-heading font-bold text-lg text-charcoal mb-4">At a Glance</h4>
              <div className="space-y-3">
                {[
                  { label: 'Amount', val: 'Up to ₹10 Crore' },
                  { label: 'Rate', val: '8.5% p.a. onwards' },
                  { label: 'Tenure', val: '120 to 360 months' },
                  { label: 'Processing', val: 'Minimal charges' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-sm text-gray-500">{item.label}</span>
                    <span className="text-sm font-semibold text-charcoal">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Car Loan */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-8">Car Loan</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6">
              <h4 className="font-heading font-bold text-lg text-charcoal mb-4">At a Glance</h4>
              <div className="space-y-3">
                {[
                  { label: 'Amount', val: 'Up to ₹1 Crore' },
                  { label: 'Rate', val: '8.75% p.a. onwards' },
                  { label: 'Tenure', val: '12 to 84 months' },
                  { label: 'Finance', val: 'Up to 100% available' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-sm text-gray-500">{item.label}</span>
                    <span className="text-sm font-semibold text-charcoal">{item.val}</span>
                    </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-gray-600 mb-4">Drive your dream car with our car loan solutions. We offer competitive interest rates, quick approval, and flexible EMI options. Whether new or used car, we have you covered.</p>
              <ul className="space-y-2">
                {['Competitive interest rates', '100% financing available', 'Quick approval in 24 hours', 'Flexible tenure up to 7 years', 'New & used car financing'].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Against Property */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-8">Loan Against Property (Mortgage Loan)</h2>
          <div className="bg-cream rounded-2xl p-8">
            <p className="text-gray-600 mb-6">Leverage your residential or commercial property to access funds for any purpose. Loan Against Property offers high loan amounts at competitive interest rates with long repayment tenure. No restrictions on how you use the funds.</p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: 'Loan Amount', val: 'Up to ₹5 Crore' },
                { title: 'Interest Rate', val: '9% p.a. onwards' },
                { title: 'Tenure', val: 'Up to 15 years' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-4 text-center">
                  <div className="text-sm text-gray-500">{item.title}</div>
                  <div className="font-heading font-bold text-lg text-brand-800">{item.val}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-heading font-semibold text-charcoal mb-2">Eligible Properties</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Residential property (owned)</li>
                  <li>• Commercial property (owned)</li>
                  <li>• Industrial property</li>
                  <li>• Plot of land</li>
                </ul>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-charcoal mb-2">Documents Required</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• KYC documents</li>
                  <li>• Property documents (title deed, approved plan)</li>
                  <li>• Income proof</li>
                  <li>• Bank statements (6 months)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interest Rate Summary */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-8">Interest Rate Summary</h2>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <div className="grid grid-cols-3 bg-brand-800 text-white text-sm font-semibold">
              <div className="p-4">Loan Type</div>
              <div className="p-4 text-center">Interest Rate</div>
              <div className="p-4 text-center">Max Tenure</div>
            </div>
            {[
              { type: 'Home Loan', rate: '8.5% onwards', tenure: '30 years' },
              { type: 'Car Loan', rate: '8.75% onwards', tenure: '7 years' },
              { type: 'Loan Against Property', rate: '9% onwards', tenure: '15 years' },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <div className="p-4 font-medium text-charcoal">{row.type}</div>
                <div className="p-4 text-center text-brand-800 font-semibold">{row.rate}</div>
                <div className="p-4 text-center text-gray-600">{row.tenure}</div>
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
          <FAQAccordion items={homeCarFAQs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 gradient-brand text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-4">Ready to Own Your Dream Home or Car?</h2>
          <p className="text-white/80 mb-6">Get the best loan deal from top banks. Our experts are here to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#enquiry" className="bg-white text-brand-800 font-semibold px-8 py-4 rounded-xl text-lg hover:bg-gray-100 transition shadow-lg text-center">
              Apply Now
            </a>
            <a href={whatsappLink('mortgage')} className="bg-[#25D366] text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-[#1ebe5d] transition shadow-lg text-center">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry" className="py-16 bg-cream">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm preselectedType="Home Loan" />
        </div>
      </section>
    </>
  )
}
