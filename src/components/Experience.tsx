"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const services = [
    {
      id: "01",
      title: "Full Stack Web Development",
      description: "End-to-end web applications built using modern frameworks like React, Node.js, and solid database architectures.",
      tags: ["React / Next.js", "Node.js", "REST APIs", "Database Design"]
    },
    {
      id: "02",
      title: "IT Support & Operations",
      description: "Managed high-stakes deployments, enterprise workstation configurations, and rigorous data security protocols.",
      tags: ["System Admin", "Hardware Support", "Networking", "Security"]
    },
    {
      id: "03",
      title: "Systems Architecture",
      description: "Transforming complex business logic into intuitive, secure, real-time ecosystems.",
      tags: ["Socket.IO", "PostgreSQL", "RBAC Auth", "Optimization"]
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-black tracking-tight">
            Services & Experience
          </h2>
        </motion.div>

        <div className="flex flex-col gap-12 sm:gap-16 md:gap-20">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-12 lg:gap-16 items-start border-b border-gray-100 pb-12 sm:pb-16 last:border-0 last:pb-0"
            >
              <div className="w-full md:w-1/3">
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] font-black text-gray-100 leading-none tracking-tighter mb-2 sm:mb-4">
                  {service.id}
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black tracking-tight">
                  {service.title}
                </h3>
              </div>

              <div className="w-full md:w-2/3 md:pt-4 lg:pt-6">
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-[1.85] font-medium mb-6 sm:mb-8">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full border border-gray-200 text-gray-700 text-xs sm:text-sm font-semibold bg-gray-50/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
