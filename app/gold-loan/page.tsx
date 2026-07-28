import LoanDetailPage from '@/components/LoanDetailPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gold Loan in Coimbatore | Quick Funding – Universes',
  description: 'Get a gold loan in Coimbatore at 7% onwards. Quick funding, minimal documentation, no credit score requirement. Pledge gold jewelry and get instant funds. Call +91 95431 40040.',
  keywords: ['gold loan Coimbatore', 'gold loan Tamil Nadu', 'gold jewelry loan', 'instant gold loan'],
}

const pageData = {
  title: 'Gold Loan in Coimbatore',
  subtitle: 'Turn your gold into instant cash. Lowest interest rates, minimal documentation, and same-day disbursal. No credit score required.',
  badge: 'Gold Loan',
  description: 'A gold loan lets you pledge gold jewelry for instant funds at the lowest interest rates.',
  highlights: [
    { label: 'Loan Amount', value: 'Up to ₹1 Crore' },
    { label: 'Interest Rate', value: '7% onwards' },
    { label: 'Tenure', value: '6 to 36 months' },
    { label: 'Disbursal', value: 'Same Day' },
  ],
  overview: [
    'A gold loan is one of the fastest and most accessible ways to raise funds. By pledging your gold jewelry, you can get instant cash for any purpose — medical emergencies, business needs, education, or personal expenses.',
    'At Universes, we help you get the best gold loan deals from leading banks and NBFCs in Coimbatore. Our lender network offers competitive interest rates, high loan-to-value ratios, and flexible repayment options.',
    'Unlike personal loans, gold loans do not require a credit score check or income proof. The loan is secured against your gold, making it accessible even for those without a formal credit history.',
  ],
  benefits: [
    'Lowest interest rates from 7% p.a.',
    'Same-day disbursal',
    'No credit score requirement',
    'No income proof needed',
    'High loan-to-value ratio (up to 75%)',
    'Flexible repayment options',
    'Safe and insured gold storage',
    'Part-release of gold on partial repayment',
  ],
  eligibility: [
    'Any Indian citizen aged 18 or above',
    'Must own gold jewelry (18–24 karat)',
    'No minimum income requirement',
    'No credit score requirement',
    'Salaried, self-employed, or unemployed',
    'Agriculturists can also apply',
  ],
  documents: [
    'KYC documents (Aadhaar + PAN/Passport/Voter ID)',
    'Gold jewelry for valuation',
    'Passport-size photographs',
    'Address proof',
    'Gold appraisal done at the branch',
  ],
  faqs: [
    { question: 'What is a gold loan?', answer: 'A gold loan is a secured loan where you pledge your gold jewelry as collateral to get instant funds. The loan amount is based on the weight and purity of your gold. It\'s one of the fastest ways to raise money with minimal documentation.' },
    { question: 'How much gold loan can I get?', answer: 'You can get a gold loan up to ₹1 Crore depending on the weight and purity of your gold. Banks typically offer up to 75% of the gold\'s market value. Our team helps you get the highest possible loan amount.' },
    { question: 'What is the interest rate for a gold loan?', answer: 'Gold loan interest rates start from 7% p.a. onwards — the lowest among all loan types. The exact rate depends on the lender, loan amount, and tenure. We compare offers to get you the best rate.' },
    { question: 'Is credit score required for a gold loan?', answer: 'No! Gold loans do not require a credit score check. Since the loan is secured against your gold, lenders are more flexible with eligibility criteria. This makes gold loans accessible to everyone.' },
    { question: 'How is my gold stored?', answer: 'Your gold is stored in secure, insured vaults maintained by the lender. The gold is sealed in tamper-proof packets and you receive a receipt. The gold is fully insured against theft and damage during the loan tenure.' },
    { question: 'Can I get my gold back before loan repayment?', answer: 'Yes, you can close the loan and get your gold back at any time by repaying the outstanding amount. Some lenders also offer part-release of gold if you make partial repayments.' },
  ],
  preselectedType: 'Gold Loan',
  loanUrl: '/gold-loan',
  interestRate: '7%',
  maxAmount: '1 Crore',
  rateTable: [
    { type: 'Bank Gold Loan', rate: '7% onwards', tenure: '6–36 months', amount: 'Up to ₹50 Lakh' },
    { type: 'NBFC Gold Loan', rate: '9% onwards', tenure: '6–36 months', amount: 'Up to ₹1 Crore' },
    { type: 'Agricultural Gold Loan', rate: '7% onwards', tenure: '6–12 months', amount: 'Up to ₹25 Lakh' },
  ],
}

export default function GoldLoanPage() {
  return <LoanDetailPage {...pageData} />
}
