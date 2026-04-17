"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import InstagramIcon from "../icons/InstagramIcon";
import XIcon from "../icons/XIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import FacebookIcon from "../icons/FacebookIcon";

const Footer = () => {
  const [year, setYear] = useState(2025); // Default year to match server

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="contact-footer" className="bg-card/50 border-t border-border" suppressHydrationWarning>
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Tunenova */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <a href="/" className="flex items-center mb-4">
              <img
                src="/logo-white.png"
                alt="Tunenova"
                className="h-8 md:h-10 w-auto"
              />
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">Grow your fanbase on Spotify, YouTube and Apple Music.</p>
            
            {/* Contact Info */}
            <div className="flex flex-col space-y-3 border-t border-border/30 pt-4">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <a href="mailto:support@tunenova.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  support@tunenova.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <a href="tel:+2348056679806" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  +2348056679806
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Lagos, Nigeria</span>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-sans text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/fans" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Fans</a>
              </li>
              <li>
                <a href="/#how-it-works" className="text-muted-foreground hover:text-foreground text-sm transition-colors">How It Works</a>
              </li>
              <li>
                <a href="/#community" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Community</a>
              </li>
              <li>
                <a href="/#download" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Download</a>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="font-sans text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Terms of Use</a>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Connect With Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="font-sans text-lg font-bold mb-4">Connect With Us</h3>
            <p className="text-muted-foreground text-sm mb-4">Follow us on social media for updates, new music, and community support.</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.instagram.com/tunenovaapp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              </a>
              <a
                href="https://x.com/tunenovaapp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="X"
              >
                <XIcon className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              </a>
              <a
                href="https://www.linkedin.com/company/tunenova/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              </a>
              <a
                href="https://www.facebook.com/people/Tunenova/61578041260432/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-border mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© {year} Tunenova. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">
            support@tunenova.com · Lagos, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
