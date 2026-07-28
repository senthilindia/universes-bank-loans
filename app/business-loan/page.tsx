import LoanDetailPage from '@/components/LoanDetailPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Business Loan in Coimbatore | Up to ₹50 Lakh – Universes',
  description: 'Get a business loan in Coimbatore up to ₹50 Lakh at 11% onwards. Quick disbursal within 48 hours. CGTMSE and collateral-free options. Call +91 95431 40040.',
  keywords: ['business loan Coimbatore', 'business loan Tamil Nadu', 'MSME loan', 'SME loan Coimbatore'],
}

const pageData = {
  title: 'Business Loan in Coimbatore',
  subtitle: 'Fuel your business growth with hassle-free financing. Working capital, expansion, equipment purchase — we find the right lender for every business need.',
  badge: 'Business Loan',
  description: 'A business loan provides working capital and growth funds for MSMEs, traders, and self-employed professionals.',
  highlights: [
    { label: 'Loan Amount', value: 'Up to ₹50 Lakh' },
    { label: 'Interest Rate', value: '11% onwards' },
    { label: 'Tenure', value: '12 to 60 months' },
    { label: 'Processing Time', value: '24–48 hours' },
  ],
  overview: [
    'A business loan from Universes helps you access funds from top banks and NBFCs at competitive interest rates. Whether you need working capital, funds for expansion, or equipment financing, we find the right match for your business.',
    'As an authorised channel partner with relationships with 15+ lenders, we ensure you get the best possible terms. Our team handles the entire process — from application to disbursal — so you can focus on your business.',
    'We specialise in serving MSMEs in Coimbatore\'s thriving textile, manufacturing, and trading sectors. Our deep understanding of local business needs means faster processing and better terms.',
  ],
  benefits: [
    'Competitive interest rates from 11% p.a.',
    'Quick disbursal within 24–48 hours',
    'Flexible repayment options (1–5 years)',
    'Minimal documentation required',
    'No hidden charges — transparent processing',
    'Multiple lender options (15+ banks & NBFCs)',
    'Dedicated relationship manager',
    'Doorstep document collection',
  ],
  eligibility: [
    'MSMEs, traders, and self-employed professionals',
    'Minimum 2 years of business operations',
    'Minimum annual turnover as per lender norms',
    'Good credit score (preferably 650+)',
    'Business should be profit-making for last 2 years',
    'Clean repayment track record',
  ],
  documents: [
    'KYC documents (Aadhaar, PAN)',
    'Last 2 years ITR',
    'Last 6 months bank statements',
    'Business proof (GST registration, trade license)',
    'Business plan (for new businesses)',
    'Passport-size photographs',
    'Financial statements (P&L, Balance Sheet)',
  ],
  faqs: [
    { question: 'What is a business loan?', answer: 'A business loan is a type of financing provided to businesses for working capital, expansion, equipment purchase, or other business purposes. As an authorised channel partner, we help you get the best rates from multiple banks and NBFCs.' },
    { question: 'Who is eligible for a business loan?', answer: 'MSMEs, traders, self-employed professionals, and business owners with at least 2 years of business operations can apply. You need KYC documents, 2 years ITR, and 6 months bank statements.' },
    { question: 'How long does business loan approval take?', answer: 'With Universes, most business loan approvals happen within 24-48 hours. Disbursal can happen as fast as 48 hours after approval, depending on the lender and documentation completeness.' },
    { question: 'What documents are required for a business loan?', answer: 'Basic documents include: KYC (Aadhaar, PAN, Passport), 2 years ITR, 6 months bank statements, business proof (GST registration, trade license), and a brief business plan. Additional documents may be needed based on loan type.' },
    { question: 'Can I get a business loan without collateral?', answer: 'Yes! We offer collateral-free business loans up to ₹50 Lakh based on your business profile and creditworthiness. CGTMSE loans offer up to ₹5 Crore without collateral for MSMEs with Udyam registration.' },
  ],
  preselectedType: 'Business Loan',
  loanUrl: '/business-loan',
  interestRate: '11%',
  maxAmount: '50 Lakh',
  rateTable: [
    { type: 'Term Loan', rate: '11% onwards', tenure: '12–60 months', amount: 'Up to ₹50 Lakh' },
    { type: 'Working Capital', rate: '11% onwards', tenure: 'Revolving', amount: 'Up to ₹50 Lakh' },
    { type: 'Equipment Finance', rate: '11.5% onwards', tenure: '12–60 months', amount: 'Up to ₹25 Lakh' },
  ],
}

export default function BusinessLoanPage() {
  return <LoanDetailPage {...pageData} />
}
