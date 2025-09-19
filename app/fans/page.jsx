 import React from 'react'
 import FansHeroSection from '@/components/FansHero'
 import Navbar from '@/components/Navbar'
 import FansHowItWorks from '@/components/FansHowItWorks'
 import FansRefferal from '@/components/FansRefferal'
 import Footer from '@/components/Footer'

 export const metadata = {
   title: 'Discover New Music, Listen & Earn',
 };
 export default function page() {
   return (
     <div>
       <Navbar />
       <FansHeroSection />
       <div className="py-8 md:py-12 lg:py-16"></div>
       <FansHowItWorks />
       <FansRefferal />
       <Footer />
     </div>
   )
 }