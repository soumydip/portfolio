"use client";

import { motion } from "framer-motion";
import { Copy, Check, ExternalLink, Download, Users, Star } from "lucide-react";
import { useState } from "react";

export default function NpmSection() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText("npm install ucoder-insight");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const stats = [
    { icon: Download, label: "Total Downloads", value: "1,000+" },
    { icon: Users, label: "Active Users", value: "10+" },
    { icon: Star, label: "License", value: "MIT" },
  ];

  const tags = [
    "Page views",
    "Error tracking",
    "Custom events",
    "Core Web Vitals",
    "SPA support",
    "Cookie-free",
    "Rage clicks",
    "Dead clicks",
    "AI crawler detection",
    "Bot detection",
  ];

  return (
    <section id="npm" className="py-12 bg-slate-50 dark:bg-slate-950 p-8">
      <div className="text-center mb-16 mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6 relative group inline-block pb-3"
        >
          NPM <span className="text-purple-600">Package</span>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-1/2 bg-purple-500 rounded-full transition-all duration-500 group-hover:w-full" />
        </motion.h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          Open-source, privacy-first analytics SDK — built and maintained in production.
        </p>
      </div>

      <motion.section
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-4">
          Open Source
        </p>

        <div className="border rounded-xl overflow-hidden">
          {/* Header */}
          <div className="px-4 py-3 flex items-center justify-between gap-3 flex-wrap border-b border-blue-500/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-blue-400"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <p className="font-mono text-sm font-medium">ucoder-insight</p>
                <span className="text-xs px-2 py-0.5 rounded-full text-blue-400 border border-blue-500/20">
                  v1.1.3
                </span>
                <span className="text-xs text-muted-foreground">MIT</span>
                <span className="text-xs text-muted-foreground">Public</span>
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-2">
              <a
                href="https://www.npmjs.com/package/ucoder-insight"
                target="_blank"
                className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg border border-border hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                npm <ExternalLink size={11} />
              </a>
              <a
                href="https://insights.ucoder.in"
                target="_blank"
                className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg border border-border hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                Live <ExternalLink size={11} />
              </a>
            </div>
          </div>

          <div className="px-4 py-3 flex flex-col gap-4">

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1 bg-muted/50 rounded-lg py-2.5 px-2"
                >
                  <Icon size={13} className="text-blue-400" />
                  <p className="text-sm font-semibold text-foreground">{value}</p>
                  <p className="text-xs text-muted-foreground text-center leading-tight">{label}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              Privacy-friendly, cookie-free analytics SDK — track page views,
              custom events, errors and Core Web Vitals in real time. Zero PII,
              zero cookies, GDPR/CCPA compliant without consent banners.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Install command */}
            <div className="flex items-center justify-between bg-background border border-border rounded-lg px-3 py-2">
              <code className="font-mono text-xs text-muted-foreground">
                npm install ucoder-insight
              </code>
              <button
                onClick={copy}
                className="text-muted-foreground hover:text-foreground transition-colors ml-3 flex-shrink-0"
                aria-label="Copy"
              >
                {copied ? (
                  <Check size={13} className="text-blue-400" />
                ) : (
                  <Copy size={13} />
                )}
              </button>
            </div>
          </div>
        </div>

        <p className="text-xs text-muted-foreground mt-2 pl-1">
          Used in production at ucoder.in · ~7.4KB gzipped , No dependencies
        </p>
      </motion.section>
    </section>
  );
}