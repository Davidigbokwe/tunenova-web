"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import AppleIcon from "../icons/AppleIcon";
import GooglePlayIcon from "../icons/GooglePlayIcon";

const WHATSAPP_LINK = "https://web.whatsapp.com/accept?code=CDNwWlNKBRo9N8OKR2csCY&utm_campaign=wa_chat_v2";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Fans", href: "/fans" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Community", href: WHATSAPP_LINK, external: true },
  { label: "Contact", href: "/#contact-footer" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="/" className="flex items-center">
          <img
            src="/logo-white.png"
            alt="Tunenova"
            className="h-8 md:h-10 w-auto"
          />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="relative">
            <button
              onClick={() => setDownloadOpen(!downloadOpen)}
              className="flex items-center gap-1 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Download App <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {downloadOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute right-0 top-full mt-2 bg-card border border-border rounded-lg p-3 min-w-[200px] shadow-xl"
                >
                  <a
                    href="https://apps.apple.com/gh/app/tunenova-listen-and-earn/id6748253966"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2.5 text-sm hover:bg-secondary rounded-md transition-colors"
                  >
                    <AppleIcon className="w-4 h-4" />
                    <span>App Store</span>
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.caribou97499.tunenova&pli=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2.5 text-sm hover:bg-secondary rounded-md transition-colors"
                  >
                    <GooglePlayIcon className="w-4 h-4" />
                    <span>Google Play</span>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden glass border-t border-border"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-3 pt-2">
                <a
                  href="https://apps.apple.com/gh/app/tunenova-listen-and-earn/id6748253966"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-2"
                >
                  <AppleIcon className="w-4 h-4" />
                  <span>App Store</span>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.caribou97499.tunenova&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-2"
                >
                  <GooglePlayIcon className="w-4 h-4" />
                  <span>Google Play</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
