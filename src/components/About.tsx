"use client";

import React, { useEffect, useRef, useState } from "react";
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
import { motion } from "framer-motion";

export default function About() {
  const [activeSlide, setActiveSlide] = useState(0);

  const values = [
    {
      title: "Continuous Learning",
      desc: "Technology evolves quickly, and I believe growth comes from staying curious and always being willing to learn.",
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      title: "Problem Solving",
      desc: "I enjoy analyzing problems and finding practical, efficient solutions through technology.",
      icon: <Search className="h-5 w-5" />
    },
    {
      title: "Team Collaboration",
      desc: "Good communication and teamwork create better results and stronger projects.",
      icon: <Users className="h-5 w-5" />
    },
    {
      title: "Growth Through Challenges",
      desc: "Mistakes and challenges are part of the process — they’re opportunities to improve.",
      icon: <Target className="h-5 w-5" />
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
      // Reveal animations for each section with parallax and stagger
      gsap.utils.toArray(".editorial-section").forEach((section: any, idx: number) => {
        const textContent = section.querySelector(".text-content");
        const bigNumber = section.querySelector(".big-number");
        
        if (textContent) {
          gsap.fromTo(textContent,
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 75%",
                toggleActions: "play reverse play reverse",
                onEnter: () => window.dispatchEvent(new CustomEvent("about-slide-change", { detail: idx })),
                onEnterBack: () => window.dispatchEvent(new CustomEvent("about-slide-change", { detail: idx }))
              }
            }
          );
        }

        if (bigNumber) {
          gsap.to(bigNumber, {
            y: -150,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          });
        }
      });

      // Sticky tracker dots
      gsap.fromTo(".about-dots-container",
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#about",
            start: "top 30%",
            end: "bottom 70%",
            toggleActions: "play reverse play reverse",
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="relative bg-[#FAF8F5] pt-20 pb-32 overflow-hidden">
      
      {/* Floating Vertical Index Tracker Dots */}
      <div className="absolute top-0 bottom-0 right-4 md:right-12 pointer-events-none w-10 z-50 hidden md:block about-dots-container opacity-0">
        <div className="sticky top-[40vh] pointer-events-auto flex flex-col gap-5 items-center bg-transparent mix-blend-difference">
          {chapters.map((ch, idx) => (
            <a
              key={idx}
              href={`#${ch.id}`}
              className="group relative flex items-center justify-center cursor-pointer h-4 w-4"
              aria-label={`Scroll to ${ch.label}`}
            >
              <span className="absolute right-8 opacity-0 group-hover:opacity-100 bg-[#FAF8F5] text-stone-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50 mix-blend-normal shadow-md">
                {ch.label}
              </span>
              <span 
                className={`rounded-full transition-all duration-500 ${
                  activeSlide === idx 
                    ? "w-2.5 h-2.5 bg-burgundy-500 scale-110" 
                    : "w-1.5 h-1.5 bg-stone-300 group-hover:bg-[#FAF8F5] group-hover:scale-150"
                }`}
              />
            </a>
          ))}
        </div>
      </div>

      {/* 0. Biography */}
      <div id="about-slide-0" className="editorial-section min-h-[90vh] w-full flex items-center px-6 lg:px-20 relative">
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <div className="text-content max-w-4xl pt-20">
            <div className="flex items-center gap-3 mb-10">
              <span className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.3em] text-burgundy-700 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-burgundy-700" />
                BIOGRAPHY
              </span>
            </div>
            <h2 className="text-[12vw] md:text-[8vw] lg:text-[7vw] font-serif font-black text-stone-900 leading-[0.85] tracking-tighter">
              Hey there,<br />
              I’m <span className="text-burgundy-700 italic font-normal">Mark Alexis Batis</span><span className="text-burgundy-700">.</span>
            </h2>
            <div className="w-full md:w-[60%] ml-auto mt-16 md:mt-24 pl-0 md:pl-12 border-l-0 md:border-l border-sand-200/60">
              <p className="text-xl md:text-3xl text-stone-600 leading-[1.6] font-medium tracking-tight">
                I’m a fresh Computer Science graduate with a passion for software development, technical problem-solving, and building robust, user-focused digital systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 1. Origins (Right aligned) */}
      <div id="about-slide-1" className="editorial-section min-h-screen w-full flex items-center px-6 lg:px-20 relative mt-20 lg:mt-32">
        <div className="big-number absolute top-[10%] left-[-5%] text-[35vw] font-serif font-black text-sand-200/30 pointer-events-none select-none z-0">
          01
        </div>
        <div className="max-w-[1400px] mx-auto w-full flex justify-end relative z-10">
          <div className="text-content w-full md:w-[55%] lg:w-[45%]">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-burgundy-700 mb-8 block">
              01 &mdash; THE BEGINNING
            </span>
            <h3 className="text-4xl md:text-6xl lg:text-[5rem] font-serif font-black text-stone-900 mb-12 leading-[0.9] tracking-tighter">
              Discovering<br/>Technology
            </h3>
            <div className="text-stone-600 space-y-8 text-base md:text-lg leading-[1.8] font-medium">
              <p>
                Growing up, I was always curious about how technology worked. Whether it was exploring computers, troubleshooting problems, or discovering new software, I enjoyed figuring things out and learning how systems connected behind the scenes.
              </p>
              <p>
                That curiosity eventually led me to pursue a degree in Computer Science, where I developed a strong foundation in programming, systems, databases, networking, and software development.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Approach (Left aligned with offset) */}
      <div id="about-slide-2" className="editorial-section min-h-screen w-full flex items-center px-6 lg:px-20 relative mt-20 lg:mt-40">
        <div className="big-number absolute top-[20%] right-[-5%] text-[35vw] font-serif font-black text-sand-200/30 pointer-events-none select-none z-0">
          02
        </div>
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <div className="text-content w-full md:w-[60%] lg:w-[50%]">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-burgundy-700 mb-8 block">
              02 &mdash; THE APPROACH
            </span>
            <h3 className="text-4xl md:text-6xl lg:text-[5rem] font-serif font-black text-stone-900 mb-12 leading-[0.9] tracking-tighter">
              Building Solutions
            </h3>
            <div className="text-stone-600 text-base md:text-lg leading-[1.8] font-medium mb-16">
              <p>
                During my college years, I realized that programming was more than just writing code — it was about creating structured solutions that resolve actual workflow bottlenecks.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { text: "Logistics under pressure", icon: <Zap className="h-6 w-6" /> },
                { text: "Logical Architecture", icon: <Sparkles className="h-6 w-6" /> },
                { text: "Iterative Refinement", icon: <CheckCircle2 className="h-6 w-6" /> }
              ].map((item, i) => (
                <div 
                  key={i}
                  className="p-8 rounded-3xl bg-white border border-sand-200 hover:border-burgundy-700/30 transition-colors shadow-sm flex flex-col gap-6"
                >
                  <div className="text-burgundy-700 bg-burgundy-50 w-12 h-12 rounded-2xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-900 leading-[1.6]">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Expertise (Centered Asymmetrical) */}
      <div id="about-slide-3" className="editorial-section min-h-[80vh] w-full flex items-center px-6 lg:px-20 relative mt-20 lg:mt-40">
        <div className="max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
          <div className="text-content w-full lg:w-[45%]">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-burgundy-700 mb-8 block">
              03 &mdash; EXPERTISE AREAS
            </span>
            <h3 className="text-4xl md:text-6xl lg:text-[5rem] font-serif font-black text-stone-900 mb-10 leading-[0.9] tracking-tighter">
              Core<br/>Foundations
            </h3>
            <p className="text-stone-600 text-base md:text-lg leading-[1.8] font-medium">
              My academic journey and hands-on projects allowed me to explore different facets of modern technology:
            </p>
          </div>
          
          <div className="text-content w-full lg:w-[50%] flex flex-wrap gap-4">
            {skills.map((skill, i) => (
              <span 
                key={skill}
                className={`px-8 py-4 bg-white rounded-full text-xs md:text-sm font-bold text-stone-800 border border-sand-200 hover:border-burgundy-700/30 hover:-translate-y-1 transition-all duration-300 shadow-sm ${i % 2 === 0 ? 'ml-0' : 'ml-4 lg:ml-12'}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Practice (Right Aligned split) */}
      <div id="about-slide-4" className="editorial-section min-h-screen w-full flex items-center px-6 lg:px-20 relative mt-20 lg:mt-40">
        <div className="big-number absolute top-[15%] left-[5%] text-[30vw] font-serif font-black text-sand-200/30 pointer-events-none select-none z-0">
          04
        </div>
        <div className="max-w-[1400px] mx-auto w-full flex justify-end relative z-10">
          <div className="text-content w-full lg:w-[60%] bg-[#FAF8F5]/80 backdrop-blur-sm p-0 lg:p-12 lg:-mr-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-burgundy-700 mb-8 block">
              04 &mdash; THE BENCHMARK
            </span>
            <h3 className="text-4xl md:text-6xl lg:text-[5rem] font-serif font-black text-stone-900 mb-12 leading-[0.9] tracking-tighter">
              Knowledge<br />in Practice
            </h3>
            <div className="text-stone-600 space-y-8 text-base md:text-xl leading-[1.8] font-medium columns-1 md:columns-2 gap-12">
              <p>
                From developing attendance systems and creating responsive client layouts to deploying enterprise devices and solving configuration errors during my OJT, I gained hands-on experiences that built my technical troubleshooting core.
              </p>
              <p>
                Great systems are about clean logic, responsiveness, and usability. I prioritize constructing simple, robust solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Philosophy & Values */}
      <div id="about-slide-5" className="editorial-section min-h-[90vh] w-full flex items-center px-6 lg:px-20 relative mt-20 lg:mt-40">
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <div className="text-content max-w-2xl mb-20">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-burgundy-700 mb-8 block">
              05 &mdash; PHILOSOPHY & VALUES
            </span>
            <h3 className="text-4xl md:text-6xl lg:text-[5rem] font-serif font-black text-stone-900 leading-[0.9] tracking-tighter">
              Core Grounding
            </h3>
          </div>
          
          <div className="text-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div 
                key={i} 
                className="group flex flex-col gap-6 p-10 rounded-[2rem] bg-white border border-sand-200 hover:border-burgundy-700/30 hover:shadow-xl hover:shadow-burgundy-700/5 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FAF8F5] border border-sand-200 group-hover:bg-burgundy-700 group-hover:border-burgundy-700 group-hover:text-white flex items-center justify-center text-stone-900 transition-colors duration-500">
                  {v.icon}
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-4 group-hover:text-burgundy-700 transition-colors uppercase tracking-[0.15em] text-[11px] leading-[1.5]">
                    {v.title}
                  </h4>
                  <p className="text-sm text-stone-500 leading-[1.8] font-medium">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. What's Next (Centered Cinematic Footer-like) */}
      <div id="about-slide-6" className="editorial-section min-h-[80vh] w-full flex items-center justify-center px-6 lg:px-20 relative mt-20 lg:mt-40">
        <div className="max-w-4xl mx-auto w-full text-center relative z-10">
          <div className="text-content">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-burgundy-700 mb-8 block">
              06 &mdash; WHAT'S NEXT
            </span>
            <h3 className="text-5xl md:text-7xl lg:text-[6rem] font-serif font-black text-stone-900 mb-10 leading-[0.9] tracking-tighter">
              Looking Forward
            </h3>
            <p className="text-stone-600 mb-16 text-lg md:text-2xl font-medium leading-[1.7] max-w-2xl mx-auto">
              As a fresh graduate, I’m excited to bring my developer skillset and supportive operations mindset to a dedicated product team.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {["Software Engineering", "Full-Stack Dev", "QA Testing", "IT support"].map((role) => (
                <span key={role} className="px-6 py-3 rounded-full bg-transparent text-stone-800 font-bold text-[10px] uppercase tracking-[0.2em] border border-sand-300">
                  {role}
                </span>
              ))}
            </div>

            <a href="#contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-burgundy-700 text-[#FAF8F5] rounded-full font-bold text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-burgundy-700/20 hover:bg-burgundy-800 transition-colors hover:-translate-y-1 duration-300">
              <Globe className="h-4 w-4" /> Ready to build
            </a>
            
            <p className="mt-20 text-sm italic text-stone-400 font-medium font-serif tracking-wide">
              "This is only the beginning of my journey, and I’m excited for what’s ahead."
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
