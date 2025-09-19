"use client"
import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const scrollToHero = () => {
    document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
            Ready to hear what your fans think?
          </h2>
          <motion.button
            onClick={scrollToHero}
            className="px-8 py-4 bg-[#e10032] text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#c1002b]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Launch Your Campaign
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;