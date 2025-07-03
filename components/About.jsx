"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Music, Users, DollarSign, Target } from 'lucide-react';

const AboutSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const features = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Get Paid to Listen",
      description: "Listeners are paid for their time — just listen to a short snippet and earn.",
      color: "bg-green-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Real Promotion",
      description: "Artists can now promote their music directly to real fans, with no bots, no fluff.",
      color: "bg-blue-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Full Control",
      description: "Artists have full control over their campaign budget and reach real audiences.",
      color: "bg-purple-500"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Music Discovery",
      description: "Whether you're vibing as a fan or building as an artist, Tunenova makes music discovery rewarding.",
      color: "bg-[#e10032]"
    }
  ];

  return (
    <section className="py-0 lg:py-4 px-4 sm:px-6 md:px-12 lg:px-24 bg-white mb-12 mt-12 lg:mb-0 lg:mt-4" id="about">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center"
        >
          {/* Main Title */}
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3"
          >
            About <span className="text-[#e10032]">Tunenova</span>
          </motion.h2>
          
          {/* Main Description */}
          <motion.p 
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-700 mb-4 max-w-4xl mx-auto leading-relaxed"
          >
            Tunenova is where fans get rewarded for discovering new music, and artists finally get a platform built to help them grow.
          </motion.p>
          
          {/* Highlighted Features */}
          <motion.div 
            variants={fadeInUp}
            className="mb-12 max-w-3xl mx-auto"
          >
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              Whether you're vibing as a fan or building as an artist, Tunenova makes music discovery rewarding.
            </p>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        {/* <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center group"
            >
              <motion.div 
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.color} text-white mb-4 mx-auto`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div> */}

        {/* Bottom CTA */}
        {/* <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-12"
        >
          <motion.div 
            className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="px-6 py-3 bg-gradient-to-r from-[#e10032] to-pink-500 text-white rounded-full font-medium">
              🎵 Join the Music Revolution
            </div>
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default AboutSection;