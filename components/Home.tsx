"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Quote } from "lucide-react";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-28 pb-12 md:pt-24 px-6 md:px-12 lg:px-8 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden relative"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-100 md:h-100 lg:w-125 lg:h-125 bg-purple-500/10 blur-[80px] md:blur-[120px] rounded-full -z-10" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        <div className="w-full lg:w-3/5 text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-black text-slate-900 dark:text-white leading-[1.1] md:leading-[1.1] lg:leading-[0.9] mb-6">
              FULL STACK <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-500">
                DEVELOPER
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base md:text-xl text-slate-500 dark:text-slate-400 max-w-lg mx-auto lg:mx-0 mb-8 md:mb-10 leading-relaxed font-medium"
          >
            I build
            <span className="text-purple-600 font-bold  ml-1">Production-grade</span> web apps — analytics SDKs, real-time systems &
            open-source tools.
          </motion.p>
          <div className="flex flex-row items-center justify-center lg:justify-start gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("projects");
                  if (element) {
                    const offset = 80;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element.getBoundingClientRect().top;
                    window.scrollTo({
                      top: elementRect - bodyRect - offset,
                      behavior: "smooth",
                    });
                  }
                }}
                className="group flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl md:rounded-2xl font-bold transition-all hover:bg-purple-600 dark:hover:bg-purple-500 dark:hover:text-white shadow-xl hover:shadow-purple-500/20 text-xs sm:text-sm md:text-base"
              >
                Explore Projects
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="px-6 py-3 md:px-8 md:py-4 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white rounded-xl md:rounded-2xl font-bold transition-all hover:bg-purple-600 hover:border-purple-600 dark:hover:bg-purple-500 dark:hover:border-purple-500 shadow-xl hover:shadow-purple-500/20 text-xs sm:text-sm md:text-base cursor-pointer"
            >
              <a
                href="./soumyadip_maity_fullstack_cv.pdf"
                download="soumyadip_maity_fullstack_cv.pdf"
                className="flex items-center gap-2"
              >
                <Download size={18} />
                <span>Download CV</span>
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-2/5 flex justify-center order-1 lg:order-2"
        >
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-purple-500/20 blur-2xl md:blur-3xl rounded-full -z-10 animate-pulse group-hover:bg-purple-500/40 transition-all duration-500" />

            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-96 lg:h-96 rounded-[2rem] md:rounded-[3.5rem] overflow-hidden border-2 border-slate-200 dark:border-slate-800 p-1.5 md:p-2 bg-white dark:bg-slate-900 shadow-2xl group-hover:border-purple-500/50 transition-colors duration-500"
            >
              <Image
                src="/cv.jpeg"
                alt="Soumyadip"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-cover object-top  p-1.5 md:p-2 rounded-[1.8rem] md:rounded-[3.3rem] group-hover:scale-105 transition-transform duration-700"
                priority
              />
            </motion.div>

            {/* Quote Box */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-4 md:p-5 rounded-xl md:rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 max-w-45 md:max-w-60 hidden sm:block"
            >
              <Quote
                className="text-purple-500 mb-1 md:mb-2 rotate-180"
                size={20}
              />
              <p className="text-[10px] md:text-sm font-bold text-slate-800 dark:text-slate-200 leading-snug">
                &ldquo;Code is my language, and the web is my canvas.&rdquo;
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
