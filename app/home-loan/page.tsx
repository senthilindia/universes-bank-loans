import LoanDetailPage from '@/components/LoanDetailPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home Loan in Coimbatore | Up to ₹10 Crore – Universes',
  description: 'Get a home loan in Coimbatore up to ₹10 Crore at 8.5% onwards. Long tenure up to 30 years. Balance transfer available. Authorised channel partner. Call +91 95431 40040.',
  keywords: ['home loan Coimbatore', 'home loan Tamil Nadu', 'home loan balance transfer', 'housing loan Coimbatore'],
}

const pageData = {
  title: 'Home Loan in Coimbatore',
  subtitle: 'Make your dream home a reality with competitive interest rates, long tenure up to 30 years, and quick disbursal from top banks and NBFCs.',
  badge: 'Home Loan',
  description: 'A home loan helps you purchase your dream residential property with affordable EMIs over a long repayment tenure.',
  highlights: [
    { label: 'Loan Amount', value: 'Up to ₹10 Crore' },
    { label: 'Interest Rate', value: '8.5% onwards' },
    { label: 'Tenure', value: 'Up to 30 years' },
    { label: 'Processing Time', value: '3–7 working days' },
  ],
  overview: [
    'Owning a home is one of life\'s biggest milestones. A home loan from Universes gives you access to the best interest rates from 15+ banks and NBFCs, making homeownership affordable with low EMIs.',
    'We assist you through the entire journey — from eligibility assessment and lender comparison to document preparation and disbursal. Our team handles all the paperwork, so you can focus on choosing your dream home.',
    'Looking to transfer your existing home loan to get a lower interest rate? We offer home loan balance transfer with top-up facility, helping you save lakhs in interest over the loan tenure.',
  ],
  benefits: [
    'Lowest interest rates from 8.5% p.a.',
    'Long tenure up to 30 years for affordable EMIs',
    'Home loan balance transfer facility',
    'Top-up loan available for additional needs',
    'Loan for purchase, construction, renovation, and plot',
    'Doorstep document collection service',
    'Quick approval within 3–7 working days',
    'Part-payment and prepayment flexibility',
  ],
  eligibility: [
    'Salaried individuals (Indian residents)',
    'Self-employed professionals and business owners',
    'Age: 21 to 65 years (at loan maturity)',
    'Minimum monthly income: ₹25,000',
    'CIBIL score of 700 or above (preferred)',
    'Property should have clear title and approved plan',
  ],
  documents: [
    'KYC documents (Aadhaar, PAN, Passport)',
    'Last 3 months salary slips (salaried)',
    'Last 2 years ITR + Balance Sheet (self-employed)',
    'Last 6 months bank statements',
    'Property documents (sale deed, approved plan, EC)',
    'Passport-size photographs',
    'Employment proof / Business registration',
  ],
  faqs: [
    { question: 'What is the interest rate for a home loan?', answer: 'Home loan interest rates start from 8.5% p.a. onwards. The exact rate depends on your credit score, income, loan amount, and the lender. We compare offers from multiple banks to get you the best rate.' },
    { question: 'What is the maximum home loan amount?', answer: 'We help you get home loans up to ₹10 Crore, subject to your eligibility and the property value. The loan-to-value ratio is typically 75-90% of the property value.' },
    { question: 'How long does home loan approval take?', answer: 'With Universes, home loan approval typically takes 3-7 working days. The entire process from application to disbursal usually takes 2-3 weeks, depending on the lender and property verification.' },
    { question: 'Can I transfer my existing home loan?', answer: 'Yes! Home loan balance transfer allows you to switch to a lender offering a lower interest rate. We help you compare rates and handle the entire transfer process, potentially saving you lakhs in interest.' },
    { question: 'What documents are needed for a home loan?', answer: 'You need: KYC documents (Aadhaar, PAN, Passport), income proof (salary slips / ITR), 6 months bank statements, property documents (sale deed, approved plan, encumbrance certificate), and passport-size photos.' },
    { question: 'Is there a tax benefit on home loans?', answer: 'Yes. Under Section 24(b), you can claim up to ₹2 lakh deduction on home loan interest per year. Under Section 80C, principal repayment is deductible up to ₹1.5 lakh per year. Additional benefits are available under Section 80EEA for first-time buyers.' },
  ],
  preselectedType: 'Home Loan',
  rateTable: [
    { type: 'Home Purchase', rate: '8.5% onwards', tenure: 'Up to 30 years', amount: 'Up to ₹10 Crore' },
    { type: 'Home Construction', rate: '8.5% onwards', tenure: 'Up to 30 years', amount: 'Up to ₹10 Crore' },
    { type: 'Balance Transfer', rate: '8.5% onwards', tenure: 'Up to 30 years', amount: 'Up to ₹10 Crore' },
    { type: 'Top-Up Loan', rate: '9% onwards', tenure: 'Up to 15 years', amount: 'Up to ₹50 Lakh' },
  ],
}

export default function HomeLoanPage() {
  return <LoanDetailPage {...pageData} />
}
