import LoanDetailPage from '@/components/LoanDetailPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Collateral-Free Loan in Coimbatore | Up to ₹50 Lakh – Universes',
  description: 'Get a collateral-free loan in Coimbatore up to ₹50 Lakh. No assets, no guarantor needed. Quick processing. CGTMSE option for MSMEs. Call +91 95431 40040.',
  keywords: ['collateral free loan Coimbatore', 'unsecured business loan', 'no guarantor loan Tamil Nadu', 'without security loan'],
}

const pageData = {
  title: 'Collateral-Free Loan in Coimbatore',
  subtitle: 'Get financed without pledging any assets. No collateral, no guarantor — just your business profile and creditworthiness. Quick processing and minimal paperwork.',
  badge: 'Collateral-Free',
  description: 'Collateral-free loans let you borrow without pledging any assets as security.',
  highlights: [
    { label: 'Loan Amount', value: 'Up to ₹50 Lakh' },
    { label: 'Interest Rate', value: '12% onwards' },
    { label: 'Tenure', value: '12 to 60 months' },
    { label: 'Collateral', value: 'Not Required' },
  ],
  overview: [
    'Not every business has assets to pledge as collateral — and that shouldn\'t stop you from getting the funding you need. A collateral-free loan from Universes lets you access funds based purely on your business profile, credit score, and repayment capacity.',
    'These unsecured loans are ideal for businesses that need quick funds for working capital, expansion, equipment purchase, or any business purpose without putting personal or business assets at risk.',
    'For MSMEs, we also offer CGTMSE loans which provide up to ₹5 Crore without collateral through a government credit guarantee scheme. Our team helps you determine the best option based on your requirements.',
  ],
  benefits: [
    'No collateral or asset pledge required',
    'No guarantor needed',
    'Quick processing within 48 hours',
    'Minimal documentation',
    'Competitive interest rates from 12% p.a.',
    'Flexible repayment tenure (1–5 years)',
    'Multiple lender options',
    'CGTMSE option available for MSMEs',
  ],
  eligibility: [
    'Business owners with 2+ years of operations',
    'Minimum annual turnover as per lender norms',
    'Good credit score (650+ CIBIL)',
    'Clean repayment track record',
    'Profitable business for last 2 years',
    'No defaults or settlements in credit history',
  ],
  documents: [
    'KYC documents (Aadhaar, PAN)',
    'Last 2 years ITR',
    'Last 6 months bank statements',
    'Business proof (GST registration, trade license)',
    'Financial statements (P&L, Balance Sheet)',
    'Business profile and plan',
    'Passport-size photographs',
  ],
  faqs: [
    { question: 'What is a collateral-free loan?', answer: 'A collateral-free loan is one where you do not need to pledge any assets (property, gold, equipment, etc.) as security. The loan is approved based on your business profile, credit score, and financial health. This means your personal and business assets are not at risk.' },
    { question: 'How much collateral-free loan can I get?', answer: 'You can get a collateral-free loan up to ₹50 Lakh through Universes. For MSMEs with Udyam registration, CGTMSE loans offer up to ₹5 Crore without collateral. The exact amount depends on your business turnover, credit score, and repayment capacity.' },
    { question: 'What is the interest rate for collateral-free loans?', answer: 'Since there is no collateral, interest rates are slightly higher than secured loans — typically starting from 12% p.a. onwards. However, we compare offers from multiple lenders to get you the most competitive rate.' },
    { question: 'Can I get a collateral-free loan for a new business?', answer: 'Collateral-free loans typically require 2+ years of business operations. For newer businesses, CGTMSE loans may be an option if you have Udyam registration. We can also explore other government-backed schemes for startups.' },
    { question: 'What is the difference between collateral-free loan and CGTMSE?', answer: 'Both are unsecured loans. A regular collateral-free loan is from banks/NBFCs based on your business profile. CGTMSE is a government-backed scheme with a credit guarantee, offering higher amounts (up to ₹5 Crore) and lower rates. We help you choose the best option.' },
  ],
  preselectedType: 'Collateral-Free Loan',
  rateTable: [
    { type: 'Collateral-Free (Up to ₹10 Lakh)', rate: '12% onwards', tenure: '12–36 months', amount: 'Up to ₹10 Lakh' },
    { type: 'Collateral-Free (₹10–50 Lakh)', rate: '13% onwards', tenure: '12–60 months', amount: 'Up to ₹50 Lakh' },
    { type: 'CGTMSE (Up to ₹5 Crore)', rate: '11% onwards', tenure: '12–120 months', amount: 'Up to ₹5 Crore' },
  ],
}

export default function CollateralFreeLoanPage() {
  return <LoanDetailPage {...pageData} />
}
