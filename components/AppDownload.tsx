import { whatsappLink, callLink } from '@/lib/constants'

export default function AppDownload() {
  return (
    <section className="py-16 bg-cream-100 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-800/5 rounded-full" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-800/5 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: text */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-4">
              Now Fulfil Your Dreams With Quick Loans
            </h2>
            <p className="text-gray-600 mb-6">
              Apply for loans on the go. Fast, simple, and transparent — from application to disbursal. Speak with our experts today.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Zero hidden charges',
                'Flexible EMIs',
                'Minimal documentation',
                'Quick disbursal in 48 hours',
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                  <span className="w-6 h-6 gradient-brand rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <a href={callLink()} className="bg-brand-800 text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-brand-900 transition shadow-lg font-semibold text-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call +91 95431 40040
              </a>
              <a href={whatsappLink()} className="bg-[#25D366] text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-[#1ebe5d] transition shadow-lg font-semibold text-sm">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right: phone mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Phone frame */}
              <div className="w-56 h-[440px] bg-gradient-to-br from-brand-800 to-brand-900 rounded-[2.5rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="h-8 gradient-brand flex items-center justify-center">
                    <span className="text-white text-xs font-semibold">Universes</span>
                  </div>
                  {/* Content */}
                  <div className="p-4 space-y-4">
                    <div className="gradient-brand rounded-xl p-4 text-center">
                      <div className="text-white/80 text-[10px] mb-1">Quick Loan</div>
                      <div className="text-white font-heading font-bold text-lg">₹50 Lakh</div>
                      <div className="text-white/60 text-[9px] mt-0.5">Business Loan</div>
                    </div>
                    <div className="space-y-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-cream-100 rounded-lg h-10 flex items-center px-3">
                          <div className="w-6 h-6 gradient-brand rounded-md mr-2" />
                          <div className="h-2.5 bg-gray-200 rounded-full flex-1" />
                        </div>
                      ))}
                    </div>
                    <div className="bg-brand-50 rounded-xl p-3 text-center">
                      <div className="text-brand-800 text-[10px] font-semibold">Apply Now</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
