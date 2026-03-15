'use client'

import { useState, useEffect, useRef } from 'react'

const NAVER_BOOKING =
  'https://m.booking.naver.com/booking/13/bizes/849475/items/4881076?area=pll&lang=ko&theme=place'

const navLinks = [
  { href: '#about', label: '소개' },
  { href: '#trainers', label: '트레이너' },
  { href: '#transformations', label: '변화의 기록' },
  { href: '#members', label: '회원' },
]

function handleAnchorClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  const target = document.querySelector(href)
  if (target) {
    e.preventDefault()
    const offset = 80
    const top = target.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const line1 = useRef<HTMLSpanElement>(null)
  const line2 = useRef<HTMLSpanElement>(null)
  const line3 = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleMenu = () => {
    const next = !menuOpen
    setMenuOpen(next)
    if (line1.current && line2.current && line3.current) {
      if (next) {
        line1.current.style.transform = 'translateY(6px) rotate(45deg)'
        line2.current.style.opacity = '0'
        line3.current.style.transform = 'translateY(-6px) rotate(-45deg)'
      } else {
        line1.current.style.transform = ''
        line2.current.style.opacity = ''
        line3.current.style.transform = ''
      }
    }
  }

  const closeMenu = () => {
    setMenuOpen(false)
    if (line1.current && line2.current && line3.current) {
      line1.current.style.transform = ''
      line2.current.style.opacity = ''
      line3.current.style.transform = ''
    }
  }

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent${scrolled ? ' scrolled' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center"
            onClick={(e) => { handleAnchorClick(e, '#hero'); closeMenu() }}
          >
            <span
              className="font-bebas text-white leading-none tracking-widest hover:text-white/70 transition-colors"
              style={{ fontSize: '1.25rem' }}
            >
              BLACKFIT
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleAnchorClick(e, href)}
                className="text-xs font-barlow text-white/40 hover:text-white transition-colors duration-200 cursor-pointer uppercase tracking-widest"
              >
                {label}
              </a>
            ))}
            <a
              href={NAVER_BOOKING}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline px-5 py-2.5 text-xs font-barlow tracking-widest uppercase rounded-none"
            >
              체험 신청
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            aria-label="메뉴 열기"
            onClick={toggleMenu}
          >
            <span ref={line1} className="w-6 h-px bg-white transition-all duration-300" />
            <span ref={line2} className="w-6 h-px bg-white transition-all duration-300" />
            <span ref={line3} className="w-6 h-px bg-white transition-all duration-300" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden absolute top-full left-0 right-0 bg-black border-t border-white/10${menuOpen ? ' open' : ''}`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => { handleAnchorClick(e, href); closeMenu() }}
              className="text-sm font-barlow text-white/60 hover:text-white transition-colors duration-200 uppercase tracking-widest"
            >
              {label}
            </a>
          ))}
          <a
            href={NAVER_BOOKING}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-5 py-3 text-xs font-barlow tracking-widest uppercase text-center"
            onClick={closeMenu}
          >
            무료 체험 신청
          </a>
        </div>
      </div>
    </nav>
  )
}
