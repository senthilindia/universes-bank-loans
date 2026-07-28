import LoanDetailPage from '@/components/LoanDetailPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Loan Against Property in Coimbatore | Up to ₹5 Crore – Universes',
  description: 'Get a loan against property in Coimbatore up to ₹5 Crore at 9% onwards. Use your residential or commercial property as collateral. No end-use restriction. Call +91-95854 89999.',
  keywords: ['loan against property Coimbatore', 'LAP loan Tamil Nadu', 'mortgage loan Coimbatore', 'property loan'],
}

const pageData = {
  title: 'Loan Against Property in Coimbatore',
  subtitle: 'Leverage your residential or commercial property to access high-value funds for any purpose. Low interest rates, long tenure, and no end-use restriction.',
  badge: 'Loan Against Property',
  description: 'A loan against property (LAP) lets you use your owned property as collateral for high-value, low-rate financing.',
  highlights: [
    { label: 'Loan Amount', value: 'Up to ₹5 Crore' },
    { label: 'Interest Rate', value: '9% onwards' },
    { label: 'Tenure', value: 'Up to 15 years' },
    { label: 'End-Use', value: 'No Restriction' },
  ],
  overview: [
    'A Loan Against Property (LAP) is a secured loan where you pledge your residential or commercial property as collateral to get a high-value loan at competitive interest rates. Unlike a home loan, there are no restrictions on how you use the funds.',
    'At Universes, we help property owners in Coimbatore unlock the value of their assets. Whether you need funds for business expansion, education, medical expenses, wedding, or any other purpose, LAP offers the best combination of low interest and high loan amount.',
    'Our team of experts guides you through the property valuation, documentation, and approval process, ensuring the fastest possible disbursal.',
  ],
  benefits: [
    'High loan amounts up to ₹5 Crore',
    'Low interest rates from 9% p.a.',
    'Long repayment tenure up to 15 years',
    'No end-use restriction — use funds for any purpose',
    'Both residential and commercial properties accepted',
    'Higher eligibility compared to personal loans',
    'Balance transfer facility available',
    'Quick processing with doorstep document collection',
  ],
  eligibility: [
    'Resident Indians who own a property',
    'Property owners (residential, commercial, or industrial)',
    'Age: 25 to 65 years',
    'Salaried or self-employed with stable income',
    'CIBIL score of 650 or above (preferred)',
    'Property should have clear title and marketable value',
  ],
  documents: [
    'KYC documents (Aadhaar, PAN, Passport)',
    'Property documents (title deed, approved plan, EC)',
    'Property tax receipts',
    'Last 3 months salary slips (salaried)',
    'Last 2 years ITR (self-employed)',
    'Last 6 months bank statements',
    'Passport-size photographs',
    'Property valuation report (done by lender)',
  ],
  faqs: [
    { question: 'What is a loan against property?', answer: 'A loan against property (LAP) is a secured loan where you pledge your owned residential or commercial property as collateral. The loan amount is based on the property\'s market value, typically 50-70% of the property value. There are no restrictions on end-use of funds.' },
    { question: 'How much loan can I get against my property?', answer: 'You can get a loan up to ₹5 Crore, typically 50-70% of your property\'s market value. The exact amount depends on the property type, location, condition, and your repayment capacity.' },
    { question: 'What types of property are accepted?', answer: 'Residential properties (apartments, independent houses, villas), commercial properties (offices, shops, showrooms), and industrial properties (factories, warehouses) are accepted. The property should have a clear title and no legal disputes.' },
    { question: 'What is the difference between LAP and home loan?', answer: 'A home loan is specifically for purchasing a residential property. LAP uses your existing property as collateral for any purpose — business, education, marriage, etc. LAP has slightly higher interest rates but offers complete flexibility on fund usage.' },
    { question: 'How long does LAP approval take?', answer: 'With Universes, LAP approval typically takes 5-10 working days. This includes property valuation, document verification, and lender approval. Disbursal happens within 2-3 days after approval.' },
  ],
  preselectedType: 'Loan Against Property',
  loanUrl: '/loan-against-property',
  interestRate: '9%',
  maxAmount: '5 Crore',
  rateTable: [
    { type: 'Residential Property', rate: '9% onwards', tenure: 'Up to 15 years', amount: 'Up to ₹5 Crore' },
    { type: 'Commercial Property', rate: '9.5% onwards', tenure: 'Up to 15 years', amount: 'Up to ₹5 Crore' },
    { type: 'Industrial Property', rate: '10% onwards', tenure: 'Up to 10 years', amount: 'Up to ₹5 Crore' },
  ],
}

export default function LoanAgainstPropertyPage() {
  return <LoanDetailPage {...pageData} />
}
