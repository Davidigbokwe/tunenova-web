"use client";

import { motion } from "framer-motion";
import AppleIcon from "../icons/AppleIcon";
import GooglePlayIcon from "../icons/GooglePlayIcon";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/fans.png"
          alt="Tunenova app showing music discovery and artist profiles"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
            Discover · Share · Earn
          </p> */}
          <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6">
            Your Music.{" "}
            <span className="text-gradient">Real Fans.</span>{" "}
            Real Growth.
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            Tunenova is a community driven music discovery platform that connects emerging artists with 
18,000+ engaged fans who discover music across streaming platforms.

          </p>

          <div className="flex flex-row gap-3">
            <a
              href="https://apps.apple.com/gh/app/tunenova-listen-and-earn/id6748253966"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-4 py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity min-w-[140px] sm:min-w-[160px] sm:px-6"
            >
              <AppleIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              <div className="text-left">
                <div className="text-xs font-medium">Download on</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.caribou97499.tunenova&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-4 py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity min-w-[140px] sm:min-w-[160px] sm:px-6"
            >
              <GooglePlayIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              <div className="text-left">
                <div className="text-xs font-medium">Get it on</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x divide-border bg-background/80 backdrop-blur-sm border border-border rounded-2xl p-4 md:p-0 md:border-none md:bg-transparent md:backdrop-blur-none"
        >
          {[
            { value: "18,000+", label: "Active Fans" },
            { value: "100+", label: "Active Artists" },
            { value: "50,000+", label: "Streams Generated for Artists" },
            { value: "₦250k+", label: "Paid to Fans" },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:py-8 md:px-6 py-3">
              <p className="font-sans text-3xl md:text-5xl font-bold text-foreground tracking-tight">{stat.value}</p>
              <p className="text-sm md:text-base font-normal text-muted-foreground mt-1 md:mt-2 capitalize">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
