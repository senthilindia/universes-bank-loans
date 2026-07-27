import LoanDetailPage from '@/components/LoanDetailPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CGTMSE Loan in Coimbatore | Collateral-Free up to ₹5 Crore – Universes',
  description: 'Get a CGTMSE loan in Coimbatore up to ₹5 Crore, 100% collateral-free. Government-backed credit guarantee for MSMEs. Apply now. Call +91 95431 40040.',
  keywords: ['CGTMSE loan Coimbatore', 'CGTMSE Tamil Nadu', 'collateral free MSME loan', 'government loan MSME'],
}

const pageData = {
  title: 'CGTMSE Loan in Coimbatore',
  subtitle: 'Government-backed, 100% collateral-free loans up to ₹5 Crore for MSMEs. No collateral, no third-party guarantee — just your business plan.',
  badge: 'CGTMSE Loan',
  description: 'CGTMSE provides collateral-free credit to MSMEs through a government credit guarantee fund.',
  highlights: [
    { label: 'Loan Amount', value: 'Up to ₹5 Crore' },
    { label: 'Interest Rate', value: '11% onwards' },
    { label: 'Tenure', value: '12 to 120 months' },
    { label: 'Collateral', value: '100% Collateral-Free' },
  ],
  overview: [
    'CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises) is a landmark government initiative that provides collateral-free credit to MSMEs. The trust guarantees up to 85% of the loan amount, eliminating the need for collateral or third-party guarantees.',
    'This scheme is ideal for first-generation entrepreneurs and small businesses that lack assets to pledge as collateral but have viable business plans. With Universes as your partner, we guide you through the CGTMSE application process and connect you with participating lenders.',
    'At Universes, we have deep expertise in CGTMSE loans and have helped numerous MSMEs in Coimbatore access this government-backed funding. We handle the entire process from Udyam registration assistance to lender matching and disbursal.',
  ],
  benefits: [
    '100% collateral-free loans up to ₹5 Crore',
    'Government credit guarantee (up to 85% of loan amount)',
    'No third-party guarantee required',
    'Reduced processing fees',
    'Available for new and existing businesses',
    'Multiple lender options through CGTMSE portal',
    'Long repayment tenure up to 10 years',
    'Ideal for first-generation entrepreneurs',
  ],
  eligibility: [
    'MSMEs with valid Udyam Registration Certificate (URC)',
    'Manufacturing, service, or trading businesses',
    'Minimum 1 year of business operations (existing businesses)',
    'Viable business plan with positive cash flow projections',
    'Clean credit history',
    'Business should not be a defaulting borrower',
  ],
  documents: [
    'Udyam Registration Certificate (URC)',
    'KYC documents (Aadhaar, PAN)',
    'Last 2 years ITR',
    'Last 6 months bank statements',
    'Business plan / Project report',
    'Financial statements (P&L, Balance Sheet)',
    'Business proof (GST registration, trade license)',
    'Passport-size photographs',
  ],
  faqs: [
    { question: 'What is CGTMSE loan?', answer: 'CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises) is a government-backed scheme that provides 100% collateral-free loans up to ₹5 Crore for MSMEs. The trust guarantees up to 85% of the loan amount, eliminating the need for collateral or third-party guarantees.' },
    { question: 'Who is eligible for CGTMSE loan?', answer: 'Any MSME with a valid Udyam Registration Certificate (URC) can apply. This includes manufacturing, service, and trading businesses. Existing businesses should have at least 1 year of operations, and new businesses should have a viable business plan.' },
    { question: 'What is the maximum CGTMSE loan amount?', answer: 'The maximum loan amount under CGTMSE is ₹5 Crore. However, the exact amount depends on your business requirements, turnover, and repayment capacity. The guarantee cover is up to 85% of the loan amount.' },
    { question: 'Do I need collateral for CGTMSE loan?', answer: 'No! CGTMSE loans are 100% collateral-free. You do not need to pledge any assets or provide any third-party guarantee. The government credit guarantee covers the lender against default.' },
    { question: 'How do I apply for a CGTMSE loan through Universes?', answer: 'Simply fill out our enquiry form or call us at +91 95431 40040. Our team will guide you through the eligibility check, help with Udyam registration if needed, prepare your application, and connect you with participating lenders.' },
  ],
  preselectedType: 'CGTMSE Loan',
  rateTable: [
    { type: 'CGTMSE (Up to ₹5 Lakh)', rate: '11% onwards', tenure: 'Up to 10 years', amount: 'Up to ₹5 Lakh' },
    { type: 'CGTMSE (₹5–50 Lakh)', rate: '11.5% onwards', tenure: 'Up to 10 years', amount: 'Up to ₹50 Lakh' },
    { type: 'CGTMSE (₹50 Lakh–₹5 Cr)', rate: '12% onwards', tenure: 'Up to 10 years', amount: 'Up to ₹5 Crore' },
  ],
}

export default function CGTMSELoanPage() {
  return <LoanDetailPage {...pageData} />
}
