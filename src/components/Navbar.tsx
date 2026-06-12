"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLenis } from "lenis/react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useLenis(({ scroll }) => {
    setScrolled(scroll > 20);

    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (totalScroll > 0) {
      setScrollProgress((scroll / totalScroll) * 100);
    }
  });

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? "py-4 bg-[#FAF8F5]/90 backdrop-blur-xl border-b border-sand-200 shadow-sm" : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Editorial Text Logo */}
        <a
          href="#home"
          className="font-serif text-2xl font-black tracking-tighter text-stone-900 hover:text-burgundy-700 transition-colors"
        >
          MB<span className="text-burgundy-700">.</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className={`hidden md:flex items-center transition-all duration-300 ${
          scrolled 
            ? "bg-white border border-sand-200 shadow-sm rounded-full px-8 py-2.5 gap-8" 
            : "gap-10"
        }`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-600 hover:text-burgundy-700 hover:-translate-y-0.5 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-stone-800 hover:text-burgundy-700 transition-colors cursor-pointer"
            aria-label="Toggle Mobile Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 py-8 bg-[#FAF8F5] border-b border-sand-200 shadow-lg animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[11px] font-bold uppercase tracking-[0.25em] text-stone-800 hover:text-burgundy-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Thin elegant scroll progress line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-burgundy-700 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />
    </motion.header>
  );
}
