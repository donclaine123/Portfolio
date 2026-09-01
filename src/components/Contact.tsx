"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 relative bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-black tracking-tight mb-3 sm:mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Available for freelance, internships, and exciting projects. Let's create something great.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-start">
          
          {/* Left Column: Contact Info Cards & Socials */}
          <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-4">
            
            {/* Email Card */}
            <motion.a 
              href="mailto:markalexisbatis@gmail.com"
              whileHover={{ y: -2 }}
              className="flex items-center gap-4 p-4 sm:p-5 md:p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-gray-300 transition-all block"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-gray-200 text-gray-700 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-0.5">
                  EMAIL
                </span>
                <span className="text-sm sm:text-base font-semibold text-black truncate">
                  markalexisbatis@gmail.com
                </span>
              </div>
            </motion.a>

            {/* Location Card */}
            <motion.div 
              whileHover={{ y: -2 }}
              className="flex items-center gap-4 p-4 sm:p-5 md:p-6 bg-white border border-gray-200 rounded-2xl shadow-sm"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-gray-200 text-gray-700 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-0.5">
                  LOCATION
                </span>
                <span className="text-sm sm:text-base font-semibold text-black">
                  Philippines
                </span>
              </div>
            </motion.div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2 sm:mt-4">
              <a 
                href="https://github.com/donclaine123" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-gray-200 text-black hover:bg-gray-50 hover:border-gray-300 transition-all"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mark-alexis-batis-4061b128a/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-gray-200 text-black hover:bg-gray-50 hover:border-gray-300 transition-all"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/micky.arkal/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-gray-200 text-black hover:bg-gray-50 hover:border-gray-300 transition-all"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#f8f9fa] rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-10">
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-gray-600">
                      YOUR NAME *
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-base text-black placeholder:text-gray-400 outline-none focus:border-gray-400 transition-colors shadow-sm"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-gray-600">
                      YOUR EMAIL *
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-base text-black placeholder:text-gray-400 outline-none focus:border-gray-400 transition-colors shadow-sm"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-gray-600">
                    SUBJECT
                  </label>
                  <input 
                    type="text" 
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-base text-black placeholder:text-gray-400 outline-none focus:border-gray-400 transition-colors shadow-sm"
                  />
                </div>

                {/* Message Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-gray-600">
                    MESSAGE *
                  </label>
                  <textarea 
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, or idea..."
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-base text-black placeholder:text-gray-400 outline-none focus:border-gray-400 transition-colors shadow-sm resize-none"
                  ></textarea>
                </div>

                {/* Status Feedback Banner */}
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>{statusMessage}</span>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-center gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                      <span>{statusMessage}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <button 
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-2 w-full bg-black text-white rounded-xl py-4 flex items-center justify-center gap-2 font-semibold text-sm hover:bg-gray-900 transition-colors group disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
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

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
