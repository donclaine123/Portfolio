"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#home");
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const lenis = useLenis();
  const menuRef = useRef<HTMLDivElement>(null);

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
    { name: "Stack", href: "#skills" },
    { name: "Services", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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

  return (
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
      <nav className="pointer-events-auto hidden md:flex items-center gap-1 bg-white/90 backdrop-blur-lg p-2 rounded-full border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className={`px-6 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer select-none ${
              activeSection === link.href
                ? "bg-black text-white shadow-sm"
                : "text-gray-500 hover:text-black hover:bg-gray-50"
            }`}
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* MOBILE NAVBAR MENU (Below md screens) */}
      <div ref={menuRef} className="pointer-events-auto md:hidden flex flex-col items-center">
        {/* Toggle Pill Button */}
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="flex items-center gap-2 bg-white/95 backdrop-blur-lg px-6 py-2.5 rounded-full border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.08)] text-black font-semibold text-sm active:scale-95 transition-all cursor-pointer select-none"
        >
          {mobileMenuOpen ? (
            <>
              <X className="w-4 h-4 text-black" strokeWidth={2.5} />
              <span>Menu</span>
            </>
          ) : (
            <>
              <Menu className="w-4 h-4 text-black" strokeWidth={2.5} />
              <span>Menu</span>
            </>
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
              className="w-[86vw] max-w-[280px] bg-white/98 backdrop-blur-xl border border-gray-100/90 rounded-[1.75rem] p-2 shadow-[0_20px_45px_rgba(0,0,0,0.12)] flex flex-col gap-1 mt-3"
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
                        ? "bg-black text-white shadow-sm"
                        : "text-black hover:bg-gray-50"
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
  );
}
