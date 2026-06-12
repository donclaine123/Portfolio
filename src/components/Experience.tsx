"use client";

import React, { useEffect, useState, useRef } from "react";
import { Laptop, Code, GraduationCap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const journeyEvents = [
  {
    type: "education",
    title: "The Foundation",
    subtitle: "B.S. Computer Science",
    location: "St. Clare College",
    date: "2022 — 2026",
    description: "Mastered the fundamentals of data structures, database relationships, network architecture, and collaborative system design that inform every project I build today.",
    icon: <GraduationCap className="h-6 w-6" />,
    tags: ["Data Structures", "Network Arch", "Git Control", "Capstones"]
  },
  {
    type: "work",
    title: "Boots on the Ground",
    subtitle: "IT Support & Operations",
    location: "TTEC (UP Ayala Technohub)",
    date: "2025 (OJT)",
    description: "Bridged the gap between software integrations and bare-metal support. Managed the high-stakes deployment of 90+ enterprise workstations while enforcing strict data security protocols.",
    icon: <Laptop className="h-6 w-6" />,
    tags: ["SCCM Sequences", "KillDisk Protocols", "Hardware Support"]
  },
  {
    type: "development",
    title: "Building the Future",
    subtitle: "Full-Stack Development",
    location: "Software Project Ecosystems",
    date: "2025 — Present",
    description: "Transformed complex business logic into intuitive web interfaces. Specializing in architecting secure, real-time ecosystems using Node.js, Express, and PostgreSQL.",
    icon: <Code className="h-6 w-6" />,
    tags: ["Node.js APIs", "Socket.IO Sync", "PostgreSQL", "RBAC Auth"]
  }
];

export default function Experience() {
  const [activeSlide, setActiveSlide] = useState(0);
  const pathRef = useRef<SVGPathElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const nodes = [
    { label: "Start", pct: 10 },
    { label: "2022", pct: 30 },
    { label: "2025", pct: 50 },
    { label: "2026", pct: 70 },
    { label: "End", pct: 90 }
  ];

  useEffect(() => {
    const handleSlideChange = (e: Event) => {
      const idx = (e as CustomEvent).detail;
      setActiveSlide(idx);
    };
    window.addEventListener("experience-slide-change", handleSlideChange);
    return () => window.removeEventListener("experience-slide-change", handleSlideChange);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const path = pathRef.current;
    const car = carRef.current;
    const svg = svgRef.current;
    if (!path || !car || !svg) return;

    const totalLength = path.getTotalLength();
    
    gsap.set(path, {
      strokeDasharray: totalLength,
      strokeDashoffset: totalLength
    });

    const ctx = gsap.context(() => {
      // 1. ScrollTrigger to trace the progress line and drive the car
      ScrollTrigger.create({
        trigger: ".experience-timeline-wrapper",
        start: "top 40%",
        end: "bottom 60%",
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const currentLength = progress * totalLength;
          
          gsap.set(path, { strokeDashoffset: totalLength - currentLength });

          const pt = path.getPointAtLength(currentLength);
          const delta = 1;
          const d1 = Math.max(0, currentLength - delta);
          const d2 = Math.min(totalLength, currentLength + delta);
          const pt1 = path.getPointAtLength(d1);
          const pt2 = path.getPointAtLength(d2);

          const rect = svg.getBoundingClientRect();
          const p1_x = (pt1.x / 100) * rect.width;
          const p1_y = (pt1.y / 5000) * rect.height;
          const p2_x = (pt2.x / 100) * rect.width;
          const p2_y = (pt2.y / 5000) * rect.height;

          const angle = Math.atan2(p2_y - p1_y, p2_x - p1_x) * 180 / Math.PI;
          const rotation = angle + 90;

          gsap.to(car, {
            left: `${pt.x}%`,
            top: `${(pt.y / 5000) * 100}%`,
            rotation: rotation,
            xPercent: -50,
            yPercent: -50,
            duration: 0.1,
            ease: "none"
          });
        }
      });

      // 2. ScrollTriggers for individual viewports to reveal content
      gsap.utils.toArray(".reveal-experience").forEach((slide: any, idx: number) => {
        const content = slide.querySelector(".slide-content");

        gsap.fromTo(content,
          { opacity: 0, scale: 0.95, y: 50 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: slide,
              start: "top 70%",
              end: "bottom 30%",
              toggleActions: "play reverse play reverse",
              invalidateOnRefresh: true,
              onToggle: (self) => {
                if (self.isActive) {
                  window.dispatchEvent(
                    new CustomEvent("experience-slide-change", { detail: idx })
                  );
                }
              }
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="relative bg-[#FAF8F5] overflow-hidden pt-32 pb-32">
      <div className="relative experience-timeline-wrapper w-full max-w-[1600px] mx-auto">
        
        {/* Timeline visual track */}
        <div className="absolute top-0 bottom-0 left-4 w-16 md:left-1/2 md:-translate-x-1/2 md:w-[800px] z-20 pointer-events-none">
          <svg 
            ref={svgRef} 
            viewBox="0 0 100 5000" 
            fill="none" 
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <path 
              d="M 50 0 L 50 500 C 85 833, 85 1166, 50 1500 C 15 1833, 15 2166, 50 2500 C 85 2833, 85 3166, 50 3500 C 15 3833, 15 4166, 50 4500 L 50 5000" 
              stroke="#e6e1da" 
              strokeWidth="1" 
              strokeLinecap="round"
              fill="none"
              strokeDasharray="4 8"
            />
            <path 
              ref={pathRef}
              d="M 50 0 L 50 500 C 85 833, 85 1166, 50 1500 C 15 1833, 15 2166, 50 2500 C 85 2833, 85 3166, 50 3500 C 15 3833, 15 4166, 50 4500 L 50 5000" 
              stroke="#8c1d1d" 
              strokeWidth="4" 
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          {/* Car Element (Polished) */}
          <div 
            ref={carRef}
            className="absolute w-8 h-12 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none filter drop-shadow-xl"
            style={{ left: "50%", top: "0%" }}
          >
            <svg width="32" height="48" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="6" width="3" height="7" rx="1.5" fill="#1c1a17" />
              <rect x="19" y="6" width="3" height="7" rx="1.5" fill="#1c1a17" />
              <rect x="2" y="27" width="3" height="7" rx="1.5" fill="#1c1a17" />
              <rect x="19" y="27" width="3" height="7" rx="1.5" fill="#1c1a17" />
              <path d="M 6 4 C 6 2, 18 2, 18 4 L 19 12 C 20 18, 20 22, 19 36 C 19 38, 5 38, 5 36 L 5 12 C 4 22, 4 18, 5 12 Z" fill="#8c1d1d" />
              <path d="M 7 14 C 7 11, 17 11, 17 14 L 16 17 C 16 18, 8 18, 8 17 Z" fill="#FAF8F5" opacity="0.9" />
              <path d="M 8 28 C 8 29, 16 29, 16 28 L 15 31 C 15 32, 9 32, 9 31 Z" fill="#FAF8F5" opacity="0.8" />
              <rect x="7" y="3" width="2" height="1.5" rx="0.5" fill="#fdfdfc" />
              <rect x="15" y="3" width="2" height="1.5" rx="0.5" fill="#fdfdfc" />
            </svg>
          </div>

          {/* Node Points */}
          {nodes.map((node, i) => (
            <a
              key={i}
              href={`#experience-slide-${i}`}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto flex items-center justify-center"
              style={{ left: "50%", top: `${node.pct}%` }}
              aria-label={`Scroll to slide ${i}`}
            >
              <div 
                className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center border font-bold text-[10px] md:text-[11px] uppercase transition-all duration-700 bg-[#FAF8F5] shadow-lg hover:border-burgundy-600 hover:scale-110 cursor-pointer ${
                  activeSlide === i 
                    ? "border-burgundy-700 bg-burgundy-700 text-[#FAF8F5] scale-125 shadow-burgundy-700/30" 
                    : "border-sand-300 text-stone-400"
                }`}
              >
                {node.label}
              </div>
            </a>
          ))}
        </div>

        {/* Viewport 1: Intro */}
        <div 
          id="experience-slide-0" 
          className="min-h-screen md:h-screen w-full flex items-center px-6 lg:px-24 relative reveal-experience"
        >
          <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="slide-content py-20 md:py-0 flex flex-col justify-center md:col-start-1 md:text-right md:items-end md:pr-16 md:pl-0 pl-16 pr-4">
              <div className="flex items-center gap-2 mb-8 md:flex-row-reverse">
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-burgundy-700 flex items-center gap-2 md:flex-row-reverse">
                  <span className="w-2 h-2 rounded-full bg-burgundy-700" />
                  THE PATH
                </span>
              </div>
              <h2 className="text-[12vw] md:text-[8vw] lg:text-[7vw] font-serif font-black text-stone-900 leading-[0.85] tracking-tighter mb-8">
                Experience<br/><span className="text-burgundy-700 italic font-normal">Map</span>.
              </h2>
              <p className="text-stone-500 mt-2 text-base md:text-xl font-medium leading-[1.8] max-w-lg">
                A timeline of my academic grounding, technical support operations training, and full-stack software development focus.
              </p>
            </div>
          </div>
        </div>

        {/* Viewports 2, 3, 4: Events */}
        {journeyEvents.map((event, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div 
              key={index} 
              id={`experience-slide-${index + 1}`}
              className="min-h-screen md:h-screen w-full flex items-center px-6 lg:px-24 relative reveal-experience"
            >
              <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                <div 
                  className={`slide-content bg-white/50 backdrop-blur-sm border border-white/80 p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-sand-200/50 flex flex-col justify-center ${
                    isLeft 
                      ? "md:col-start-1 md:text-right md:items-end md:mr-16 ml-16 md:ml-0" 
                      : "md:col-start-2 md:text-left md:items-start md:ml-16 mr-16 md:mr-0"
                  }`}
                >
                  <div className={`flex flex-col mb-8 ${isLeft ? "md:items-end" : "md:items-start"}`}>
                    <span className={`text-[11px] font-bold uppercase tracking-[0.3em] text-burgundy-700 flex items-center gap-2 mb-3 ${
                      isLeft ? "md:flex-row-reverse" : "md:flex-row"
                    }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-burgundy-700" />
                      {event.date}
                    </span>
                    <span className="text-xs md:text-sm text-stone-400 font-bold uppercase tracking-[0.2em]">
                      {event.subtitle} <br className="md:hidden" /> <span className="hidden md:inline">•</span> {event.location}
                    </span>
                  </div>

                  <div className={`flex items-center gap-5 mb-8 ${
                    isLeft ? "md:flex-row-reverse" : "md:flex-row"
                  }`}>
                    <div className="w-14 h-14 rounded-2xl bg-burgundy-50 border border-burgundy-100 flex items-center justify-center text-burgundy-700 shadow-sm flex-shrink-0">
                      {event.icon}
                    </div>
                    <h3 className="text-3xl md:text-5xl font-serif font-black text-stone-900 leading-[0.9] tracking-tight">
                      {event.title}
                    </h3>
                  </div>
                  
                  <p className="text-stone-600 text-base md:text-lg leading-[1.8] mb-10 max-w-xl font-medium">
                    {event.description}
                  </p>

                  <div className={`flex flex-wrap gap-3 ${isLeft ? "md:justify-end" : "md:justify-start"}`}>
                    {event.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full bg-white border border-sand-200 text-stone-600 shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Viewport 5: CTA Redirect */}
        <div 
          id="experience-slide-4" 
          className="min-h-screen md:h-screen w-full flex items-center px-6 lg:px-24 relative reveal-experience"
        >
          <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="slide-content py-20 md:py-0 flex flex-col justify-center md:col-start-1 md:text-right md:items-end md:pr-16 md:pl-0 pl-16 pr-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-burgundy-700 mb-8 block">
                THE NEXT STAGE
              </span>
              <h3 className="text-[10vw] md:text-[6vw] font-serif font-black text-stone-900 mb-10 leading-[0.85] tracking-tighter">
                See these<br/><span className="text-burgundy-700 italic font-normal">in action</span>.
              </h3>
              <p className="text-stone-500 mb-12 text-base md:text-xl font-medium leading-[1.8] max-w-lg">
                Now that you've explored my academic foundations and hands-on systems operations, take a look at the live software platforms I've built.
              </p>
              
              <a
                href="#projects"
                className="inline-flex items-center gap-3 px-10 py-5 bg-burgundy-700 hover:bg-burgundy-800 text-[#FAF8F5] rounded-full font-bold text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-burgundy-700/20 transition-all duration-300 hover:-translate-y-1"
              >
                Explore Projects <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
