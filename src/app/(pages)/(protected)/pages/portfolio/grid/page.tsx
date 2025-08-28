import Navbar from '@/components/layout/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import { galleryItems } from './data'
import Footer from '@/components/common/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio Grid',
}

const PortfolioGrid = () => {
  return (
    <>
      <Navbar buttonVariant="outline-secondary" />
      <Hero />
      <Gallery galleryItems={galleryItems} />
      <Footer />
    </>
  )
}
export default PortfolioGrid
