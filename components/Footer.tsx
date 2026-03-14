export default function Footer() {
  return (
    <footer className="border-t border-divider bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          {/* Logo & address */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <rect width="36" height="36" fill="#C8A04A" />
                <text x="18" y="26" fontFamily="'Bebas Neue', sans-serif" fontSize="22" fill="#000" textAnchor="middle">
                  BF
                </text>
              </svg>
              <span className="font-bebas text-xl text-white tracking-widest">BLACKFIT</span>
            </div>
            <p className="font-noto text-xs text-gray-600 leading-relaxed">
              경기 화성시 동탄공원로3길 6 1층<br />
              사업자등록번호: 준비 중
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <a
                href="https://blog.naver.com/blackfit_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-noto text-xs text-gray-500 hover:text-gold transition-colors cursor-pointer"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10S17.523 22 12 22 2 17.523 2 12 6.477 2 12 2zm-1 5v10l7-5-7-5z" />
                </svg>
                네이버 블로그
              </a>
              <a
                href="https://www.instagram.com/blackfit_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-noto text-xs text-gray-500 hover:text-gold transition-colors cursor-pointer"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                인스타그램
              </a>
              <a
                href="https://naver.me/5N1Xfsog"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-noto text-xs text-gray-500 hover:text-gold transition-colors cursor-pointer"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                네이버 지도
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-divider mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-noto text-xs text-gray-700">© 2025 BLACKFIT. All rights reserved.</p>
          <p className="font-noto text-xs text-gray-700">동탄 프리미엄 퍼스널 트레이닝 센터</p>
        </div>
      </div>
    </footer>
  )
}
