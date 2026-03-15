import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="bg-black overflow-hidden" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">

          {/* Left: Training photo */}
          <div className="relative overflow-hidden reveal-slide-left" style={{ minHeight: '560px' }}>
            <Image
              src="/images/about/training-session.jpg"
              alt="블랙핏 1:1 퍼스널 트레이닝"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="label-en">1:1 Personal Training</span>
            </div>
          </div>

          {/* Right: Text */}
          <div className="bg-black px-8 py-16 lg:px-16 lg:py-20 flex flex-col justify-center reveal reveal-d1">
            <div className="label-en mb-5">About BlackFit</div>
            <h2
              className="font-bebas text-white leading-none tracking-wide mb-8"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              BLACKFIT<br />
              소개
            </h2>

            <div className="space-y-4 mb-10">
              <p className="font-noto text-sm text-white/60 leading-relaxed">
                본 센터는 미국 스포츠과학 기관인{' '}
                <span className="text-white font-medium">NSCA</span>와{' '}
                <span className="text-white font-medium">NASM</span> 두 기관의 전문 자격을 기반으로
                운영되는 트레이닝 센터이며, 이 두 기관 인증을 모두 갖춘 센터는 전국에서도{' '}
                <span className="text-white font-semibold">단 3곳</span>뿐입니다.
              </p>
              <p className="font-noto text-sm text-white/60 leading-relaxed">
                운동을 단순한 경험이 아닌{' '}
                <span className="text-white font-medium">과학적 평가와 데이터 기반 프로그램</span>으로
                접근하여 회원 개개인의 체형, 움직임, 근력 상태를 분석한 후 맞춤형 트레이닝 프로그램을
                제공합니다.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              <div className="stat-block">
                <div className="font-bebas text-2xl text-white tracking-wide">전국 3곳</div>
                <div className="font-noto text-xs text-white/40 mt-1 leading-snug">
                  NSCA+NASM<br />이중 인증
                </div>
              </div>
              <div className="stat-block">
                <div className="font-bebas text-2xl text-white tracking-wide">6명</div>
                <div className="font-noto text-xs text-white/40 mt-1 leading-snug">
                  국제 자격<br />전문 트레이너
                </div>
              </div>
              <div className="stat-block">
                <div className="font-bebas text-2xl text-white tracking-wide">국가대표</div>
                <div className="font-noto text-xs text-white/40 mt-1 leading-snug">
                  보디빌딩<br />운영 대표
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="label-en mb-5">공식 인증</div>
            <div className="space-y-5">
              <div className="cert-card flex items-center gap-5">
                <div className="relative flex-shrink-0 w-14 h-14 overflow-hidden" style={{ filter: 'grayscale(100%)' }}>
                  <Image
                    src="/images/certifications/nsca.jpg"
                    alt="NSCA Korea Recognized Gym 인증"
                    fill
                    className="object-cover"
                    sizes="56px"
                    style={{ filter: 'none' }}
                  />
                </div>
                <div>
                  <div className="font-barlow font-bold text-white text-xs tracking-widest uppercase mb-0.5">
                    NSCA Korea
                  </div>
                  <div className="font-noto text-white/50 text-xs mb-1">
                    Recognized Gym 공인
                  </div>
                  <div className="font-noto text-xs text-white/30 leading-relaxed">
                    미국체력관리학회 공식 인증 센터
                  </div>
                </div>
              </div>

              <div className="cert-card flex items-center gap-5">
                <div className="relative flex-shrink-0 w-14 h-14 overflow-hidden">
                  <Image
                    src="/images/certifications/nasm.jpg"
                    alt="NASM 미국스포츠의학회 인증"
                    fill
                    className="object-cover"
                    sizes="56px"
                    style={{ filter: 'none' }}
                  />
                </div>
                <div>
                  <div className="font-barlow font-bold text-white text-xs tracking-widest uppercase mb-0.5">
                    NASM Certified
                  </div>
                  <div className="font-noto text-white/50 text-xs mb-1">
                    미국스포츠의학회 공인
                  </div>
                  <div className="font-noto text-xs text-white/30 leading-relaxed">
                    검증된 과학적 트레이닝 방법론 적용
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
