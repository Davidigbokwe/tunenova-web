"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Upload, Target, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HowItWorksArtists = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const steps = [
    {
      icon: <Upload className="w-6 h-6" />,
      title: "Upload a 20-Second Snippet",
      description: "Pick your best track snippet to promote.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Set Your Campaign Budget",
      description: "With just ₦20,000, you can reach over 1,200+ real listeners who will hear your song and stream more.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Reach Real Fans Instantly",
      description: "We push your track to listeners who are paid to discover — no bots, no fake clicks.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Grow Your Streams & Audience",
      description: "As listeners explore your music, we direct them to your Spotify, YouTube, or Apple Music links.",
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      ),
      title: "Join Our WhatsApp Community",
      description: "Connect with other artists, get updates, and network in our exclusive WhatsApp group.",
    }
  ];

  return (
    <div className="py-16 px-6 md:px-12 lg:px-24 bg-white" id='artists'>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Left section */}
          <motion.div {...fadeIn} className="max-w-xl">
            <div className="flex items-center gap-3 mb-2 justify-center lg:justify-start">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900">How it Works - Artists</h1>
            </div>
            <p className="text-gray-700 text-base mb-8 text-center lg:text-left">
              Promote your music to real listeners and grow your fanbase organically.
            </p>
            {/* Dashboard Image */}
            <motion.div 
              className=""
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Image
                src="/fans.png"
                alt="IMAGE"
                className="w-full h-auto rounded-lg"
                width={1000}
                height={1000}
              />
            </motion.div>
          </motion.div>

          {/* Right section - Process steps */}
          <motion.div {...fadeIn} className="relative">
            {/* Timeline line connecting all steps */}
            <div
              className="absolute left-8 w-2 bg-[#e10032]"
              style={{
                top: '32px',
                height: 'calc(100% - 80px)'
              }}
            ></div>
            {/* Steps */}
            <div className="space-y-16">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-6"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {/* Icon circle */}
                  <div className="flex-shrink-0 mt-1 z-10">
                    <motion.div
                      className={`w-16 h-16 rounded-full text-white flex items-center justify-center shadow-lg ${index === 4 ? 'bg-green-600' : 'bg-[#e10032]'}`}
                      whileHover={{ scale: 1.05, boxShadow: index === 4 ? "0 10px 25px rgba(34, 197, 94, 0.3)" : "0 10px 25px rgba(239, 68, 68, 0.3)" }}
                      transition={{ type: "spring", stiffness: 400 }}
                      onClick={index === 4 ? () => window.open('https://chat.whatsapp.com/CDNwWlNKBRo9N8OKR2csCY?mode=ems_copy_c', '_blank') : undefined}
                      style={{ cursor: index === 4 ? 'pointer' : 'default' }}
                    >
                      {step.icon}
                    </motion.div>
                  </div>
                  {/* Step content */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default function ArtistsPage() {
  return (
    <div>
      <Navbar />
      <div className="pt-8">
        <HowItWorksArtists />
      </div>
      <Footer />
    </div>
  );
}