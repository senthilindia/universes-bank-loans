import LoanDetailPage from '@/components/LoanDetailPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Personal Loan in Coimbatore | Up to ₹25 Lakh – Universes',
  description: 'Get a personal loan in Coimbatore up to ₹25 Lakh at 10.5% onwards. Quick disbursal, minimal documentation. Authorised channel partner for 15+ banks & NBFCs. Call +91 95431 40040.',
  keywords: ['personal loan Coimbatore', 'personal loan Tamil Nadu', 'quick personal loan', 'unsecured loan Coimbatore'],
}

const pageData = {
  title: 'Personal Loan in Coimbatore',
  subtitle: 'Meet your financial needs — medical, travel, wedding, or any personal expense — with quick, unsecured financing from top lenders.',
  badge: 'Personal Loan',
  description: 'A personal loan is an unsecured loan that you can use for any personal purpose without pledging any collateral.',
  highlights: [
    { label: 'Loan Amount', value: 'Up to ₹25 Lakh' },
    { label: 'Interest Rate', value: '10.5% onwards' },
    { label: 'Tenure', value: '12 to 60 months' },
    { label: 'Processing Time', value: '24–48 hours' },
  ],
  overview: [
    'A personal loan is one of the most versatile financial products available. Unlike home or car loans, a personal loan does not require any collateral — making it ideal for urgent or unplanned expenses.',
    'At Universes, we partner with 15+ banks and NBFCs to bring you the best personal loan offers in Coimbatore. Whether you need funds for a medical emergency, wedding, vacation, home renovation, or debt consolidation, our experts find the right deal for you.',
    'The entire process is digital-first — apply online, submit documents digitally, and get funds disbursed directly to your bank account within 24–48 hours.',
  ],
  benefits: [
    '100% collateral-free — no assets needed',
    'Quick disbursal within 24–48 hours',
    'Minimal documentation',
    'Flexible repayment tenure (1–5 years)',
    'Competitive interest rates from multiple lenders',
    'No end-use restriction — use for any purpose',
    'Online application and tracking',
    'Prepayment options available',
  ],
  eligibility: [
    'Salaried individuals (minimum ₹15,000/month salary)',
    'Self-employed professionals with 2+ years of business',
    'Age: 21 to 60 years',
    'CIBIL score of 650 or above (preferred)',
    'Minimum 1 year of current employment',
    'Stable income source',
  ],
  documents: [
    'KYC documents (Aadhaar + PAN)',
    'Last 3 months salary slips (salaried)',
    'Last 2 years ITR (self-employed)',
    'Last 6 months bank statements',
    'Passport-size photographs',
    'Employment proof / Business registration',
  ],
  faqs: [
    { question: 'What is a personal loan?', answer: 'A personal loan is an unsecured loan provided by banks or NBFCs for personal use. You do not need to pledge any collateral. The loan is approved based on your income, credit score, and repayment capacity.' },
    { question: 'How much personal loan can I get in Coimbatore?', answer: 'Based on your income and credit profile, you can get a personal loan up to ₹25 Lakh in Coimbatore through Universes. The exact amount depends on your salary, existing obligations, and CIBIL score.' },
    { question: 'What is the interest rate for a personal loan?', answer: 'Personal loan interest rates start from 10.5% p.a. onwards. The exact rate depends on your credit score, income, employer profile, and the lender. We compare offers from multiple banks to get you the lowest rate.' },
    { question: 'How quickly can I get a personal loan?', answer: 'With Universes, personal loan approval can happen within 24–48 hours. Disbursal typically takes 1–2 working days after approval, depending on the lender.' },
    { question: 'Do I need a guarantor for a personal loan?', answer: 'No, personal loans are unsecured and do not require a guarantor or collateral. However, a good CIBIL score (650+) and stable income improve your chances of approval.' },
    { question: 'Can I prepay my personal loan?', answer: 'Yes, most lenders allow prepayment after a lock-in period (typically 6–12 months). Some may charge a small prepayment penalty (1–3%). We help you find lenders with the most flexible prepayment terms.' },
  ],
  preselectedType: 'Personal Loan',
  loanUrl: '/personal-loan',
  interestRate: '10.5%',
  maxAmount: '25 Lakh',
  rateTable: [
    { type: 'Salaried Individual', rate: '10.5% onwards', tenure: 'Up to 5 years', amount: 'Up to ₹25 Lakh' },
    { type: 'Self-Employed', rate: '11% onwards', tenure: 'Up to 5 years', amount: 'Up to ₹20 Lakh' },
  ],
}

export default function PersonalLoanPage() {
  return <LoanDetailPage {...pageData} />
}
