"use client";

import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React, { useEffect, useState } from "react";
import { IconBrandDiscord, IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconCopy, IconMail } from "@tabler/icons-react";
import Link from "next/link";
import Particles from "@/components/magicui/particles";
import { cn } from "@/lib/utils";

const socials = [
  {
    name: "Twitter",
    href: "https://twitter.com/oonkoohq",
    icon: <IconBrandTwitter className="h-6 w-6" />
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/oonkoo/",
    icon: <IconBrandLinkedin className="h-6 w-6" />
  },
  {
    name: "GitHub",
    href: "https://github.com/oonkoohq",
    icon: <IconBrandGithub className="h-6 w-6" />
  },
  {
    name: "Discord",
    href: "#",
    icon: <IconBrandDiscord className="h-6 w-6" />
  }
];

const ContactLink = ({ 
  children, 
  onClick, 
  className 
}: { 
  children: React.ReactNode; 
  onClick?: () => void; 
  className?: string;
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "group relative rounded-full px-4 py-2 text-lg font-semibold transition-all duration-500 hover:bg-white/5",
        className
      )}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        layoutId="contact-bubble"
        className="absolute inset-0 z-0 rounded-full border border-green-500/30 bg-green-500/10"
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 0.6
        }}
      />
    </motion.button>
  );
};

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const email = "oonkoo.mail@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const emailLink = `mailto:${email}`;

  // Matrix-like character animation
  const MatrixRain = () => {
    return (
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.div
          initial={{ y: -1000 }}
          animate={{ y: 1000 }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear"
          }}
          className="flex gap-4"
        >
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="text-green-500 text-xs font-mono">
              {Array.from({ length: 30 }).map((_, j) => (
                <div
                  key={j}
                  className="opacity-[0.03]"
                  style={{
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                >
                  {String.fromCharCode(0x30A0 + Math.random() * 96)}
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-[#1f1c1c] text-white relative overflow-hidden">
      <Navbar />
      <MatrixRain />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-[80vh] flex flex-col items-center justify-center px-4"
      >
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color="#f0f0f0"
          refresh
        />

        <div className="absolute inset-0">
          <BackgroundBeams />
        </div>

        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-400 mb-4">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
              {"Ready to transform your ideas into reality? Let's create something extraordinary together."}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4 mb-12"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <ContactLink onClick={copyToClipboard}>
                <span className="flex items-center gap-2">
                  {email}
                  <IconCopy className="h-4 w-4" />
                </span>
              </ContactLink>
              <ContactLink>
                <Link href={emailLink} className="flex items-center gap-2">
                  Send us an email
                  <IconMail className="h-4 w-4" />
                </Link>
              </ContactLink>
            </div>
            
            {copiedEmail && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-primary text-sm"
              >
                Email copied to clipboard!
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {socials.map((social) => (
              <Link 
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  {social.icon}
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-20 left-0 right-0 text-center"
        >
          <div className="text-white/40 text-sm">
            Based in <span className="text-primary">Toronto</span>, serving clients worldwide
          </div>
        </motion.div>
      </motion.div>

      <Footer />
    </main>
  );
}