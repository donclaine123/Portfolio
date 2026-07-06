"use client";

import React, { useEffect, useRef } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Magnetic button effect for CTA
      const magneticBtns = document.querySelectorAll('.magnetic-btn');
      
      magneticBtns.forEach((btn: any) => {
        btn.addEventListener('mousemove', (e: MouseEvent) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          gsap.to(btn, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.4,
            ease: "power2.out"
          });
        });
        
        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.7,
            ease: "elastic.out(1, 0.3)"
          });
        });
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

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
      ref={containerRef}
      className="relative min-h-[110vh] flex flex-col justify-between overflow-hidden bg-[#FAF8F5] pt-20 lg:pt-32"
    >
      {/* Background image container - Parallax cinematic */}
      <motion.div 
        style={{ y: yParallax, opacity: opacityFade }}
        className="absolute top-0 right-0 w-full lg:w-[60%] h-[110vh] z-0 pointer-events-none flex justify-end"
      >
        <div className="relative top-10 lg:top-14 right-0 lg:-right-[2%] w-[90%] sm:w-[75%] lg:w-[90%] max-w-[620px] h-[75vh] lg:h-[90vh] opacity-45 lg:opacity-75">
          <Image
            src="/Portfolio/mark.png"
            alt="Mark Alexis Batis Portrait"
            fill
            priority
            className="object-contain object-top lg:object-right-top filter grayscale contrast-[1.12] brightness-[1.03]"
          />
          {/* Soft gradient mask to blend bottom and left edges */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/60 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#FAF8F5] to-transparent hidden lg:block" />
        </div>
      </motion.div>

      {/* Floating Background Typography (Oversized) */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        className="absolute top-1/4 -left-[5%] text-[30vw] font-serif font-black text-sand-200/40 select-none pointer-events-none z-0 tracking-tighter"
      >
        MB.
      </motion.div>

      {/* Hero Content - Asymmetrical Editorial Layout */}
      <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-12 flex-1 flex flex-col relative z-10 pt-10 lg:pt-20">
        
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 lg:gap-0 mt-8 lg:mt-24">
          
          {/* Main Typography Block */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
            className="w-full lg:w-[65%] text-left"
          >
            <div className="flex items-center gap-3 mb-8 lg:mb-12">
              <div className="h-[1px] w-12 bg-burgundy-700" />
              <span className="text-[9px] lg:text-[11px] font-bold uppercase tracking-[0.3em] text-burgundy-700">
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </div>

            <h1 className="text-[16vw] lg:text-[9vw] font-serif font-black tracking-tighter text-stone-900 leading-[0.85] mb-6">
              Aspiring<br />
              <span className="text-burgundy-700 italic font-normal inline-block ml-[8vw] lg:ml-[4vw]">Software</span><br />
              Developer<span className="text-burgundy-700">.</span>
            </h1>
          </motion.div>

          {/* Description & CTA block - offset to the right */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
            className="w-full lg:w-[35%] flex flex-col items-start lg:pl-10 pb-10 lg:pb-0"
          >
            <p className="text-base lg:text-[1.1rem] text-stone-600 leading-[1.8] mb-10 font-medium">
              I am a recent Computer Science graduate specializing in building full-stack web architectures, configuring databases, and optimizing IT operations. Eager to solve real-world system bottlenecks.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
              <a
                href="#projects"
                className="magnetic-btn px-8 py-4.5 rounded-full bg-burgundy-700 text-[#FAF8F5] hover:bg-burgundy-800 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 flex items-center justify-center gap-3 w-full sm:w-auto shadow-xl shadow-burgundy-700/20"
              >
                My Projects
                <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="magnetic-btn px-8 py-4.5 rounded-full bg-transparent border border-sand-300 hover:border-burgundy-700 text-stone-800 hover:text-burgundy-700 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 flex items-center justify-center gap-3 w-full sm:w-auto"
              >
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Stats Board at the bottom - Cinematic overlay style */}
      <motion.div 
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1.5 }}
        className="w-full relative z-20 mt-10 lg:mt-32 pb-12 lg:pb-16"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="border-t border-sand-200/80 pt-8 lg:pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 lg:divide-x lg:divide-sand-200">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col lg:px-10 first:pl-0 last:pr-0 group cursor-default"
              >
                <div className="overflow-hidden mb-3">
                  <span className="inline-block text-4xl lg:text-6xl font-serif font-black text-stone-900 tracking-tighter group-hover:text-burgundy-700 transition-colors duration-500">
                    {stat.value}
                  </span>
                </div>
                <div className="h-[1px] w-full bg-sand-200 mb-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <span className="text-[9px] lg:text-[10px] font-bold tracking-[0.25em] text-burgundy-700 mb-3 uppercase">
                  {stat.label}
                </span>
                <span className="text-xs lg:text-sm text-stone-500 leading-[1.7] max-w-[280px]">
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
