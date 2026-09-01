"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Metric {
  label: string;
  value: string;
}

interface CaseStudy {
  title: string;
  role: string;
  company: string;
  timeline: string;
  industry: string;
  description: string;
  image: string;
  metrics: Metric[];
  status: "available" | "coming-soon";
  detailsLink?: string;
}

export default function Projects() {
  const caseStudies: CaseStudy[] = [
    {
      title: "QR Code Attendance & Monitoring System",
      role: "Full Stack Developer",
      company: "Thesis Project",
      timeline: "2025 - 2026",
      industry: "Real-time Monitoring",
      description: "Faculty attendance tracking was a manual, paper-based bottleneck. I engineered a real-time QR Code ecosystem that transformed the workflow into a secure, instant monitoring system.",
      image: "/Portfolio/facultyattendance.png",
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
      title: "Student Attendance System",
      role: "Full Stack Developer",
      company: "Personal Project",
      timeline: "2024 - 2025",
      industry: "Web Application",
      description: "Developed 'EazyAttend'—a full-stack web application designed to automate presence verification via a scan. Constructed a robust security layer implementing encrypted session-based authentication.",
      image: "/Portfolio/studentattendance.png",
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-black tracking-tight">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
          {caseStudies.map((cs, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col group cursor-pointer"
              onClick={() => cs.detailsLink && window.open(cs.detailsLink, "_blank")}
            >
              {/* Project Preview Image */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-2xl sm:rounded-[2rem] mb-5 sm:mb-6 overflow-hidden bg-gray-50 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] group-hover:shadow-[0_12px_30px_rgb(0,0,0,0.08)] transition-all duration-500">
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Metadata */}
              <div className="flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block">
                    {cs.industry}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-400 group-hover:text-black transition-colors">
                    View Project <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black tracking-tight mb-3 sm:mb-4 group-hover:text-gray-600 transition-colors">
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
    </section>
  );
}
