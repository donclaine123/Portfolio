"use client";

import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Maximize, X, FileText, Sparkles, Lightbulb, Users, TrendingUp, Compass, Code2 } from "lucide-react";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pdfUrl = "/developer-resume.pdf";

  const coreFoundations = [
    {
      title: "Continuous Learning",
      description: "Technology evolves quickly, and I believe growth comes from staying curious and always being willing to learn.",
      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
      tag: "Mindset"
    },
    {
      title: "Problem Solving",
      description: "I enjoy analyzing problems and finding practical, efficient solutions through technology.",
      icon: <Lightbulb className="w-5 h-5 text-blue-500" />,
      tag: "Execution"
    },
    {
      title: "Team Collaboration",
      description: "Good communication and teamwork create better results and stronger projects.",
      icon: <Users className="w-5 h-5 text-emerald-500" />,
      tag: "Culture"
    },
    {
      title: "Growth Through Challenges",
      description: "Mistakes and challenges are part of the process — they’re opportunities to improve and refine my craft.",
      icon: <TrendingUp className="w-5 h-5 text-purple-500" />,
      tag: "Resilience"
    }
  ];

  return (
    <section id="about" className="relative bg-white pt-24 pb-32 overflow-hidden flex flex-col items-center">
      <div className="max-w-[1080px] w-full px-6 flex flex-col items-center">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400 mb-2 block">
            ABOUT ME
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-black text-black tracking-tight">
            My Story & Vision
          </h2>
        </motion.div>

        {/* Narrative Story Blocks */}
        <div className="w-full flex flex-col gap-6 mb-16">
          
          {/* Card 1: Discovering Technology */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="w-full bg-white border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-[2rem] p-6 sm:p-8 md:p-12 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-700 shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-black tracking-tight">
                Discovering Technology
              </h3>
            </div>
            
            <p className="text-gray-700 text-base md:text-lg leading-[1.85] font-normal mb-4">
              Growing up, I was always curious about how technology worked. Whether it was exploring computers, troubleshooting problems, or discovering new software, I enjoyed figuring things out and learning how systems connected behind the scenes.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-[1.85] font-normal">
              That curiosity eventually led me to pursue a degree in Computer Science, where I developed a strong foundation in programming, systems, databases, networking, and software development.
            </p>
          </motion.div>

          {/* Card 2: Building Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full bg-white border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-[2rem] p-6 sm:p-8 md:p-12 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-700 shrink-0">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-black tracking-tight">
                Building Solutions
              </h3>
            </div>
            
            <p className="text-gray-700 text-base md:text-lg leading-[1.85] font-normal">
              During my college years, I realized that programming was more than just writing code — it was about creating structured solutions that resolve actual workflow bottlenecks and bring tangible value to users.
            </p>
          </motion.div>

        </div>

        {/* Core Foundations Grid Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-1 block">
            CORE FOUNDATIONS
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
            Guiding Principles & Philosophy
          </h3>
        </motion.div>

        {/* Core Foundations 4-Card Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-16">
          {coreFoundations.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gray-50 text-gray-600 border border-gray-100">
                    {item.tag}
                  </span>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-black tracking-tight mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm md:text-base leading-[1.75]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Read CV Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-9 py-4 rounded-full border border-gray-200 bg-white text-black font-bold text-base shadow-[0_4px_14px_0_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
          >
            <FileText className="w-5 h-5" />
            <span>Read My CV</span>
          </button>
        </motion.div>

      </div>

      {/* CV Modal - Portaled to body to overlap Navbar */}
      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-2 sm:p-4 md:p-10"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl overflow-hidden w-full max-w-5xl h-[90vh] md:h-[85vh] flex flex-col shadow-2xl"
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-100 bg-white">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
                    <div className="bg-black text-white p-1.5 sm:p-2 rounded-lg shrink-0">
                      <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base text-black truncate">Mark Alexis Batis — CV</h3>
                      <span className="text-[10px] sm:text-xs text-gray-500 truncate">Curriculum Vitae Preview</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
                    <a
                      href={pdfUrl}
                      download
                      aria-label="Download CV"
                      className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-black text-white rounded-lg text-xs sm:text-sm font-semibold hover:bg-gray-800 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">Download</span>
                    </a>
                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Fullscreen"
                      className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 border border-gray-200 text-black rounded-lg text-xs sm:text-sm font-semibold hover:bg-gray-50 transition-colors"
                    >
                      <Maximize className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">Fullscreen</span>
                    </a>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      aria-label="Close modal"
                      className="p-1.5 sm:p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                    >
                      <X className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>
                
                {/* PDF Viewer */}
                <div className="flex-1 w-full bg-gray-100 overflow-hidden">
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
