"use client";

import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-sans text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground mb-4"><strong>Effective Date:</strong> January 1, 2025</p>
            
            <p>At Tunenova, we value your privacy and are committed to protecting your personal information.</p>
            
            <h2 className="font-sans text-2xl font-bold mb-4 mt-8">1. Information We Collect</h2>
            
            <h3 className="font-sans text-lg font-semibold mb-2">When you sign up:</h3>
            <p>Name, email, and optionally, music links (for artists).</p>
            
            <h3 className="font-sans text-lg font-semibold mb-2">When you use the platform:</h3>
            <p>Listening activity, referral activity, earnings, and device data.</p>
            
            <h3 className="font-sans text-lg font-semibold mb-2">Payment & payout info:</h3>
            <p>For listeners and artists, we collect necessary info to process transactions.</p>
            
            <h2 className="font-sans text-2xl font-bold mb-4 mt-8">2. How We Use Your Information</h2>
            
            <ul className="space-y-2 mb-6">
              <li>To personalize your experience</li>
              <li>To promote music to the right listeners</li>
              <li>To process payments and rewards</li>
              <li>To improve platform's performance and reliability</li>
              <li>To communicate updates and opportunities</li>
            </ul>
            
            <h2 className="font-sans text-2xl font-bold mb-4 mt-8">3. Data Sharing</h2>
            
            <p className="mb-4">We do not sell your data.</p>
            
            <p>We may share data only with:</p>
            <ul className="space-y-2 mb-6">
              <li>• Payment processors (for payouts and transactions)</li>
              <li>• Services that help us run Tunenova (like hosting or analytics tools)</li>
              <li>• Legal authorities, if required by law</li>
            </ul>
            
            <h2 className="font-sans text-2xl font-bold mb-4 mt-8">4. Cookies & Tracking</h2>
            <p>We may use cookies to track basic usage — for improving user experience.</p>
            
            <h2 className="font-sans text-2xl font-bold mb-4 mt-8">5. Your Rights</h2>
            
            <ul className="space-y-2 mb-6">
              <li>Access or correct your data</li>
              <li>Delete your account</li>
              <li>Withdraw consent to marketing messages</li>
            </ul>
            
            <p className="mb-4"><strong>To make any request, email:</strong> support@tunenova.com</p>
            
            <h2 className="font-sans text-2xl font-bold mb-4 mt-8">6. Data Security</h2>
            <p>We use industry-standard encryption and practices to protect your information.</p>
            
            <h2 className="font-sans text-2xl font-bold mb-4 mt-8">Questions?</h2>
            <p>If you have any questions about this Privacy Policy, please contact us.</p>
            <p>support@tunenova.com</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
