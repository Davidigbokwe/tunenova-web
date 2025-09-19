import React from 'react'
import HeroSection from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Artists from '@/components/Artists'
import About from '@/components/About'
import WhyArtists from '@/components/WhyArtists'
import WhyArtistsUseTunenova from '@/components/WhyArtistsUseTunenova'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
export default function page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Artists />
      <WhyArtists />
      <WhyArtistsUseTunenova />
      <CTA />
      <Footer />
    </div>
  )
}
