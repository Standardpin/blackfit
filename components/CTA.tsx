const NAVER_BOOKING =
  'https://m.booking.naver.com/booking/13/bizes/849475/items/4881076?area=pll&lang=ko&theme=place'

export default function CTA() {
  return (
    <section id="cta" style={{ paddingTop: '160px', paddingBottom: '160px' }} className="relative bg-white border-t border-black/10">
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16 flex flex-col items-center text-center">
        
        <div className="label-en mb-6 text-black font-bold tracking-widest reveal">Let's Talk</div>

        <h2
          className="font-bebas text-black leading-[0.85] tracking-tighter mb-8 reveal-fade"
          style={{ fontSize: 'clamp(4rem, 15vw, 13rem)' }}
        >
          START YOUR<br />
          JOURNEY.
        </h2>

        <p className="font-noto text-sm md:text-lg font-semibold text-black/70 max-w-2xl mx-auto leading-relaxed mb-12 flex flex-col gap-2 reveal-fade reveal-d1">
          <span>첫 방문 무료 체험 세션으로 블랙핏의 과학적 트레이닝을 직접 경험해보세요.</span>
          <span>전 국가대표 보디빌더와 함께 당신만의 변화를 시작합니다.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24 w-full reveal-fade reveal-d2">
          <a
            href={NAVER_BOOKING}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-12 py-5 font-noto text-sm md:text-base font-bold tracking-widest w-full sm:w-auto uppercase"
          >
            네이버 무료 체험 예약
          </a>
          <a
            href="tel:01082858753"
            className="btn-outline px-10 py-5 font-noto text-sm md:text-base font-bold tracking-widest w-full sm:w-auto flex items-center justify-center gap-2 uppercase"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.43 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6.29 6.29l.96-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            전화 상담
          </a>
          <a
            href="sms:01082858753"
            className="btn-outline px-10 py-5 font-noto text-sm md:text-base font-bold tracking-widest w-full sm:w-auto flex items-center justify-center gap-2 uppercase"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            문자 상담
          </a>
        </div>

        {/* Contact info table for human interest style */}
        <div className="w-full max-w-5xl border-t border-black/10 pt-10 text-left reveal-fade reveal-d3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div>
              <div className="font-barlow text-black/40 text-xs font-bold uppercase tracking-[0.2em] mb-4">Contact</div>
              <ul className="space-y-4">
                <li>
                  <a href="tel:01082858753" className="font-bebas text-3xl font-bold text-black hover:opacity-50 transition-opacity">010 8285 8753</a>
                </li>
                <li>
                  <a href="tel:03180772613" className="font-bebas text-3xl font-bold text-black hover:opacity-50 transition-opacity">031 8077 2613</a>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-barlow text-black/40 text-xs font-bold uppercase tracking-[0.2em] mb-4">Location</div>
              <p className="font-noto text-base md:text-lg text-black font-bold leading-relaxed w-2/3">
                경기 화성시 동탄공원로3길 6 1층
              </p>
              <div className="mt-4">
                <a
                  href="https://naver.me/5N1Xfsog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-noto text-xs md:text-sm font-bold border-b border-black pb-1 hover:opacity-50 transition-opacity"
                >
                  네이버 지도로 보기
                </a>
              </div>
            </div>

            <div>
              <div className="font-barlow text-black/40 text-xs font-bold uppercase tracking-[0.2em] mb-4">Hours</div>
              <ul className="space-y-3 font-noto text-sm md:text-base font-bold text-black border-l border-black/10 pl-6">
                <li className="flex justify-between">
                  <span className="text-black/50">평일</span>
                  <span className="font-bebas text-xl">06:00 — 22:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-black/50">토요일</span>
                  <span className="font-bebas text-xl">06:00 — 22:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-black/50">일요일</span>
                  <span className="font-bebas text-xl text-black/30">CLOSED</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
