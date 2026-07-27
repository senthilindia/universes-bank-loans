'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, A11y, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const testimonials = [
  {
    quote: "Universes helped me secure a business loan within 48 hours. Their team handled all the paperwork and found us the best rate from multiple lenders. Truly a hassle-free experience.",
    name: 'Rajesh Kumar',
    designation: 'Textile Business Owner',
    location: 'Coimbatore',
    rating: 5,
  },
  {
    quote: "Getting a home loan was a dream come true. The team at Universes guided us through every step, from documentation to disbursal. Their transparency and professionalism are commendable.",
    name: 'Priya Sharma',
    designation: 'Home Buyer',
    location: 'Coimbatore',
    rating: 5,
  },
  {
    quote: "As a Chartered Accountant, I recommend Universes to all my clients. Their understanding of different loan products and ability to match the right lender is unmatched in Coimbatore.",
    name: 'Arun Mohan',
    designation: 'CA',
    location: 'Coimbatore',
    rating: 5,
  },
  {
    quote: "The CGTMSE loan through Universes was completely collateral-free as promised. They made the government scheme accessible and simple. I highly recommend them to fellow entrepreneurs.",
    name: 'Lakshmi Devi',
    designation: 'Entrepreneur',
    location: 'Coimbatore',
    rating: 5,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialCarousel() {
  return (
    <section className="py-16 bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-100/30 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-50/50 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">Trusted by hundreds of happy customers in Coimbatore</p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <Swiper
            modules={[Autoplay, EffectFade, A11y, Navigation, Pagination]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            speed={600}
            loop
            navigation={{
              nextEl: '.testimonial-nav-next',
              prevEl: '.testimonial-nav-prev',
            }}
            pagination={{
              el: '.testimonial-pagination',
              clickable: true,
              bulletClass: 'testi-dot',
              bulletActiveClass: 'testi-dot-active',
            }}
            a11y={{
              prevSlideMessage: 'Previous testimonial',
              nextSlideMessage: 'Next testimonial',
            }}
          >
            {testimonials.map((testimonial, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex">
                  <div className="w-1.5 gradient-brand flex-shrink-0" />

                  <div className="p-8 md:p-10 flex-1">
                    <Stars count={testimonial.rating} />
                    <blockquote className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed italic mb-6">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 gradient-brand rounded-full flex items-center justify-center text-white font-heading font-bold text-sm flex-shrink-0">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-heading font-bold text-charcoal text-sm">{testimonial.name}</div>
                        <div className="text-xs text-gray-500">{testimonial.designation}, {testimonial.location}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation arrows - outside Swiper */}
          <div className="testimonial-nav-prev absolute left-0 md:-left-14 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center text-gray-600 hover:text-brand-800 transition cursor-pointer">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="testimonial-nav-next absolute right-0 md:-right-14 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center text-gray-600 hover:text-brand-800 transition cursor-pointer">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Pagination - outside Swiper */}
          <div className="testimonial-pagination flex justify-center gap-2 mt-6" />
        </div>
      </div>
    </section>
  )
}
