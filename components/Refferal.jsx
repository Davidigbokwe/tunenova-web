"use client"
import React from 'react';
import { Share2, UserPlus, DollarSign, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const InviteEarnSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <motion.div 
      className="w-full bg-gray-50 py-6 px-4 sm:px-6 md:px-12 lg:px-24"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* How It Works Section */}
        <motion.div 
          className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8 lg:p-12 shadow-lg"
          initial={{ y: 30, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ delay: 0.2 }}
        >
          <div className="text-center mb-8 lg:mb-12">
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3"
              initial={{ y: -10, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ delay: 0.3 }}
            >
              <span className="text-[#e10032]">Invite & Earn</span>
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-3xl mx-auto lg:text-lg"
              initial={{ y: -10, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ delay: 0.4 }}
            >
              Invite a Friend. Earn Some Cash.
            </motion.p>
          </div>

          {/* Steps */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8 lg:mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Step 1 */}
            <motion.div 
              className="text-center"
              variants={fadeIn}
            >
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Share2 className="h-8 w-8 lg:h-10 lg:w-10 text-[#e10032]" />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">1. Share Your Link</h3>
              <p className="text-gray-600 text-sm lg:text-base">
                Share your referral link with friends and family.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              className="text-center"
              variants={fadeIn}
            >
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserPlus className="h-8 w-8 lg:h-10 lg:w-10 text-[#e10032]" />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">2. They Sign Up</h3>
              <p className="text-gray-600 text-sm lg:text-base">
                They sign up and verify their email address.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              className="text-center"
              variants={fadeIn}
            >
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 lg:h-10 lg:w-10 text-[#e10032]" />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">3. You Earn ₦10</h3>
              <p className="text-gray-600 text-sm lg:text-base">
                You earn ₦10 for every friend who joins.
              </p>
            </motion.div>

            {/* Step 4 */}
            <motion.div 
              className="text-center"
              variants={fadeIn}
            >
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 lg:h-10 lg:w-10 text-[#e10032]" />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">4. Bonus Rewards</h3>
              <p className="text-gray-600 text-sm lg:text-base">
                Get bonus rewards for top referrers.
              </p>
            </motion.div>
          </motion.div>

          {/* Earnings Breakdown */}
          <motion.div
            className="bg-gray-50 rounded-lg p-6 lg:p-8 mb-6 lg:mb-8 border border-gray-200"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="text-center mb-6">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                Help Tunenova Grow — And Grow Your Wallet
              </h3>
              <p className="text-gray-600">
                The more friends you invite, the more you earn!
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex justify-center mb-4">
              <motion.div
                className="inline-flex items-center gap-3 bg-[#e10032] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-red-600 transition-colors duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const hero = document.getElementById('hero');
                  if (hero) hero.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Share2 className="w-5 h-5" />
                Start Inviting Friends
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </div>
            <p className="text-sm text-gray-500">
              Join thousands earning with Tunenova referrals
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InviteEarnSection;