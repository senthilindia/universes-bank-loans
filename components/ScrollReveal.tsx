'use client'

import { ReactNode } from 'react'
import useScrollAnimation from '@/hooks/useScrollAnimation'

interface ScrollRevealProps {
  children: ReactNode
  animation?: 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scaleUp' | 'fadeIn'
  delay?: number
  duration?: number
  className?: string
}

const animationClasses: Record<string, string> = {
  fadeUp: 'scroll-fade-up',
  fadeDown: 'scroll-fade-down',
  fadeLeft: 'scroll-fade-left',
  fadeRight: 'scroll-fade-right',
  scaleUp: 'scroll-scale-up',
  fadeIn: 'scroll-fade-in',
}

export default function ScrollReveal({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 700,
  className = '',
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`${animationClasses[animation]} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
