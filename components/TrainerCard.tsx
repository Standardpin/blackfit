'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { TrainerData } from '@/data/trainers'

export default function TrainerCard({
  trainer,
  revealDelay,
}: {
  trainer: TrainerData
  revealDelay: 1 | 2 | 3
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`trainer-card reveal reveal-d${revealDelay}`}>
      {/* Photo */}
      <div className="photo-wrap relative h-80">
        <Image
          src={trainer.image}
          alt={trainer.alt}
          fill
          className="photo-img object-cover object-top"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-1">
          <div>
            <h4 className="font-noto text-lg font-bold text-white">{trainer.name}</h4>
            <p className="font-barlow text-gold text-xs tracking-widest uppercase">{trainer.title}</p>
          </div>
          {trainer.badges.length > 0 && (
            <div className="flex gap-1">
              {trainer.badges.map((badge) => (
                <span
                  key={badge}
                  className="text-[10px] font-barlow border border-gold/40 text-gold px-1.5 py-0.5"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Accordion */}
        <div
          className="border-t border-divider pt-3 mt-3 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <div className="flex items-center justify-between">
            <span className="font-noto text-xs text-gray-500">{trainer.accordionLabel}</span>
            <svg
              className={`accordion-icon w-3.5 h-3.5 text-gold flex-shrink-0${open ? ' open' : ''}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
          <div className={`accordion-content mt-2${open ? ' open' : ''}`}>
            <ul className="space-y-1">
              {trainer.qualifications.map((q, i) => (
                <li key={i} className="font-noto text-[11px] text-gray-400">
                  • {q}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
