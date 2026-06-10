"use client";

import React, { useEffect, useState } from "react";
import { 
  BookOpen, 
  Search, 
  Users, 
  Target, 
  Globe,
  Zap,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const [activeSlide, setActiveSlide] = useState(0);

  const values = [
    {
      title: "Continuous Learning",
      desc: "Technology evolves quickly, and I believe growth comes from staying curious and always being willing to learn.",
      icon: <BookOpen className="h-4 w-4" />
    },
    {
      title: "Problem Solving",
      desc: "I enjoy analyzing problems and finding practical, efficient solutions through technology.",
      icon: <Search className="h-4 w-4" />
    },
    {
      title: "Team Collaboration",
      desc: "Good communication and teamwork create better results and stronger projects.",
      icon: <Users className="h-4 w-4" />
    },
    {
      title: "Growth Through Challenges",
      desc: "Mistakes and challenges are part of the process — they’re opportunities to improve.",
      icon: <Target className="h-4 w-4" />
    }
  ];

  const skills = [
    "Web Development", "Software Engineering", "Database Management", 
    "Networking Support", "UI/UX Fundamentals", "System Operations"
  ];

  const chapters = [
    { label: "Biography", id: "about-slide-0" },
    { label: "Origins", id: "about-slide-1" },
    { label: "Approach", id: "about-slide-2" },
    { label: "Expertise", id: "about-slide-3" },
    { label: "Practice", id: "about-slide-4" },
    { label: "Values", id: "about-slide-5" },
    { label: "What's Next", id: "about-slide-6" }
  ];

  useEffect(() => {
    // Listen for custom slide changes from ScrollTrigger
    const handleSlideChange = (e: Event) => {
      const idx = (e as CustomEvent).detail;
      setActiveSlide(idx);
    };
    window.addEventListener("about-slide-change", handleSlideChange);
    return () => window.removeEventListener("about-slide-change", handleSlideChange);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate each slide's content on entry/exit
      gsap.utils.toArray(".reveal-slide").forEach((slide: any, idx: number) => {
        const content = slide.querySelector(".slide-content");
        if (!content) return;

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
                  // Dispatch custom event to update index dots safely
                  window.dispatchEvent(
                    new CustomEvent("about-slide-change", { detail: idx })
                  );
                }
              }
            }
          }
        );
      });

      // Fade in/out the index tracker dots based on About section scroll
      gsap.fromTo(".about-dots-container",
        { opacity: 0, pointerEvents: "none" },
        {
          opacity: 1,
          pointerEvents: "auto",
          duration: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#about",
            start: "top 50%",    // Fade in when top of About section is in the middle of viewport
            end: "bottom 50%",  // Fade out when bottom of About section is in the middle of viewport
            toggleActions: "play reverse play reverse",
            invalidateOnRefresh: true,
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="relative bg-[#FAF8F5]">
      
      {/* Floating Vertical Index Tracker Dots - locked to the About section heights */}
      <div className="absolute top-0 bottom-0 right-4 md:right-10 pointer-events-none w-10 z-40 hidden sm:block about-dots-container opacity-0">
        <div className="sticky top-1/2 -translate-y-1/2 pointer-events-auto flex flex-col gap-4.5 items-center bg-white/70 backdrop-blur-md px-3.5 py-7 rounded-full border border-sand-200/80 shadow-sm">
          {chapters.map((ch, idx) => (
            <a
              key={idx}
              href={`#${ch.id}`}
              className="group relative flex items-center justify-center cursor-pointer h-4 w-4"
              aria-label={`Scroll to ${ch.label}`}
            >
              <span className="absolute right-7 opacity-0 group-hover:opacity-100 bg-stone-900 text-[#FAF8F5] text-[9px] font-bold uppercase tracking-widest px-2.5 py-1.5 rounded border border-stone-850 shadow-sm transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                {ch.label}
              </span>
              <span 
                className={`rounded-full transition-all duration-300 ${
                  activeSlide === idx 
                    ? "w-2.5 h-2.5 bg-burgundy-700 shadow-sm" 
                    : "w-1.5 h-1.5 bg-sand-300 group-hover:bg-burgundy-600 group-hover:scale-125"
                }`}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Viewport 1: Hello Intro */}
      <div 
        id="about-slide-0" 
        className="min-h-screen md:h-screen w-full flex items-center justify-center px-6 relative reveal-slide border-b border-sand-200/50"
      >
        <div className="max-w-4xl w-full slide-content flex flex-col justify-center py-20 md:py-0">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-burgundy-700 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-burgundy-700" />
              BIOGRAPHY
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-stone-900 leading-none tracking-tight">
            Hey there, <br />
            I’m <span className="text-burgundy-700 italic font-normal">Mark Alexis Batis</span>
          </h2>
          <p className="text-lg md:text-2xl text-stone-600 mt-8 max-w-3xl leading-relaxed font-medium">
            I’m a fresh Computer Science graduate with a passion for software development, technical problem-solving, and building robust, user-focused digital systems.
          </p>
        </div>
      </div>

      {/* Viewport 2: Origins */}
      <div 
        id="about-slide-1" 
        className="min-h-screen md:h-screen w-full flex items-center justify-center px-6 relative reveal-slide border-b border-sand-200/50"
      >
        <div className="max-w-4xl w-full slide-content flex flex-col justify-center py-20 md:py-0">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-burgundy-700 mb-6 block">
            01 // THE BEGINNING
          </span>
          <h3 className="text-3xl md:text-5xl font-serif font-black text-stone-900 mb-8 leading-tight">
            Discovering Technology
          </h3>
          <div className="text-stone-600 space-y-6 text-sm md:text-lg leading-relaxed max-w-3xl font-medium">
            <p>
              Growing up, I was always curious about how technology worked. Whether it was exploring computers, troubleshooting problems, or discovering new software, I enjoyed figuring things out and learning how systems connected behind the scenes.
            </p>
            <p>
              That curiosity eventually led me to pursue a degree in Computer Science, where I developed a strong foundation in programming, systems, databases, networking, and software development.
            </p>
          </div>
        </div>
      </div>

      {/* Viewport 3: The Approach */}
      <div 
        id="about-slide-2" 
        className="min-h-screen md:h-screen w-full flex items-center justify-center px-6 relative reveal-slide border-b border-sand-200/50"
      >
        <div className="max-w-4xl w-full slide-content flex flex-col justify-center py-20 md:py-0">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-burgundy-700 mb-6 block">
            02 // THE APPROACH
          </span>
          <h3 className="text-3xl md:text-5xl font-serif font-black text-stone-900 mb-8 leading-tight">
            Building Solutions
          </h3>
          <div className="text-stone-600 space-y-8 text-sm md:text-lg leading-relaxed max-w-3xl font-medium">
            <p>
              During my college years, I realized that programming was more than just writing code — it was about creating structured solutions that resolve actual workflow bottlenecks.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {[
                { text: "Logistics under pressure", icon: <Zap className="h-4 w-4" /> },
                { text: "Logical Architecture", icon: <Sparkles className="h-4 w-4" /> },
                { text: "Iterative Refinement", icon: <CheckCircle2 className="h-4 w-4" /> }
              ].map((item, i) => (
                <div 
                  key={i}
                  className="p-5 rounded-2xl bg-white border border-sand-200 flex flex-col items-start gap-4 transition-all hover:border-burgundy-700/30"
                >
                  <div className="text-burgundy-700">
                    {item.icon}
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-stone-850">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Viewport 4: Expertise */}
      <div 
        id="about-slide-3" 
        className="min-h-screen md:h-screen w-full flex items-center justify-center px-6 relative reveal-slide border-b border-sand-200/50"
      >
        <div className="max-w-4xl w-full slide-content flex flex-col justify-center py-20 md:py-0">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-burgundy-700 mb-6 block">
            03 // EXPERTISE AREAS
          </span>
          <h3 className="text-3xl md:text-5xl font-serif font-black text-stone-900 mb-8 leading-tight">
            Core Foundations
          </h3>
          <div className="text-stone-600 space-y-8 text-sm md:text-lg leading-relaxed max-w-3xl font-medium">
            <p>
              My academic journey and hands-on projects allowed me to explore different facets of modern technology:
            </p>
            <div className="flex flex-wrap gap-2.5 pt-2">
              {skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-6 py-3 bg-white rounded-full text-xs md:text-sm font-bold text-stone-700 border border-sand-200 hover:border-burgundy-700/20 cursor-default transition-all shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Viewport 5: Practice */}
      <div 
        id="about-slide-4" 
        className="min-h-screen md:h-screen w-full flex items-center justify-center px-6 relative reveal-slide border-b border-sand-200/50"
      >
        <div className="max-w-4xl w-full slide-content flex flex-col justify-center py-20 md:py-0">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-burgundy-700 mb-6 block">
            04 // THE BENCHMARK
          </span>
          <h3 className="text-3xl md:text-5xl font-serif font-black text-stone-900 mb-8 leading-tight">
            Knowledge in Practice
          </h3>
          <div className="text-stone-600 space-y-6 text-sm md:text-lg leading-relaxed max-w-3xl font-medium">
            <p>
              From developing attendance systems and creating responsive client layouts to deploying enterprise devices and solving configuration errors during my OJT, I gained hands-on experiences that built my technical troubleshooting core.
            </p>
            <p>
              Great systems are about clean logic, responsiveness, and usability. I prioritize constructing simple, robust solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Viewport 6: Philosophy & Values */}
      <div 
        id="about-slide-5" 
        className="min-h-screen md:h-screen w-full flex items-center justify-center px-6 relative reveal-slide border-b border-sand-200/50"
      >
        <div className="max-w-4xl w-full slide-content flex flex-col justify-center py-20 md:py-0">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-burgundy-700 mb-6 block">
            05 // PHILOSOPHY & VALUES
          </span>
          <h3 className="text-3xl md:text-5xl font-serif font-black text-stone-900 mb-8 leading-tight">
            Core Grounding
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full pt-2">
            {values.map((v, i) => (
              <div 
                key={i} 
                className="group flex gap-5 p-6 rounded-3xl bg-white border border-sand-200 hover:border-burgundy-700/20 transition-all duration-300 shadow-sm"
              >
                <div className="shrink-0 w-10 h-10 rounded-2xl bg-burgundy-50 flex items-center justify-center text-burgundy-700">
                  {v.icon}
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1.5 group-hover:text-burgundy-700 transition-colors uppercase tracking-wider text-xs">
                    {v.title}
                  </h4>
                  <p className="text-[11px] text-stone-500 leading-relaxed font-medium">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Viewport 7: Looking Forward */}
      <div 
        id="about-slide-6" 
        className="min-h-screen md:h-screen w-full flex items-center justify-center px-6 relative reveal-slide"
      >
        <div className="max-w-2xl w-full slide-content text-center py-20 md:py-0">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-burgundy-700 mb-6 block">
            06 // WHAT'S NEXT
          </span>
          <h3 className="text-3xl md:text-5xl font-serif font-black text-stone-900 mb-6 leading-tight">
            Looking Forward
          </h3>
          <p className="text-stone-500 mb-8 text-sm md:text-lg font-medium leading-relaxed">
            As a fresh graduate, I’m excited to bring my developer skillset and supportive operations mindset to a dedicated product team.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {["Software Engineering", "Full-Stack Dev", "QA Testing", "IT support"].map((role) => (
              <span key={role} className="px-4 py-2 rounded-full bg-burgundy-50 text-burgundy-700 font-bold text-[10px] uppercase tracking-widest border border-burgundy-100">
                {role}
              </span>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 px-8 py-4 bg-burgundy-700 text-[#FAF8F5] rounded-full font-bold text-xs uppercase tracking-wider shadow-sm">
            <Globe className="h-4 w-4" /> Ready to build
          </div>
          
          <p className="mt-12 text-xs italic text-stone-400 font-medium">
            "This is only the beginning of my journey, and I’m excited for what’s ahead."
          </p>
        </div>
      </div>

    </section>
  );
}
