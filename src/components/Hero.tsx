"use client";

import React from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {


  const stats = [
    {
      value: "B.S. CS",
      label: "ST. CLARE COLLEGE",
      desc: "Bachelor of Science in Computer Science graduate (Class of 2026).",
    },
    {
      value: "2 Systems",
      label: "QR ATTENDANCE SYSTEMS",
      desc: "Built attendance tracking ecosystems for school departments and students.",
    },
    {
      value: "90+",
      label: "WORKSTATIONS",
      desc: "Managed device configurations and support operations during OJT.",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#FAF8F5] pt-28"
    >
      {/* Background image container - Left aligned for desktop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
        className="absolute top-0 bottom-[200px] left-0 right-0 z-0 hidden md:flex items-end justify-start max-w-7xl mx-auto w-full pointer-events-none hero-portrait-container"
      >
        <div className="relative w-full md:w-[60%] h-full opacity-35 md:opacity-100">
          <Image
            src="/Portfolio/mark_portrait.png"
            alt="Mark Alexis Batis Portrait Background"
            fill
            priority
            className="object-contain object-bottom md:object-left-bottom filter grayscale contrast-[1.1] brightness-[1.03]"
          />
          {/* Subtle gradient to fade the image on the right on desktop */}
          <div className="hidden md:block absolute inset-y-0 right-0 w-1/3 bg-gradient-to-r from-transparent to-[#FAF8F5]" />
        </div>
      </motion.div>

      {/* Floating Background Typography */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 1.4 }}
        className="absolute top-[18%] right-[10%] text-[24vw] font-serif font-black text-sand-200/30 select-none pointer-events-none z-0 hero-floating-m hidden md:block"
      >
        M
      </motion.div>

      {/* Hero Content */}
      <div className="max-w-6xl mx-auto w-full px-6 flex-1 flex flex-col md:flex-row md:items-center md:justify-end relative z-10 py-16 md:py-24">
        
        {/* Mobile Viewport Portrait - Displayed at the top, outside the card */}
        <div className="block md:hidden w-[80%] mx-auto aspect-[4/5] relative rounded-3xl overflow-hidden z-0">
          <Image
            src="/Portfolio/mark_portrait.png"
            alt="Mark Alexis Batis"
            fill
            priority
            className="object-cover object-center filter grayscale contrast-[1.1] brightness-[1.03]"
          />
        </div>

        <div className="w-full md:w-[50%] text-left bg-[#FAF8F5]/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-8 md:p-0 rounded-3xl border border-sand-200/50 md:border-none hero-text-card relative z-10 mt-[-160px] md:mt-0">
          
          {/* Details slide down from top */}
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1], delay: 1.2 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-burgundy-700 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-burgundy-700" />
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[84px] font-serif font-black tracking-tight text-stone-900 leading-[0.95] mb-8">
              Aspiring <br />
              <span className="text-burgundy-700 italic font-normal">Software</span> <br />
              Developer
            </h1>

            <p className="text-base md:text-lg text-stone-600 leading-relaxed mb-10 max-w-lg font-medium">
              I am a recent Computer Science graduate specializing in building full-stack web architectures, configuring databases, and optimizing IT operations. Eager to solve real-world system bottlenecks.
            </p>
          </motion.div>

          {/* CTA buttons slide up from bottom */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1], delay: 1.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full bg-burgundy-700 text-[#FAF8F5] hover:bg-burgundy-600 text-[10px] font-bold uppercase tracking-[0.2em] transition-[background-color,box-shadow] duration-200 flex items-center gap-2.5 group cursor-pointer shadow-sm"
            >
              My Projects
              <ArrowDown className="h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full border border-sand-300 hover:border-burgundy-700 bg-transparent text-burgundy-700 text-[10px] font-bold uppercase tracking-[0.2em] transition-[border-color,background-color] duration-200 flex items-center gap-2.5 cursor-pointer"
            >
              Get in touch
              <ArrowRight className="h-3.5 w-3.5" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Stats Board at the bottom - slides up from below */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1], delay: 1.4 }}
        className="w-full bg-[#FAF8F5] border-t border-sand-200/80 py-10 relative z-20"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 md:divide-x md:divide-sand-200">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col pt-4 md:pt-0 md:pl-8 first:pl-0 first:pt-0"
              >
                <span className="text-4xl md:text-5xl font-serif font-black text-burgundy-700 tracking-tight mb-2">
                  {stat.value}
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-stone-900 mb-2 uppercase">
                  {stat.label}
                </span>
                <span className="text-xs text-stone-500 leading-relaxed max-w-sm">
                  {stat.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
