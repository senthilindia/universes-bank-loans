import { trustStats } from '@/lib/constants'
import ScrollReveal from '@/components/ScrollReveal'

export default function TrustStats() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fadeUp">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {trustStats.map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-brand-50 flex items-center justify-center group-hover:bg-brand-800 transition-colors duration-300">
                  <span className="text-2xl md:text-3xl font-heading font-bold text-brand-800 group-hover:text-white transition-colors duration-300">{stat.value}</span>
                </div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
