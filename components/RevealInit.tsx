'use client'

import { useEffect } from 'react'

export default function RevealInit() {
  useEffect(() => {
    const selector =
      '.reveal, .reveal-slide-left, .reveal-slide-right, .reveal-scale, .reveal-skew, .reveal-fade'
    const revealElements = document.querySelectorAll(selector)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px',
      },
    )

    revealElements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}
