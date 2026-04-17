"use client";

import { motion } from "framer-motion";
import { Upload, Users, Share2, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Artist Uploads Snippet",
    desc: "A 20-second preview is uploaded. Artist sets a campaign budget. No technical complexity required.",
  },
  {
    icon: Users,
    step: "02",
    title: "Fans Discover & React",
    desc: "Tunenova pushes the snippet to targeted, engaged fans who listen and earn rewards for discovering new music.",
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Check Your Analytics",
    desc: "Monitor your campaign performance with real-time analytics and insights on fan engagement and reach.",
  },
  {
    icon: Share2,
    step: "04",
    title: "See Results",
    desc: "Every 24 hours, check your Spotify, YouTube & Apple Music for the impact of your promotion"
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-medium tracking-widest uppercase mb-4"
          >
            How It Works for Artists
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold mb-4"
          >
            Simple for Artists.{" "}
            <span className="text-gradient">Powerful</span> for Growth.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Four simple steps to grow your fanbase on Spotify, YouTube & Apple Music.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative bg-card border border-border rounded-2xl p-8 group hover:border-primary/40 transition-all"
            >
              <span className="text-primary/20 font-display text-6xl font-bold absolute top-4 right-6">
                {s.step}
              </span>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
