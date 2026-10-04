"use client";

import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Maximize,
  X,
  FileText,
  Sparkles,
  Lightbulb,
  Users,
  TrendingUp,
  Compass,
  GraduationCap,
  MapPin,
  ArrowUpRight,
  Code2,
} from "lucide-react";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const pdfUrl = `${basePath}/developer-resume.pdf`;

  const coreFoundations = [
    {
      title: "Continuous Learning",
      description: "Technology evolves rapidly. I prioritize staying curious, mastering modern architectures, and refining my engineering craft every day.",
      icon: <Sparkles className="w-5 h-5 text-[#B83824] dark:text-[#FF5A36]" />,
      tag: "Mindset",
    },
    {
      title: "Pragmatic Solutions",
      description: "Writing code is means to an end — the goal is eliminating real friction through responsive, reliable, and accessible systems.",
      icon: <Lightbulb className="w-5 h-5 text-[#B83824] dark:text-[#FF5A36]" />,
      tag: "Execution",
    },
    {
      title: "Clear Communication",
      description: "Great software stems from open communication, empathetic collaboration, clean documentation, and seamless team handoffs.",
      icon: <Users className="w-5 h-5 text-[#B83824] dark:text-[#FF5A36]" />,
      tag: "Culture",
    },
    {
      title: "Growth in Complexity",
      description: "Bugs and architectural bottlenecks are prime learning opportunities — resolved with patience, rigorous testing, and iteration.",
      icon: <TrendingUp className="w-5 h-5 text-[#B83824] dark:text-[#FF5A36]" />,
      tag: "Resilience",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-[#F3F6F7] dark:bg-[#0B0E14] pt-20 sm:pt-24 pb-28 sm:pb-32 overflow-hidden flex flex-col items-center transition-colors duration-500"
    >
      {/* Giant Editorial Backdrop Watermark matching Hero layout */}
      <div 
        aria-hidden="true" 
        className="absolute inset-x-0 top-8 sm:top-12 flex justify-center pointer-events-none select-none z-0 overflow-hidden"
      >
        <span className="text-[13vw] font-sans font-black uppercase tracking-tighter bg-gradient-to-b from-zinc-950/[0.12] via-zinc-950/[0.04] to-transparent dark:from-white/[0.14] dark:via-white/[0.05] dark:to-transparent bg-clip-text text-transparent leading-none whitespace-nowrap select-none">
          BACKGROUND
        </span>
      </div>

      <div className="relative z-10 max-w-[1140px] w-full px-4 sm:px-6 flex flex-col items-center">
        
        {/* Section Header with Cursive Accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          {/* Cursive Accent matching Hero */}
          <div className="font-[family-name:var(--font-caveat)] text-2xl sm:text-3xl font-bold text-[#B83824] dark:text-[#FF5A36] mb-1 origin-bottom-left -rotate-2 inline-block">
            story & engineering mindset
          </div>
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#B83824] dark:text-[#FF5A36] mb-2 block">
            01 // ARCHITECTURE & BACKGROUND
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-black text-black dark:text-white tracking-tight">
            Engineering Story & Vision
          </h2>
        </motion.div>

        {/* Bento Grid: Story & Credentials */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 mb-6">
          
          {/* Bento Cell 1: Narrative Story (col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white dark:bg-zinc-900/70 border border-zinc-200/90 dark:border-zinc-800 shadow-[0_4px_24px_rgb(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgb(0,0,0,0.4)] hover:shadow-[0_8px_32px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_32px_rgb(0,0,0,0.6)] rounded-[2rem] p-6 sm:p-8 md:p-10 flex flex-col justify-between transition-all duration-300"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/70 dark:border-zinc-700/70 flex items-center justify-center text-[#B83824] dark:text-[#FF5A36] shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block">
                    Engineering Background
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white tracking-tight">
                    Curiosity Turned Into Structured Solutions
                  </h3>
                </div>
              </div>

              <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-[1.8] font-normal mb-4">
                Growing up, I was always curious about how digital technology functioned behind the user interface. Whether troubleshooting hardware, experimenting with new software, or diagnosing network issues, I was captivated by how interconnected systems operated.
              </p>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-[1.8] font-normal mb-6">
                That curiosity inspired me to earn a degree in Computer Science, establishing an engineering foundation in full-stack web and mobile development, relational database modeling, and real-time network communication.
              </p>
            </div>

            {/* Quick Highlights Ribbon */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md text-zinc-800 dark:text-zinc-200 text-xs font-semibold border border-zinc-200/80 dark:border-zinc-700/80 shadow-2xs hover:border-[#B83824]/40 dark:hover:border-[#FF5A36]/40 transition-colors">
                <GraduationCap className="w-3.5 h-3.5 text-[#B83824] dark:text-[#FF5A36]" />
                B.S. in Computer Science
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md text-zinc-800 dark:text-zinc-200 text-xs font-semibold border border-zinc-200/80 dark:border-zinc-700/80 shadow-2xs hover:border-[#B83824]/40 dark:hover:border-[#FF5A36]/40 transition-colors">
                <Code2 className="w-3.5 h-3.5 text-[#B83824] dark:text-[#FF5A36]" />
                Full Stack & Mobile Systems
              </span>
            </div>
          </motion.div>

          {/* Bento Cell 2: Credentials & Interactive Resume (col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 bg-white dark:bg-zinc-900/70 border-2 border-zinc-900/10 dark:border-zinc-800 shadow-[0_4px_24px_rgb(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgb(0,0,0,0.4)] hover:shadow-[0_8px_32px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_32px_rgb(0,0,0,0.6)] rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center shrink-0 shadow-sm">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md text-zinc-900 dark:text-zinc-100 border border-zinc-200/80 dark:border-zinc-700/80 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Verified Resume
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white tracking-tight mb-2">
                Curriculum Vitae
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                Comprehensive technical overview of education, software case studies, production competencies, and project deliverables.
              </p>

              {/* Education Snippet */}
              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/70 dark:border-zinc-700/70 mb-6">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-[#B83824] dark:text-[#FF5A36] mt-0.5 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-zinc-950 dark:text-zinc-100">
                      St. Clare College of Caloocan
                    </span>
                    <span className="text-[11px] text-zinc-600 dark:text-zinc-400 font-medium">
                      Bachelor of Science in Computer Science
                    </span>
                    <span className="text-[10px] text-zinc-400 dark:text-zinc-500 mt-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#B83824] dark:text-[#FF5A36]" />
                      Metro Manila, Philippines
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-bold text-xs sm:text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Preview CV</span>
              </button>
              <a
                href={pdfUrl}
                download
                aria-label="Download CV PDF"
                className="w-full sm:w-auto py-3 px-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-bold text-xs sm:text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:-translate-y-0.5 active:scale-95 transition-all inline-flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
              >
                <Download className="w-4 h-4 text-[#B83824] dark:text-[#FF5A36]" />
                <span className="sm:hidden lg:inline">PDF</span>
              </a>
            </div>
          </motion.div>

        </div>

        {/* Bento Cell 3: Four Core Guiding Pillars */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
          {coreFoundations.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800 shadow-[0_4px_24px_rgb(0,0,0,0.02)] dark:shadow-[0_4px_24px_rgb(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_32px_rgb(0,0,0,0.5)] hover:border-[#B83824]/40 dark:hover:border-[#FF5A36]/40 rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#B83824]/10 dark:bg-[#FF5A36]/15 border border-[#B83824]/20 dark:border-[#FF5A36]/25 flex items-center justify-center text-[#B83824] dark:text-[#FF5A36] shadow-xs">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/80 shadow-2xs">
                    {item.tag}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-black dark:text-white tracking-tight mb-2">
                  {item.title}
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* CV Modal - Portaled to body to overlap Navbar */}
      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 dark:bg-black/80 backdrop-blur-sm p-2 sm:p-4 md:p-10"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden w-full max-w-5xl h-[90vh] md:h-[85vh] flex flex-col shadow-2xl"
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
                    <div className="bg-black dark:bg-white text-white dark:text-black p-1.5 sm:p-2 rounded-lg shrink-0">
                      <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base text-black dark:text-white truncate">
                        Mark Alexis Batis — CV
                      </h3>
                      <span className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 truncate">
                        Curriculum Vitae Preview
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
                    <a
                      href={pdfUrl}
                      download
                      aria-label="Download CV"
                      className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg text-xs sm:text-sm font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">Download</span>
                    </a>
                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Fullscreen"
                      className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 border border-zinc-200 dark:border-zinc-700 text-black dark:text-white rounded-lg text-xs sm:text-sm font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                    >
                      <Maximize className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">Fullscreen</span>
                    </a>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      aria-label="Close modal"
                      className="p-1.5 sm:p-2 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
                    >
                      <X className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>
                
                {/* PDF Viewer */}
                <div className="flex-1 w-full bg-zinc-100 dark:bg-zinc-950 overflow-hidden">
                  <iframe
                    src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                    className="w-full h-full border-none"
                    title="CV Preview"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
