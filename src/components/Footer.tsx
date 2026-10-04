"use client";

import React from "react";
import { ArrowUp, Mail, MapPin } from "lucide-react";
import { useLenis } from "lenis/react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  const lenis = useLenis();

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const socials = [
    { icon: <GithubIcon className="w-4 h-4" />, href: "https://github.com/donclaine123", label: "GitHub" },
    { icon: <LinkedinIcon className="w-4 h-4" />, href: "https://www.linkedin.com/in/mark-alexis-batis-4061b128a/", label: "LinkedIn" },
    { icon: <FacebookIcon className="w-4 h-4" />, href: "https://www.facebook.com/micky.arkal/", label: "Facebook" },
    { icon: <Mail className="w-4 h-4" />, href: "mailto:markalexisbatis@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-[#EAEFF1] dark:bg-[#07080C] border-t border-zinc-200/80 dark:border-zinc-800/80 py-12 sm:py-16 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Row */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 pb-10 border-b border-zinc-200/80 dark:border-zinc-800/80">
          
          {/* Identity & Location */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white tracking-tight uppercase">
              MARK ALEXIS BATIS
            </span>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm font-semibold mt-1 flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span>Full Stack Developer & Software Engineer</span>
              <span className="text-zinc-300 dark:text-zinc-700">•</span>
              <span className="inline-flex items-center gap-1 text-zinc-500 dark:text-zinc-400 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#B83824] dark:text-[#FF5A36]" />
                Metro Manila, PH
              </span>
            </p>
          </div>

          {/* Social Links & Back to Top Action */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            
            {/* Social Icons */}
            <div className="flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-[#B83824] dark:hover:text-[#FF5A36] hover:border-[#B83824] dark:hover:border-[#FF5A36] hover:-translate-y-0.5 active:scale-95 transition-all shadow-xs cursor-pointer"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Clean Back to Top Trigger */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top of page"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 text-xs font-bold text-zinc-800 dark:text-zinc-200 hover:text-[#B83824] dark:hover:text-[#FF5A36] hover:border-[#B83824] dark:hover:border-[#FF5A36] hover:-translate-y-0.5 active:scale-95 transition-all shadow-xs cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>

          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 dark:text-zinc-400 font-medium text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} Mark Alexis Batis. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Built with Next.js 16, TypeScript & Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
