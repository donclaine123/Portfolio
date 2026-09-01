"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

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
  { name: "React", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "HTML5", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "Tailwind CSS", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  
  // Backend & Frameworks
  { name: "Node.js", category: "Backend & Frameworks", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", category: "Backend & Frameworks", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },

  // Databases & Cloud
  { name: "PostgreSQL", category: "Databases & Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL", category: "Databases & Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "Supabase", category: "Databases & Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  { name: "Vercel", category: "Databases & Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
  { name: "Netlify", category: "Databases & Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg" },
  { name: "Render", category: "Databases & Cloud", icon: "https://cdn.simpleicons.org/render/000000" },

  // AI / ML
  { name: "AI Copilot", category: "AI / ML", icon: "https://cdn.simpleicons.org/githubcopilot" },
  { name: "Gemini", category: "AI / ML", icon: "https://cdn.simpleicons.org/googlegemini" },
  { name: "Claude", category: "AI / ML", icon: "https://cdn.simpleicons.org/claude" },

  // Tools & Others
  { name: "Docker", category: "Tools & Others", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Git & GitHub", category: "Tools & Others", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" }
];

export default function Skills() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const sectionRef = useRef<HTMLElement>(null);

  const filteredTech = activeCategory === "All"
    ? techStack
    : techStack.filter((item) => item.category === activeCategory);

  // Featured stack items for collapsed initial preview (first 6 items)
  const featuredStack = techStack.slice(0, 6);

  const handleCollapse = () => {
    setIsExpanded(false);
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      className="py-16 sm:py-24 relative bg-white overflow-hidden flex flex-col items-center scroll-mt-16"
    >
      <div className="relative z-10 w-full max-w-[1240px] px-4 sm:px-6 text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-black tracking-tight mb-8 sm:mb-12"
        >
          My Stack
        </motion.h2>

        <AnimatePresence mode="wait">
          {!isExpanded ? (
            /* COLLAPSED PREVIEW */
            <motion.div
              key="collapsed-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              {/* Preview Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-12 w-full">
                {featuredStack.map((tech, idx) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="bg-white border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] rounded-2xl sm:rounded-[2rem] p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgb(0,0,0,0.06)] aspect-square"
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-2 sm:mb-3 object-contain"
                      loading="lazy"
                    />
                    <span className="text-sm font-bold text-black tracking-tight text-center">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* View Technologies Button */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center"
              >
                <button
                  onClick={() => setIsExpanded(true)}
                  className="px-8 py-4 rounded-full border border-gray-200 bg-white text-black font-bold text-sm sm:text-base shadow-[0_4px_14px_0_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2 mb-3 cursor-pointer"
                >
                  <span>View technologies</span>
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </button>
                <p className="text-gray-500 text-xs sm:text-sm font-medium">
                  {techStack.length} technologies total • Click to explore full stack
                </p>
              </motion.div>
            </motion.div>
          ) : (
            /* EXPANDED FULL STACK VIEW */
            <motion.div
              key="expanded-view"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center w-full"
            >
              {/* Category Filter Pills */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8 sm:mb-12 max-w-[950px]"
              >
                {categories.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "bg-black text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
                          : "bg-white text-gray-600 border border-gray-200 hover:border-gray-400 hover:text-black"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </motion.div>

              {/* Responsive 6-Column Grid matching reference image */}
              <motion.div
                layout
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-14 w-full"
              >
                <AnimatePresence>
                  {filteredTech.map((tech) => (
                    <motion.div
                      layout
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] rounded-2xl sm:rounded-[2rem] p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgb(0,0,0,0.06)] aspect-square"
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-2 sm:mb-3 object-contain"
                        loading="lazy"
                      />
                      <span className="text-sm font-bold text-black tracking-tight text-center">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {/* View Less Button */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center"
              >
                <button
                  onClick={handleCollapse}
                  className="px-8 py-4 rounded-full border border-gray-200 bg-white text-black font-bold text-sm sm:text-base shadow-[0_4px_14px_0_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>View less</span>
                  <ChevronUp className="w-4 h-4 text-gray-600" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
