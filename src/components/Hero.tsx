"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { ArrowDown, Mail } from "lucide-react";
import Magnetic from "@/components/Magnetic";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      if (lenis) {
        lenis.scrollTo(target as HTMLElement, {
          offset: -40,
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#D3DFE2] dark:bg-[#0B0E14] pt-16 sm:pt-16 md:pt-16 lg:pt-16 pb-6 sm:pb-10 md:pb-10 lg:pb-10 px-4 sm:px-8 md:px-10 lg:px-12 transition-colors duration-500 select-none"
    >
      {/* GIANT EDITORIAL BACKDROP TEXT - Sibling of portrait, centered on section */}
      <div className="absolute inset-x-0 top-[50vh] sm:top-[22vh] md:top-[20vh] lg:top-[14vh] xl:top-[10vh] text-center pointer-events-none z-0 overflow-hidden">
        <span className="inline-block font-sans font-black tracking-[-0.04em] uppercase text-[18vw] sm:text-[17.5vw] md:text-[16vw] lg:text-[15.5vw] leading-[0.88] select-none bg-gradient-to-b from-[#9E2818] via-[#B83824]/85 via-45% to-transparent dark:from-[#FF5A36] dark:via-[#E04524]/85 dark:via-45% dark:to-transparent bg-clip-text text-transparent transform scale-y-[1.08] origin-bottom">
          DEVELOPER
        </span>
      </div>

      {/* CENTERED CUTOUT PORTRAIT - shifted right on sm+ for two-column layout */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-1/2 sm:left-[54%] md:left-[54%] lg:left-[53%] xl:left-1/2 -translate-x-1/2 z-10 w-full flex justify-center pointer-events-none transform-gpu will-change-transform"
      >
        <div className="relative w-[310px] sm:w-[460px] md:w-[520px] lg:w-[640px] xl:w-[720px] h-[50vh] sm:h-[78vh] md:h-[80vh] lg:h-[86vh] xl:h-[90vh] flex items-end justify-center">
          <Image
            src={`${basePath}/mypicture.png?v=2`}
            alt="Mark Alexis Batis"
            fill
            priority
            unoptimized
            sizes="(max-width: 640px) 350px, (max-width: 1024px) 520px, 720px"
            className="z-10 object-contain object-bottom select-none pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.18)] dark:drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          />
        </div>
      </motion.div>

      {/* 3. FOREGROUND CONTENT & EDITORIAL METADATA - Layer 2 (Interactive) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex-1 flex flex-col justify-between pointer-events-none">

        {/* Desktop Top-Right Availability Pill (Aligned with Header Bar Level) */}
        <div className="hidden sm:flex md:flex lg:flex absolute top-5 right-6 sm:right-8 md:right-8 lg:right-12 z-30">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pointer-events-auto inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border border-zinc-200/90 dark:border-zinc-700/80 text-zinc-950 dark:text-zinc-100 text-xs font-semibold shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B83824] dark:bg-[#FF5A36] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B83824] dark:bg-[#FF5A36]"></span>
            </span>
            <span className="uppercase tracking-wider">Available for Projects</span>
          </motion.div>
        </div>

        {/* Mid-Left: Editorial Introduction & Name */}
        <div className="pt-2 sm:pt-[24vh] md:pt-[26vh] lg:pt-[28vh] xl:pt-[32vh] max-w-md sm:max-w-[240px] md:max-w-[280px] lg:max-w-[340px] xl:max-w-[380px] pointer-events-auto">
          {/* Cursive Accent */}
          <motion.div
            initial={{ opacity: 0, rotate: -12, x: -10 }}
            animate={{ opacity: 1, rotate: -4, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-[family-name:var(--font-caveat)] text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-[#B83824] dark:text-[#FF5A36] mb-0.5 sm:mb-1 origin-bottom-left"
          >
            Hey, I'm
          </motion.div>

          {/* Strictly Preserving Caacupe One Font Style for Mark Alexis Batis */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ fontFamily: "'Caacupe One', sans-serif" }}
            className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-zinc-950 dark:text-white tracking-wide leading-[1.06] mb-2 sm:mb-3"
          >
            MARK ALEXIS BATIS.
          </motion.h1>

          {/* Punchy Developer Tagline & Description - Bounded to ensure zero overlap with suit */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-1 sm:space-y-1.5 mb-3 sm:mb-5 md:mb-5 max-w-[280px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[320px] xl:max-w-[360px]"
          >
            <p className="text-zinc-900 dark:text-zinc-100 text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base font-bold leading-snug">
              Engineering scalable web systems and high-performance applications.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 text-[11px] sm:text-xs md:text-xs lg:text-xs xl:text-sm font-medium">
              Full Stack Developer & Software Engineer • Metro Manila, PH
            </p>
          </motion.div>

          {/* Mobile & Tablet Availability Status Tag (Shown below lg) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mb-3.5 sm:hidden md:hidden lg:hidden"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/85 dark:bg-zinc-900/85 backdrop-blur-md border border-zinc-900/10 dark:border-white/10 text-zinc-900 dark:text-zinc-100 text-[10px] sm:text-xs font-semibold shadow-2xs">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B83824] dark:bg-[#FF5A36] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#B83824] dark:bg-[#FF5A36]"></span>
              </span>
              <span className="uppercase tracking-wider">Available for Projects</span>
            </div>
          </motion.div>

          {/* Dual Action CTAs with Magnetic Hover */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex items-center gap-2 sm:gap-3 lg:gap-4 flex-nowrap"
          >
            <Magnetic strength={0.3}>
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, "#projects")}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-5 md:px-5 lg:px-7 sm:py-2.5 md:py-2 lg:py-3 rounded-full bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-bold text-xs lg:text-sm shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </Magnetic>

            <Magnetic strength={0.3}>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "#contact")}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-4 md:px-5 lg:px-7 sm:py-2.5 md:py-2 lg:py-3 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-900/15 dark:border-white/15 text-zinc-900 dark:text-white font-bold text-xs lg:text-sm hover:bg-white dark:hover:bg-zinc-800 hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer shadow-xs whitespace-nowrap"
              >
                <Mail className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400" />
                <span>Get in Touch</span>
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* 4. BOTTOM BAR: Left Scroll Prompt & Right Angled Sticker Badge */}
        <div className="w-full flex items-end justify-between pt-6 sm:pt-16 pb-1 pointer-events-auto gap-2">

          {/* Bottom Left: Scroll to Explore with Magnetic Hover */}
          <Magnetic strength={0.25}>
            <motion.a
              href="#about"
              onClick={(e) => handleScrollTo(e, "#about")}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-zinc-900/85 backdrop-blur-md border border-zinc-900/10 dark:border-white/15 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 hover:bg-white dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer group shadow-xs"
            >
              <span>SCROLL TO EXPLORE</span>
              <ArrowDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover:translate-y-1" />
            </motion.a>
          </Magnetic>

          {/* Bottom Right: Angled Sticker Badge with Magnetic Hover */}
          <Magnetic strength={0.25}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: -2 }}
              whileHover={{ rotate: 0, scale: 1.03 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="bg-[#DDE7EA] dark:bg-[#151922] border-2 border-zinc-950 dark:border-zinc-700 rounded-lg sm:rounded-xl px-2.5 py-1.5 sm:px-5 sm:py-2.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.15)] dark:sm:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] flex flex-col items-start select-none cursor-default shrink-0"
            >
              <span className="text-[9px] sm:text-xs font-bold tracking-tight text-zinc-950 dark:text-zinc-200 leading-tight">
                Full Stack Developer
              </span>
              <span className="text-[10px] sm:text-sm font-black tracking-tight text-[#B83824] dark:text-[#FF5A36] leading-tight">
                Software & Systems Engineer
              </span>
            </motion.div>
          </Magnetic>

        </div>

      </div>
    </section>
  );
}
