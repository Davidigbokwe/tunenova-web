import React from 'react'
import PrivacyPolicyPage from '@/components/PrivacyPolicy'  
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'    

export const metadata = {
    title: 'Privacy Policy - Tunenova',
    description: 'Privacy Policy for Tunenova',
}

export default function page() {
  return (
    <div>
        <Navbar />
        <PrivacyPolicyPage />
        <Footer />
    </div>
  )
}
