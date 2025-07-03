"use client"
import React from 'react';
import { Upload, Target, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
// import dashboard from "../../public/dashboard3.svg"
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
      description: "With just ₦20,000, you can reach over 1,200+ real listeners who will hear your song and may stream more.",
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
              className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-2xl shadow-lg border border-red-100"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Image 
                src="/artists.png" 
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
                height: 'calc(100% - 100px)'
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
                      className="w-16 h-16 rounded-full bg-[#e10032] text-white flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(239, 68, 68, 0.3)" }}
                      transition={{ type: "spring", stiffness: 400 }}
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

export default HowItWorksArtists;