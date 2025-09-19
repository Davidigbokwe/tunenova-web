"use client"
import React from 'react';
import { Target, Users, Shield, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyArtists = () => {
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

  const reasons = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Grow Your Reach",
      description: "Grow your fanbase on spotify, youTube & apple music",
      color: "bg-purple-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Release what fans want",
      description: "Test before release and avoid flops.",
      color: "bg-[#e10032]"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Know Your Fans",
      description: "Get insights from real listeners in your genre.",
      color: "bg-blue-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Protect Your Music",
      description: "Only snippets are shared, not full songs.",
      color: "bg-green-500"
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white" id="why-artists">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Why Artists Use <span className="text-[#e10032]">Tunenova</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center group"
            >
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${reason.color} text-white mb-4 mx-auto`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {reason.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyArtists;