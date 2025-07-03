"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Mail, Eye, Lock, Users, FileText } from 'lucide-react';

const PrivacyPolicyPage = () => {
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
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const sections = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "1. Information We Collect",
      content: [
        "When you sign up: Name, email, and optionally, music links (for artists).",
        "When you use the platform: Listening activity, referral activity, earnings, and device data.",
        "Payment & payout info: For listeners and artists, we collect necessary info to process transactions."
      ]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "2. How We Use Your Information",
      content: [
        "To personalize your experience",
        "To promote music to the right listeners",
        "To process payments and rewards",
        "To improve the platform's performance and reliability",
        "To communicate updates and opportunities"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "3. Data Sharing",
      content: [
        "We do not sell your data.",
        "We may share data only with:",
        "• Payment processors (for payouts and transactions)",
        "• Services that help us run Tunenova (like hosting or analytics tools)",
        "• Legal authorities, if required by law"
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "4. Cookies & Tracking",
      content: [
        "We may use cookies to track basic usage — for improving user experience."
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "5. Your Rights",
      content: [
        "Access or correct your data",
        "Delete your account",
        "Withdraw consent to marketing messages",
        "To make any request, email: support@tunenova.com"
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "6. Data Security",
      content: [
        "We use industry-standard encryption and practices to protect your information."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.div 
        className="bg-white border-b border-gray-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-[#e10032] rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Privacy Policy</h1>
              <p className="text-gray-600 mt-2">Effective Date: January 1, 2025</p>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Tunenova, we value your privacy and are committed to protecting your personal information.
          </p>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#e10032]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="text-[#e10032]">
                    {section.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <div className="space-y-2">
                    {section.content.map((item, idx) => (
                      <p key={idx} className="text-gray-700 leading-relaxed">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div 
          variants={fadeIn}
          className="bg-[#e10032]/5 rounded-xl p-6 sm:p-8 mt-12 border border-[#e10032]/10"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-[#e10032] rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Questions?</h3>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us.
            </p>
            <a 
              href="mailto:support@tunenova.com"
              className="inline-flex items-center gap-2 bg-[#e10032] text-white px-6 py-3 rounded-lg hover:bg-[#c8002d] transition-colors font-medium"
            >
              <Mail className="w-5 h-5" />
              support@tunenova.com
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicyPage;