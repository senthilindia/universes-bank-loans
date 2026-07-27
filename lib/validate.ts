export interface EnquiryData {
  name: string
  mobile: string
  loanType: string
  loanAmount: string
  message: string
}

export function validateEnquiry(data: EnquiryData): { valid: boolean; error?: string } {
  if (!data.name || data.name.trim().length < 2) {
    return { valid: false, error: 'Please enter your full name.' }
  }

  if (!data.mobile) {
    return { valid: false, error: 'Please enter your mobile number.' }
  }

  const cleanMobile = data.mobile.replace(/[\s\-+]/g, '')
  if (!/^(91)?[6-9]\d{9}$/.test(cleanMobile)) {
    return { valid: false, error: 'Please enter a valid Indian mobile number.' }
  }

  if (!data.loanType) {
    return { valid: false, error: 'Please select a loan type.' }
  }

  return { valid: true }
}
