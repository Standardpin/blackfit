export default function Footer() {
  return (
    <footer className="bg-white pt-20 overflow-hidden border-t border-black/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        
        {/* Top Info Section */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16 relative z-10">
          
          <div className="flex flex-col gap-2">
            <p className="font-noto text-xs md:text-sm text-black/60 font-medium">
              경기 화성시 동탄공원로3길 6 1층<br />
              010-8285-8753
            </p>
            <p className="font-noto text-xs text-black/40 mt-2 tracking-widest uppercase">
              동탄 프리미엄 퍼스널 트레이닝 센터<br />
              © 2025 BLACKFIT. All rights reserved.
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <a
              href="https://blog.naver.com/blackfit_"
              target="_blank"
              rel="noopener noreferrer"
              className="font-barlow text-sm font-bold text-black border-b border-transparent hover:border-black transition-colors cursor-pointer uppercase tracking-widest"
            >
              Blog
            </a>
            <a
              href="https://www.instagram.com/blackfit_"
              target="_blank"
              rel="noopener noreferrer"
              className="font-barlow text-sm font-bold text-black border-b border-transparent hover:border-black transition-colors cursor-pointer uppercase tracking-widest"
            >
              Instagram
            </a>
            <a
              href="https://naver.me/5N1Xfsog"
              target="_blank"
              rel="noopener noreferrer"
              className="font-barlow text-sm font-bold text-black border-b border-transparent hover:border-black transition-colors cursor-pointer uppercase tracking-widest"
            >
              Naver Map
            </a>
          </div>
        </div>

        {/* Massive Typography matching Hero */}
        <div className="relative mix-blend-differenceX z-0 w-full overflow-hidden flex flex-col pt-10 border-t border-black/10">
          <div className="flex flex-col w-full">
            <h1
              className="font-bebas leading-[0.8] text-black tracking-tighter"
              style={{ fontSize: 'clamp(5rem, 18vw, 18rem)' }}
            >
              BLACK
            </h1>
            <h1
              className="font-bebas leading-[0.8] text-black tracking-tighter text-right -mt-[2vw]"
              style={{ fontSize: 'clamp(5rem, 18vw, 18rem)' }}
            >
              FIT
            </h1>
          </div>
        </div>

      </div>
    </footer>
  )
}
