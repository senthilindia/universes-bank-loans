import ScrollReveal from '@/components/ScrollReveal'

const steps = [
  {
    num: '01',
    title: "Click 'Apply Now'",
    desc: 'Fill out the simple online form with your basic details and loan requirements.',
    imageUrl: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  },
  {
    num: '02',
    title: 'Upload Documents',
    desc: 'Provide your KYC and income documents through our secure digital portal.',
    imageUrl: 'https://images.pexels.com/photos/7947703/pexels-photo-7947703.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  },
  {
    num: '03',
    title: 'Get Funds',
    desc: 'Loan amount disbursed directly to your bank account within 48 hours.',
    imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  },
]

export default function ProcessStepsWithImages() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-800 text-xs font-semibold tracking-wide uppercase mb-4">
              Simple Process
            </span>
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">Three simple steps to get your loan</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 items-start relative">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              <ScrollReveal animation="scaleUp" delay={i * 150}>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 w-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  {/* Image area */}
                  <div className="relative w-full h-48 rounded-xl overflow-hidden mb-5">
                    <img
                      src={step.imageUrl}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-900/30 to-transparent" />
                  </div>

                  {/* Number badge */}
                  <div className="w-10 h-10 gradient-brand rounded-full flex items-center justify-center text-white font-heading font-bold text-sm mb-3 mx-auto -mt-14 relative z-10 shadow-md">
                    {step.num}
                  </div>

                  <h3 className="font-heading font-bold text-lg text-charcoal mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>

              {/* Arrow connector between cards */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                  <svg className="w-8 h-8 text-brand-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
