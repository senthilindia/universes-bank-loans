export default function ChairmanQuote() {
  return (
    <section className="py-0 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-0 items-stretch">
          {/* Left: Full-size Chairman Photo */}
          <div className="relative min-h-[400px] md:min-h-[500px]">
            <img
              src="/chairman.jpg"
              alt="Mr. Sharma — Founder & Chairman, Universes"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Subtle gradient overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            {/* Name overlay on image */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg">
                <div className="w-10 h-10 gradient-brand rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-heading font-bold text-charcoal text-lg leading-tight">Mr. Sharma</div>
                  <div className="text-xs text-gray-500">Founder & Chairman</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quote Content */}
          <div className="bg-gradient-to-br from-brand-800 to-brand-900 flex items-center p-8 md:p-12 lg:p-16 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white/5 rounded-full" />
            <div className="absolute top-1/2 right-10 w-24 h-24 bg-white/[0.03] rounded-full" />

            <div className="relative z-10">
              {/* Quote icon */}
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
                </svg>
              </div>

              <blockquote className="font-heading text-xl md:text-2xl lg:text-3xl text-white font-medium leading-relaxed mb-8">
                &ldquo;Universes has been a trusted partner for Coimbatore&apos;s businesses for over 15 years. We simplify and accelerate access to financial solutions, ensuring greater inclusion and accessibility for all.&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-1 h-12 bg-white/40 rounded-full" />
                <div>
                  <div className="font-heading font-bold text-white text-lg">Mr. Sharma</div>
                  <div className="text-sm text-white/60">Founder & Chairman — Universes, The Global Expansion</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
