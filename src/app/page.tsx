import Navbar from "@/app/components/navbar/Navbar"
import HeroSection from "@/app/components/hero-section/HeroSection"
import FansSection from "@/app/components/fans-section/FansSection"
import HowItWorksSection from "@/app/components/how-it-works-section/HowItWorksSection"
import CommunitySection from "@/app/components/community-section/CommunitySection"
import DownloadSection from "@/app/components/download-section/DownloadSection"
import Footer from "@/app/components/footer/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <FansSection />
      <CommunitySection />
      <DownloadSection />
      <Footer />
    </div>
  )
}