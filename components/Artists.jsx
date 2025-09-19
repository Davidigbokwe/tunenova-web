"use client"
import React from 'react';
import { Upload, Target, Users, TrendingUp, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
// import dashboard from "../../public/dashboard3.svg"
import Image from 'next/image';

const HowItWorksArtists = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const scrollToHero = () => {
    document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
  };

  const steps = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Create your campaign and set your budget.",
      description: "Set up your music campaign with a custom budget to reach targeted listeners.",
    },
    {
      icon: <Upload className="w-6 h-6" />,
      title: "Click Proceed.",
      description: "Review your campaign details and proceed to the next step.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Choose payment — Wallet or Coupon (if you have a coupon code).",
      description: "Select your preferred payment method to fund your campaign.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Publish your campaign.",
      description: "Launch your campaign and start reaching new fans.",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Check the platform's analytics page to see how your songs are performing.",
      description: "Monitor your campaign's performance with detailed analytics.",
    },
    {
      icon: <Upload className="w-6 h-6" />,
      title: "You can also use the platform to test your songs to see if fans like, then launch your campaign.",
      description: "Test your music with fans before going live with your full campaign.",
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
              Promote your music to real listeners and grow your fanbase on Spotify, YouTube, and Apple Music.
            </p>
            
            {/* Dashboard Image */}
            <motion.div 
              className=""
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

            {/* Launch Your Campaign Button */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <button
                onClick={scrollToHero}
                className="bg-[#e10032] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#c1002b] transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Launch Your Campaign
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorksArtists;