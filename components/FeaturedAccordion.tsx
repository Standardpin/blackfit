'use client'

import { useState } from 'react'

const qualifications = [
  'NASM CES 미국스포츠의학회 교정운동전문가',
  'NSCA CPT 미국체력관리학회',
  'NSCA TSAC-F 특수분야 체력관리사',
  'NSCA 스포츠영양코치 1급',
  '생활스포츠지도사(보디빌딩) 1급',
  'AKF KETTLEBELL TRAINER LV1, LV2, LV3',
]

export default function FeaturedAccordion() {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="border-t border-divider pt-4 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between">
        <span className="font-noto text-sm text-gray-400">국제 자격증 보기</span>
        <svg
          className={`accordion-icon w-4 h-4 text-gold flex-shrink-0${open ? ' open' : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
      <div className={`accordion-content mt-3${open ? ' open' : ''}`}>
        <ul className="space-y-1">
          {qualifications.map((q, i) => (
            <li key={i} className="font-noto text-xs text-gray-400 award-dot flex items-center">
              {q}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
