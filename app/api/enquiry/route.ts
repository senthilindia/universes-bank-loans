import { NextRequest, NextResponse } from 'next/server'

interface EnquiryBody {
  name: string
  mobile: string
  loanType: string
  loanAmount: string
  message: string
}

function validate(data: EnquiryBody): { valid: boolean; error?: string } {
  if (!data.name || data.name.trim().length < 2) return { valid: false, error: 'Please enter your full name.' }
  if (!data.mobile) return { valid: false, error: 'Please enter your mobile number.' }
  const clean = data.mobile.replace(/[\s\-+]/g, '')
  if (!/^(91)?[6-9]\d{9}$/.test(clean)) return { valid: false, error: 'Please enter a valid Indian mobile number.' }
  if (!data.loanType) return { valid: false, error: 'Please select a loan type.' }
  return { valid: true }
}

export async function POST(req: NextRequest) {
  try {
    const body: EnquiryBody = await req.json()

    const validation = validate(body)
    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 })
    }

    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })

    // ── Google Sheets via Apps Script ──
    const appsScriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL
    if (appsScriptUrl) {
      await fetch(appsScriptUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp,
          name: body.name.trim(),
          mobile: body.mobile.trim(),
          loanType: body.loanType,
          loanAmount: body.loanAmount || 'Not specified',
          message: body.message || '',
          source: 'website',
        }),
      })
    }

    // ── Email notification via Resend ──
    const resendKey = process.env.RESEND_API_KEY
    const notifyEmail = process.env.NOTIFY_EMAIL || 'info@universesloans.com'
    if (resendKey) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Universes Loans <noreply@universesloans.com>',
          to: notifyEmail,
          subject: `New Enquiry: ${body.loanType} – ${body.name}`,
          html: `
            <h2>New Loan Enquiry</h2>
            <p><strong>Name:</strong> ${body.name}</p>
            <p><strong>Mobile:</strong> ${body.mobile}</p>
            <p><strong>Loan Type:</strong> ${body.loanType}</p>
            <p><strong>Amount:</strong> ${body.loanAmount || 'Not specified'}</p>
            <p><strong>Message:</strong> ${body.message || 'N/A'}</p>
            <p><strong>Time:</strong> ${timestamp}</p>
          `,
        }),
      })
    }

    return NextResponse.json({ success: true, message: 'Enquiry submitted successfully.' })
  } catch (error) {
    console.error('Enquiry error:', error)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
