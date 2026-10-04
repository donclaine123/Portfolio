"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#home");
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { scrollY, scrollYProgress } = useScroll();
  const lenis = useLenis();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    // Keep permanently sticky/visible on mobile
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setHidden(false);
      return;
    }

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Stack", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.substring(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveSection(href);
    setMobileMenuOpen(false);

    if (href === "#home") {
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      if (lenis) {
        lenis.scrollTo(target as HTMLElement, {
          offset: -40,
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <>
      {/* Scroll Progress Bar at Top of Viewport */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-zinc-800 via-zinc-400 to-zinc-900 dark:from-zinc-400 dark:via-zinc-100 dark:to-zinc-300 origin-left z-[100] pointer-events-none"
      />

      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 pt-4 sm:pt-6 px-4 flex justify-center pointer-events-none"
      >
        {/* DESKTOP NAVBAR (md and above) */}
        <nav className="pointer-events-auto hidden md:flex items-center gap-1 bg-white/85 dark:bg-zinc-900/85 backdrop-blur-xl p-1.5 rounded-full border border-zinc-200/80 dark:border-zinc-800 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.35)] transition-colors duration-300">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 sm:px-5 py-2 rounded-full text-[13px] font-semibold transition-colors duration-200 whitespace-nowrap cursor-pointer select-none ${
                  isActive
                    ? "text-white dark:text-zinc-950"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-nav-indicator"
                    className="absolute inset-0 bg-black dark:bg-white rounded-full shadow-sm -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}

        {/* Separator */}
        <div className="w-[1px] h-4 bg-zinc-200 dark:bg-zinc-800 mx-1" />

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          aria-label={mounted && resolvedTheme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          className="p-2 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors cursor-pointer select-none flex items-center justify-center"
        >
          {mounted ? (
            resolvedTheme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-700 transition-transform hover:-rotate-12" />
            )
          ) : (
            <div className="w-4 h-4" />
          )}
        </button>
      </nav>

      {/* MOBILE NAVBAR MENU (Below md screens) */}
      <div ref={menuRef} className="pointer-events-auto md:hidden flex items-center gap-2">
        {/* Toggle Pill Button */}
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="flex items-center gap-2 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl px-5 py-2.5 rounded-full border border-zinc-200/80 dark:border-zinc-800 shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.35)] text-zinc-900 dark:text-zinc-100 font-semibold text-sm active:scale-95 transition-all cursor-pointer select-none"
        >
          {mobileMenuOpen ? (
            <>
              <X className="w-4 h-4 text-zinc-900 dark:text-zinc-100" strokeWidth={2.5} />
              <span>Menu</span>
            </>
          ) : (
            <>
              <Menu className="w-4 h-4 text-zinc-900 dark:text-zinc-100" strokeWidth={2.5} />
              <span>Menu</span>
            </>
          )}
        </button>

        {/* Mobile Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          aria-label={mounted && resolvedTheme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          className="p-2.5 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl rounded-full border border-zinc-200/80 dark:border-zinc-800 shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.35)] text-zinc-900 dark:text-zinc-100 active:scale-95 transition-all cursor-pointer"
        >
          {mounted ? (
            resolvedTheme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-700" />
            )
          ) : (
            <div className="w-4 h-4" />
          )}
        </button>

        {/* Dropdown Menu Card */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-14 left-1/2 -translate-x-1/2 w-[86vw] max-w-[280px] bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border border-zinc-200/90 dark:border-zinc-800 rounded-[1.75rem] p-2 shadow-[0_20px_45px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_45px_rgba(0,0,0,0.5)] flex flex-col gap-1 mt-1"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-5 py-3.5 rounded-2xl text-base font-bold transition-all duration-200 block ${
                      isActive
                        ? "bg-black text-white dark:bg-white dark:text-zinc-950 shadow-sm"
                        : "text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/70"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  </>
);
}
