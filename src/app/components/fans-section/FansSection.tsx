"use client";

import { motion } from "framer-motion";
import { Headphones, Gift, Share2, Star } from "lucide-react";

const perks = [
  { icon: Headphones, title: "Discover New Music", desc: "Get served fresh tracks from emerging artists that match your taste." },
  { icon: Gift, title: "Earn Rewards", desc: "Earn cash & rewards when you discover new music" },
  { icon: Share2, title: "Earn More", desc: "Partner with Brands and Business and earn more." },
  { icon: Star, title: "Shape Culture", desc: "Be the first to discover the next wave of rising stars" },
];

const FansSection = () => {
  return (
    <section id="fans" className="py-24 md:py-32 bg-card/50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <img
              src="/fans.png"
              alt="Tunenova fan discovery and music listening experience"
              loading="lazy"
              className="rounded-2xl w-full object-contain"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/60 to-transparent" />
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary text-sm font-medium tracking-widest uppercase mb-4"
            >
              For Fans
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-5xl font-bold mb-6"
            >
              Listen. Share. <span className="text-gradient">Earn.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg mb-10 max-w-md leading-relaxed"
            >
              Get paid to discover music you actually love in 4 simple steps
            </motion.p>

            <div className="space-y-4">
              {perks.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <p.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{p.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FansSection;
