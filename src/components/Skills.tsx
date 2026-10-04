"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category =
  | "All"
  | "Languages"
  | "Frontend"
  | "Backend & Frameworks"
  | "Databases & Cloud"
  | "AI / ML"
  | "Tools & Others";

interface TechItem {
  name: string;
  category: Category;
  icon: string;
  isMonochrome?: boolean;
  isCore?: boolean;
}

const categories: Category[] = [
  "All",
  "Languages",
  "Frontend",
  "Backend & Frameworks",
  "Databases & Cloud",
  "AI / ML",
  "Tools & Others"
];

const techStack: TechItem[] = [
  // Frontend
  { name: "React", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", isCore: true },
  { name: "Next.js", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", isMonochrome: true, isCore: true },
  { name: "React Native", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "TypeScript", category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", isCore: true },
  { name: "JavaScript", category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "HTML5", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "Tailwind CSS", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", isCore: true },
  
  // Backend & Frameworks
  { name: "Node.js", category: "Backend & Frameworks", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", isCore: true },
  { name: "Express.js", category: "Backend & Frameworks", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", isMonochrome: true },

  // Databases & Cloud
  { name: "PostgreSQL", category: "Databases & Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", isCore: true },
  { name: "MySQL", category: "Databases & Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "SQLite", category: "Databases & Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" },
  { name: "Supabase", category: "Databases & Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  { name: "Vercel", category: "Databases & Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg", isMonochrome: true },
  { name: "Netlify", category: "Databases & Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg" },
  { name: "Render", category: "Databases & Cloud", icon: "https://cdn.simpleicons.org/render", isMonochrome: true },

  // AI / ML
  { name: "AI Copilot", category: "AI / ML", icon: "https://cdn.simpleicons.org/githubcopilot", isMonochrome: true },
  { name: "Gemini", category: "AI / ML", icon: "https://cdn.simpleicons.org/googlegemini" },
  { name: "Claude", category: "AI / ML", icon: "https://cdn.simpleicons.org/claude" },

  // Tools & Others
  { name: "Docker", category: "Tools & Others", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Expo", category: "Tools & Others", icon: "https://cdn.simpleicons.org/expo", isMonochrome: true },
  { name: "Git & GitHub", category: "Tools & Others", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", isMonochrome: true }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const sectionRef = useRef<HTMLElement>(null);

  const filteredTech =
    activeCategory === "All"
      ? techStack
      : techStack.filter((item) => item.category === activeCategory);

  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      className="py-20 sm:py-28 relative bg-white dark:bg-[#0E1118] overflow-hidden flex flex-col items-center scroll-mt-16 transition-colors duration-500"
    >
      {/* Giant Editorial Backdrop Watermark matching Hero layout */}
      <div 
        aria-hidden="true" 
        className="absolute inset-x-0 top-8 sm:top-12 flex justify-center pointer-events-none select-none z-0 overflow-hidden"
      >
        <span className="text-[13vw] font-sans font-black uppercase tracking-tighter bg-gradient-to-b from-zinc-950/[0.12] via-zinc-950/[0.04] to-transparent dark:from-white/[0.14] dark:via-white/[0.05] dark:to-transparent bg-clip-text text-transparent leading-none whitespace-nowrap select-none">
          TOOLKIT
        </span>
      </div>

      <div className="relative z-10 w-full max-w-[1200px] px-4 sm:px-6 text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          {/* Cursive Accent matching Hero */}
          <div className="font-[family-name:var(--font-caveat)] text-2xl sm:text-3xl font-bold text-[#B83824] dark:text-[#FF5A36] mb-1 origin-bottom-left -rotate-2 inline-block">
            daily drivers & specialized tools
          </div>
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#B83824] dark:text-[#FF5A36] mb-2 block">
            04 // TECHNICAL TOOLKIT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-black dark:text-white tracking-tight mb-3">
            Production Stacks & Tools
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-lg mx-auto">
            Battle-tested frameworks, languages, and databases powering production web and mobile applications.
          </p>
        </motion.div>

        {/* Category Filter Pills with Smooth Framer Motion layoutId */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10 sm:mb-12 max-w-[980px] mx-auto"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const count =
              cat === "All"
                ? techStack.length
                : techStack.filter((t) => t.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer select-none inline-flex items-center gap-1.5 ${
                  isActive
                    ? "text-white dark:text-zinc-950"
                    : "bg-zinc-100/80 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-[#B83824]/40 dark:hover:border-[#FF5A36]/40 hover:text-black dark:hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillCategoryTab"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-zinc-950 dark:bg-white shadow-sm border border-zinc-950 dark:border-white"
                  />
                )}
                <span className="relative z-10">{cat}</span>
                <span
                  className={`relative z-10 text-[10px] px-1.5 py-0.5 rounded-full transition-colors ${
                    isActive
                      ? "bg-[#B83824] dark:bg-[#FF5A36] text-white font-bold"
                      : "bg-zinc-200/80 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-semibold"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Responsive Grid of Tech Cards with layout animation */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4 md:gap-5 w-full relative z-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech) => (
              <motion.div
                layout
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className="relative bg-white/90 dark:bg-zinc-900/60 backdrop-blur-xs border border-zinc-200/90 dark:border-zinc-800/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B83824]/60 dark:hover:border-[#FF5A36]/60 hover:shadow-[0_12px_28px_rgba(184,56,36,0.12)] dark:hover:shadow-[0_12px_28px_rgba(255,90,54,0.15)] aspect-square group cursor-default select-none"
              >
                {/* Core Driver Badge */}
                {tech.isCore && (
                  <div className="absolute top-2.5 right-2.5 flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-[#B83824]/10 dark:bg-[#FF5A36]/15 border border-[#B83824]/25 dark:border-[#FF5A36]/35">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B83824] dark:bg-[#FF5A36] animate-pulse" />
                    <span className="text-[8px] sm:text-[9px] font-black tracking-wider uppercase text-[#B83824] dark:text-[#FF5A36]">
                      CORE
                    </span>
                  </div>
                )}

                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 mb-3 flex items-center justify-center">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className={`w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 ${
                      tech.isMonochrome ? "dark:invert dark:brightness-200" : ""
                    }`}
                    loading="lazy"
                  />
                </div>
                <span className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100 tracking-tight text-center mb-0.5 group-hover:text-[#B83824] dark:group-hover:text-[#FF5A36] transition-colors">
                  {tech.name}
                </span>
                <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-medium">
                  {tech.category}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
