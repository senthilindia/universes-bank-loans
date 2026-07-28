const WHATSAPP_NUMBER = '919543140040'
const PHONE_NUMBER = '919543140040'
const PHONE_DISPLAY = '+91 95431 40040'

export const contact = {
  whatsappNumber: WHATSAPP_NUMBER,
  phoneNumber: PHONE_NUMBER,
  phoneDisplay: PHONE_DISPLAY,
  landline: '0422 4203999',
  address: '105/1, Annapoorna Layout, New Siddhapudur, Coimbatore – 641044',
  email: 'info@universesloans.com',
  workingHours: 'Monday – Saturday, 9:30 AM – 6:30 PM',
}

export const socialLinks = {
  instagram: 'https://www.instagram.com/universes_globalexpansion?utm_source=qr&igsh=M2Fja3BqaGdpN2Rv',
  facebook: 'https://www.facebook.com/share/15zjoYBxkse/',
  linkedin: 'https://www.linkedin.com/company/universesloans',
  youtube: 'https://www.youtube.com/@universesloans',
}

export function whatsappLink(page?: string): string {
  const messages: Record<string, string> = {
    home: "Hi, I'm interested in a loan in Coimbatore.",
    business: "Hi, I'm interested in a Business/Collateral-Free Loan.",
    mortgage: "Hi, I'm interested in a Home/Car/Mortgage Loan.",
    chatbot: "Hi, I was chatting with your website bot and need help.",
  }
  const text = messages[page || 'home'] || messages.home
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

export function callLink(): string {
  return `tel:${PHONE_NUMBER}`
}

export const COMPANY = {
  name: 'Universes',
  tagline: 'The Global Expansion',
  fullName: 'Universes — The Global Expansion',
  yearsExperience: '15+',
  loansDisbursed: '500+',
  maxCollateralFree: '₹5 Crore',
  avgApprovalTime: '48 hours',
}

export const trustStats = [
  { value: COMPANY.yearsExperience, label: 'Years Experience' },
  { value: COMPANY.loansDisbursed, label: 'Loans Disbursed' },
  { value: COMPANY.maxCollateralFree, label: 'Collateral-Free Limit' },
  { value: COMPANY.avgApprovalTime, label: 'Avg. Approval Time' },
]
