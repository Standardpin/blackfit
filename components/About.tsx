import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="section-py bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Text */}
          <div>
            <div className="label-en mb-4 reveal">About BlackFit</div>
            <h2 className="font-bebas text-[clamp(2.5rem,6vw,4.5rem)] leading-none tracking-wide mb-6 reveal reveal-d1">
              BLACKFIT<br />
              <span className="text-gold-gradient">소개</span>
            </h2>

            <div className="gold-line w-14 mb-8 reveal reveal-d2" />

            <div className="space-y-4 mb-12 reveal reveal-d2">
              <p className="font-noto text-base text-gray-300 leading-relaxed">
                본 센터는 미국 스포츠과학 기관인{' '}
                <span className="text-white font-medium">NSCA</span>와{' '}
                <span className="text-white font-medium">NASM</span> 두 기관의 전문 자격을 기반으로
                운영되는 트레이닝 센터이며, 이 두 기관 인증을 모두 갖춘 센터는 전국에서도{' '}
                <span className="text-gold font-semibold">단 3곳</span>뿐입니다.
              </p>
              <p className="font-noto text-base text-gray-300 leading-relaxed">
                운동을 단순한 경험이 아닌{' '}
                <span className="text-white font-medium">과학적 평가와 데이터 기반 프로그램</span>으로
                접근하여 회원 개개인의 체형, 움직임, 근력 상태를 분석한 후 맞춤형 트레이닝 프로그램을
                제공합니다.
              </p>
              <p className="font-noto text-base text-gray-300 leading-relaxed">
                국가대표 선수 경험과 다양한 전문 자격, 지도 경력을 바탕으로 다이어트, 체형교정,
                근력강화, 기능성 운동, 선수 트레이닝까지 체계적으로 지도하고 있습니다.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 reveal reveal-d3">
              <div className="stat-block">
                <div className="font-bebas text-3xl text-gold tracking-wide">전국 3곳</div>
                <div className="font-noto text-xs text-gray-400 mt-1 leading-snug">
                  NSCA+NASM<br />이중 인증 센터
                </div>
              </div>
              <div className="stat-block">
                <div className="font-bebas text-3xl text-gold tracking-wide">6명</div>
                <div className="font-noto text-xs text-gray-400 mt-1 leading-snug">
                  국제 자격 보유<br />전문 트레이너
                </div>
              </div>
              <div className="stat-block">
                <div className="font-bebas text-3xl text-gold tracking-wide">전 국가대표</div>
                <div className="font-noto text-xs text-gray-400 mt-1 leading-snug">
                  보디빌딩<br />운영 대표
                </div>
              </div>
            </div>
          </div>

          {/* Right: Certifications */}
          <div className="flex flex-col gap-5 reveal reveal-d2">
            <div className="label-en mb-2">공식 인증</div>

            <div className="cert-card p-5 flex items-center gap-5">
              <div className="relative flex-shrink-0 w-20 h-20 overflow-hidden">
                <Image
                  src="/images/certifications/nsca.jpg"
                  alt="NSCA Korea Recognized Gym 인증"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div>
                <div className="font-barlow font-bold text-white text-sm tracking-widest uppercase mb-1">
                  NSCA Korea
                </div>
                <div className="font-noto text-gold text-sm font-medium mb-1">
                  Recognized Gym 공인
                </div>
                <div className="font-noto text-xs text-gray-400 leading-relaxed">
                  미국체력관리학회(NSCA) 공식 인증 센터.<br />
                  전국에서 소수만 부여받는 권위 있는 자격입니다.
                </div>
              </div>
            </div>

            <div className="cert-card p-5 flex items-center gap-5">
              <div className="relative flex-shrink-0 w-20 h-20 overflow-hidden">
                <Image
                  src="/images/certifications/nasm.jpg"
                  alt="NASM 미국스포츠의학회 인증"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div>
                <div className="font-barlow font-bold text-white text-sm tracking-widest uppercase mb-1">
                  NASM Certified
                </div>
                <div className="font-noto text-gold text-sm font-medium mb-1">
                  미국스포츠의학회 공인
                </div>
                <div className="font-noto text-xs text-gray-400 leading-relaxed">
                  NASM(National Academy of Sports Medicine) 공식 인증.<br />
                  검증된 과학적 트레이닝 방법론을 적용합니다.
                </div>
              </div>
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2 mt-2">
              {['다이어트', '체형교정', '근력강화', '기능성 운동', '선수 트레이닝', '바디프로필'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="border border-divider px-3 py-1.5 font-noto text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
