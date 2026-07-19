"use client";

import { motion } from "framer-motion";
import {
  Copy,
  Check,
  ExternalLink,
  Download,
  Zap,
  Activity,
} from "lucide-react";
import { useState } from "react";

export default function NpmSection() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText("npm install ucoder-insight");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stats = [
    { icon: Download, label: "Total Downloads", value: "1,000+" },
    { icon: Zap, label: "Events / Sec", value: "1k" },
    { icon: Activity, label: "Avg log Latency", value: "<500ms" },
  ];

  const tags = [
    "Page views",
    "Error tracking",
    "Custom events",
    "Core Web Vitals",
    "SPA support",
    "Cookie-free",
    "AI Bot detection",
  ];

  return (
    <section
      id="npm"
      className="py-16 bg-white dark:bg-slate-950 p-8 relative overflow-hidden"
    >
      {" "}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="text-center mb-16 mx-auto max-w-4xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4 relative group inline-block pb-3"
        >
          Open Source{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            SDK
          </span>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-1/3 bg-purple-500 rounded-full transition-all duration-500 group-hover:w-full opacity-50 group-hover:opacity-100" />
        </motion.h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          Privacy-first analytics package — built for scale and maintained in
          production.
        </p>
      </div>
      <motion.section
        className="max-w-2xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Linear Style Card: Glassmorphism + Subtle Borders */}
        <div className="bg-white/50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.08] hover:dark:border-white/[0.15] backdrop-blur-xl rounded-2xl overflow-hidden transition-colors duration-500 shadow-xl shadow-slate-200/20 dark:shadow-none">
          {/* Header */}
          <div className="px-5 py-4 flex items-center justify-between gap-3 flex-wrap border-b border-slate-200 dark:border-white/[0.05]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-blue-500/20">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-blue-500 dark:text-blue-400"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h3 className="font-mono text-base font-semibold text-slate-900 dark:text-slate-100">
                    ucoder-insight
                  </h3>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20">
                    v1.1.3
                  </span>
                </div>
                {/* Live pulsing indicator */}
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Maintained in Production
                  </span>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-2">
              <a
                href="https://www.npmjs.com/package/ucoder-insight"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md bg-slate-100 dark:bg-white/5 border border-transparent dark:border-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-all text-slate-700 dark:text-slate-300"
              >
                npm <ExternalLink size={12} />
              </a>
              <a
                href="https://insights.ucoder.in"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-all text-blue-700 dark:text-blue-400"
              >
                Live <ExternalLink size={12} />
              </a>
            </div>
          </div>

          <div className="p-5 flex flex-col gap-6">
            {/* Stats row with Technical Metrics */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center gap-1.5 bg-slate-50 dark:bg-black/40 border border-slate-100 dark:border-white/5 rounded-xl py-3 px-2"
                >
                  <Icon
                    size={16}
                    className="text-blue-500 dark:text-blue-400 mb-1"
                  />
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    {value}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              High-throughput, cookie-free analytics SDK. Built with zero
              dependencies to track page views, custom events, and Core Web
              Vitals in real-time without compromising user privacy.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Install command with better UI */}
            <div className="group flex items-center justify-between bg-slate-900 dark:bg-black/60 border border-slate-800 dark:border-white/10 rounded-xl p-1 pl-4 mt-2 hover:border-slate-700 dark:hover:border-white/20 transition-colors">
              <code className="font-mono text-sm text-emerald-400">
                <span className="text-slate-500 select-none mr-2">$</span>
                npm install ucoder-insight
              </code>
              <button
                onClick={copy}
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 dark:bg-white/5 hover:bg-slate-700 dark:hover:bg-white/10 transition-colors flex-shrink-0"
                aria-label="Copy to clipboard"
              >
                {copied ? (
                  <Check size={16} className="text-emerald-400" />
                ) : (
                  <Copy
                    size={16}
                    className="text-slate-400 group-hover:text-white transition-colors"
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 px-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <p>Used in production at ucoder.in</p>
          <p>~7.4KB gzipped · 0 Dependencies</p>
        </div>
      </motion.section>
    </section>
  );
}
