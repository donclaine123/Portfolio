"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import { ExternalLink, X, CheckCircle2, Calendar, Briefcase, Layers, ArrowUpRight, ZoomIn } from "lucide-react";

interface Metric {
  label: string;
  value: string;
}

interface CaseStudy {
  id: string;
  title: string;
  role: string;
  company: string;
  timeline: string;
  industry: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  image: string;
  metrics: Metric[];
  status: "available" | "coming-soon";
  detailsLink?: string;
  githubLink?: string;
}

export default function Projects() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const lenis = useLenis();

  // Disable background Lenis and lock body scroll when modal or zoom is open
  useEffect(() => {
    if (selectedProject || isImageZoomed) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "unset";
    }

    return () => {
      lenis?.start();
      document.body.style.overflow = "unset";
    };
  }, [selectedProject, isImageZoomed, lenis]);

  // Close modal or zoom on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isImageZoomed) {
          setIsImageZoomed(false);
        } else {
          setSelectedProject(null);
        }
      }
    };
    if (selectedProject || isImageZoomed) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject, isImageZoomed]);

  const caseStudies: CaseStudy[] = [
    {
      id: "qr-attendance",
      title: "QR Code Attendance & Monitoring System",
      role: "Lead Full Stack Developer",
      company: "Thesis Project • St. Clare College",
      timeline: "2025 - 2026",
      industry: "Real-time Monitoring",
      description: "Faculty attendance tracking was a manual, paper-based bottleneck. I engineered a real-time QR Code ecosystem that transformed the workflow into a secure, instant monitoring system.",
      problem: "Faculty attendance tracking in academic institutions previously relied on manual pen-and-paper sign-ins and biometric queues. This caused administrative delays, lack of live visibility, proxy sign-ins, and inaccurate attendance records during audits.",
      solution: "Engineered an end-to-end real-time QR Code monitoring ecosystem. Faculty members scan dynamic verification QR codes, which instantly transmit attendance events through Socket.IO WebSockets directly to an administrative dashboard backed by PostgreSQL.",
      features: [
        "Sub-100ms real-time event broadcasting powered by Socket.IO WebSockets",
        "Dynamic anti-tamper QR code verification preventing screenshot sharing and proxy sign-ins",
        "Role-Based Access Control (RBAC) for Administrators, Department Heads, and Faculty",
        "Automated attendance logging, live status indicators, and exportable timestamp audit reports",
        "Production-grade Nginx reverse proxy configuration handling secure SSL termination and routing"
      ],
      image: `${basePath}/facultyattendance.png`,
      status: "available",
      detailsLink: "https://employeeattendance.me",
      metrics: [
        { value: "Node.js", label: "Backend Environment" },
        { value: "Socket.IO", label: "Real-Time Updates" },
        { value: "Nginx", label: "Reverse Proxy Server" },
        { value: "PostgreSQL", label: "Database Engine" }
      ]
    },
    {
      id: "student-attendance",
      title: "Student Attendance System",
      role: "Full Stack Developer",
      company: "Personal Project • EazyAttend",
      timeline: "2024 - 2025",
      industry: "Web Application",
      description: "Developed 'EazyAttend'—a full-stack web application designed to automate presence verification via a scan. Constructed a robust security layer implementing encrypted session-based authentication.",
      problem: "Manual attendance roll-calls in classroom environments consumed 10 to 15 minutes of valuable instructional time per session and were prone to human record-keeping errors and paper waste.",
      solution: "Developed 'EazyAttend'—a responsive full-stack attendance system where students verify presence quickly via scan. Built with a lightweight architecture, encrypted sessions, and relational database logging for instantaneous teacher insights.",
      features: [
        "Fast-scanning interface compatible with standard mobile and desktop webcams",
        "Encrypted session-based authentication layer preventing duplicate daily submissions",
        "Instructor dashboard displaying live attendance percentages, absent lists, and class statistics",
        "Structured MySQL relational database schema optimized for fast time-series queries",
        "Clean, responsive layout deployed on Netlify with optimized Express routing backend"
      ],
      image: `${basePath}/studentattendance.png`,
      status: "available",
      detailsLink: "https://eazyattend.netlify.app/",
      metrics: [
        { value: "Express", label: "Routing Framework" },
        { value: "MySQL", label: "Database Engine" },
        { value: "Netlify", label: "Frontend Host" }
      ]
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">
            PORTFOLIO SHOWCASE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-black tracking-tight">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
          {caseStudies.map((cs, idx) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col group"
            >
              {/* Project Preview Image - Click triggers detailed modal */}
              <div
                onClick={() => setSelectedProject(cs)}
                className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-2xl sm:rounded-[2rem] mb-5 sm:mb-6 overflow-hidden bg-gray-50 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] group-hover:shadow-[0_12px_30px_rgb(0,0,0,0.09)] transition-all duration-500 cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={`View detailed case study for ${cs.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedProject(cs);
                  }
                }}
              >
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Floating pill badge on image */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide shadow-sm">
                    Click picture for details
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-5 py-2.5 rounded-full bg-white text-black font-bold text-xs sm:text-sm shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    View Case Study
                  </span>
                </div>
              </div>

              {/* Metadata */}
              <div className="flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block">
                    {cs.industry}
                  </span>
                  {cs.detailsLink && (
                    <a
                      href={cs.detailsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-gray-500 hover:text-black transition-colors"
                      aria-label={`Visit live site for ${cs.title}`}
                    >
                      <span>Visit Live Site</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <h3
                  onClick={() => setSelectedProject(cs)}
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-black tracking-tight mb-3 sm:mb-4 hover:text-gray-600 transition-colors cursor-pointer"
                >
                  {cs.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-[1.75] mb-5 sm:mb-6 line-clamp-3">
                  {cs.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {cs.metrics.map((m, i) => (
                    <span
                      key={i}
                      className="px-3.5 sm:px-4 py-1.5 rounded-full bg-gray-50 text-gray-700 text-xs sm:text-sm font-semibold border border-gray-100"
                    >
                      {m.value}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* DETAILED PROJECT MODAL (Portaled to body) */}
      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              data-lenis-prevent
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-md p-2.5 sm:p-4 md:p-10 overscroll-contain"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                data-lenis-prevent
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                onWheel={(e) => e.stopPropagation()}
                onTouchMove={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl sm:rounded-[2rem] overflow-hidden w-full max-w-5xl lg:max-w-6xl h-[94vh] md:h-[86vh] flex flex-col shadow-2xl border border-gray-100 overscroll-contain"
              >
                {/* Modal Top Bar */}
                <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-3.5 sm:py-5 border-b border-gray-100 bg-white shrink-0">
                  <div className="flex flex-col min-w-0 pr-3 sm:pr-4">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      Project Case Study
                    </span>
                    <h3 className="font-bold text-base sm:text-xl md:text-2xl text-black truncate">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    {selectedProject.detailsLink && (
                      <a
                        href={selectedProject.detailsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-black text-white rounded-full text-xs sm:text-sm font-semibold hover:bg-gray-800 transition-colors shadow-sm"
                      >
                        <span>Live Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(null)}
                      aria-label="Close project details"
                      className="p-1.5 sm:p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Modal Body: Flex column on mobile (stacked naturally), Flex row on desktop */}
                <div className="flex-1 flex flex-col md:flex-row overflow-y-auto md:overflow-hidden min-h-0 h-full">
                  {/* LEFT COLUMN: Picture, Meta & Quick Links */}
                  <div 
                    data-lenis-prevent
                    className="w-full md:w-[42%] lg:w-[40%] flex flex-col gap-4 sm:gap-5 p-4 sm:p-6 md:p-8 bg-gray-50/70 border-b md:border-b-0 md:border-r border-gray-100 md:overflow-y-auto shrink-0 md:h-full overscroll-contain"
                  >
                    {/* Project Picture with Zoom On Click */}
                    <div
                      onClick={() => setIsImageZoomed(true)}
                      className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-sm shrink-0 cursor-zoom-in group/zoom"
                      role="button"
                      tabIndex={0}
                      aria-label="Click to zoom picture"
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setIsImageZoomed(true);
                        }
                      }}
                    >
                      <Image
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        fill
                        className="object-cover object-top transition-transform duration-300 group-hover/zoom:scale-105"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />

                      {/* Zoom Hint Badge */}
                      <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 z-10">
                        <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-black/75 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-semibold tracking-wide shadow-md group-hover/zoom:bg-black transition-colors">
                          <ZoomIn className="w-3.5 h-3.5" />
                          <span>Click to zoom</span>
                        </span>
                      </div>
                    </div>

                    {/* Metadata Strip */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-2 sm:gap-2.5">
                      <div className="flex items-center gap-3 p-2.5 sm:p-3 bg-white rounded-xl border border-gray-100 shadow-xs">
                        <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-700 shrink-0">
                          <Briefcase className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Role</span>
                          <span className="text-xs sm:text-sm font-bold text-black truncate">{selectedProject.role}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-2.5 sm:p-3 bg-white rounded-xl border border-gray-100 shadow-xs">
                        <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-700 shrink-0">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Timeline</span>
                          <span className="text-xs sm:text-sm font-bold text-black truncate">{selectedProject.timeline}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-2.5 sm:p-3 bg-white rounded-xl border border-gray-100 shadow-xs">
                        <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-700 shrink-0">
                          <Layers className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Context</span>
                          <span className="text-xs sm:text-sm font-bold text-black truncate">{selectedProject.company}</span>
                        </div>
                      </div>
                    </div>

                    {/* Live Project CTA */}
                    {selectedProject.detailsLink && (
                      <a
                        href={selectedProject.detailsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-black text-white font-bold text-xs sm:text-sm hover:bg-gray-800 transition-all shadow-sm shrink-0"
                      >
                        <span>Visit Live Site</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* RIGHT COLUMN: Detailed Information & Breakdown */}
                  <div 
                    data-lenis-prevent
                    className="w-full md:w-[58%] lg:w-[60%] flex-1 flex flex-col p-4 sm:p-6 md:p-8 space-y-6 md:overflow-y-auto md:h-full overscroll-contain"
                  >
                    {/* Overview */}
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1">
                        {selectedProject.industry}
                      </span>
                      <p className="text-gray-700 text-sm sm:text-base leading-[1.8] font-normal">
                        {selectedProject.description}
                      </p>
                    </div>

                    {/* Problem & Solution */}
                    <div className="space-y-3 sm:space-y-4">
                      <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-gray-100 shadow-[0_2px_12px_rgb(0,0,0,0.02)]">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-red-500 mb-1.5 sm:mb-2">
                          The Challenge & Problem
                        </h4>
                        <p className="text-gray-700 text-xs sm:text-sm leading-[1.8] font-normal">
                          {selectedProject.problem}
                        </p>
                      </div>

                      <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-gray-100 shadow-[0_2px_12px_rgb(0,0,0,0.02)]">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-1.5 sm:mb-2">
                          The Technical Solution
                        </h4>
                        <p className="text-gray-700 text-xs sm:text-sm leading-[1.8] font-normal">
                          {selectedProject.solution}
                        </p>
                      </div>
                    </div>

                    {/* Core Features */}
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black mb-3">
                        Key Technical Features & Architecture
                      </h4>
                      <div className="grid grid-cols-1 gap-2 sm:gap-2.5">
                        {selectedProject.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2.5 sm:gap-3 p-3 rounded-xl bg-gray-50/80 border border-gray-100"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="text-gray-800 text-xs sm:text-sm leading-relaxed font-medium">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technology Stack Tags */}
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black mb-2.5 sm:mb-3">
                        Technologies & Environment
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.metrics.map((m, i) => (
                          <div
                            key={i}
                            className="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 flex flex-col"
                          >
                            <span className="text-xs font-bold text-black">{m.value}</span>
                            <span className="text-[10px] text-gray-500">{m.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="px-4 sm:px-6 md:px-8 py-3 sm:py-3.5 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between shrink-0">
                  <span className="text-[11px] sm:text-xs text-gray-500">
                    Press <kbd className="px-1.5 sm:px-2 py-0.5 bg-white border border-gray-200 rounded text-[10px] font-semibold">ESC</kbd> to close
                  </span>
                  <button
                    onClick={() => {
                      setIsImageZoomed(false);
                      setSelectedProject(null);
                    }}
                    className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-gray-200 bg-white text-black font-semibold text-xs sm:text-sm hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* FULLSCREEN IMAGE ZOOM LIGHTBOX (Portaled to body) */}
      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {isImageZoomed && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl p-3 sm:p-6 md:p-8 cursor-zoom-out select-none"
              onClick={() => setIsImageZoomed(false)}
            >
              {/* Lightbox Header Bar */}
              <div 
                className="w-full max-w-6xl flex items-center justify-between py-2 sm:py-3 px-2 text-white shrink-0"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col min-w-0 pr-4">
                  <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">Full Resolution View</span>
                  <h4 className="text-sm sm:text-base font-bold text-white truncate">
                    {selectedProject.title}
                  </h4>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setIsImageZoomed(false)}
                    className="p-2 sm:px-4 sm:py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs sm:text-sm font-semibold"
                    aria-label="Close zoomed view"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="hidden sm:inline">Close</span>
                  </button>
                </div>
              </div>

              {/* Lightbox Zoomed Image Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-6xl flex-1 flex items-center justify-center p-2 min-h-0 overflow-hidden"
                onClick={() => setIsImageZoomed(false)}
              >
                <div className="relative w-full h-full max-h-[82vh] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-contain"
                    sizes="95vw"
                    priority
                  />
                </div>
              </motion.div>

              <div className="pt-2 text-center text-xs text-gray-400 shrink-0">
                Click anywhere or press <kbd className="px-2 py-0.5 bg-white/10 rounded text-[10px] text-gray-200">ESC</kbd> to exit zoom
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
