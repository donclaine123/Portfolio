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
    icon: <GraduationCap className="h-5 w-5" />,
    tags: ["Data Structures", "Network Arch", "Git Control", "Capstones"]
  },
  {
    type: "work",
    title: "Boots on the Ground",
    subtitle: "IT Support & Operations",
    location: "TTEC (UP Ayala Technohub)",
    date: "2025 (OJT)",
    description: "Bridged the gap between software integrations and bare-metal support. Managed the high-stakes deployment of 90+ enterprise workstations while enforcing strict data security protocols.",
    icon: <Laptop className="h-5 w-5" />,
    tags: ["SCCM Sequences", "KillDisk Protocols", "Hardware Support"]
  },
  {
    type: "development",
    title: "Building the Future",
    subtitle: "Full-Stack Development",
    location: "Software Project Ecosystems",
    date: "2025 — Present",
    description: "Transformed complex business logic into intuitive web interfaces. Specializing in architecting secure, real-time ecosystems using Node.js, Express, and PostgreSQL.",
    icon: <Code className="h-5 w-5" />,
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
    // Listen for custom slide changes from ScrollTrigger
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
    
    // Set initial dasharray and offset
    gsap.set(path, {
      strokeDasharray: totalLength,
      strokeDashoffset: totalLength
    });

    const ctx = gsap.context(() => {
      // 1. ScrollTrigger to trace the progress line and drive the car
      ScrollTrigger.create({
        trigger: ".experience-timeline-wrapper",
        start: "top 50%",
        end: "bottom 50%",
        scrub: 0.5,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const currentLength = progress * totalLength;
          
          // Animate the strokeDashoffset
          gsap.set(path, { strokeDashoffset: totalLength - currentLength });

          // Compute position and angle for the car
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
          const rotation = angle + 90; // Car SVG faces up (North)

          gsap.set(car, {
            left: `${pt.x}%`,
            top: `${(pt.y / 5000) * 100}%`,
            rotation: rotation,
            xPercent: -50,
            yPercent: -50
          });
        }
      });

      // 2. ScrollTriggers for individual viewports to reveal content & set active indices
      gsap.utils.toArray(".reveal-experience").forEach((slide: any, idx: number) => {
        const content = slide.querySelector(".slide-content");

        gsap.fromTo(content,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: slide,
              start: "top 65%",
              end: "bottom 35%",
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
    <section id="experience" className="relative bg-[#FAF8F5] overflow-hidden">
      <div className="relative experience-timeline-wrapper w-full">
        
        {/* Timeline visual track */}
        <div className="absolute top-0 bottom-0 left-4 w-16 md:left-1/2 md:-translate-x-1/2 md:w-[600px] z-20 pointer-events-none">
          {/* SVG Curved Path */}
          <svg 
            ref={svgRef} 
            viewBox="0 0 100 5000" 
            fill="none" 
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
          >
            {/* Background path */}
            <path 
              d="M 50 0 L 50 500 C 75 833, 75 1166, 50 1500 C 25 1833, 25 2166, 50 2500 C 75 2833, 75 3166, 50 3500 C 25 3833, 25 4166, 50 4500 L 50 5000" 
              stroke="#e6e1da" 
              strokeWidth="2" 
              strokeLinecap="round"
              fill="none"
            />
            {/* Active progress path */}
            <path 
              ref={pathRef}
              d="M 50 0 L 50 500 C 75 833, 75 1166, 50 1500 C 25 1833, 25 2166, 50 2500 C 75 2833, 75 3166, 50 3500 C 25 3833, 25 4166, 50 4500 L 50 5000" 
              stroke="#8c1d1d" 
              strokeWidth="3" 
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          {/* Car Element */}
          <div 
            ref={carRef}
            className="absolute w-6 h-10 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none transition-transform duration-100 ease-out"
            style={{ left: "50%", top: "0%" }}
          >
            <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="6" width="3" height="7" rx="1.5" fill="#1c1a17" />
              <rect x="19" y="6" width="3" height="7" rx="1.5" fill="#1c1a17" />
              <rect x="2" y="27" width="3" height="7" rx="1.5" fill="#1c1a17" />
              <rect x="19" y="27" width="3" height="7" rx="1.5" fill="#1c1a17" />
              <path d="M 6 4 C 6 2, 18 2, 18 4 L 19 12 C 20 18, 20 22, 19 36 C 19 38, 5 38, 5 36 L 5 12 C 4 22, 4 18, 5 12 Z" fill="#8c1d1d" />
              <path d="M 7 14 C 7 11, 17 11, 17 14 L 16 17 C 16 18, 8 18, 8 17 Z" fill="#FAF8F5" opacity="0.8" />
              <path d="M 8 28 C 8 29, 16 29, 16 28 L 15 31 C 15 32, 9 32, 9 31 Z" fill="#FAF8F5" opacity="0.6" />
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
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border font-bold text-[9px] md:text-[10px] uppercase transition-all duration-500 bg-[#FAF8F5] shadow-sm hover:border-burgundy-600 hover:scale-105 cursor-pointer ${
                  activeSlide === i 
                    ? "border-burgundy-700 bg-burgundy-700 text-[#FAF8F5] scale-110 shadow-burgundy-700/20" 
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
          className="min-h-screen md:h-screen w-full flex items-center px-6 md:px-24 relative reveal-experience border-b border-sand-200/40"
        >
          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="slide-content py-20 md:py-0 flex flex-col justify-center md:col-start-1 md:text-right md:items-end md:pr-16 md:pl-0 pl-16 pr-4">
              <div className="flex items-center gap-2 mb-6 md:flex-row-reverse">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-burgundy-700 flex items-center gap-1.5 md:flex-row-reverse">
                  <span className="w-1.5 h-1.5 rounded-full bg-burgundy-700" />
                  THE PATH
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black text-stone-900 leading-none tracking-tight">
                Experience Map
              </h2>
              <p className="text-stone-500 mt-8 text-sm md:text-lg font-medium leading-relaxed max-w-xl">
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
              className="min-h-screen md:h-screen w-full flex items-center px-6 md:px-24 relative reveal-experience border-b border-sand-200/40"
            >
              <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                <div 
                  className={`slide-content py-10 md:py-0 flex flex-col justify-center ${
                    isLeft 
                      ? "md:col-start-1 md:text-right md:items-end md:pr-16 md:pl-0 pl-16 pr-4" 
                      : "md:col-start-2 md:text-left md:items-start md:pl-16 md:pr-0 pl-16 pr-4"
                  }`}
                >
                  {/* Event Date Block */}
                  <div className={`flex flex-col mb-6 ${isLeft ? "md:items-end" : "md:items-start"}`}>
                    <span className={`text-[10px] font-bold uppercase tracking-[0.25em] text-burgundy-700 flex items-center gap-2 mb-1.5 ${
                      isLeft ? "md:flex-row-reverse" : "md:flex-row"
                    }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-burgundy-700" />
                      {event.date}
                    </span>
                    <span className="text-xs md:text-sm text-stone-400 font-bold uppercase tracking-wider">
                      {event.subtitle} • {event.location}
                    </span>
                  </div>

                  {/* Event Core details */}
                  <div className={`flex items-center gap-3.5 mb-6 ${
                    isLeft ? "md:flex-row-reverse" : "md:flex-row"
                  }`}>
                    <div className="w-10 h-10 rounded-xl bg-burgundy-50 border border-burgundy-100 flex items-center justify-center text-burgundy-700 shadow-sm flex-shrink-0">
                      {event.icon}
                    </div>
                    <h3 className="text-2xl md:text-4xl font-serif font-black text-stone-900 leading-tight">
                      {event.title}
                    </h3>
                  </div>
                  
                  <p className="text-stone-650 text-sm md:text-lg leading-relaxed mb-8 max-w-xl font-medium">
                    {event.description}
                  </p>

                  <div className={`flex flex-wrap gap-2.5 ${isLeft ? "md:justify-end" : "md:justify-start"}`}>
                    {event.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="inline-flex items-center text-[9px] font-bold uppercase tracking-widest px-4 py-2 rounded-full bg-white border border-sand-200 text-stone-500 hover:border-burgundy-700/20 transition-colors shadow-sm"
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
          className="min-h-screen md:h-screen w-full flex items-center px-6 md:px-24 relative reveal-experience"
        >
          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="slide-content py-20 md:py-0 flex flex-col justify-center md:col-start-1 md:text-right md:items-end md:pr-16 md:pl-0 pl-16 pr-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-burgundy-700 mb-6 block">
                THE NEXT STAGE
              </span>
              <h3 className="text-3xl md:text-5xl font-serif font-black text-stone-900 mb-8 leading-tight">
                See these in action
              </h3>
              <p className="text-stone-500 mb-10 text-sm md:text-lg font-medium leading-relaxed max-w-xl">
                Now that you've explored my academic foundations and hands-on systems operations, take a look at the live software platforms I've built.
              </p>
              
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-burgundy-700 hover:bg-burgundy-600 text-[#FAF8F5] rounded-full font-bold text-xs uppercase tracking-wider shadow-sm transition-colors duration-200 cursor-pointer"
              >
                Explore Projects <ArrowRight className="h-4 w-4" />
              </motion.a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
