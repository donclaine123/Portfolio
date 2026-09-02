"use client";

import { Mail, ChevronUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    { icon: <GithubIcon className="h-5 w-5" />, href: "https://github.com", label: "GitHub" },
    { icon: <LinkedinIcon className="h-5 w-5" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <TwitterIcon className="h-5 w-5" />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:hello@example.com", label: "Email" },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200/50 dark:border-slate-800/50 py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Copy */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200">DevPortfolio</h4>
            <p className="text-slate-500 dark:text-slate-500 text-sm mt-1">
              &copy; {new Date().getFullYear()} DevPortfolio. All rights reserved.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 hover:border-indigo-500/20 transition-all shadow-sm hover:shadow-md"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 shadow-md hover:shadow-lg transition-all focus:outline-none hover:-translate-y-3 cursor-pointer"
      >
        <ChevronUp className="h-5 w-5" />
      </button>
    </footer>
  );
}
