"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yParallaxPhoto = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const roles = [
    "Software Developer",
    "Full Stack Engineer",
    "AI Enthusiast",
    "Tech Enthusiast"
  ];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#contact");
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
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-white pt-28 sm:pt-32 md:pt-32 pb-16 px-4"
    >
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-500 font-medium text-base sm:text-lg md:text-xl mb-2"
        >
          Hi, I'm
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ fontFamily: "'Caacupe One', sans-serif" }}
          className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black tracking-wider mb-3 px-2"
        >
          MARK ALEXIS BATIS
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-600 font-semibold text-base sm:text-lg md:text-xl mb-8 sm:mb-12 h-8 relative flex justify-center w-full"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={currentRole}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="absolute"
            >
              {roles[currentRole]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: yParallaxPhoto }}
          className="relative w-48 h-60 sm:w-56 sm:h-72 md:w-64 md:h-80 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl mb-8 bg-white"
        >
          <Image
            src={`${basePath}/mark.png`}
            alt="Mark Alexis Batis"
            fill
            priority
            sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#contact"
            onClick={handleContactClick}
            className="w-full sm:w-auto text-center px-9 py-4 rounded-full bg-black text-white font-bold text-base shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            Let's Work Together!
          </a>
        </motion.div>
      </div>
    </section>
  );
}
