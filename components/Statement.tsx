import Image from 'next/image'

export default function Statement() {
  return (
    <section className="bg-white py-32 lg:py-48 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 relative">

        {/* 상단 라벨 (우측 정렬, 하단 선) */}
        <div className="flex justify-end mb-16 lg:mb-24 reveal">
          <div className="w-[300px] border-b border-black/20 pb-3 flex justify-end">
            <p className="font-barlow text-black uppercase tracking-[0.2em] text-xs">
              Premium Personal Training
            </p>
          </div>
        </div>

        {/* 메인 타이포그래피 & 겹치는 이미지 섹션 */}
        <div className="relative w-full mb-24 lg:mb-32 pt-10">
          
          {/* 이미지 섹션: 텍스트 뒤/옆으로 겹침 */}
          <div className="absolute left-[5%] md:left-[10%] top-[40%] md:top-[30%] w-[55%] md:w-[40%] lg:w-[28%] aspect-[3/4] z-0 reveal-slide-left">
            <Image
              src="/images/about/training-session.jpg"
              alt="BlackFit training session"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 500px"
              priority
            />
          </div>

          {/* 초대형 타이포그래피 (검정색) */}
          <div className="relative z-10 w-full flex flex-col font-black text-black tracking-tighter reveal">
            <h2 className="flex flex-col w-full m-0 p-0">
              <span className="w-full text-left" style={{ fontSize: 'clamp(3rem, 13vw, 12rem)', lineHeight: '0.9', letterSpacing: '-0.04em' }}>
                과학이 만드는
              </span>
              <span className="w-full text-left pl-[10%] md:pl-[15%] lg:pl-[20%] whitespace-nowrap" style={{ fontSize: 'clamp(3rem, 13vw, 12rem)', lineHeight: '0.9', letterSpacing: '-0.04em' }}>
                변화의 시작
              </span>
            </h2>
          </div>
        </div>

        {/* 설명문 — 우측 하단 텍스트 블록 */}
        <div className="flex justify-end reveal reveal-d2">
          <div className="max-w-md w-full ml-auto md:w-[45%] lg:w-[40%] flex flex-col gap-6">
            <p className="text-black text-xs lg:text-sm tracking-widest leading-relaxed font-bold break-keep">
              NSCA + NASM 이중 인증. 전국 단 3곳.<br />데이터 기반 과학적 트레이닝으로 진짜 변화를 만듭니다.
            </p>
            <div className="space-y-4">
              <p className="font-barlow text-black/60 text-[10px] lg:text-xs uppercase tracking-[0.2em] leading-relaxed break-keep">
                ADD DEPTH AND CAPACITY TO YOUR COMMUNICATIONS BY ENGAGING WITH HUMAN INTEREST. 
                LONG-STANDING CLIENTS OCCUPY SPACE ALONGSIDE AD HOC PROJECTS, 
                ALL WITH POSITIVE PURPOSE AND PASSION.
              </p>
              <p className="font-barlow text-black/60 text-[10px] lg:text-xs uppercase tracking-[0.2em] leading-relaxed break-keep">
                INJECT FRESH ENERGY INTO YOUR ORGANISATION OR PROJECT WITH HUMAN INTEREST. 
                UPLIFTING, EMPOWERING AND ENJOYING ARE AT OUR CORE —<br />
                WE WANT TO GIVE YOU MORE.
              </p>
            </div>
          </div>
        </div>

        {/* Divider (Darker for White Background) */}
        <div className="mt-24 lg:mt-32 h-px bg-black/10 reveal reveal-d3" />
      </div>
    </section>
  )
}
