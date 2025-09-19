"use client"
import React from 'react';
import { Play, Music, DollarSign, Repeat } from 'lucide-react';
import { motion } from 'framer-motion';
// import dashboard from "../../public/dashboard3.svg"
import Image from 'next/image';

const FansHowItWorks = () => {
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
      icon: <Play className="w-6 h-6" />,
      title: "Listen to a 20-second snippet of any song with a sponsor tag.",
      description: "Discover new music through short, engaging previews.",
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "At the prompt, select Yes or No.",
      description: "✔ If Yes, you're taken to the music platform already on your phone. ✖ If No, the next song plays instantly.",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "You earn when you discover",
      description: "Get rewarded for your listening and discovery.",
    },
    {
      icon: <Repeat className="w-6 h-6" />,
      title: "Invite your friends and earn more.",
      description: "Share the experience and boost your earnings.",
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
              Earn money discovering new music
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

            {/* Launch a Campaign Button */}
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
                Start Earning
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FansHowItWorks;