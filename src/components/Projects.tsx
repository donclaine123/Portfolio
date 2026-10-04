"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import { ExternalLink, X, CheckCircle2, Calendar, Briefcase, Layers, ArrowUpRight, ZoomIn, ShoppingBag, Download, Smartphone } from "lucide-react";

interface Metric {
  label: string;
  value: string;
}

interface HighlightItem {
  title: string;
  description: string;
}

interface TechStackGroup {
  category: string;
  skills: string[];
}

interface CaseStudy {
  id: string;
  title: string;
  role: string;
  company: string;
  timeline: string;
  industry: string;
  description: string;
  problem?: string;
  solution?: string;
  highlights?: HighlightItem[];
  features?: string[];
  techStack?: TechStackGroup[];
  image?: string;
  metrics: Metric[];
  status: "available" | "coming-soon";
  detailsLink?: string;
  githubLink?: string;
  downloadLink?: string;
  isMobile?: boolean;
}

export default function Projects() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const lenis = useLenis();

  // Disable background Lenis and lock body scroll when modal or zoom is open
  useEffect(() => {
    if (selectedProject || isImageZoomed) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "unset";
    }

    return () => {
      lenis?.start();
      document.body.style.overflow = "unset";
    };
  }, [selectedProject, isImageZoomed, lenis]);

  // Close modal or zoom on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isImageZoomed) {
          setIsImageZoomed(false);
        } else {
          setSelectedProject(null);
        }
      }
    };
    if (selectedProject || isImageZoomed) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject, isImageZoomed]);

  const caseStudies: CaseStudy[] = [
    {
      id: "pocket",
      title: "Pocket — Penny Journal",
      role: "Full Stack Developer",
      company: "Personal Project • Pocket",
      timeline: "September 2026",
      industry: "Mobile Application",
      description: "Pocket is a minimalist, distraction-free mobile expense tracker designed like a cozy paper notebook. Unlike bloated finance apps that require bank logins, subscriptions, and dozens of confusing charts, Pocket focuses on the core habit: logging daily expenses and income in under 3 seconds. It works 100% offline by default, requires no account to start, has zero ads or tracking, and keeps all financial data private on the user's device.",
      problem: "Traditional finance apps are overloaded with mandatory bank integrations, intrusive ads, paid subscriptions, and dozens of complex charts that create friction. Users abandon budgeting simply because logging a single coffee takes too long or feels invasive to their personal privacy.",
      solution: "Engineered Pocket with an offline-first architecture prioritizing instant, tactile logging in under 3 seconds. Built with local SQLite/AsyncStorage, custom neobrutalist paper styling, interactive Android home screen widgets, and optional end-to-end Supabase cloud sync.",
      highlights: [
        {
          title: "📱 Native Android Home Screen Widgets",
          description: "Built deep integration with Android's widget system (react-native-android-widget). Users can view their real-time daily spend and tap shortcut buttons to open a dedicated Quick Add sheet directly from their phone's home screen."
        },
        {
          title: "⚡ Offline-First Architecture (0ms Latency)",
          description: "Prioritized speed by saving transactions locally to SQLite and AsyncStorage first. The app launches immediately and logs transactions with zero loading spinners or network dependency."
        },
        {
          title: "🚀 60 FPS Performance on Large Datasets",
          description: "Replaced standard React Native scroll views with Shopify FlashList for cell recycling, ensuring buttery 60 FPS scrolling even when rendering thousands of historical transactions."
        },
        {
          title: "🎨 Distinct Neobrutalist Design System",
          description: "Crafted a warm, tactile visual identity featuring soft cream paper backgrounds (#F7F0E3), solid border lines, crisp offset shadows, playful sticker badges, and custom typography (Fredoka & DM Sans)."
        }
      ],
      features: [
        "3-Second Transaction Logging: Quickly log expenses or income with an amount, note, and sticker-style category tags (Coffee, Groceries, Commute, Fun, Salary, etc.)",
        "4 Flexible Timeframe Views: Easily flip through finances by Day (daily budget & 1-tap jump to today), Week (weekly cash flow), Month (income vs. expense progress bars), or All History (monthly archives)",
        "6 Android Home Screen Widgets: Add interactive widgets to your home screen ranging from a 1x1 quick-entry button to 2x1 balance counters, 4x1 banner bars, and a 4x4 full ledger dashboard",
        "Instant Search & Sort: Real-time search across past transactions by note, category, or amount, plus a 1-tap toggle to sort between newest and oldest",
        "20+ Global Currencies: Multi-currency support including PHP (₱), USD ($), EUR (€), GBP (£), JPY (¥), SGD (S$), and more, updating all ledger cards and input fields dynamically",
        "Offline-First with Optional Cloud Sync: Use the app completely offline with zero sign-up, or optionally sign in with an account to sync data across devices",
        "Safe In-App Updates: Check and install updates directly with zero risk of local guest data being wiped"
      ],
      techStack: [
        {
          category: "Frontend & Mobile Core",
          skills: ["React Native (0.76)", "Expo (SDK 52)", "TypeScript", "Expo Router", "Shopify FlashList", "React Native Reanimated", "Lucide Icons"]
        },
        {
          category: "Local Storage & Database",
          skills: ["Expo SQLite", "AsyncStorage", "Expo Secure Store"]
        },
        {
          category: "Backend & Cloud (Optional Sync)",
          skills: ["Supabase (PostgreSQL)", "Supabase Auth", "PowerSync"]
        },
        {
          category: "Native Features & Distribution",
          skills: ["react-native-android-widget", "EAS Build (Android APKs)", "Android Deep Linking"]
        }
      ],
      image: `${basePath}/pocket.png`,
      status: "available",
      isMobile: true,
      githubLink: "https://github.com/donclaine123/pocket",
      downloadLink: "https://github.com/donclaine123/pocket/releases",
      metrics: [
        { value: "React Native", label: "Mobile Core" },
        { value: "Expo SDK 52", label: "Runtime" },
        { value: "Expo SQLite", label: "Local Database" },
        { value: "Android Widgets", label: "Native Extension" }
      ]
    },
    {
      id: "ecart",
      title: "Ecart — Modern E-Commerce Platform",
      role: "Full Stack Developer",
      company: "Personal Project • Ecart",
      timeline: "August 2026",
      industry: "Web Application",
      description: "Developed 'Ecart' — a modern, full-stack e-commerce web application built from the ground up using React 19, Vite, and a Laravel 11 REST API connected to a live Supabase PostgreSQL database. The platform delivers a fast, responsive shopping experience with real-time cart synchronization, atomic order checkout, Stripe payments, and a dedicated admin portal.",
      highlights: [
        {
          title: "⚡ Blazing Fast Loading Speeds",
          description: "Engineered query-level server caching and 0ms client-side cache hydration, cutting catalog response times from ~3,300ms down to 16ms, paired with route-level code splitting that reduced the initial JavaScript bundle by 91.5%."
        },
        {
          title: "🛒 Real-Time Cart & Atomic Checkout",
          description: "Built a responsive shopping cart with optimistic UI updates and protected backend checkout transactions that use pessimistic database row locking (lockForUpdate) to eliminate stock overselling and race conditions."
        },
        {
          title: "💳 Integrated Stripe Payment Processing",
          description: "Implemented secure card checkout via Stripe Elements with authoritative server-side price calculations, cryptographic webhook signature verification, and duplicate payment prevention."
        },
        {
          title: "🛠️ Role-Guarded Admin Management Portal",
          description: "Developed an administrative dashboard with live inventory tracking, product CRUD operations, category filters, and order fulfillment status management protected by Laravel Sanctum role middleware."
        },
        {
          title: "🔍 Responsive Modern Storefront Design",
          description: "Crafted a sleek, mobile-friendly interface featuring dynamic category filtering, instant live search, skeleton loading placeholders, and asynchronous image rendering for zero visual layout jump."
        },
        {
          title: "✅ Comprehensive Automated Testing Suite",
          description: "Authored 39 automated unit and feature tests with 120 assertions covering authentication, CORS security policies, cart operations, atomic stock integrity, and checkout transactions."
        }
      ],
      techStack: [
        {
          category: "Frontend",
          skills: ["React 19", "Vite", "Tailwind CSS", "Lucide Icons", "Axios", "React Router"]
        },
        {
          category: "Backend",
          skills: ["Laravel 11", "PHP 8.2+", "Laravel Sanctum", "PHPUnit"]
        },
        {
          category: "Database & Services",
          skills: ["Supabase (PostgreSQL)", "Stripe API"]
        }
      ],
      image: `${basePath}/ecart.png`,
      status: "available",
      detailsLink: "https://myecart.vercel.app",
      metrics: [
        { value: "React 19", label: "Frontend UI" },
        { value: "Laravel 11", label: "REST API Backend" },
        { value: "PostgreSQL", label: "Supabase DB" },
        { value: "Stripe", label: "Payment Gateway" }
      ]
    },
    {
      id: "qr-attendance",
      title: "QR Code Attendance & Monitoring System",
      role: "Lead Full Stack Developer",
      company: "Thesis Project • St. Clare College",
      timeline: "January – May 2026",
      industry: "Real-time Monitoring",
      description: "Faculty attendance tracking was a manual, paper-based bottleneck. I engineered a real-time QR Code ecosystem that transformed the workflow into a secure, instant monitoring system.",
      problem: "Faculty attendance tracking in academic institutions previously relied on manual pen-and-paper sign-ins and biometric queues. This caused administrative delays, lack of live visibility, proxy sign-ins, and inaccurate attendance records during audits.",
      solution: "Engineered an end-to-end real-time QR Code monitoring ecosystem. Faculty members scan dynamic verification QR codes, which instantly transmit attendance events through Socket.IO WebSockets directly to an administrative dashboard backed by PostgreSQL.",
      features: [
        "Sub-100ms real-time event broadcasting powered by Socket.IO WebSockets",
        "Dynamic anti-tamper QR code verification preventing screenshot sharing and proxy sign-ins",
        "Role-Based Access Control (RBAC) for Administrators, Department Heads, and Faculty",
        "Automated attendance logging, live status indicators, and exportable timestamp audit reports",
        "Production-grade Nginx reverse proxy configuration handling secure SSL termination and routing"
      ],
      image: `${basePath}/facultyattendance.png`,
      status: "available",
      detailsLink: "https://employeeattendance.me",
      metrics: [
        { value: "Node.js", label: "Backend Environment" },
        { value: "Socket.IO", label: "Real-Time Updates" },
        { value: "Nginx", label: "Reverse Proxy Server" },
        { value: "PostgreSQL", label: "Database Engine" }
      ]
    },
    {
      id: "student-attendance",
      title: "Student Attendance System",
      role: "Full Stack Developer",
      company: "Personal Project • EazyAttend",
      timeline: "March – April 2026",
      industry: "Web Application",
      description: "Developed 'EazyAttend'—a full-stack web application designed to automate presence verification via a scan. Constructed a robust security layer implementing encrypted session-based authentication.",
      problem: "Manual attendance roll-calls in classroom environments consumed 10 to 15 minutes of valuable instructional time per session and were prone to human record-keeping errors and paper waste.",
      solution: "Developed 'EazyAttend'—a responsive full-stack attendance system where students verify presence quickly via scan. Built with a lightweight architecture, encrypted sessions, and relational database logging for instantaneous teacher insights.",
      features: [
        "Fast-scanning interface compatible with standard mobile and desktop webcams",
        "Encrypted session-based authentication layer preventing duplicate daily submissions",
        "Instructor dashboard displaying live attendance percentages, absent lists, and class statistics",
        "Structured MySQL relational database schema optimized for fast time-series queries",
        "Clean, responsive layout deployed on Netlify with optimized Express routing backend"
      ],
      image: `${basePath}/studentattendance.png`,
      status: "available",
      detailsLink: "https://eazyattend.netlify.app/",
      metrics: [
        { value: "Express", label: "Routing Framework" },
        { value: "MySQL", label: "Database Engine" },
        { value: "Netlify", label: "Frontend Host" }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 sm:py-28 relative bg-[#F3F6F7] dark:bg-[#0B0E14] overflow-hidden transition-colors duration-500">
      {/* Giant Editorial Backdrop Watermark matching Hero layout */}
      <div 
        aria-hidden="true" 
        className="absolute inset-x-0 top-8 sm:top-12 flex justify-center pointer-events-none select-none z-0 overflow-hidden"
      >
        <span className="text-[13vw] font-sans font-black uppercase tracking-tighter bg-gradient-to-b from-zinc-950/[0.12] via-zinc-950/[0.04] to-transparent dark:from-white/[0.14] dark:via-white/[0.05] dark:to-transparent bg-clip-text text-transparent leading-none whitespace-nowrap select-none">
          PROJECTS
        </span>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          {/* Cursive Accent matching Hero */}
          <div className="font-[family-name:var(--font-caveat)] text-2xl sm:text-3xl font-bold text-[#B83824] dark:text-[#FF5A36] mb-1 origin-bottom-left -rotate-2 inline-block">
            selected productions & systems
          </div>
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#B83824] dark:text-[#FF5A36] mb-2 block">
            03 // FEATURED ENGINEERING WORK
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-black dark:text-white tracking-tight">
            Production Systems & Case Studies
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {caseStudies.map((cs, idx) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col group"
            >
              {/* Project Preview Image / Card Header - Click triggers detailed modal */}
              <div
                onClick={() => setSelectedProject(cs)}
                className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-2xl sm:rounded-[2rem] mb-5 sm:mb-6 overflow-hidden bg-white dark:bg-zinc-900 border-2 border-zinc-900/10 dark:border-zinc-800 shadow-[0_4px_24px_rgb(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgb(0,0,0,0.4)] group-hover:shadow-[0_12px_36px_rgb(0,0,0,0.08)] dark:group-hover:shadow-[0_12px_36px_rgb(0,0,0,0.6)] group-hover:border-[#B83824]/40 dark:group-hover:border-[#FF5A36]/40 transition-all duration-500 cursor-pointer flex items-center justify-center"
                role="button"
                tabIndex={0}
                aria-label={`View detailed case study for ${cs.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedProject(cs);
                  }
                }}
              >
                {cs.image ? (
                  cs.isMobile ? (
                    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#FAF5EA] dark:bg-[#181614]">
                      {/* Ambient background blur */}
                      <Image
                        src={cs.image}
                        alt=""
                        fill
                        unoptimized
                        className="object-cover blur-2xl opacity-30 scale-125 select-none pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />

                      {/* Floating pill badge on image */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide shadow-sm">
                          Click for Case Study
                        </span>
                      </div>

                      {/* Clean mobile phone mockup frame */}
                      <div className="relative h-[86%] sm:h-[88%] aspect-[382/896] rounded-[1.2rem] sm:rounded-[1.4rem] overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.22)] border-[3px] border-[#29221F] bg-[#FFFDF9] transition-transform duration-500 group-hover:scale-105 z-1">
                        <Image
                          src={cs.image}
                          alt={cs.title}
                          fill
                          unoptimized
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <Image
                        src={cs.image}
                        alt={cs.title}
                        fill
                        unoptimized
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      
                      {/* Floating pill badge on image */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide shadow-sm">
                          Click picture for details
                        </span>
                      </div>
                    </>
                  )
                ) : (
                  <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-neutral-900 via-zinc-900 to-black text-white relative select-none">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-white/10 text-white text-[11px] font-semibold tracking-wide backdrop-blur-xs border border-white/10">
                        {cs.industry}
                      </span>
                      <span className="text-[11px] text-gray-400 font-mono">{cs.timeline}</span>
                    </div>

                    <div className="my-auto py-2">
                      <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-3">
                        <ShoppingBag className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
                        {cs.title}
                      </h4>
                      <p className="text-xs text-gray-300 mt-1 line-clamp-2">
                        {cs.role} • {cs.company}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-gray-400 border-t border-white/10 pt-3">
                      <span>Click to view case study</span>
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="px-5 py-2.5 rounded-full bg-white text-black font-bold text-xs sm:text-sm shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    View Case Study
                  </span>
                </div>
              </div>

              {/* Metadata */}
              <div className="flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#B83824] dark:text-[#FF5A36] block">
                    {cs.industry}
                  </span>
                  {cs.detailsLink ? (
                    <a
                      href={cs.detailsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-zinc-700 dark:text-zinc-300 hover:text-[#B83824] dark:hover:text-[#FF5A36] transition-colors"
                      aria-label={`Visit live site for ${cs.title}`}
                    >
                      <span>Visit Live Site</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : cs.downloadLink ? (
                    <a
                      href={cs.downloadLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:underline transition-colors"
                      aria-label={`Download APK for ${cs.title}`}
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download APK</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : cs.githubLink ? (
                    <a
                      href={cs.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-zinc-700 dark:text-zinc-300 hover:text-[#B83824] dark:hover:text-[#FF5A36] transition-colors"
                      aria-label={`View GitHub repository for ${cs.title}`}
                    >
                      <span>GitHub</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : null}
                </div>

                <h3
                  onClick={() => setSelectedProject(cs)}
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white tracking-tight mb-3 sm:mb-4 hover:text-[#B83824] dark:hover:text-[#FF5A36] transition-colors cursor-pointer"
                >
                  {cs.title}
                </h3>

                <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-[1.75] mb-5 sm:mb-6 line-clamp-3">
                  {cs.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {cs.metrics.map((m, i) => (
                    <span
                      key={i}
                      className="px-3.5 sm:px-4 py-1.5 rounded-full bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 text-xs sm:text-sm font-semibold border border-zinc-200/80 dark:border-zinc-800 hover:border-[#B83824] dark:hover:border-[#FF5A36] transition-colors shadow-2xs select-none"
                    >
                      {m.value}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* DETAILED PROJECT MODAL (Portaled to body) */}
      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              data-lenis-prevent
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-md p-2.5 sm:p-4 md:p-10 overscroll-contain"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                data-lenis-prevent
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                onWheel={(e) => e.stopPropagation()}
                onTouchMove={(e) => e.stopPropagation()}
                className="bg-white dark:bg-[#0c0d12] rounded-2xl sm:rounded-[2rem] overflow-hidden w-full max-w-5xl lg:max-w-6xl h-[94vh] md:h-[86vh] flex flex-col shadow-2xl border border-gray-100 dark:border-zinc-800 overscroll-contain transition-colors duration-300"
              >
                {/* Modal Top Bar */}
                <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-3.5 sm:py-5 border-b border-gray-100 dark:border-zinc-800 bg-white dark:bg-[#0c0d12] shrink-0">
                  <div className="flex flex-col min-w-0 pr-3 sm:pr-4">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-zinc-500">
                      Project Case Study
                    </span>
                    <h3 className="font-bold text-base sm:text-xl md:text-2xl text-black dark:text-white truncate">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    {selectedProject.detailsLink && (
                      <a
                        href={selectedProject.detailsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-black text-white dark:bg-white dark:text-black rounded-full text-xs sm:text-sm font-semibold hover:bg-gray-800 dark:hover:bg-zinc-200 transition-colors shadow-sm"
                      >
                        <span>Live Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {selectedProject.downloadLink && (
                      <a
                        href={selectedProject.downloadLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-600 text-white rounded-full text-xs sm:text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-sm"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download APK</span>
                      </a>
                    )}
                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-900 dark:bg-zinc-800 text-white rounded-full text-xs sm:text-sm font-semibold hover:bg-black dark:hover:bg-zinc-700 border border-transparent dark:border-zinc-700 transition-colors shadow-sm"
                      >
                        <span>GitHub</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(null)}
                      aria-label="Close project details"
                      className="p-1.5 sm:p-2 text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full transition-colors cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Modal Body: Flex column on mobile (stacked naturally), Flex row on desktop */}
                <div className="flex-1 flex flex-col md:flex-row overflow-y-auto md:overflow-hidden min-h-0 h-full">
                  {/* LEFT COLUMN: Picture, Meta & Quick Links */}
                  <div 
                    data-lenis-prevent
                    className="w-full md:w-[42%] lg:w-[40%] flex flex-col gap-4 sm:gap-5 p-4 sm:p-6 md:p-8 bg-gray-50/70 dark:bg-zinc-950/40 border-b md:border-b-0 md:border-r border-gray-100 dark:border-zinc-800 md:overflow-y-auto shrink-0 md:h-full overscroll-contain"
                  >
                    {/* Project Picture with Zoom On Click (if available) */}
                    {selectedProject.image && (
                      <div
                        onClick={() => setIsImageZoomed(true)}
                        className={`relative w-full ${
                          selectedProject.isMobile
                            ? "h-[320px] sm:h-[380px] md:h-[400px] flex items-center justify-center bg-[#FAF5EA] dark:bg-[#181614]"
                            : "aspect-[16/10] sm:aspect-[4/3] bg-gray-100 dark:bg-zinc-800"
                        } rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 dark:border-zinc-700/80 shadow-sm shrink-0 cursor-zoom-in group/zoom`}
                        role="button"
                        tabIndex={0}
                        aria-label="Click to zoom picture"
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setIsImageZoomed(true);
                          }
                        }}
                      >
                        {selectedProject.isMobile ? (
                          <>
                            {/* Ambient background blur */}
                            <Image
                              src={selectedProject.image}
                              alt=""
                              fill
                              unoptimized
                              className="object-cover blur-3xl opacity-35 scale-125 select-none pointer-events-none"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />

                            {/* Centered phone mockup frame */}
                            <div className="relative h-[88%] aspect-[382/896] rounded-[1.2rem] sm:rounded-[1.4rem] overflow-hidden shadow-[0_14px_35px_rgba(0,0,0,0.22)] border-[3px] border-[#29221F] bg-[#FFFDF9] transition-transform duration-300 group-hover/zoom:scale-105 z-1">
                              <Image
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                fill
                                unoptimized
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 30vw"
                              />
                            </div>
                          </>
                        ) : (
                          <Image
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            fill
                            unoptimized
                            className="object-cover object-top transition-transform duration-300 group-hover/zoom:scale-105"
                            sizes="(max-width: 768px) 100vw, 40vw"
                          />
                        )}

                        {/* Zoom Hint Badge */}
                        <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 z-10">
                          <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-black/75 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-semibold tracking-wide shadow-md group-hover/zoom:bg-black transition-colors">
                            <ZoomIn className="w-3.5 h-3.5" />
                            <span>Click to zoom</span>
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Metadata Strip */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-2 sm:gap-2.5">
                      <div className="flex items-center gap-3 p-2.5 sm:p-3 bg-white dark:bg-zinc-900/80 rounded-xl border border-gray-100 dark:border-zinc-800 shadow-xs">
                        <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700/60 flex items-center justify-center text-gray-700 dark:text-zinc-300 shrink-0">
                          <Briefcase className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-zinc-500">Role</span>
                          <span className="text-xs sm:text-sm font-bold text-black dark:text-white truncate">{selectedProject.role}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-2.5 sm:p-3 bg-white dark:bg-zinc-900/80 rounded-xl border border-gray-100 dark:border-zinc-800 shadow-xs">
                        <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700/60 flex items-center justify-center text-gray-700 dark:text-zinc-300 shrink-0">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-zinc-500">Timeline</span>
                          <span className="text-xs sm:text-sm font-bold text-black dark:text-white truncate">{selectedProject.timeline}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-2.5 sm:p-3 bg-white dark:bg-zinc-900/80 rounded-xl border border-gray-100 dark:border-zinc-800 shadow-xs">
                        <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700/60 flex items-center justify-center text-gray-700 dark:text-zinc-300 shrink-0">
                          <Layers className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-zinc-500">Context</span>
                          <span className="text-xs sm:text-sm font-bold text-black dark:text-white truncate">{selectedProject.company}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action CTAs */}
                    <div className="flex flex-col gap-2 shrink-0">
                      {selectedProject.detailsLink && (
                        <a
                          href={selectedProject.detailsLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-black text-white dark:bg-white dark:text-black font-bold text-xs sm:text-sm hover:bg-gray-800 dark:hover:bg-zinc-200 transition-all shadow-sm shrink-0"
                        >
                          <span>Visit Live Site</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {selectedProject.downloadLink && (
                        <a
                          href={selectedProject.downloadLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-600 text-white font-bold text-xs sm:text-sm hover:bg-emerald-700 transition-all shadow-sm shrink-0"
                        >
                          <Download className="w-4 h-4" />
                          <span>Download APK (Releases)</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {selectedProject.githubLink && (
                        <a
                          href={selectedProject.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gray-900 dark:bg-zinc-800 text-white font-bold text-xs sm:text-sm hover:bg-black dark:hover:bg-zinc-700 border border-transparent dark:border-zinc-700 transition-all shadow-sm shrink-0"
                        >
                          <span>View on GitHub</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* RIGHT COLUMN: Detailed Information & Breakdown */}
                  <div 
                    data-lenis-prevent
                    className="w-full md:w-[58%] lg:w-[60%] flex-1 flex flex-col p-4 sm:p-6 md:p-8 space-y-6 md:overflow-y-auto md:h-full overscroll-contain bg-white dark:bg-[#0c0d12]"
                  >
                    {/* Overview */}
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-zinc-500 block mb-1">
                        {selectedProject.industry}
                      </span>
                      <p className="text-gray-700 dark:text-zinc-300 text-sm sm:text-base leading-[1.8] font-normal">
                        {selectedProject.description}
                      </p>
                    </div>

                    {/* Problem & Solution (if available) */}
                    {selectedProject.problem && selectedProject.solution && (
                      <div className="space-y-3 sm:space-y-4">
                        <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white dark:bg-zinc-900/60 border border-gray-100 dark:border-zinc-800 shadow-[0_2px_12px_rgb(0,0,0,0.02)]">
                          <h4 className="text-xs font-bold uppercase tracking-widest text-red-500 dark:text-red-400 mb-1.5 sm:mb-2">
                            The Challenge & Problem
                          </h4>
                          <p className="text-gray-700 dark:text-zinc-300 text-xs sm:text-sm leading-[1.8] font-normal">
                            {selectedProject.problem}
                          </p>
                        </div>

                        <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white dark:bg-zinc-900/60 border border-gray-100 dark:border-zinc-800 shadow-[0_2px_12px_rgb(0,0,0,0.02)]">
                          <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-1.5 sm:mb-2">
                            The Technical Solution
                          </h4>
                          <p className="text-gray-700 dark:text-zinc-300 text-xs sm:text-sm leading-[1.8] font-normal">
                            {selectedProject.solution}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Project Highlights & Architecture (if available) */}
                    {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black dark:text-white mb-3">
                          Project Highlights & Architecture
                        </h4>
                        <div className="grid grid-cols-1 gap-2.5 sm:gap-3">
                          {selectedProject.highlights.map((item, i) => (
                            <div
                              key={i}
                              className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-gray-50/80 dark:bg-zinc-900/50 border border-gray-100 dark:border-zinc-800 flex flex-col gap-1.5 transition-all hover:bg-gray-50 dark:hover:bg-zinc-900/80"
                            >
                              <span className="text-xs sm:text-sm font-bold text-black dark:text-white flex items-center gap-1.5">
                                {item.title}
                              </span>
                              <p className="text-gray-600 dark:text-zinc-400 text-xs sm:text-sm leading-[1.7] font-normal">
                                {item.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Key Technical Features (for projects without highlights) */}
                    {(!selectedProject.highlights || selectedProject.highlights.length === 0) && selectedProject.features && selectedProject.features.length > 0 && (
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black dark:text-white mb-3">
                          Key Technical Features & Architecture
                        </h4>
                        <div className="grid grid-cols-1 gap-2 sm:gap-2.5">
                          {selectedProject.features.map((feature, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2.5 sm:gap-3 p-3 rounded-xl bg-gray-50/80 dark:bg-zinc-900/50 border border-gray-100 dark:border-zinc-800"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                              <span className="text-gray-800 dark:text-zinc-200 text-xs sm:text-sm leading-relaxed font-medium">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technology Stack / Grouped Stack */}
                    {selectedProject.techStack && selectedProject.techStack.length > 0 ? (
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black dark:text-white mb-2.5 sm:mb-3">
                          Tech Stack
                        </h4>
                        <div className="space-y-2.5">
                          {selectedProject.techStack.map((group, idx) => (
                            <div key={idx} className="p-3.5 rounded-xl bg-gray-50/80 dark:bg-zinc-900/50 border border-gray-100 dark:border-zinc-800">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-zinc-400 block mb-2">
                                {group.category}
                              </span>
                              <div className="flex flex-wrap gap-1.5">
                                {group.skills.map((skill, sIdx) => (
                                  <span
                                    key={sIdx}
                                    className="px-2.5 py-1 rounded-md bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-xs font-semibold text-gray-800 dark:text-zinc-200 shadow-2xs"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black dark:text-white mb-2.5 sm:mb-3">
                          Technologies & Environment
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.metrics.map((m, i) => (
                            <div
                              key={i}
                              className="px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 flex flex-col"
                            >
                              <span className="text-xs font-bold text-black dark:text-white">{m.value}</span>
                              <span className="text-[10px] text-gray-500 dark:text-zinc-400">{m.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="px-4 sm:px-6 md:px-8 py-3 sm:py-3.5 border-t border-gray-100 dark:border-zinc-800 bg-gray-50/50 dark:bg-[#0c0d12] flex items-center justify-between shrink-0">
                  <span className="text-[11px] sm:text-xs text-gray-500 dark:text-zinc-400">
                    Press <kbd className="px-1.5 sm:px-2 py-0.5 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded text-[10px] font-semibold text-zinc-700 dark:text-zinc-300">ESC</kbd> to close
                  </span>
                  <button
                    onClick={() => {
                      setIsImageZoomed(false);
                      setSelectedProject(null);
                    }}
                    className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white font-semibold text-xs sm:text-sm hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* FULLSCREEN IMAGE ZOOM LIGHTBOX (Portaled to body) */}
      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {isImageZoomed && selectedProject && selectedProject.image && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl p-3 sm:p-6 md:p-8 cursor-zoom-out select-none"
              onClick={() => setIsImageZoomed(false)}
            >
              {/* Lightbox Header Bar */}
              <div 
                className="w-full max-w-6xl flex items-center justify-between py-2 sm:py-3 px-2 text-white shrink-0"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col min-w-0 pr-4">
                  <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">Full Resolution View</span>
                  <h4 className="text-sm sm:text-base font-bold text-white truncate">
                    {selectedProject.title}
                  </h4>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setIsImageZoomed(false)}
                    className="p-2 sm:px-4 sm:py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs sm:text-sm font-semibold"
                    aria-label="Close zoomed view"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="hidden sm:inline">Close</span>
                  </button>
                </div>
              </div>

              {/* Lightbox Zoomed Image Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-6xl flex-1 flex items-center justify-center p-2 min-h-0 overflow-hidden"
                onClick={() => setIsImageZoomed(false)}
              >
                <div className="relative w-full h-full max-h-[82vh] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    unoptimized
                    className="object-contain"
                    sizes="95vw"
                    priority
                  />
                </div>
              </motion.div>

              <div className="pt-2 text-center text-xs text-gray-400 shrink-0">
                Click anywhere or press <kbd className="px-2 py-0.5 bg-white/10 rounded text-[10px] text-gray-200">ESC</kbd> to exit zoom
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
