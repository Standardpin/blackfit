import Image from 'next/image'
import TrainerCard from '@/components/TrainerCard'
import FeaturedAccordion from '@/components/FeaturedAccordion'
import { trainers } from '@/data/trainers'

const NAVER_BOOKING =
  'https://m.booking.naver.com/booking/13/bizes/849475/items/4881076?area=pll&lang=ko&theme=place'

const headAchievements = [
  ['제60회 세계남자 보디빌딩 선수권대회', '국가대표'],
  ['2005년 미스터코리아 선발대회 (75kg)', '1위'],
  ['제15회 춘계 전국 보디빌딩 선수권 (80kg)', '1위'],
  ['경기도 도민체전', '7회 연속 1위'],
  ['2007년 동아시아 선수권대회', '국가대표'],
]

export default function Trainers() {
  return (
    <section id="trainers" className="section-py" style={{ background: '#050505' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 reveal">
          <div className="label-en mb-4">Our Trainers</div>
          <h2 className="font-bebas text-[clamp(2.5rem,6vw,4.5rem)] leading-none tracking-wide">
            TRAINER<br />
            <span className="text-gold-gradient">소개</span>
          </h2>
        </div>

        {/* Featured Trainer — 신형영 대표 */}
        <div className="card-dark mb-6 reveal reveal-d1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

            {/* Photo */}
            <div className="relative overflow-hidden" style={{ minHeight: '380px', maxHeight: '520px' }}>
              <Image
                src="/images/trainers/shin.jpg"
                alt="신형영 대표 - 보디빌딩 전 국가대표"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Info */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <span className="label-en">Head Trainer</span>
                <div className="flex-1 gold-line" />
              </div>
              <h3 className="font-noto text-3xl font-bold text-white mb-1">신형영</h3>
              <p className="font-barlow text-gold text-base tracking-widest uppercase font-semibold mb-6">
                보디빌딩 전 국가대표
              </p>

              <div className="mb-6">
                <div className="font-noto text-xs text-gray-500 uppercase tracking-widest mb-3">
                  주요 수상 경력
                </div>
                <ul className="space-y-1.5">
                  {headAchievements.map(([desc, highlight], i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-gold mt-0.5 flex-shrink-0">▸</span>
                      <span className="font-noto text-sm text-gray-300">
                        {desc} <span className="text-white">{highlight}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <FeaturedAccordion />
            </div>
          </div>
        </div>

        {/* Grid: 5 trainers + CTA card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trainers.map((trainer, i) => (
            <TrainerCard
              key={trainer.id}
              trainer={trainer}
              revealDelay={((i % 3) + 1) as 1 | 2 | 3}
            />
          ))}

          {/* CTA card */}
          <div className="card-dark flex flex-col items-center justify-center p-8 text-center reveal reveal-d3 min-h-[420px]">
            <div className="w-14 h-14 border border-gold/40 flex items-center justify-center mb-5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8A04A" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <h4 className="font-noto text-base font-semibold text-white mb-2">
              당신의 트레이너를 만나보세요
            </h4>
            <p className="font-noto text-xs text-gray-500 leading-relaxed mb-6">
              전문 트레이너와 1:1 상담을 통해<br />나에게 맞는 프로그램을 찾아보세요
            </p>
            <a
              href={NAVER_BOOKING}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-6 py-2.5 font-noto text-sm"
            >
              무료 체험 신청
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
