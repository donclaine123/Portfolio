"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "@/components/Magnetic";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("markalexisbatis@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "a3904431-ebfa-4ac1-bdfd-2f92c6e42ee0",
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Portfolio Contact from ${formData.name}`,
          message: formData.message,
          from_name: formData.name,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setStatusMessage("Thank you! Your message has been sent successfully. I'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
        setStatusMessage(result.message || "Failed to send message. Please try again or email directly.");
      }
    } catch (error) {
      setStatus("error");
      setStatusMessage("An unexpected network error occurred. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 relative bg-[#F3F6F7] dark:bg-[#0B0E14] overflow-hidden transition-colors duration-500">
      {/* Giant Editorial Backdrop Watermark matching Hero layout */}
      <div 
        aria-hidden="true" 
        className="absolute inset-x-0 top-8 sm:top-12 flex justify-center pointer-events-none select-none z-0 overflow-hidden"
      >
        <span className="text-[13vw] font-sans font-black uppercase tracking-tighter bg-gradient-to-b from-zinc-950/[0.12] via-zinc-950/[0.04] to-transparent dark:from-white/[0.14] dark:via-white/[0.05] dark:to-transparent bg-clip-text text-transparent leading-none whitespace-nowrap select-none">
          COLLABORATE
        </span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Header with Cursive Accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14 md:mb-16"
        >
          {/* Cursive Accent matching Hero */}
          <div className="font-[family-name:var(--font-caveat)] text-2xl sm:text-3xl font-bold text-[#B83824] dark:text-[#FF5A36] mb-1 origin-bottom-left -rotate-2 inline-block">
            have an ambitious roadmap?
          </div>
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#B83824] dark:text-[#FF5A36] mb-2 block">
            05 // INITIATE COLLABORATION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-black text-black dark:text-white tracking-tight mb-3 sm:mb-4">
            Let&apos;s Build Together.
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-xl">
            Available for full-stack engineering roles, software contracts, and high-impact digital systems. Let&apos;s discuss your roadmap.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-start">
          
          {/* Left Column: Contact Info Cards & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-3 sm:gap-4"
          >
            
            {/* Email Card with 1-Click Copy */}
            <motion.div 
              whileHover={{ y: -2 }}
              className="group flex items-center justify-between p-4 sm:p-5 md:p-6 bg-white dark:bg-zinc-900/70 border-2 border-zinc-900/10 dark:border-zinc-800 shadow-[0_4px_24px_rgb(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgb(0,0,0,0.4)] rounded-2xl hover:border-[#B83824]/40 dark:hover:border-[#FF5A36]/40 transition-all"
            >
              <a 
                href="mailto:markalexisbatis@gmail.com"
                className="flex items-center gap-4 min-w-0 flex-1 mr-2"
                aria-label="Send email to markalexisbatis@gmail.com"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 shrink-0 group-hover:border-[#B83824] dark:group-hover:border-[#FF5A36] group-hover:text-[#B83824] dark:group-hover:text-[#FF5A36] transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B83824] dark:text-[#FF5A36] mb-0.5">
                    EMAIL
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-black dark:text-white truncate">
                    markalexisbatis@gmail.com
                  </span>
                </div>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="p-2 sm:px-3 sm:py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:text-[#B83824] dark:hover:text-[#FF5A36] hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all flex items-center gap-1.5 text-xs font-medium shrink-0 cursor-pointer shadow-2xs active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-500 font-semibold hidden sm:inline">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Copy</span>
                  </>
                )}
              </button>
            </motion.div>

            {/* Location Card */}
            <motion.div 
              whileHover={{ y: -2 }}
              className="flex items-center gap-4 p-4 sm:p-5 md:p-6 bg-white dark:bg-zinc-900/70 border-2 border-zinc-900/10 dark:border-zinc-800 shadow-[0_4px_24px_rgb(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgb(0,0,0,0.4)] rounded-2xl"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 shrink-0">
                <MapPin className="w-5 h-5 text-[#B83824] dark:text-[#FF5A36]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-0.5">
                  LOCATION
                </span>
                <span className="text-sm sm:text-base font-semibold text-black dark:text-white">
                  Philippines
                </span>
              </div>
            </motion.div>

            {/* Social Icons with Magnetic Hover */}
            <div className="flex items-center gap-3 mt-2 sm:mt-4">
              <Magnetic strength={0.35}>
                <a 
                  href="https://github.com/donclaine123" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="GitHub Profile"
                  className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all cursor-pointer"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              </Magnetic>
              <Magnetic strength={0.35}>
                <a 
                  href="https://www.linkedin.com/in/mark-alexis-batis-4061b128a/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn Profile"
                  className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all cursor-pointer"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </Magnetic>
              <Magnetic strength={0.35}>
                <a 
                  href="https://www.facebook.com/micky.arkal/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook Profile"
                  className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all cursor-pointer"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
              </Magnetic>
            </div>

          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-white dark:bg-zinc-900/70 border-2 border-zinc-900/10 dark:border-zinc-800 shadow-[0_4px_24px_rgb(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgb(0,0,0,0.4)] rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-10">
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                      YOUR NAME *
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-zinc-50/80 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 text-base text-black dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none focus:border-[#B83824] dark:focus:border-[#FF5A36] transition-colors shadow-2xs"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                      YOUR EMAIL *
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-zinc-50/80 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 text-base text-black dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none focus:border-[#B83824] dark:focus:border-[#FF5A36] transition-colors shadow-2xs"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                    SUBJECT
                  </label>
                  <input 
                    type="text" 
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full bg-zinc-50/80 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 text-base text-black dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none focus:border-[#B83824] dark:focus:border-[#FF5A36] transition-colors shadow-2xs"
                  />
                </div>

                {/* Message Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                    MESSAGE *
                  </label>
                  <textarea 
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, or idea..."
                    className="w-full bg-zinc-50/80 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 text-base text-black dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none focus:border-[#B83824] dark:focus:border-[#FF5A36] transition-colors shadow-2xs resize-none"
                  ></textarea>
                </div>

                {/* Status Feedback Banner */}
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-sm flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{statusMessage}</span>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300 text-sm flex items-center gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0" />
                      <span>{statusMessage}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button with Magnetic Hover */}
                <Magnetic strength={0.15} className="w-full mt-2">
                  <button 
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 rounded-xl py-4 flex items-center justify-center gap-2 font-bold text-sm hover:bg-[#B83824] dark:hover:bg-[#FF5A36] dark:hover:text-white transition-all shadow-md active:scale-95 group disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </Magnetic>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
