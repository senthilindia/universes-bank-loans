const values = [
  {
    letter: 'C',
    word: 'Collaboration',
    desc: 'We work together with clients and partners to achieve shared financial goals.',
  },
  {
    letter: 'R',
    word: 'Responsibility',
    desc: 'We take ownership of every loan journey, ensuring accountability at every step.',
  },
  {
    letter: 'E',
    word: 'Entrepreneurship',
    desc: 'We empower business owners with the capital they need to grow and succeed.',
  },
  {
    letter: 'D',
    word: 'Directness',
    desc: 'Clear communication, honest advice, and straightforward processes — no jargon.',
  },
  {
    letter: 'I',
    word: 'Innovation',
    desc: 'We leverage modern financial solutions to simplify traditional lending.',
  },
  {
    letter: 'T',
    word: 'Transparency',
    desc: 'No hidden charges. Complete clarity in terms, rates, and processes.',
  },
]

export default function CoreValues() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Pillars of Our Core Values</h2>
          <p className="section-subtitle">The principles that guide everything we do</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.letter} className="card group text-center hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl gradient-brand flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <span className="font-heading font-bold text-2xl text-white">{v.letter}</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-charcoal mb-2">{v.word}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
