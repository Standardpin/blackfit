export default function Statement() {
  return (
    <section className="bg-black py-32 lg:py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="reveal">
          <p
            className="font-barlow text-white/30 uppercase tracking-[0.3em] text-xs mb-6"
          >
            Premium Personal Training
          </p>
          <h2
            className="font-bebas text-white leading-none"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
          >
            과학이 만드는<br />
            <span className="text-white/50">변화의 시작</span>
          </h2>
        </div>
        <div className="mt-12 max-w-lg reveal reveal-d2">
          <p className="font-noto text-white/50 text-base leading-relaxed">
            NSCA + NASM 이중 인증. 전국 단 3곳.
            데이터 기반 과학적 트레이닝으로 진짜 변화를 만듭니다.
          </p>
        </div>
        {/* Horizontal rule */}
        <div className="mt-16 line-divider reveal reveal-d3" />
      </div>
    </section>
  )
}
