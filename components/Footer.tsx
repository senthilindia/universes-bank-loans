import { contact, socialLinks, whatsappLink, callLink, COMPANY } from '@/lib/constants'
import ScrollReveal from '@/components/ScrollReveal'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      {/* CTA Band */}
      <div className="gradient-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-2xl font-bold">Ready to Get a Loan?</h3>
            <p className="text-white/80 mt-1">Speak with our experts — we&apos;ll find the best deal for you.</p>
          </div>
          <div className="flex gap-3">
            <a href={callLink()} className="bg-white text-brand-800 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition shadow-lg">
              Call {contact.phoneDisplay}
            </a>
            <a href={whatsappLink()} className="bg-[#25D366] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#1ebe5d] transition shadow-lg">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-12">
        {/* Brand, Contact & Social */}
        <ScrollReveal animation="fadeUp" delay={0}>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/universes-logo.png"
                alt="Universes — The Global Expansion"
                className="w-10 h-10 object-contain"
              />
              <div>
                <div className="font-heading font-bold text-lg">UNIVERSES</div>
                <div className="text-[10px] text-gray-400 tracking-wider uppercase">The Global Expansion</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Authorised channel partner for banks & NBFCs. Your trusted partner for all loan needs in Coimbatore, Tamil Nadu.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {contact.address}
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                <a href={callLink()} className="hover:text-white transition">{contact.phoneDisplay}</a>
                <span className="text-gray-600">|</span>
                <span>{contact.landline}</span>
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href={`mailto:${contact.email}`} className="hover:text-white transition">{contact.email}</a>
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-white mb-3">Follow Us</p>
              <div className="flex items-center gap-3">
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center hover:scale-110 transition-all duration-200 shadow-lg shadow-pink-500/20" aria-label="Instagram">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                </a>
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center hover:scale-110 transition-all duration-200 shadow-lg shadow-blue-500/20" aria-label="Facebook">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </a>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center hover:scale-110 transition-all duration-200 shadow-lg shadow-blue-600/20" aria-label="LinkedIn">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center hover:scale-110 transition-all duration-200 shadow-lg shadow-red-500/20" aria-label="YouTube">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Map */}
        <ScrollReveal animation="fadeUp" delay={100}>
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Our Location</h4>
            <div className="rounded-xl overflow-hidden border border-gray-700 aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2!2d76.9556!3d11.0059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af4e7e2e3d%3A0x1234567890abcdef!2sAnnapoorna+Layout%2C+New+Siddhapudur%2C+Coimbatore%2C+Tamil+Nadu+641044!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Universes Office — 105/1, Annapoorna Layout, New Siddhapudur, Coimbatore"
                className="w-full h-full"
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">{contact.workingHours}</p>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY.fullName}. All rights reserved.</p>
          <p>Authorised Channel Partner for Banks & NBFCs</p>
        </div>
      </div>
    </footer>
  )
}
