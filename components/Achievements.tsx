"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Image as ImageIcon, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Programming with Java",
    issuer: "NPTEL",
    date: "Apr 2026",
    image: "/certificates/java.png",
    credentialId: "NPTEL26CS36S757500177",
  },
  {
    title: "Web3 Hackathon",
    issuer: "IEM-IIFR, Kolkata, Google Developer Group",
    date: "March 2026",
    image: "/certificates/web3.jpg",
    credentialId: null,
  },
  {
    title: "Design & Analysis of Algorithms",
    issuer: "NPTEL",
    date: "Apr 2025",
    image: "/certificates/daa.png",
    credentialId: "NPTEL25CS23S44980034401313077",
  },
  {
    title: "React Development",
    issuer: "ARDENT COMPUTECH PVT LTD",
    date: "July 2024",
    image: "/certificates/react.jpeg",
    credentialId: "ARDENT/131991",
  },
  {
    title: "Python Programming Training",
    issuer: "Academy of Skill Development",
    date: "Dec 2023",
    image: "/certificates/python.jpeg",
    credentialId: "ASDF/PYT/SWA/A+/47677",
  },
];

export default function Achievements() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-3 bg-purple-500/10 rounded mb-4"
          >
            <Award className="text-purple-500" size={32} />
          </motion.div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Professional Certifications
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-lg">
            Validated expertise in modern technologies and core computer science
            fundamentals.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 transition-all duration-500 flex flex-col h-full"
            >
              {/* Date Badge */}
              <div className="mb-6">
                <span className="px-3 py-1 rounded bg-purple-100 dark:bg-purple-900/30 text-[10px] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest">
                  {cert.date}
                </span>
              </div>

              {/* Title & Issuer */}
              <div className="grow">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 leading-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-500 mt-2 flex items-center gap-1">
                  Issued by{" "}
                  <span className="text-slate-700 dark:text-slate-300">
                    {cert.issuer}
                  </span>
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                <p className="text-[10px] text-slate-400 dark:text-slate-600 uppercase font-bold tracking-tighter mb-4">
                  {cert.credentialId ? `ID: ${cert.credentialId}` : null}
                </p>

                <a
                  href={cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-all"
                >
                  <ImageIcon size={16} />
                  <span>View Full Certificate</span>
                  <ExternalLink
                    size={12}
                    className="opacity-0 group-hover:opacity-100 transition-all"
                  />
                </a>
              </div>

              <div className="absolute top-8 right-8 opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
                <Award size={60} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
