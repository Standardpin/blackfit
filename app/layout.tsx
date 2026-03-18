import type { Metadata } from 'next'
import { Bebas_Neue, Barlow, DM_Serif_Display } from 'next/font/google'
import localFont from 'next/font/local'
import { SmoothScrollProvider } from './providers'
import './globals.css'

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-var',
  display: 'swap',
})

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard-var',
  display: 'swap',
  weight: '100 900',
})

const barlow = Barlow({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-barlow-var',
  display: 'swap',
})

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dm-serif-var',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '블랙핏 | BLACKFIT — 동탄 프리미엄 PT센터',
  description:
    'NSCA+NASM 이중 인증 전국 3곳, 전 국가대표 보디빌더가 운영하는 동탄 프리미엄 퍼스널 트레이닝 센터. 과학적 평가와 데이터 기반 맞춤형 트레이닝으로 당신의 변화를 만듭니다.',
  keywords: ['블랙핏', '동탄PT', '동탄퍼스널트레이닝', 'NSCA', 'NASM', '퍼스널트레이닝', '헬스PT'],
  openGraph: {
    title: '블랙핏 | 동탄 프리미엄 PT센터',
    description: 'NSCA+NASM 이중 인증 전국 3곳. 전 국가대표 보디빌더가 운영하는 과학적 트레이닝',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ko"
      className={`${bebas.variable} ${pretendard.variable} ${barlow.variable} ${dmSerif.variable}`}
    >
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  )
}
