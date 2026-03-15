import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-start justify-end min-h-screen bg-black overflow-hidden"
    >
      {/* Background photo */}
      <Image
        src="/images/hero/gym-interior.jpg"
        alt="블랙핏 센터 내부"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        quality={85}
      />
      {/* Dark overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 z-[1]" />
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      {/* Content — bottom left aligned */}
      <div className="relative z-10 w-full px-8 lg:px-16 pb-20 pt-32">
        {/* Split typography */}
        <div className="overflow-hidden mb-1">
          <h1
            className="font-bebas leading-none text-white block"
            style={{ fontSize: 'clamp(5rem, 16vw, 13rem)', letterSpacing: '0.05em' }}
          >
            BLACK
          </h1>
        </div>
        <div className="overflow-hidden flex items-baseline gap-8 lg:gap-16">
          <h1
            className="font-bebas leading-none text-white"
            style={{ fontSize: 'clamp(5rem, 16vw, 13rem)', letterSpacing: '0.05em', marginLeft: 'clamp(2rem, 8vw, 8rem)' }}
          >
            FIT
          </h1>
          <p
            className="font-barlow text-white/60 uppercase tracking-widest self-end pb-3 hidden sm:block"
            style={{ fontSize: 'clamp(0.65rem, 1vw, 0.8rem)', letterSpacing: '0.25em' }}
          >
            동탄 프리미엄 퍼스널 트레이닝
          </p>
        </div>
      </div>

      {/* Scroll indicator — bottom right */}
      <div className="absolute bottom-10 right-10 scroll-indicator z-10">
        <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="18" height="30" rx="9" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
          <rect x="8.5" y="6" width="3" height="7" rx="1.5" fill="rgba(255,255,255,0.6)" />
        </svg>
      </div>
    </section>
  )
}
