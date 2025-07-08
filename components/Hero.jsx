"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const textItem = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.8 
      } 
    }
  };

  const buttonItem = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: "spring",
        damping: 10,
        stiffness: 120,
        delay: 0.8 
      } 
    }
  };

  return (
    <section className="overflow-hidden rounded-3xl mx-2 sm:mx-4 md:mx-8 lg:mx-12 h-auto min-h-[60vh] flex flex-col md:flex-row">
      {/* Left side - Black background with content */}
      <motion.div 
        className="bg-black text-white flex-1 relative overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none min-h-[320px] flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="h-full flex items-center relative z-10 w-full">
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20 w-full">
            <motion.div 
              className="max-w-lg w-full text-center md:text-left flex flex-col justify-center mx-auto md:mx-0"
              initial="hidden"
              animate="show"
              variants={container}
            >
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4"
                variants={textItem}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                Break New Music
              </motion.h1>
              <motion.h2 
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-[#e10032]"
                variants={textItem}
                whileHover={{ 
                  scale: 1.03, 
                  textShadow: "0 0 20px rgba(239, 68, 68, 0.5)",
                  transition: { duration: 0.2 } 
                }}
              >
                Listen & Earn.
              </motion.h2>
              <motion.p 
                className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 opacity-90"
                variants={textItem}
              >
                Earn up to N150,000 monthly!
              </motion.p>
              <motion.div 
                variants={buttonItem}
                className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-center md:items-start"
              >
                {/* App Store Button */}
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 15px 35px rgba(225, 0, 50, 0.25)",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <Link
                    href="#"
                    className="bg-gradient-to-r from-gray-900 to-black text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl font-semibold flex items-center gap-2 hover:from-gray-800 hover:to-gray-900 transition-all duration-300 relative overflow-hidden min-w-[140px] sm:min-w-[160px] w-full sm:w-auto justify-center border border-gray-700 shadow-lg"
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
                    
                    <div className="flex items-center gap-2 relative z-10">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-5 sm:h-5">
                        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" fill="currentColor"/>
                      </svg>
                      <div className="text-left">
                        <div className="text-xs text-gray-300 font-medium">Download on the</div>
                        <div className="text-xs sm:text-sm font-bold">App Store</div>
                      </div>
                    </div>
                  </Link>
                </motion.div>

                {/* Google Play Button */}
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 15px 35px rgba(225, 0, 50, 0.25)",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }
                  }}
                  className="w-full sm:w-auto"
                >
                  <Link
                    href="#"
                    className="bg-gradient-to-r from-[#e10032] to-[#c1002b] text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl font-semibold flex items-center gap-2 hover:from-[#c1002b] hover:to-[#a1001f] transition-all duration-300 relative overflow-hidden min-w-[140px] sm:min-w-[160px] w-full sm:w-auto justify-center border border-[#e10032]/30 shadow-lg"
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
                    
                    <div className="flex items-center gap-2 relative z-10">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-5 sm:h-5">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" fill="currentColor"/>
                      </svg>
                      <div className="text-left">
                        <div className="text-xs text-red-100 font-medium">Get it on</div>
                        <div className="text-xs sm:text-sm font-bold">Google Play</div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        {/* Floating elements animation on black side */}
        <motion.div
          className="absolute top-6 left-4 sm:top-10 sm:left-10 w-3 h-3 sm:w-4 sm:h-4 bg-[#e10032] rounded-full opacity-60"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-12 right-4 sm:bottom-20 sm:right-10 w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full opacity-40"
          animate={{
            y: [0, 15, 0],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>
      {/* Right side - Image */}
      <motion.div 
        className="flex-1 bg-contain bg-center bg-no-repeat relative overflow-hidden min-h-[220px] sm:min-h-[250px] md:min-h-0 flex items-center justify-center"
        style={{ backgroundImage: 'url("/hero.png")' }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
      </motion.div>
    </section>
  );
};

export default HeroSection;