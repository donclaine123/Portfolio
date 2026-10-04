"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, Database, ArrowUpRight, Cpu } from "lucide-react";

export default function Experience() {
  const services = [
    {
      id: "01",
      title: "Full Stack Web Development",
      description: "Building end-to-end, high-performance web applications with responsive user interfaces, clean component architecture, and modern frameworks like Next.js, React, and TypeScript.",
      deliverables: [
        { label: "Performance", spec: "Sub-second LCP & Lighthouse 95+" },
        { label: "Architecture", spec: "Strict TypeScript end-to-end contracts" },
        { label: "Experience", spec: "Zero CLS, responsive mobile-first UI" }
      ],
      tags: ["React / Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"]
    },
    {
      id: "02",
      title: "Backend & API Engineering",
      description: "Designing secure, scalable RESTful APIs, handling complex server-side business logic, and implementing robust authentication protocols (JWT / RBAC) using Node.js and Express.",
      deliverables: [
        { label: "API Latency", spec: "Sub-100ms response with caching" },
        { label: "Security", spec: "JWT cookie rotation & RBAC guards" },
        { label: "Resilience", spec: "Structured error handling & rate limits" }
      ],
      tags: ["Node.js", "Express.js", "RESTful APIs", "JWT / RBAC Auth"]
    },
    {
      id: "03",
      title: "Database & Real-Time Architecture",
      description: "Architecting structured relational database schemas with PostgreSQL and MySQL, paired with event-driven, low-latency real-time communication powered by Socket.IO and WebSockets.",
      deliverables: [
        { label: "Database", spec: "ACID transactions & indexed schemas" },
        { label: "Real-Time", spec: "Low-latency WebSocket / Socket.IO rooms" },
        { label: "Reliability", spec: "Connection pooling & schema migrations" }
      ],
      tags: ["Socket.IO", "PostgreSQL", "MySQL", "WebSockets"]
    }
  ];

  return (
    <section id="experience" className="py-20 sm:py-28 relative bg-white dark:bg-[#0E1118] overflow-hidden transition-colors duration-500">
      {/* Giant Editorial Backdrop Watermark matching Hero layout */}
      <div 
        aria-hidden="true" 
        className="absolute inset-x-0 top-8 sm:top-12 flex justify-center pointer-events-none select-none z-0 overflow-hidden"
      >
        <span className="text-[13vw] font-sans font-black uppercase tracking-tighter bg-gradient-to-b from-zinc-950/[0.12] via-zinc-950/[0.04] to-transparent dark:from-white/[0.14] dark:via-white/[0.05] dark:to-transparent bg-clip-text text-transparent leading-none whitespace-nowrap select-none">
          CAPABILITIES
        </span>
      </div>

      <div className="relative z-10 max-w-[1040px] mx-auto px-4 sm:px-6">
        {/* Section Heading with Cursive Accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-20"
        >
          {/* Cursive Accent matching Hero */}
          <div className="font-[family-name:var(--font-caveat)] text-2xl sm:text-3xl font-bold text-[#B83824] dark:text-[#FF5A36] mb-1 origin-bottom-left -rotate-2 inline-block">
            architectural standards & delivery
          </div>
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#B83824] dark:text-[#FF5A36] block mb-2">
            02 // CORE SERVICES & ARCHITECTURES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-black dark:text-white tracking-tight">
            Engineering Competencies
          </h2>
        </motion.div>

        {/* Competency Rows */}
        <div className="flex flex-col gap-12 sm:gap-16 md:gap-20">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-start border-b border-zinc-200/80 dark:border-zinc-800 pb-12 sm:pb-16 last:border-0 last:pb-0 transition-colors duration-300"
            >
              {/* Left Column: Number & Title */}
              <div className="w-full md:w-1/3">
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-black text-zinc-200 dark:text-zinc-800 group-hover:text-[#B83824]/40 dark:group-hover:text-[#FF5A36]/40 leading-none tracking-tighter mb-2 sm:mb-4 select-none transition-colors duration-500">
                  {service.id}
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                  {service.title}
                </h3>
              </div>

              {/* Right Column: Description, Deliverable Standards & Frosted Pills */}
              <div className="w-full md:w-2/3 md:pt-4 lg:pt-6">
                <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base md:text-lg leading-[1.85] font-medium mb-6 sm:mb-7">
                  {service.description}
                </p>

                {/* Tangible Engineering Deliverables Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-6 sm:mb-7">
                  {service.deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-3 sm:p-3.5 rounded-xl bg-zinc-50/80 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/80 group-hover:border-[#B83824]/30 dark:group-hover:border-[#FF5A36]/30 transition-all shadow-xs"
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B83824] dark:text-[#FF5A36] shrink-0" />
                        <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-950 dark:text-zinc-200">
                          {item.label}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
                        {item.spec}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Hero-Style Frosted Glass Pill Tags */}
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-900/10 dark:border-white/15 text-zinc-800 dark:text-zinc-200 text-xs sm:text-sm font-semibold shadow-xs hover:border-[#B83824]/60 dark:hover:border-[#FF5A36]/60 hover:text-[#B83824] dark:hover:text-[#FF5A36] hover:-translate-y-0.5 transition-all select-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
