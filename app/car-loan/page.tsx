import LoanDetailPage from '@/components/LoanDetailPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Car Loan in Coimbatore | Up to ₹1 Crore – Universes',
  description: 'Get a car loan in Coimbatore up to ₹1 Crore at 8.75% onwards. 100% financing available. New & used car loans. Quick approval. Call +91 95431 40040.',
  keywords: ['car loan Coimbatore', 'car loan Tamil Nadu', 'new car loan', 'used car loan', 'auto loan Coimbatore'],
}

const pageData = {
  title: 'Car Loan in Coimbatore',
  subtitle: 'Drive your dream car today with competitive interest rates, quick approval, and flexible EMI options. New or used car — we have you covered.',
  badge: 'Car Loan',
  description: 'A car loan helps you purchase a new or pre-owned car with easy EMI options and quick disbursal.',
  highlights: [
    { label: 'Loan Amount', value: 'Up to ₹1 Crore' },
    { label: 'Interest Rate', value: '8.75% onwards' },
    { label: 'Tenure', value: '12 to 84 months' },
    { label: 'Finance', value: 'Up to 100% available' },
  ],
  overview: [
    'Buying a car is an exciting milestone. With Universes, you get access to the best car loan deals from leading banks and NBFCs in Coimbatore. We compare rates across 15+ lenders to ensure you get the most affordable EMI.',
    'Whether you\'re buying your first car, upgrading to a premium model, or financing a pre-owned vehicle, our team handles the entire process — from eligibility check to disbursal.',
    'We also specialise in commercial vehicle loans for businesses that need trucks, tempos, or fleet vehicles. Our lender network includes specialists in commercial vehicle financing.',
  ],
  benefits: [
    'Competitive interest rates from 8.75% p.a.',
    '100% on-road financing available',
    'Quick approval within 24 hours',
    'Flexible tenure from 1 to 7 years',
    'New and used car financing',
    'Minimal documentation',
    'Doorstep service',
    'No hidden charges',
  ],
  eligibility: [
    'Salaried individuals with minimum 1 year of employment',
    'Self-employed with 2+ years of business operations',
    'Age: 21 to 65 years',
    'Minimum monthly income: ₹20,000',
    'CIBIL score of 650 or above (preferred)',
    'Valid driving license (preferred)',
  ],
  documents: [
    'KYC documents (Aadhaar, PAN, Passport)',
    'Last 3 months salary slips (salaried)',
    'Last 2 years ITR (self-employed)',
    'Last 6 months bank statements',
    'Vehicle quotation / Proforma invoice',
    'Passport-size photographs',
    'Driving license',
  ],
  faqs: [
    { question: 'What is the interest rate for a car loan?', answer: 'Car loan interest rates start from 8.75% p.a. onwards. The exact rate depends on the car type (new/used), loan amount, tenure, and your credit profile. We compare offers from multiple lenders to get you the best deal.' },
    { question: 'Can I get 100% financing for a car?', answer: 'Yes, in many cases we can arrange up to 100% on-road financing for new cars. For used cars, financing is typically up to 80-90% of the car value. The exact percentage depends on the lender and your profile.' },
    { question: 'What is the maximum car loan tenure?', answer: 'The maximum tenure for a car loan is 7 years (84 months). However, a shorter tenure means lower total interest. We help you choose the optimal tenure based on your budget.' },
    { question: 'Can I get a loan for a used car?', answer: 'Yes! We offer used car loans for pre-owned vehicles. The interest rate may be slightly higher than new car loans, and the maximum tenure is typically 5 years. The car should be within a certain age limit as per lender norms.' },
    { question: 'How quickly can I get a car loan?', answer: 'Car loan approval can happen within 24 hours with Universes. After approval, the loan amount is disbursed to the dealer within 1-2 working days, and you can drive your car home.' },
  ],
  preselectedType: 'Car Loan',
  rateTable: [
    { type: 'New Car Loan', rate: '8.75% onwards', tenure: 'Up to 7 years', amount: 'Up to ₹1 Crore' },
    { type: 'Used Car Loan', rate: '10% onwards', tenure: 'Up to 5 years', amount: 'Up to ₹50 Lakh' },
    { type: 'Commercial Vehicle', rate: '10% onwards', tenure: 'Up to 5 years', amount: 'Up to ₹1 Crore' },
  ],
}

export default function CarLoanPage() {
  return <LoanDetailPage {...pageData} />
}
