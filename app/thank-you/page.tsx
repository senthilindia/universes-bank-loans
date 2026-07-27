import { whatsappLink, callLink, contact } from '@/lib/constants'

export const metadata = {
  robots: { index: false, follow: true },
}

export default function ThankYouPage() {
  return (
    <>
      <section className="py-20 bg-cream min-h-[60vh] flex items-center">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h1 className="font-heading text-3xl font-bold text-charcoal mb-3">Thank You!</h1>
          <p className="text-gray-600 mb-8">We&apos;ve received your enquiry. Our loan expert will contact you within 24 hours to discuss the best options for you.</p>

          <div className="space-y-4">
            <p className="text-sm text-gray-500">Need immediate assistance?</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={callLink()} className="btn-primary text-center">
                Call {contact.phoneDisplay}
              </a>
              <a href={whatsappLink()} className="btn-whatsapp text-center">
                Continue on WhatsApp
              </a>
            </div>
          </div>

          <a href="/" className="inline-block mt-8 text-brand-800 hover:underline text-sm font-medium">
            ← Back to Home
          </a>
        </div>
      </section>
    </>
  )
}
