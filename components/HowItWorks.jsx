"use client"
import React from 'react';
import { Play, Music, DollarSign, Repeat } from 'lucide-react';
import { motion } from 'framer-motion';
// import dashboard from "../../public/dashboard3.svg"
import Image from 'next/image';

const HowItWorks = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const steps = [
    {
      icon: <Play className="w-6 h-6" />,
      title: "Tap to Discover",
      description: "Press play to hear a 20-second preview from a new artist.",
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Decide to Explore or Skip",
      description: "If you like the song, we'll open it on Spotify, Apple Music, or YouTube for full listening.",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Earn Instantly",
      description: "You get paid whether or not you explore — your time matters.",
    },
    {
      icon: <Repeat className="w-6 h-6" />,
      title: "Discover More, Earn More",
      description: "Keep listening. Keep discovering. Keep earning.",
    }
  ];

  return (
    <div className="px-6 md:px-12 lg:px-24 bg-gray-50" id='how-it-works'>
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
             
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900">How it Works - Fans</h1>
            </div>
           
            <p className="text-gray-700 text-base mb-8 text-center lg:text-left">
              Discover new music and earn money for your time and attention.
            </p>
            
            {/* Dashboard Image */}
            <motion.div 
              className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-2xl shadow-lg border border-red-100"
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
            {/* Timeline line connecting all steps on all screen sizes */}
            <div 
              className="absolute left-8 w-2 bg-[#e10032]" 
              style={{
                top: '24px',
                height: 'calc(100% - 48px)'
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

export default HowItWorks;