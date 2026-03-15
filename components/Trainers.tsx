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
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  )

  const TextPanel = (
    <div className="flex flex-col justify-center bg-black px-8 py-14 lg:px-14 lg:py-16 h-full overflow-y-auto">
      {/* Ghost index number */}
      <div
        className="font-bebas text-white/5 leading-none select-none mb-4"
        style={{ fontSize: 'clamp(4rem, 8vw, 6rem)' }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>
      {/* Role label */}
      <div className="label-en mb-3">{trainer.role}</div>
      {/* English name */}
      <h3
        className="font-bebas text-white leading-none tracking-wide mb-2"
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
      >
        {trainer.nameEn}
      </h3>
      {/* Korean name + title */}
      <p className="font-noto text-white/40 text-sm mb-8">
        {trainer.name} · {trainer.title}
      </p>
      <div className="line-divider mb-8" />
      {/* Achievements */}
      {trainer.achievements && trainer.achievements.length > 0 && (
        <div className="mb-6">
          <div className="label-en mb-4">주요 수상 경력</div>
          <ul className="space-y-2">
            {trainer.achievements.map(([desc, highlight], i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-white/20 mt-0.5 flex-shrink-0 text-xs">—</span>
                <span className="font-noto text-sm text-white/60">
                  {desc} <span className="text-white font-medium">{highlight}</span>
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
            <div className="label-en mb-4 mt-6">자격 · 경력</div>
          )}
          <ul className="space-y-2">
            {trainer.qualifications.map((q, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-white/20 mt-0.5 flex-shrink-0 text-xs">—</span>
                <span className="font-noto text-sm text-white/60">{q}</span>
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
      <div className={`h-full grid grid-cols-2 gap-0`}>
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
    <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-10">
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
    <section id="trainers" className="bg-black">
      {/* Header - outside sticky zone */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-[100px] pb-16">
        <div className="label-en mb-4">Our Trainers</div>
        <h2
          className="font-bebas text-white leading-none tracking-wide"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
        >
          TRAINERS
        </h2>
      </div>

      {/* Desktop: Sticky scroll (md+) */}
      <div
        className="hidden md:block"
        ref={stickyRef}
        style={{ height: `${trainers.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen relative overflow-hidden">
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
      <div className="md:hidden border-b border-white/5">
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
