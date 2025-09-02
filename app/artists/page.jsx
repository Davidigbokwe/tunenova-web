import React from 'react'
import Navbar from '@/components/Navbar'
import Artists from '@/components/Artists'
import Footer from '@/components/Footer'

export default function ArtistsPage() {
  return (
    <div>
      <Navbar />
      <div className="pt-8">
        <Artists />
      </div>
      <Footer />
    </div>
  )
}