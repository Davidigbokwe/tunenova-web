"use client"
import React from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin, Shield, Music } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {  
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const linkHoverStyle = "transition-all duration-300 hover:text-white/90 relative group cursor-pointer";

  return (
    <footer className="bg-gradient-to-br from-[#e10032] via-[#c8002d] to-[#a00025] text-white" id='footer'>
      {/* Main Footer Content */}
      <div className="pt-10 pb-2 px-6 md:px-12 lg:px-24">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Brand Section - Takes more space */}
            <motion.div variants={itemVariants} className="lg:col-span-4">
              <motion.a
                href="/"
                className="inline-block mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex items-center gap-3">
                  <Music className="w-8 h-8 text-white" />
                  <span className="text-2xl font-bold text-white">Tunenova</span>
                </div>
              </motion.a>
              
              <motion.p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
                Discover new music and earn money.<br />
                Where fans get rewarded and artists grow.
              </motion.p>

              {/* Contact Info */}
              <div className="space-y-3">
                <motion.div 
                  className="flex items-center gap-3 text-sm text-white/70"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>support@tunenova.com</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-3 text-sm text-white/70"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+2348056679806</span>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-3 text-sm text-white/70"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>Lagos, Nigeria</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Links - Smaller space */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <motion.h3 className="text-lg md:text-xl font-semibold mb-6 text-white">
                Quick Links
              </motion.h3>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                <ul className="space-y-4">
                  <motion.li 
                    whileHover={{ x: 8 }} 
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <a href="#about" className={linkHoverStyle}>
                      <span className="relative">
                        About
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </a>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 8 }} 
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <a href="#work" className={linkHoverStyle}>
                      <span className="relative">
                        How it Works
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </a>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 8 }} 
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <a href="#artists" className={linkHoverStyle}>
                      <span className="relative">
                        For Artists
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </a>
                  </motion.li>
                </ul>
                <ul className="space-y-4">
                  <motion.li 
                    whileHover={{ x: 8 }} 
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <a href="#" className={linkHoverStyle}>
                      <span className="relative">
                        Help Center
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </a>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 8 }} 
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <a href="#contact" className={linkHoverStyle}>
                      <span className="relative">
                        Contact Us
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </a>
                  </motion.li>
                </ul>
              </div>
            </motion.div>

            {/* Legal Section - Smaller space */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <motion.h3 className="text-lg md:text-xl font-semibold mb-6 text-white flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Legal
              </motion.h3>
              <ul className="space-y-4">
                <motion.li 
                  whileHover={{ x: 8 }} 
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <a href="/privacy" className={linkHoverStyle}>
                    <span className="relative">
                      Privacy Policy
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                </motion.li>
                <motion.li 
                  whileHover={{ x: 8 }} 
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <a href="/terms" className={linkHoverStyle}>
                    <span className="relative">
                      Terms of Use
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                </motion.li>
              </ul>
            </motion.div>

            {/* Connect Section - Moderate space */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <motion.h3 className="text-lg md:text-xl font-semibold mb-6 text-white">
                Connect With Us
              </motion.h3>
              
              <motion.p className="text-white/80 text-sm mb-6 leading-relaxed">
                Follow us on social media for updates, new music, and community support.
              </motion.p>

              {/* Social Links */}
              <div className="flex gap-4 mb-8">
                <motion.a 
                  href="https://www.instagram.com/tunenovaapp" 
                  aria-label="Instagram"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank" rel="noopener noreferrer"
                >
                  <Instagram size={20} />
                </motion.a>
                <motion.a 
                  href="https://x.com/tunenovaapp" 
                  aria-label="Twitter"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank" rel="noopener noreferrer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
                  </svg>
                </motion.a>
                {/* LinkedIn */}
                <motion.a 
                  href="https://www.linkedin.com/company/tunenova/" 
                  aria-label="LinkedIn"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank" rel="noopener noreferrer"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a 
                  href="https://www.facebook.com/profile.php?id=61578041260432" 
                  aria-label="Facebook"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank" rel="noopener noreferrer"
                >
                  <Facebook size={20} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        variants={itemVariants}
        className="border-t border-white/10 py-6 px-6 md:px-12 lg:px-24"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p className="text-white/60 text-sm text-center md:text-left">
              © 2025 Tunenova. Product of Hallait Technologies
            </motion.p>
            
            <div className="flex items-center gap-6 text-sm">
              <motion.a 
                href="#" 
                className="text-white/60 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Security
              </motion.a>
              <motion.a 
                href="#" 
                className="text-white/60 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Status
              </motion.a>
              <motion.a 
                href="#" 
                className="text-white/60 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                API
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;