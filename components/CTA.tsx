import Image from 'next/image'

const NAVER_BOOKING =
  'https://m.booking.naver.com/booking/13/bizes/849475/items/4881076?area=pll&lang=ko&theme=place'

export default function CTA() {
  return (
    <section id="cta" style={{ paddingTop: '120px', paddingBottom: '120px' }} className="relative overflow-hidden bg-black">
      {/* Background photo */}
      <Image
        src="/images/cta/training-action.jpg"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        loading="lazy"
      />
      {/* Heavy overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/95 z-[1]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">

        <h2
          className="font-bebas text-white leading-none tracking-wide mb-6 reveal-fade"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)' }}
        >
          당신의 변화,<br />
          지금 시작하세요
        </h2>

        <p className="font-noto text-sm text-white/40 max-w-xl mx-auto leading-relaxed mb-10 reveal-fade reveal-d1">
          첫 방문 무료 체험 세션으로 블랙핏의 과학적 트레이닝을 직접 경험해보세요.<br />
          전 국가대표 보디빌더와 함께 당신만의 변화를 시작합니다.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 reveal-fade reveal-d2">
          <a
            href={NAVER_BOOKING}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-12 py-4 font-noto text-sm tracking-wide w-full sm:w-auto"
          >
            네이버 무료 체험 예약
          </a>
          <a
            href="tel:01082858753"
            className="btn-outline px-10 py-4 font-noto text-sm tracking-wide w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.43 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6.29 6.29l.96-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            전화 상담
          </a>
          <a
            href="sms:01082858753"
            className="btn-outline px-10 py-4 font-noto text-sm tracking-wide w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            문자 상담
          </a>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px border border-white/10 reveal-fade reveal-d2">
          <div className="bg-black/60 backdrop-blur-sm p-6 text-left border-r border-white/10">
            <div className="label-en mb-3">Phone</div>
            <a href="tel:01082858753" className="font-barlow text-lg text-white font-semibold hover:text-white/70 transition-colors cursor-pointer block mb-1">
              010-8285-8753
            </a>
            <p className="font-noto text-xs text-white/30">상담 전화</p>
            <div className="mt-3 pt-3 border-t border-white/10">
              <a href="tel:03180772613" className="font-barlow text-sm text-white/50 hover:text-white/70 transition-colors cursor-pointer block">
                031-8077-2613
              </a>
              <p className="font-noto text-xs text-white/20">센터 직통</p>
            </div>
          </div>

          <div className="bg-black/60 backdrop-blur-sm p-6 text-left border-r border-white/10">
            <div className="label-en mb-3">Location</div>
            <p className="font-noto text-sm text-white font-medium mb-1 leading-snug">
              경기 화성시 동탄공원로3길 6 1층
            </p>
            <a
              href="https://naver.me/5N1Xfsog"
              target="_blank"
              rel="noopener noreferrer"
              className="font-noto text-xs text-white/40 hover:text-white/70 transition-colors cursor-pointer"
            >
              네이버 지도로 보기 →
            </a>
            <div className="mt-3 pt-3 border-t border-white/10">
              <p className="font-noto text-xs text-white/20">무료 주차장 운영 중</p>
            </div>
          </div>

          <div className="bg-black/60 backdrop-blur-sm p-6 text-left">
            <div className="label-en mb-3">Hours</div>
            <div className="space-y-1.5">
              <div className="flex justify-between">
                <span className="font-noto text-xs text-white/40">평일</span>
                <span className="font-barlow text-sm text-white font-medium">06:00 — 22:00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-noto text-xs text-white/40">토요일</span>
                <span className="font-barlow text-sm text-white font-medium">06:00 — 22:00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-noto text-xs text-white/40">일요일</span>
                <span className="font-barlow text-sm text-white/30">휴무</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
