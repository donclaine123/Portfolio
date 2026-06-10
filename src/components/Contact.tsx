"use client";

import React, { useEffect } from "react";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden bg-[#FAF8F5] border-t border-sand-200">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start reveal">
          
          {/* Left Column: Heading */}
          <div className="md:col-span-5 flex flex-col justify-start">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-burgundy-700 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-burgundy-700" />
                CONNECT
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-stone-900 leading-tight">
              Get In Touch
            </h2>
            <p className="text-stone-500 mt-6 text-sm font-medium leading-relaxed max-w-sm">
              Looking for a developer to join your team? Reach out directly using the channels on the right.
            </p>
          </div>

          {/* Right Column: Reorganized Contact Channels */}
          <div className="md:col-span-7 flex flex-col divide-y divide-sand-200 border-y border-sand-200 w-full">
            
            {/* Email link */}
            <motion.a
              href="mailto:markalexisbatis@gmail.com"
              whileHover={{ x: 8 }}
              whileTap={{ scale: 0.995 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="flex items-center justify-between py-6 group hover:text-burgundy-700 transition-colors cursor-pointer"
            >
              <div className="flex flex-col">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-1">
                  EMAIL ADDRESS
                </span>
                <span className="text-base md:text-lg font-serif font-black text-stone-900 group-hover:text-burgundy-700 transition-colors">
                  markalexisbatis@gmail.com
                </span>
              </div>
              <Mail className="h-5 w-5 text-burgundy-700 group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" />
            </motion.a>

            {/* GitHub link */}
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 8 }}
              whileTap={{ scale: 0.995 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="flex items-center justify-between py-6 group hover:text-burgundy-700 transition-colors cursor-pointer"
            >
              <div className="flex flex-col">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-1">
                  GITHUB REPOSITORIES
                </span>
                <span className="text-base md:text-lg font-serif font-black text-stone-900 group-hover:text-burgundy-700 transition-colors">
                  github.com/mark-batis
                </span>
              </div>
              <svg
                className="h-5 w-5 text-burgundy-700 group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </motion.a>

            {/* LinkedIn link */}
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 8 }}
              whileTap={{ scale: 0.995 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="flex items-center justify-between py-6 group hover:text-burgundy-700 transition-colors cursor-pointer"
            >
              <div className="flex flex-col">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-1">
                  LINKEDIN NETWORK
                </span>
                <span className="text-base md:text-lg font-serif font-black text-stone-900 group-hover:text-burgundy-700 transition-colors">
                  linkedin.com/in/mark-batis
                </span>
              </div>
              <svg
                className="h-5 w-5 text-burgundy-700 group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </motion.a>
          </div>

        </div>

        {/* Final Thank You */}
        <div className="text-center pt-24 border-t border-sand-200 mt-28">
          <h3 className="text-4xl md:text-5xl font-serif text-burgundy-700 italic">
            Thank you for visiting.
          </h3>
        </div>

      </div>
    </section>
  );
}
