import Footer from '@/components/common/Footer'
import Navbar from '@/components/layout/Navbar'
import About from './components/About'
import Client from './components/Client'
import Counter from './components/Counter'
import Feature from './components/Feature'
import Hero from './components/Hero'
import Team from './components/Team'
import type { Metadata } from 'next'

import { teamMembers } from './data'

export const metadata: Metadata = {
  title: 'Company',
}

const Company = () => {
  return (
    <>
      <Navbar buttonVariant="outline-secondary" />
      <Hero />
      <About />
      <Feature />
      <Counter />
      <Team teamMembers={teamMembers} />
      <Client />
      <Footer />
    </>
  )
}
export default Company
