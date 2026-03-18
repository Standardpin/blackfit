import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="bg-white overflow-hidden" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: Huge bold text (Human Interest style) */}
          <div className="flex flex-col justify-center reveal reveal-d1 pt-10">
            <div className="label-en mb-5 text-black">About BlackFit</div>
            <h2
              className="font-bebas text-black leading-[0.85] tracking-tight mb-12"
              style={{ fontSize: 'clamp(4rem, 8vw, 6rem)' }}
            >
              BLACKFIT<br />
              소개.
            </h2>

            <div className="space-y-6 mb-12">
              <p className="font-noto text-base md:text-lg text-black/80 leading-relaxed font-semibold">
                본 센터는 미국 스포츠과학 기관인{' '}
                <span className="text-black font-extrabold">NSCA</span>와{' '}
                <span className="text-black font-extrabold">NASM</span> 두 기관의 전문 자격을 기반으로
                운영되는 트레이닝 센터이며, 이 두 기관 인증을 모두 갖춘 센터는 전국에서도{' '}
                <span className="text-black font-extrabold bg-black/5 px-2 py-0.5">단 3곳</span>뿐입니다.
              </p>
              <p className="font-noto text-sm text-black/60 leading-relaxed">
                운동을 단순한 경험이 아닌 <span className="text-black font-bold">과학적 평가와 데이터 기반 프로그램</span>으로
                접근하여 회원 개개인의 체형, 움직임, 근력 상태를 분석한 후 맞춤형 트레이닝 프로그램을
                제공합니다.
              </p>
              <p className="font-noto text-sm text-black/60 leading-relaxed">
                국가대표 선수 경험과 다양한 전문 자격, 지도 경력을 바탕으로
                다이어트, 체형교정, 근력강화, 기능성 운동, 선수 트레이닝까지 체계적으로 지도하고 있습니다.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-black/10">
              <div className="stat-block">
                <div className="font-bebas text-3xl text-black tracking-tighter">전국 3곳</div>
                <div className="font-noto text-xs text-black/50 mt-1 flex flex-col uppercase font-bold tracking-widest">
                  <span>NSCA+NASM</span><span>이중 인증</span>
                </div>
              </div>
              <div className="stat-block">
                <div className="font-bebas text-3xl text-black tracking-tighter">6명</div>
                <div className="font-noto text-xs text-black/50 mt-1 flex flex-col uppercase font-bold tracking-widest">
                  <span>국제 자격</span><span>전문 트레이너</span>
                </div>
              </div>
              <div className="stat-block">
                <div className="font-bebas text-3xl text-black tracking-tighter">국가대표</div>
                <div className="font-noto text-xs text-black/50 mt-1 flex flex-col uppercase font-bold tracking-widest">
                  <span>보디빌딩</span><span>운영 대표</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Images & Certs */}
          <div className="relative pt-10">
            {/* Center intro image */}
            <div className="relative overflow-hidden reveal-slide-right mb-16 shadow-2xl" style={{ minHeight: '600px' }}>
              <Image
                src="/images/about/training-session.jpg"
                alt="블랙핏 1:1 퍼스널 트레이닝"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Certifications placed below image */}
            <div className="reveal reveal-d3">
              <div className="label-en mb-6">공식 인증</div>
              <div className="space-y-6">
                <div className="cert-card flex items-center gap-6">
                  <div className="relative flex-shrink-0 w-16 h-16 overflow-hidden bg-white border border-black/10">
                    <Image
                      src="/images/certifications/nsca.jpg"
                      alt="NSCA Korea Recognized Gym 인증"
                      fill
                      className="object-contain p-2"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <div className="font-barlow font-bold text-black text-sm tracking-widest uppercase mb-1">
                      NSCA Korea
                    </div>
                    <div className="font-noto font-bold text-black/70 text-xs mb-1">
                      Recognized Gym 공인
                    </div>
                    <div className="font-noto text-xs text-black/50 leading-relaxed">
                      미국체력관리학회 공식 인증 센터
                    </div>
                  </div>
                </div>

                <div className="cert-card flex items-center gap-6">
                  <div className="relative flex-shrink-0 w-16 h-16 overflow-hidden bg-white border border-black/10">
                    <Image
                      src="/images/certifications/nasm.jpg"
                      alt="NASM 미국스포츠의학회 인증"
                      fill
                      className="object-contain p-2"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <div className="font-barlow font-bold text-black text-sm tracking-widest uppercase mb-1">
                      NASM Certified
                    </div>
                    <div className="font-noto font-bold text-black/70 text-xs mb-1">
                      미국스포츠의학회 공인
                    </div>
                    <div className="font-noto text-xs text-black/50 leading-relaxed">
                      검증된 과학적 트레이닝 방법론 적용
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
