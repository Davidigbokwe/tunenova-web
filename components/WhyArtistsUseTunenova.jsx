"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const WhyArtistsUseTunenova = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const images = [
    {
      src: '/artist1.jpg',
      title: 'Independent Artist',
    },
    {
      src: '/artist2-.jpg',
      title: 'Rising Star',
    },
    {
      src: '/artist3.jpg',
      title: 'Established Musician',
    },
    {
      src: '/artist4.jpg',
      title: 'Band Collective',
    }
  ];

  const openModal = (imageIndex) => {
    setSelectedImage(imageIndex);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

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
            Tunenova's Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of artists growing their artists on Spotify, Youtube and Apple Music.
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
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              onClick={() => openModal(index)}
            >
              <div className="aspect-square relative">
                <Image
                  src={image.src}
                  alt={`Artist ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                  <p className="text-gray-200 text-sm mt-1">{image.description}</p>
                  <div className="mt-3 text-center">
                    <span className="inline-block bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                      Click to view
                    </span>
                  </div>
                </div>
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

        {/* Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div 
                className="relative max-w-4xl w-full max-h-[90vh]"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="absolute -top-12 right-0 text-white text-3xl z-10"
                  onClick={closeModal}
                >
                  &times;
                </button>
                
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <div className="relative aspect-video">
                    <Image
                      src={images[selectedImage].src}
                      alt={images[selectedImage].title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{images[selectedImage].title}</h3>
                    <p className="text-gray-300">{images[selectedImage].description}</p>
                  </div>
                </div>
                
                {selectedImage > 0 && (
                  <button 
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                    onClick={() => setSelectedImage(selectedImage - 1)}
                  >
                    ‹
                  </button>
                )}
                
                {selectedImage < images.length - 1 && (
                  <button 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                    onClick={() => setSelectedImage(selectedImage + 1)}
                  >
                    ›
                  </button>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WhyArtistsUseTunenova;