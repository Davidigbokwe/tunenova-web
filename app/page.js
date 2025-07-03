import React from 'react' 
import HeroSection from '@/components/Hero'
import Navbar from '@/components/Navbar'
import HowItWorks from '@/components/HowItWorks'
import Artists from '@/components/Artists'
import About from '@/components/About'
import Refferal from '@/components/Refferal'
import Footer from '@/components/Footer'
export default function page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <HowItWorks />
      <Artists />
      <Refferal />
      <Footer />
    </div>
  )
}
