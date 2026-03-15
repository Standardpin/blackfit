import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Statement from '@/components/Statement'
import About from '@/components/About'
import Trainers from '@/components/Trainers'
import Transformations from '@/components/Transformations'
import Members from '@/components/Members'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import RevealInit from '@/components/RevealInit'

export default function Home() {
  return (
    <>
      <RevealInit />
      <Navbar />
      <Hero />
      <Statement />
      <About />
      <Trainers />
      <Transformations />
      <Members />
      <CTA />
      <Footer />
    </>
  )
}
