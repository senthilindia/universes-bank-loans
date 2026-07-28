import LoanDetailPage from '@/components/LoanDetailPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Education Loan in Coimbatore | Up to ₹20 Lakh – Universes',
  description: 'Get an education loan in Coimbatore up to ₹20 Lakh at 9% onwards. For studies in India and abroad. Moratorium period available. Call +91-95854 89999.',
  keywords: ['education loan Coimbatore', 'education loan Tamil Nadu', 'student loan', 'study loan India abroad'],
}

const pageData = {
  title: 'Education Loan in Coimbatore',
  subtitle: 'Invest in your future. Education loans for studies in India and abroad with moratorium period, competitive rates, and flexible repayment.',
  badge: 'Education Loan',
  description: 'An education loan helps students finance higher education in India or abroad with affordable terms.',
  highlights: [
    { label: 'Loan Amount', value: 'Up to ₹20 Lakh' },
    { label: 'Interest Rate', value: '9% onwards' },
    { label: 'Tenure', value: 'Up to 15 years' },
    { label: 'Moratorium', value: 'Course + 1 year' },
  ],
  overview: [
    'Education is the best investment you can make. An education loan from Universes helps you or your child pursue higher education without financial constraints. We offer education loans for undergraduate, postgraduate, and professional courses in India and abroad.',
    'Our lender network includes banks that offer attractive education loan schemes with government subsidies, moratorium periods (no EMI during the course), and flexible repayment options.',
    'We understand the urgency of education loan requirements and offer expedited processing to ensure funds are available before your course begins.',
  ],
  benefits: [
    'Loan for studies in India and abroad',
    'Moratorium period (course duration + 1 year)',
    'No EMI during study period (interest may accrue)',
    'Government subsidy schemes available',
    'Competitive interest rates from 9% p.a.',
    'Long repayment tenure up to 15 years',
    'Covers tuition, hostel, books, and living expenses',
    'Tax benefits under Section 80E',
  ],
  eligibility: [
    'Indian nationals aged 18–35 years',
    'Admitted to a recognized institution in India or abroad',
    'Co-applicant (parent/guardian) with stable income',
    'Good academic record',
    'Admission letter from the institution',
    'CIBIL score of co-applicant: 650+ (preferred)',
  ],
  documents: [
    'KYC documents (student + co-applicant)',
    'Admission letter from institution',
    'Fee structure of the course',
    'Academic records (10th, 12th, graduation)',
    'Co-applicant income proof (salary slips / ITR)',
    'Co-applicant bank statements (6 months)',
    'Passport-size photographs',
    'Collateral documents (if applicable for loans > ₹7.5 Lakh)',
  ],
  faqs: [
    { question: 'What is an education loan?', answer: 'An education loan is a loan provided to students (or their parents) to finance higher education expenses including tuition fees, hostel, books, and living costs. The loan has a moratorium period where you don\'t need to pay EMIs during the course.' },
    { question: 'What is the maximum education loan amount?', answer: 'We help you get education loans up to ₹20 Lakh for studies in India and up to ₹1.5 Crore for studies abroad (depending on the lender). The exact amount depends on the course, institution, and your co-applicant\'s profile.' },
    { question: 'What is the moratorium period?', answer: 'The moratorium period is the time during which you don\'t need to repay the loan. It typically covers the course duration plus 1 year (or 6 months after getting a job, whichever is earlier). During this period, some lenders may charge simple interest.' },
    { question: 'Can I get an education loan for studies abroad?', answer: 'Yes! We offer education loans for studies in popular destinations including the USA, UK, Canada, Australia, Germany, and more. The loan covers tuition, living expenses, travel, and more.' },
    { question: 'Is there a tax benefit on education loans?', answer: 'Yes! Under Section 80E of the Income Tax Act, you can claim a deduction on the interest paid on education loan for up to 8 years from the start of repayment. There is no upper limit on the deduction amount.' },
  ],
  preselectedType: 'Education Loan',
  loanUrl: '/education-loan',
  interestRate: '9%',
  maxAmount: '20 Lakh',
  rateTable: [
    { type: 'India (Up to ₹7.5 Lakh)', rate: '9% onwards', tenure: 'Up to 10 years', amount: 'Up to ₹7.5 Lakh' },
    { type: 'India (Above ₹7.5 Lakh)', rate: '10% onwards', tenure: 'Up to 15 years', amount: 'Up to ₹20 Lakh' },
    { type: 'Abroad Studies', rate: '10.5% onwards', tenure: 'Up to 15 years', amount: 'Up to ₹1.5 Crore' },
  ],
}

export default function EducationLoanPage() {
  return <LoanDetailPage {...pageData} />
}
