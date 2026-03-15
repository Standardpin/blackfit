export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          {/* Logo text */}
          <div>
            <div
              className="font-bebas text-white leading-none tracking-widest mb-3"
              style={{ fontSize: '1.5rem' }}
            >
              BLACKFIT
            </div>
            <p className="font-noto text-xs text-white/20 leading-relaxed">
              경기 화성시 동탄공원로3길 6 1층<br />
              010-8285-8753
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6">
            <a
              href="https://blog.naver.com/blackfit_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-barlow text-xs text-white/30 hover:text-white transition-colors cursor-pointer uppercase tracking-widest"
            >
              Blog
            </a>
            <a
              href="https://www.instagram.com/blackfit_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-barlow text-xs text-white/30 hover:text-white transition-colors cursor-pointer uppercase tracking-widest"
            >
              Instagram
            </a>
            <a
              href="https://naver.me/5N1Xfsog"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-barlow text-xs text-white/30 hover:text-white transition-colors cursor-pointer uppercase tracking-widest"
            >
              Naver Map
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-noto text-xs text-white/15">© 2025 BLACKFIT. All rights reserved.</p>
          <p className="font-noto text-xs text-white/15">동탄 프리미엄 퍼스널 트레이닝 센터</p>
        </div>
      </div>
    </footer>
  )
}
