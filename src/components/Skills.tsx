"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FileCode2, 
  Code2, 
  Braces, 
  Atom, 
  Layers, 
  Wind, 
  Cpu, 
  Server, 
  Database, 
  GitBranch, 
  LayoutTemplate,
  Container
} from "lucide-react";

interface ToolItem {
  name: string;
  icon: React.ReactNode;
}

export default function Skills() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.05 }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const tools: ToolItem[] = [
    { name: "HTML5", icon: <FileCode2 className="h-5 w-5" /> },
    { name: "CSS3", icon: <LayoutTemplate className="h-5 w-5" /> },
    { name: "JavaScript", icon: <Braces className="h-5 w-5" /> },
    { name: "TypeScript", icon: <Code2 className="h-5 w-5" /> },
    { name: "React", icon: <Atom className="h-5 w-5" /> },
    { name: "Next.js", icon: <Layers className="h-5 w-5" /> },
    { name: "Tailwind CSS", icon: <Wind className="h-5 w-5" /> },
    { name: "Node.js", icon: <Cpu className="h-5 w-5" /> },
    { name: "Express.js", icon: <Server className="h-5 w-5" /> },
    { name: "PostgreSQL", icon: <Database className="h-5 w-5" /> },
    { name: "MySQL", icon: <Database className="h-5 w-5" /> },
    { name: "Docker", icon: <Container className="h-5 w-5" /> },
    { name: "Git & GitHub", icon: <GitBranch className="h-5 w-5" /> }
  ];

  return (
    <section id="skills" className="py-32 px-6 relative border-t border-sand-200 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-xl mb-20 reveal">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-burgundy-700 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-burgundy-700" />
              CAPABILITIES
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif font-black text-stone-900 leading-tight">
            Technical Stack
          </h2>
          <p className="text-stone-500 mt-6 text-base font-medium leading-relaxed">
            The coding libraries, databases, servers, and operations support systems that I run to develop and manage production-ready environments.
          </p>
        </div>

        {/* Flat Grid Showcase (Uncategorized, with Icons) */}
        <div className="reveal grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex items-center gap-3.5 px-5 py-4 bg-white border border-sand-200 hover:border-burgundy-700/20 rounded-2xl shadow-sm hover:shadow-md transition-[border-color,box-shadow] duration-300 group cursor-default"
            >
              <div className="text-burgundy-700 group-hover:scale-105 transition-transform duration-200 flex-shrink-0">
                {tool.icon}
              </div>
              <span className="text-xs font-bold text-stone-800 tracking-wide">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
