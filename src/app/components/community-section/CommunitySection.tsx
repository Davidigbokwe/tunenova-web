"use client";

import { motion } from "framer-motion";
import { MessageCircle, Users, Trophy } from "lucide-react";

const CommunitySection = () => {
  return (
    <section id="community" className="py-24 md:py-32 bg-card/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-medium tracking-widest uppercase mb-4"
          >
            Community
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold mb-4"
          >
            Join the <span className="text-gradient">Movement</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            A growing community of artists and fans building the future of African music discovery together.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              value: "18,000+",
              label: "Active Fans",
              desc: "Real fans discovering and sharing music every day.",
            },
            {
              icon: Trophy,
              value: "50,000+",
              label: "Streams Generated for Artists",
              desc: "Total streams generated for artists through fan discovery on Spotify, Youtube & Apple Music.",
            },
            {
              icon: MessageCircle,
              value: "₦250k+",
              label: "Paid to Fans",
              desc: "Total earnings paid to fans for discovering and sharing new music.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/40 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="font-display text-3xl font-bold text-primary mb-1">{item.value}</p>
              <h3 className="font-semibold mb-2">{item.label}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial-style quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 max-w-3xl mx-auto text-center"
        >
          <blockquote className="font-display text-2xl md:text-3xl italic text-foreground/80 leading-relaxed">
            "Tunenova helped me increase my fanbase on spotify"
          </blockquote>
          <p className="text-primary font-medium mt-4">— Delos Edira</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
