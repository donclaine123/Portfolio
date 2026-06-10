"use client";

import React, { useEffect } from "react";
import { Lock, ExternalLink, Code2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  metrics: Metric[];
  status: "available" | "coming-soon";
  detailsLink?: string;
  color: string;
}

export default function Projects() {
  const caseStudies: CaseStudy[] = [
    {
      title: "QR Code Attendance & Monitoring System for Faculty Members 📋",
      role: "Full Stack Developer",
      company: "Thesis Project",
      timeline: "2025 - 2026",
      industry: "Real-time Monitoring & Infrastructure",
      description: "Faculty attendance tracking was a manual, paper-based bottleneck. I engineered a real-time QR Code ecosystem that transformed the workflow into a secure, instant monitoring system. Beyond just coding, I orchestrated the local infrastructure using Nginx reverse proxies to ensure seamless cross-device synchronization in a production-like school environment.",
      status: "available",
      detailsLink: "https://employeeattendance.me",
      color: "burgundy",
      metrics: [
        { value: "Node.js", label: "Backend Environment" },
        { value: "Socket.IO", label: "Real-Time Updates" },
        { value: "Nginx", label: "Reverse Proxy Server" },
        { value: "PostgreSQL", label: "Database Engine" }
      ]
    },
    {
      title: "Student Attendance System using QR codes 🎓",
      role: "Full Stack Developer",
      company: "Personal Project",
      timeline: "2024 - 2025",
      industry: "Automated Workflow Solutions",
      description: "Developed 'EazyAttend'—a full-stack web application designed to automate presence verification via a scan. I constructed a robust security layer implementing encrypted session-based authentication and email verification workflows to ensure data integrity.",
      status: "available",
      detailsLink: "https://eazyattend.netlify.app/",
      color: "burgundy",
      metrics: [
        { value: "Express", label: "Routing Framework" },
        { value: "MySQL", label: "Database Engine" },
        { value: "Netlify", label: "Frontend Host" },
        { value: "Render", label: "Backend Service Host" }
      ]
    }
  ];

  useEffect(() => {
    const track = document.querySelector(".projects-track");
    if (!track) return;

    const getScrollAmount = () => {
      return track.scrollWidth - window.innerWidth;
    };

    const ctx = gsap.context(() => {
      // Horizontal Scroll Animation
      const scrollTween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: "#projects",
          pin: true,
          scrub: 1.2,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          invalidateOnRefresh: true,
        },
      });

      // Horizontal Card Zoom Reveals
      gsap.utils.toArray(".project-card-wrapper").forEach((card: any) => {
        const dashboard = card.querySelector(".project-metrics-dashboard");
        if (dashboard) {
          gsap.from(dashboard, {
            scale: 0.85,
            rotationY: -10,
            opacity: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              containerAnimation: scrollTween,
              start: "left 85%",
              end: "left 45%",
              scrub: true,
            }
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="projects" 
      className="relative h-screen bg-[#FAF8F5] border-t border-sand-200 overflow-hidden flex items-center"
    >
      <div className="projects-track flex flex-row items-center gap-12 px-12 md:px-24 w-max">
        
        {/* Section Header Card (First slide in track) */}
        <div className="w-[80vw] md:w-[40vw] lg:w-[32vw] flex-shrink-0 pr-8 md:pr-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-burgundy-700 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-burgundy-700" />
              PROJECTS
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-black text-stone-900 leading-tight">
            Selected Works
          </h2>
          <p className="text-stone-500 mt-6 text-sm font-medium leading-relaxed">
            Developing structured, production-ready web platforms with a focus on clean database schemas and robust API architectures.
          </p>
        </div>

        {/* Project Cards */}
        {caseStudies.map((cs, idx) => (
          <div key={idx} className="project-card-wrapper w-[85vw] md:w-[75vw] lg:w-[65vw] flex-shrink-0">
            <ProjectCard cs={cs} />
          </div>
        ))}

      </div>
    </section>
  );
}

function ProjectCard({ cs }: { cs: CaseStudy }) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(e.currentTarget, {
      rotateY: (x / rect.width - 0.5) * 10,
      rotateX: -(y / rect.height - 0.5) * 10,
      transformPerspective: 1000,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-white border border-sand-200 rounded-3xl p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row justify-between gap-6 lg:gap-10 hover:border-burgundy-700/20 transition-[border-color,box-shadow] duration-300 group relative shadow-sm w-full"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Left Column: Description & Metadata */}
      <div className="flex-1 flex flex-col justify-between relative z-10">
        <div>
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[9px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-4 lg:mb-6">
            <span className="flex items-center gap-1.5 text-burgundy-750">
              <Code2 className="h-3.5 w-3.5" /> {cs.company}
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>{cs.timeline}</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span className="text-burgundy-700">{cs.industry}</span>
          </div>

          {/* Title & Role */}
          <h3 className="text-lg md:text-xl lg:text-3xl font-serif font-black text-stone-900 mb-3 lg:mb-4 leading-tight group-hover:text-burgundy-700 transition-colors">
            {cs.title}
          </h3>
          
          <div className="inline-flex items-center gap-2 text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-stone-750 mb-4 lg:mb-8 px-4 py-1.5 bg-stone-50 border border-sand-200 rounded-full">
            ROLE: {cs.role}
          </div>

          {/* Description */}
          <p className="text-stone-550 text-xs md:text-sm lg:text-base leading-relaxed mb-6 lg:mb-10 max-w-2xl font-medium">
            {cs.description}
          </p>
        </div>

        {/* Call to action */}
        <div className="mt-auto mb-6 lg:mb-0">
          {cs.detailsLink && cs.detailsLink !== "#" ? (
            <a
              href={cs.detailsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-burgundy-700 hover:text-burgundy-600 transition-colors group cursor-pointer"
            >
              View Live Project
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-400 cursor-default">
              <Lock className="h-4 w-4" />
              IT Operations OJT Project
            </span>
          )}
        </div>
      </div>

      {/* Right Column: Outcomes Metric Dashboard */}
      <div 
        className="project-metrics-dashboard w-full lg:w-[320px] flex flex-col justify-center bg-[#FAF8F5] border border-sand-200 rounded-2xl p-5 lg:p-8 relative z-10 shadow-sm transition-all duration-300"
      >
        <div className="flex items-center gap-2 mb-4 lg:mb-8 border-b border-sand-200 pb-3 lg:pb-4">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-burgundy-700">
            TECHNICAL LAYERS
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-1 gap-4 lg:gap-6">
          {cs.metrics.map((m, mIdx) => (
            <div key={mIdx} className="flex flex-col border-b border-sand-200/60 lg:border-b last:border-b-0 lg:last:border-b-0 pb-2 lg:pb-4 last:pb-0 lg:last:pb-0">
              <span className="text-sm md:text-base lg:text-lg font-serif font-black text-stone-900 leading-none">
                {m.value}
              </span>
              <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-stone-400 mt-0.5 lg:mt-1">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
