import LoanDetailPage from '@/components/LoanDetailPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Working Capital Loan in Coimbatore | OD/CC/DLOD – Universes',
  description: 'Get working capital loans in Coimbatore — OD, CC, and DLOD facilities for businesses. Flexible limits, interest only on utilized amount. Call +91 95431 40040.',
  keywords: ['working capital loan Coimbatore', 'OD CC DLOD Tamil Nadu', 'business overdraft', 'cash credit Coimbatore'],
}

const pageData = {
  title: 'Working Capital Loan in Coimbatore',
  subtitle: 'Keep your business running smoothly with flexible working capital facilities. OD, CC, and DLOD options with interest charged only on the utilized amount.',
  badge: 'Working Capital',
  description: 'Working capital loans provide the liquidity businesses need for day-to-day operations.',
  highlights: [
    { label: 'Facility Type', value: 'OD / CC / DLOD' },
    { label: 'Interest Rate', value: '11% onwards' },
    { label: 'Interest On', value: 'Utilized Amount Only' },
    { label: 'Revolving', value: 'Yes' },
  ],
  overview: [
    'Working capital is the lifeblood of any business. A working capital loan ensures your business has the liquidity needed for day-to-day operations — purchasing inventory, paying salaries, managing cash flow gaps, and meeting short-term obligations.',
    'At Universes, we offer three types of working capital facilities — Overdraft (OD), Cash Credit (CC), and Demand Loan cum Overdraft (DLOD) — each designed for different business needs. The key advantage is that you pay interest only on the amount utilized, not on the entire sanctioned limit.',
    'Our team works with you to understand your business cycle and recommends the optimal working capital structure. We have relationships with 15+ banks and NBFCs to get you the best terms.',
  ],
  benefits: [
    'Interest charged only on utilized amount',
    'Revolving credit — repay and reborrow',
    'Flexible limit based on business needs',
    'Multiple facility options (OD, CC, DLOD)',
    'Competitive interest rates from 11% p.a.',
    'Quick sanction and disbursement',
    'Annual review and renewal facility',
    'No prepayment penalty',
  ],
  eligibility: [
    'MSMEs, traders, manufacturers, and service providers',
    'Minimum 2 years of business operations',
    'Minimum annual turnover as per lender norms',
    'Good credit score (650+)',
    'Business should have positive cash flow',
    'Clean repayment track record',
  ],
  documents: [
    'KYC documents (Aadhaar, PAN)',
    'Business registration (GST, Trade License)',
    'Last 2 years ITR',
    'Last 6 months bank statements',
    'Financial statements (P&L, Balance Sheet)',
    'Stock statements (for CC facility)',
    'Debtors and creditors details',
    'Passport-size photographs',
  ],
  faqs: [
    { question: 'What is a working capital loan?', answer: 'A working capital loan is financing provided to businesses for their day-to-day operations. It covers inventory purchases, salary payments, rent, and other operational expenses. Unlike term loans, working capital facilities are revolving — you can borrow, repay, and reborrow within the sanctioned limit.' },
    { question: 'What is the difference between OD and CC?', answer: 'Overdraft (OD) is linked to your current account balance — you can withdraw more than your balance up to a sanctioned limit. Cash Credit (CC) is a short-term loan against inventory or receivables. Both charge interest only on the utilized amount. OD is better for cash flow management; CC is better for inventory financing.' },
    { question: 'What is DLOD?', answer: 'DLOD (Demand Loan cum Overdraft) combines the features of both a demand loan and an overdraft. It offers the flexibility of overdraft with the structure of a demand loan. This is ideal for businesses with seasonal cash flow patterns.' },
    { question: 'How is interest calculated on working capital?', answer: 'Interest is calculated only on the utilized amount (the amount you actually use), not on the total sanctioned limit. For example, if your limit is ₹50 Lakh and you use ₹30 Lakh, you pay interest only on ₹30 Lakh. This makes it very cost-effective.' },
    { question: 'What is the maximum working capital limit?', answer: 'The maximum working capital limit depends on your business turnover, operating cycle, and working capital gap. We help you determine the optimal limit and sanction it from the best lender. Limits can range from ₹5 Lakh to ₹5 Crore or more.' },
  ],
  preselectedType: 'OD/CC/DLOD',
  rateTable: [
    { type: 'Overdraft (OD)', rate: '11% onwards', tenure: 'Annual Renewal', amount: 'Up to ₹1 Crore' },
    { type: 'Cash Credit (CC)', rate: '11% onwards', tenure: 'Annual Renewal', amount: 'Up to ₹1 Crore' },
    { type: 'DLOD', rate: '11.5% onwards', tenure: 'Annual Renewal', amount: 'Up to ₹50 Lakh' },
  ],
}

export default function WorkingCapitalPage() {
  return <LoanDetailPage {...pageData} />
}
