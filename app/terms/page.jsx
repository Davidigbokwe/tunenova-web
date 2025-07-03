import React from 'react'
import TermsOfServicePage from '@/components/Terms'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'    

export const metadata = {
    title: 'Terms of Service - Tunenova',
    description: 'Terms of Service for Tunenova',
}

export default function page() {
  return (
    <div>
        <Navbar />
        <TermsOfServicePage />
        <Footer />
    </div>
  )
}
