"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const WhyArtistsUseTunenova = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const images = [
    '/artist1.jpg',
    '/artist2-.jpg',
    '/artist3.jpg',
    '/artist4.jpg'
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Artists Use Tunenova
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of artists who have transformed their careers with real fan feedback and data-driven insights.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="aspect-square relative">
                <Image
                  src={image}
                  alt={`Artist ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            From independent musicians to established artists, Tunenova provides the tools and insights needed to connect with fans and grow your audience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyArtistsUseTunenova;