import Navbar from '@/components/layout/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import { benefits, vacancies } from './data'
import Culture from './components/Culture'
import Vacancies from './components/Vacancies'
import CTA from './components/CTA'
import Footer from '@/components/common/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Career Landing',
}

const Career = () => {
  return (
    <>
      <div className="bg-gradient2 position-relative">
        <Navbar buttonVariant="outline-secondary" />
        <Hero />
      </div>
      <Benefits benefits={benefits} />
      <Culture />
      <Vacancies vacancies={vacancies} />
      <CTA />
      <Footer />
    </>
  )
}
export default Career
