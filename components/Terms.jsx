"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Mail, User, Music, CreditCard, Copyright, AlertTriangle, RefreshCw } from 'lucide-react';

const TermsOfServicePage = () => {
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
      icon: <User className="w-6 h-6" />,
      title: "1. Your Account",
      content: [
        "You must be 13+ to use Tunenova.",
        "You're responsible for your account activity and any referrals made."
      ]
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "2. Use of the Platform",
      content: [
        "Listeners get paid for listening to music and verifying emails.",
        "Artists pay to promote music to real fans.",
        "You may not misuse the platform, fake activity, or spam."
      ]
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "3. Payment Terms",
      content: [
        "Listeners are paid per valid interaction (subject to fraud checks).",
        "Artists set budgets; fees are not refundable after campaigns start.",
        "Payouts may require identity verification for security."
      ]
    },
    {
      icon: <Copyright className="w-6 h-6" />,
      title: "4. Intellectual Property",
      content: [
        "All uploaded music remains the property of the artist.",
        "Tunenova reserves the right to use snippets for promotional purposes."
      ]
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "5. Account Termination",
      content: [
        "We may suspend accounts that violate our terms, including fake referrals, spamming, or fraudulent activities."
      ]
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "6. Updates to Terms",
      content: [
        "We may update these terms at any time. Continued use means you accept any updates."
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
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Terms of Service</h1>
              <p className="text-gray-600 mt-2">Effective Date: January 1, 2025</p>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to Tunenova. By using our platform, you agree to the following terms:
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

        {/* Important Notice */}
        <motion.div 
          variants={fadeIn}
          className="bg-amber-50 rounded-xl p-6 sm:p-8 mt-12 border border-amber-200"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Important Notice</h3>
              <p className="text-amber-800 leading-relaxed">
                By using Tunenova, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our platform.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          variants={fadeIn}
          className="bg-[#e10032]/5 rounded-xl p-6 sm:p-8 mt-8 border border-[#e10032]/10"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-[#e10032] rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Questions?</h3>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please contact us.
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

export default TermsOfServicePage;