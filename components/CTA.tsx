const NAVER_BOOKING =
  'https://m.booking.naver.com/booking/13/bizes/849475/items/4881076?area=pll&lang=ko&theme=place'

export default function CTA() {
  return (
    <section id="cta" className="section-py">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">

        {/* Gold ornament */}
        <div className="flex items-center justify-center gap-4 mb-10 reveal">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
          <div className="w-2 h-2 bg-gold rotate-45" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
        </div>

        <div className="label-en mb-5 reveal">Free Trial</div>

        <h2 className="font-bebas text-[clamp(2.5rem,8vw,5.5rem)] leading-none tracking-wide mb-6 reveal reveal-d1">
          지금 무료 체험을<br />
          <span className="text-gold-gradient">신청하세요</span>
        </h2>

        <p className="font-noto text-base text-gray-400 max-w-xl mx-auto leading-relaxed mb-10 reveal reveal-d2">
          첫 방문 무료 체험 세션으로 블랙핏의 과학적 트레이닝을 직접 경험해보세요.<br />
          전 국가대표 보디빌더와 함께 당신만의 변화를 시작합니다.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 reveal reveal-d3">
          <a
            href={NAVER_BOOKING}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-12 py-4 font-noto text-base tracking-wide w-full sm:w-auto"
          >
            네이버 무료 체험 예약
          </a>
          <a
            href="tel:01082858753"
            className="btn-outline-gold px-10 py-4 font-noto text-sm tracking-wide w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.43 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6.29 6.29l.96-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            전화 상담
          </a>
          <a
            href="sms:01082858753"
            className="btn-outline-gold px-10 py-4 font-noto text-sm tracking-wide w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            문자 상담
          </a>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16 reveal reveal-d3">
          <div className="card-dark p-5 text-left">
            <div className="label-en mb-2">Phone</div>
            <a href="tel:01082858753" className="font-barlow text-lg text-white font-semibold hover:text-gold transition-colors cursor-pointer block mb-1">
              010-8285-8753
            </a>
            <p className="font-noto text-xs text-gray-500">상담 전화</p>
            <div className="mt-2 border-t border-divider pt-2">
              <a href="tel:03180772613" className="font-barlow text-sm text-gray-300 hover:text-gold transition-colors cursor-pointer block">
                031-8077-2613
              </a>
              <p className="font-noto text-xs text-gray-600">센터 직통</p>
            </div>
          </div>

          <div className="card-dark p-5 text-left">
            <div className="label-en mb-2">Location</div>
            <p className="font-noto text-sm text-white font-medium mb-1 leading-snug">
              경기 화성시 동탄공원로3길 6 1층
            </p>
            <a
              href="https://naver.me/5N1Xfsog"
              target="_blank"
              rel="noopener noreferrer"
              className="font-noto text-xs text-gold hover:underline cursor-pointer"
            >
              네이버 지도로 보기 →
            </a>
            <div className="mt-2 border-t border-divider pt-2">
              <p className="font-noto text-xs text-gray-500">무료 주차장 운영 중</p>
            </div>
          </div>

          <div className="card-dark p-5 text-left">
            <div className="label-en mb-2">Hours</div>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="font-noto text-xs text-gray-400">평일</span>
                <span className="font-barlow text-sm text-white font-medium">06:00 — 22:00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-noto text-xs text-gray-400">토요일</span>
                <span className="font-barlow text-sm text-white font-medium">06:00 — 22:00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-noto text-xs text-gray-400">일요일</span>
                <span className="font-barlow text-sm text-gold">휴무</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
