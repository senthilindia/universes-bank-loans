'use client'

import { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Keyboard, A11y, Navigation, Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const slides = [
  {
    tag: 'Business Urgencies',
    title: 'Fuel Your Business Growth',
    subtitle: 'Quick, hassle-free business loans tailored for your needs.',
    rate: 'Starting at 11% p.a.',
    amount: 'Up to ₹50 Lakh',
    imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260',
  },
  {
    tag: 'Instant Needs',
    title: 'Collateral-Free Loans',
    subtitle: 'No assets required. Get financed based on your business strength.',
    rate: 'Starting at 12% p.a.',
    amount: 'Up to ₹50 Lakh',
    imageUrl: 'https://images.pexels.com/photos/7947703/pexels-photo-7947703.jpeg?auto=compress&cs=tinysrgb&w=1260',
  },
  {
    tag: 'Home Dreams',
    title: 'Make Your Dream Home Reality',
    subtitle: 'Competitive home loan rates with long tenure options.',
    rate: 'Starting at 8.5% p.a.',
    amount: 'Up to ₹10 Crore',
    imageUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260',
  },
  {
    tag: 'Professional Growth',
    title: 'CGTMSE Loan — 100% Collateral-Free',
    subtitle: 'Government-backed credit guarantee for MSMEs.',
    rate: '100% Collateral-Free',
    amount: 'Up to ₹5 Crore',
    imageUrl: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260',
  },
]

export default function HeroCarousel() {
  const swiperRef = useRef<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const swiper = swiperRef.current
    if (!swiper) return
    if (isPaused) {
      swiper.autoplay.stop()
    } else {
      swiper.autoplay.start()
    }
  }, [isPaused])

  return (
    <section
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Swiper
        modules={[Autoplay, EffectFade, Keyboard, A11y, Navigation, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={800}
        loop
        keyboard={{ enabled: true }}
        navigation={{
          nextEl: '.hero-nav-next',
          prevEl: '.hero-nav-prev',
        }}
        pagination={{
          el: '.hero-pagination-dots',
          clickable: true,
          bulletClass: 'hero-dot',
          bulletActiveClass: 'hero-dot-active',
        }}
        a11y={{
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
        }}
        onSwiper={(swiper) => { swiperRef.current = swiper }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="hero-swiper"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-[500px] sm:h-[560px] md:h-[620px]">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={slide.imageUrl}
                  alt=""
                  className={`absolute inset-0 w-full h-full object-cover hero-ken-burns ${
                    activeIndex === i ? 'hero-ken-burns--active' : ''
                  }`}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                <div className="w-full max-w-2xl">
                  <div className="space-y-4">
                    <div className={`hero-slide-item ${activeIndex === i ? 'hero-slide-item--visible' : ''}`}
                         style={{ transitionDelay: '100ms' }}>
                      <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full border border-white/10">
                        {slide.tag}
                      </span>
                    </div>

                    <div className={`hero-slide-item ${activeIndex === i ? 'hero-slide-item--visible' : ''}`}
                         style={{ transitionDelay: '300ms' }}>
                      <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
                        {slide.title}
                      </h1>
                    </div>

                    <div className={`hero-slide-item ${activeIndex === i ? 'hero-slide-item--visible' : ''}`}
                         style={{ transitionDelay: '500ms' }}>
                      <p className="text-white/80 text-base sm:text-lg max-w-md leading-relaxed">
                        {slide.subtitle}
                      </p>
                    </div>

                    <div className={`flex flex-wrap gap-3 hero-slide-item ${activeIndex === i ? 'hero-slide-item--visible' : ''}`}
                         style={{ transitionDelay: '700ms' }}>
                      <span className="bg-white/15 backdrop-blur-sm border border-white/10 text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {slide.rate}
                      </span>
                      <span className="bg-white/15 backdrop-blur-sm border border-white/10 text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 11.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l3-3A1 1 0 0011 10.586V7z" />
                        </svg>
                        {slide.amount}
                      </span>
                    </div>

                    <div className={`pt-2 hero-slide-item ${activeIndex === i ? 'hero-slide-item--visible' : ''}`}
                         style={{ transitionDelay: '900ms' }}>
                      <a
                        href="#enquiry"
                        className="inline-flex items-center gap-2 bg-white text-brand-800 font-semibold px-8 py-3.5 rounded-xl text-base hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
                      >
                        Apply Now
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Nav arrows - positioned outside Swiper so they don't get stripped */}
      <div className="hero-nav-prev absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 cursor-pointer group">
        <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      <div className="hero-nav-next absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 cursor-pointer group">
        <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>

      {/* Pagination + counter - positioned outside Swiper */}
      <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4">
        <span className="text-white/50 text-sm font-medium tabular-nums">
          {String(activeIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
        <div className="w-px h-4 bg-white/20" />
        <div className="hero-pagination-dots flex gap-2" />
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30 h-0.5 bg-white/10">
        <div
          key={activeIndex}
          className="h-full bg-white/60 origin-left hero-progress"
          style={{ animation: `heroProgress ${isPaused ? 'paused' : '5s linear forwards'}` }}
        />
      </div>
    </section>
  )
}
