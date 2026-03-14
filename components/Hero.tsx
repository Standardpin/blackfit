const NAVER_BOOKING =
  'https://m.booking.naver.com/booking/13/bizes/849475/items/4881076?area=pll&lang=ko&theme=place'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#050505] pointer-events-none" />

      {/* Gold glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-20">

        {/* Badge row */}
        <div className="flex items-center gap-4 mb-10 reveal">
          <div className="flex items-center gap-2 border border-gold/40 px-3 py-1.5">
            <div className="w-1.5 h-1.5 bg-gold rounded-full" />
            <span className="font-barlow text-gold text-xs tracking-widest uppercase">NSCA Certified</span>
          </div>
          <div className="flex items-center gap-2 border border-gold/40 px-3 py-1.5">
            <div className="w-1.5 h-1.5 bg-gold rounded-full" />
            <span className="font-barlow text-gold text-xs tracking-widest uppercase">NASM Certified</span>
          </div>
        </div>

        {/* Main headline */}
        <h1 className="font-bebas text-[clamp(4rem,14vw,9rem)] leading-none tracking-wider text-white mb-2 reveal reveal-d1">
          BLACKFIT
        </h1>

        {/* Korean tagline */}
        <p className="font-noto text-[clamp(1rem,3vw,1.5rem)] font-light text-gray-200 mb-4 reveal reveal-d2">
          과학이 만드는 변화
        </p>

        {/* Sub description */}
        <p className="font-noto text-sm md:text-base text-[#A3A3A3] max-w-lg leading-relaxed mb-3 reveal reveal-d2">
          NSCA + NASM 이중 인증 <span className="text-gold font-medium">전국 단 3곳</span>
        </p>
        <p className="font-noto text-sm md:text-base text-[#A3A3A3] max-w-md leading-relaxed mb-12 reveal reveal-d3">
          전 국가대표 보디빌더가 이끄는 동탄 프리미엄 퍼스널 트레이닝 센터
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4 reveal reveal-d4">
          <a
            href={NAVER_BOOKING}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-10 py-4 font-noto text-base tracking-wide"
          >
            무료 체험 신청
          </a>
          <a href="tel:01082858753" className="btn-outline-gold px-8 py-4 font-noto text-sm tracking-wide">
            지금 바로 상담
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 scroll-indicator" style={{ transform: 'translateX(-50%)' }}>
        <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="18" height="30" rx="9" stroke="#C8A04A" strokeOpacity="0.4" strokeWidth="1.5" />
          <rect x="8.5" y="6" width="3" height="7" rx="1.5" fill="#C8A04A" opacity="0.7" />
        </svg>
      </div>
    </section>
  )
}
