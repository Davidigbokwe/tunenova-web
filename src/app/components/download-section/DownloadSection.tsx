"use client";

import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";
import AppleIcon from "../icons/AppleIcon";
import GooglePlayIcon from "../icons/GooglePlayIcon";

const DownloadSection = () => {
  return (
    <section id="download" className="bg-card/50 -mt-8">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-primary/20 via-card to-card border border-primary/20 rounded-3xl p-12 md:p-20 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(0_78%_55%/0.15),transparent_70%)]" />
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-sans text-4xl md:text-5xl font-bold mb-4">
              Ready to grow your fanbase?
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-10">
              Download Tunenova, promote your song and grow your fanbase on Spotify, Apple Music & YouTube.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://apps.apple.com/gh/app/tunenova-listen-and-earn/id6748253966"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-xl flex items-center justify-center gap-3 hover:opacity-90 transition-opacity min-w-[160px]"
              >
                <AppleIcon className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs font-medium">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.caribou97499.tunenova&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-xl flex items-center justify-center gap-3 hover:opacity-90 transition-opacity min-w-[160px]"
              >
                <GooglePlayIcon className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs font-medium">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
