'use client'

import { useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      })

      // Phase 0: Set initial states
      gsap.set('.hero-line', { scaleX: 0 })
      gsap.set('.hero-image-wrap', { clipPath: 'inset(50% 0 50% 0)' })
      gsap.set('.hero-subtitle', { opacity: 0, y: 20 })
      gsap.set('.hero-scroll', { opacity: 0 })
      gsap.set('.hero-badge', { opacity: 0, y: 10 })

      // Phase 1: Horizontal line draws across
      tl.to('.hero-line', {
        scaleX: 1,
        duration: 0.8,
        ease: 'power2.inOut',
      })

      // Phase 2: Image clips open vertically from the line
      .to('.hero-image-wrap', {
        clipPath: 'inset(0% 0 0% 0)',
        duration: 1.2,
        ease: 'power4.inOut',
      }, '-=0.3')

      // Phase 2.5: Line fades out
      .to('.hero-line', {
        opacity: 0,
        duration: 0.4,
      }, '-=0.6')

      // Phase 3: "BLACK" text reveals — chars from below
      const blackEl = containerRef.current?.querySelector('.hero-black')
      if (blackEl) {
        const splitBlack = new SplitText(blackEl, {
          type: 'chars',
          charsClass: 'split-char',
        })
        tl.from(splitBlack.chars, {
          y: '120%',
          opacity: 0,
          stagger: 0.04,
          duration: 0.8,
          ease: 'back.out(1.2)',
        }, '-=0.7')
      }

      // Phase 4: "FIT" text reveals — chars from below
      const fitEl = containerRef.current?.querySelector('.hero-fit')
      if (fitEl) {
        const splitFit = new SplitText(fitEl, {
          type: 'chars',
          charsClass: 'split-char',
        })
        tl.from(splitFit.chars, {
          y: '120%',
          opacity: 0,
          stagger: 0.05,
          duration: 0.7,
          ease: 'back.out(1.2)',
        }, '-=0.5')
      }

      // Phase 5: Subtitle fades in
      tl.to('.hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 0.6,
      }, '-=0.3')

      // Phase 5.5: Badge
      .to('.hero-badge', {
        opacity: 1,
        y: 0,
        duration: 0.5,
      }, '-=0.3')

      // Phase 6: Scroll indicator
      .to('.hero-scroll', {
        opacity: 1,
        duration: 0.4,
      }, '-=0.2')

      // Scroll-driven parallax
      gsap.to('.hero-image-wrap', {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to('.hero-text-block', {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      // Fade out on scroll
      gsap.to('.hero-content', {
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: '60% top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative flex flex-col items-start justify-end min-h-screen bg-white overflow-hidden"
    >
      {/* Horizontal reveal line */}
      <div
        className="hero-line absolute top-1/2 left-0 w-full h-px bg-black/20 z-20 origin-left"
      />

      {/* Hero content wrapper for fade */}
      <div className="hero-content absolute inset-0">
        {/* Background image with clip-path reveal */}
        <div className="hero-image-wrap absolute top-0 right-0 w-full md:w-[70%] h-[65vh] md:h-screen z-[1]">
          <Image
            src="/images/hero/gym-interior.jpg"
            alt="블랙핏 센터 내부"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={90}
          />
          {/* Gradient overlays for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/30" />
        </div>

        {/* NSCA badge — top right */}
        <div className="hero-badge absolute top-24 md:top-32 right-8 lg:right-16 z-10">
          <div className="flex flex-col items-end gap-1">
            <span className="font-barlow text-[9px] md:text-[10px] tracking-[0.3em] text-black/40 uppercase">
              NSCA + NASM Certified
            </span>
            <span className="font-barlow text-[9px] md:text-[10px] tracking-[0.2em] text-black/30 uppercase">
              전국 단 3곳
            </span>
          </div>
        </div>

        {/* Main typography — positioned at bottom */}
        <div className="hero-text-block relative z-10 w-full px-8 lg:px-16 pb-20 pt-32 flex flex-col justify-end min-h-screen">
          {/* "BLACK" */}
          <div className="overflow-hidden mb-[-2vw]">
            <h1
              className="hero-black font-bebas leading-[0.85] text-black tracking-tighter"
              style={{ fontSize: 'clamp(6rem, 20vw, 18rem)' }}
            >
              BLACK
            </h1>
          </div>

          {/* "FIT" + subtitle */}
          <div className="overflow-hidden flex flex-col md:flex-row md:items-baseline gap-4 md:gap-16">
            <h1
              className="hero-fit font-bebas leading-[0.85] text-black tracking-tighter"
              style={{
                fontSize: 'clamp(6rem, 20vw, 18rem)',
                marginLeft: 'clamp(1rem, 15vw, 15rem)',
              }}
            >
              FIT
            </h1>
            <p
              className="hero-subtitle font-barlow text-black/50 uppercase font-semibold tracking-[0.3em] md:pb-[3vw] z-20"
              style={{ fontSize: 'clamp(0.6rem, 0.9vw, 0.75rem)' }}
            >
              동탄 프리미엄 퍼스널 트레이닝
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator — bottom right */}
      <div className="hero-scroll absolute bottom-10 right-10 z-10 flex flex-col items-center gap-2">
        <span className="font-barlow text-[9px] tracking-[0.3em] text-black/30 uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-black/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-black/60 animate-scroll-line" />
        </div>
      </div>
    </section>
  )
}
