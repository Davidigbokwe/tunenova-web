"use client";

import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-sans text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground mb-4"><strong>Effective Date:</strong> January 1, 2025</p>
            
            <p>Welcome to Tunenova. By using our platform, you agree to the following terms:</p>
            
            <h2 className="font-sans text-2xl font-bold mb-4 mt-8">1. Your Account</h2>
            <p>You must be 13+ to use Tunenova.</p>
            <p>You're responsible for your account activity and any referrals made.</p>
            
            <h2 className="font-sans text-2xl font-bold mb-4 mt-8">2. Use of the Platform</h2>
            <p>Listeners get paid for listening to music and verifying emails.</p>
            <p>Artists pay to promote music to real fans.</p>
            <p>You may not misuse the platform, fake activity, or spam.</p>
            
            <h2 className="font-sans text-2xl font-bold mb-4 mt-8">3. Funds and Campaign Policy</h2>
            <p>Once money is added to your TuneNova Wallet, funds are non-withdrawable and non-refundable. These funds are strictly meant for promoting your songs and campaigns on TuneNova. Artists are required to fully utilize their balance through promotions and campaigns. Any unused or remaining balance after a reasonable period may be forfeited and cannot be withdrawn, refunded, or transferred outside of the platform.</p>
            <p>By adding money to your TuneNova Wallet, you acknowledge and agree that all payments are final, non-reversible, and can only be used for promotional purposes within TuneNova.</p>
            
            <h2 className="font-sans text-2xl font-bold mb-4 mt-8">4. Intellectual Property</h2>
            <p>All uploaded music remains the property of the artist.</p>
            <p>Tunenova reserves the right to use snippets for promotional purposes.</p>
            
            <h2 className="font-sans text-2xl font-bold mb-4 mt-8">5. Account Termination</h2>
            <p>We may suspend accounts that violate our terms, including fake referrals, spamming, or fraudulent activities.</p>
            
            <h2 className="font-sans text-2xl font-bold mb-4 mt-8">6. Updates to Terms</h2>
            <p>We may update these terms at any time. Continued use means you accept any updates.</p>
            
            <h2 className="font-sans text-2xl font-bold mb-4 mt-8">Important Notice</h2>
            <p>By using Tunenova, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.</p>
            
            <h2 className="font-sans text-2xl font-bold mb-4 mt-8">Questions?</h2>
            <p>If you have any questions about these Terms of Service, please contact us.</p>
            <p>support@tunenova.com</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
