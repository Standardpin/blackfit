'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import ZigzagTrainerRow from '@/components/ZigzagTrainerRow'
import { trainers, TrainerData } from '@/data/trainers'

function TrainerSlide({
  trainer,
  index,
  isActive,
  isReversed,
}: {
  trainer: TrainerData
  index: number
  isActive: boolean
  isReversed: boolean
}) {
  const PhotoPanel = (
    <div className="relative h-full">
      <Image
        src={trainer.image}
        alt={trainer.alt}
        fill
        className="object-cover object-top"
        sizes="50vw"
        priority={index === 0}
      />
    </div>
  )

  const TextPanel = (
    <div className="flex flex-col justify-center bg-white px-8 py-14 lg:px-14 lg:py-16 h-full overflow-y-auto mix-blend-multiplyX border-r border-black/5">
      {/* Ghost index number */}
      <div
        className="font-bebas text-black/5 leading-none select-none mb-4 tracking-tighter"
        style={{ fontSize: 'clamp(4rem, 8vw, 6rem)' }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>
      {/* Role label */}
      <div className="label-en mb-3 text-black font-bold">{trainer.role}</div>
      {/* English name */}
      <h3
        className="font-bebas text-black leading-[0.85] tracking-tight mb-2"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
      >
        {trainer.nameEn}
      </h3>
      {/* Korean name + title */}
      <p className="font-noto text-black/60 text-sm md:text-base font-bold mb-8">
        {trainer.name} · {trainer.title}
      </p>
      <div className="line-divider mb-8" />
      {/* Achievements */}
      {trainer.achievements && trainer.achievements.length > 0 && (
        <div className="mb-6">
          <div className="label-en mb-4 text-black font-bold">주요 수상 경력</div>
          <ul className="space-y-3">
            {trainer.achievements.map(([desc, highlight], i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-black/20 mt-0.5 flex-shrink-0 text-xs">—</span>
                <span className="font-noto text-sm text-black/70">
                  {desc} <span className="text-black font-extrabold">{highlight}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* Qualifications */}
      {trainer.qualifications.length > 0 && (
        <div>
          {trainer.achievements && trainer.achievements.length > 0 && (
            <div className="label-en mb-4 mt-8 text-black font-bold">자격 · 경력</div>
          )}
          <ul className="space-y-2">
            {trainer.qualifications.map((q, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-black/20 mt-0.5 flex-shrink-0 text-xs">—</span>
                <span className="font-noto text-sm text-black/70 font-medium">{q}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )

  return (
    <div
      className={`trainer-slide${isActive ? ' active' : ''}`}
      aria-hidden={!isActive}
      tabIndex={isActive ? undefined : -1}
    >
      <div className={`h-full grid grid-cols-2 gap-0 bg-white`}>
        {isReversed ? (
          <>
            <div className="relative overflow-hidden">{TextPanel}</div>
            <div className="relative overflow-hidden">{PhotoPanel}</div>
          </>
        ) : (
          <>
            <div className="relative overflow-hidden">{PhotoPanel}</div>
            <div className="relative overflow-hidden">{TextPanel}</div>
          </>
        )}
      </div>
    </div>
  )
}

function ProgressDots({ activeIndex, total }: { activeIndex: number; total: number }) {
  return (
    <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-10 mix-blend-difference">
      <span
        className="font-barlow text-xs text-white/60 mb-1"
        style={{ fontVariantNumeric: 'tabular-nums' }}
      >
        {String(activeIndex + 1).padStart(2, '0')}
      </span>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`trainer-progress-dot${activeIndex === i ? ' active' : ''}`}
          style={{ background: activeIndex === i ? '#FFF' : 'rgba(255,255,255,0.3)' }}
        />
      ))}
    </div>
  )
}

export default function Trainers() {
  const [activeIndex, setActiveIndex] = useState(0)
  const stickyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = stickyRef.current
    if (!section) return

    let rafId: number
    const handleScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect()
        const sectionHeight = section.offsetHeight
        const viewportHeight = window.innerHeight
        const scrollable = sectionHeight - viewportHeight
        if (scrollable <= 0) { setActiveIndex(0); return }
        const progress = Math.max(0, Math.min(1, -rect.top / scrollable))
        const newIndex = Math.min(Math.floor(progress * trainers.length), trainers.length - 1)
        setActiveIndex(newIndex)
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section id="trainers" className="bg-white">
      {/* Header - outside sticky zone */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-[120px] pb-16">
        <div className="label-en mb-4 text-black">Our Trainers</div>
        <h2
          className="font-bebas text-black leading-[0.85] tracking-tighter"
          style={{ fontSize: 'clamp(4rem, 8vw, 6.5rem)' }}
        >
          TRAINERS.
        </h2>
      </div>

      {/* Desktop: Sticky scroll (md+) */}
      <div
        className="hidden md:block border-y border-black/10"
        ref={stickyRef}
        style={{ height: `${trainers.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen relative overflow-hidden bg-white">
          {trainers.map((trainer, i) => (
            <TrainerSlide
              key={trainer.id}
              trainer={trainer}
              index={i}
              isActive={activeIndex === i}
              isReversed={i % 2 !== 0}
            />
          ))}
          <ProgressDots activeIndex={activeIndex} total={trainers.length} />
        </div>
      </div>

      {/* Mobile: Original zigzag scroll (<md) */}
      <div className="md:hidden border-b border-black/10">
        {trainers.map((trainer, i) => (
          <ZigzagTrainerRow
            key={trainer.id}
            trainer={trainer}
            index={i}
            isReversed={i % 2 !== 0}
          />
        ))}
      </div>
    </section>
  )
}
