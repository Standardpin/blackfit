import Image from 'next/image'
import { TrainerData } from '@/data/trainers'

interface Props {
  trainer: TrainerData
  index: number
  isReversed: boolean
}

export default function ZigzagTrainerRow({ trainer, index, isReversed }: Props) {
  const PhotoBlock = (
    <div
      className="zigzag-photo relative"
      style={{ aspectRatio: '3/4', minHeight: '400px' }}
    >
      <Image
        src={trainer.image}
        alt={trainer.alt}
        fill
        className="object-cover object-top"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={index === 0}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  )

  const TextBlock = (
    <div className="zigzag-text bg-black px-8 py-14 lg:px-14 lg:py-16 reveal reveal-d1">
      {/* Index number */}
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

      {/* Divider */}
      <div className="line-divider mb-8" />

      {/* Achievements (Shin only) */}
      {trainer.achievements && trainer.achievements.length > 0 && (
        <div className="mb-6">
          <div className="label-en mb-4">주요 수상 경력</div>
          <ul className="space-y-2">
            {trainer.achievements.map(([desc, highlight], i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-white/20 mt-0.5 flex-shrink-0 text-xs">—</span>
                <span className="font-noto text-sm text-white/60">
                  {desc}{' '}
                  <span className="text-white font-medium">{highlight}</span>
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
    <div className="zigzag-row border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {isReversed ? (
          <>
            <div className="order-1 md:order-2">{PhotoBlock}</div>
            <div className="order-2 md:order-1">{TextBlock}</div>
          </>
        ) : (
          <>
            <div>{PhotoBlock}</div>
            <div>{TextBlock}</div>
          </>
        )}
      </div>
    </div>
  )
}
