"use client";

import { motion } from "framer-motion";
import AppleIcon from "../components/icons/AppleIcon";
import GooglePlayIcon from "../components/icons/GooglePlayIcon";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Headphones, Gift, Share2, Star, Users, Zap, TrendingUp, Award, UserPlus } from "lucide-react";

const ClientContent = () => {
  const perks = [
    { icon: Headphones, title: "Discover New Music", desc: "Get served fresh tracks from emerging artists that match your taste." },
    { icon: Gift, title: "Earn Rewards", desc: "Earn cash & rewards when you discover new music" },
    { icon: Share2, title: "Earn More", desc: "Partner with Brands and Business and earn more." },
    { icon: Star, title: "Shape Culture", desc: "Be the first to discover the next wave of rising stars" },
  ];

  const inviteSteps = [
    {
      icon: Share2,
      step: "01",
      title: "Share Your Code",
      desc: "Share your referral link with friends and family.",
    },
    {
      icon: Users,
      step: "02", 
      title: "They Sign Up",
      desc: "They sign up and verify their email address.",
    },
    {
      icon: Gift,
      step: "03",
      title: "You Earn",
      desc: "You earn for every friend who joins.",
    },
    {
      icon: Award,
      step: "04",
      title: "Bonus Rewards",
      desc: "Get bonus rewards for top referrers.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-8 md:pt-8 md:pb-8 bg-card/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-1 lg:order-1"
            >
              <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6 flex flex-col">
                <span>Discover New</span>
                <span className="text-gradient">Music</span>
                <span className="text-red-500">Listen & Earn.</span>
              </h1>
              <p className="text-foreground text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-medium">
                Earn up to ₦150,000 monthly!
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
                  className="bg-red-500 text-white px-4 py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity min-w-[140px] sm:min-w-[160px] sm:px-6"
                >
                  <GooglePlayIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  <div className="text-left">
                    <div className="text-xs font-medium">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-2 lg:order-2"
            >
              <img
                src="/wallet.png"
                alt="Tunenova app showing music discovery and fan experience"
                loading="lazy"
                className="rounded-2xl w-full max-w-md mx-auto lg:max-w-full object-contain"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fans Section - Exact same as home page */}
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

      {/* Invite & Earn Section */}
      <section className="py-24 md:py-32 bg-card/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary text-sm font-medium tracking-widest uppercase mb-4"
            >
              Earn More
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-5xl font-bold mb-4"
            >
              Invite & <span className="text-gradient">Earn</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              Invite a Friend. Earn Some Cash.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {inviteSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-primary font-bold text-lg mb-2">{step.step}</div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-r from-primary/20 via-card to-card border border-primary/20 rounded-3xl p-12">
              <h3 className="font-sans text-2xl md:text-3xl font-bold mb-4">
                Help Tunenova Grow <span className="text-gradient">And Grow Your Wallet</span>
              </h3>
              <p className="text-muted-foreground text-lg mb-8">
                The more friends you invite, the more you earn!
              </p>
              <a
                href="/fans"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-3"
              >
                <UserPlus className="w-5 h-5" />
                Start Inviting Friends
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ClientContent;
