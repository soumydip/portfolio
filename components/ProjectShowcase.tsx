"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Lock,
  ChevronLeft,
  ChevronRight,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import UcoderImage from "../public/project/ucoder.png";
import ucoderInsightsImage from "../public/project/ucoder_insights.png";
import placMentPredictionImage from "../public/project/placement.png";
import Portfolio from "../public/project/portfolio.png";
const projects = [
  {
    title: "Ucoder Insights",
    description:
      "Production-grade analytics platform with custom SDKs to track " +
      "real-time traffic, errors and events. Handles high-throughput " +
      "data ingestion via BullMQ job queues with Redis caching.",
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "BullMQ",
      "Redis",
      "MongoDB",
      "Docker",
      "PM2",
    ],
    github: "https://github.com/soumydip/ucoder_insight_core",
    live: "https://insights.ucoder.in",
    image: ucoderInsightsImage,
  },
  {
    title: "Ucoder",
    description:
      "Full-stack service platform with real-time features, " +
      "containerized deployment on Linux VPS with Docker.",
    tech: ["Express", "Vite", "MongoDB", "Tailwind CSS", "Docker"],
    github: "",
    live: "https://www.ucoder.in",
    image: UcoderImage,
  },
  {
    title: "Personal Portfolio",
    description:
      "Modern portfolio website built with Next.js and Tailwind CSS, " +
      "showcasing projects and skills with responsive design.",
    tech: [
      "React",
      "Lucide Icons",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
      "Vercel",
    ],
    github: "https://github.com/soumydip/portfolio",
    live: "https://soumydip.ucoder.in",
    image: Portfolio,
  },
  {
    title: "Placement Prediction",
    description:
      "ML-powered web app predicting student placement outcomes " +
      "using Random Forest classifier with 89% accuracy.",
    tech: ["Python", "Flask", "Pandas", "Scikit-learn", "Random Forest"],
    github: "https://github.com/soumydip/placement_prediction",
    live: "https://placement-prediction-u7v7.onrender.com",
    image: placMentPredictionImage,
  },
  {
    title: "Breast Cancer Detection",
    description:
      "Early detection model using machine learning " +
      "achieving high accuracy on clinical datasets.",
    tech: ["Python", "Pandas", "Scikit-learn", "Random Forest"],
    github: "https://github.com/soumydip/Breast_Cancer_Prediction",
    live: "",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
  },
];
export default function StackedProjects() {
  const [index, setIndex] = useState(0);

  const nextStep = () => setIndex((prev) => (prev + 1) % projects.length);
  const prevStep = () =>
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  useEffect(() => {
    const timer = setInterval(nextStep, 7000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section
      id="projects"
      className="py-20 px-4 dark:bg-slate-950 overflow-hidden transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 dark:text-white relative group cursor-default mb-6"
          >
            Featured <span className="text-purple-600">Project</span>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-0.75 w-1/2 bg-purple-500 rounded-full transition-all duration-500 group-hover:w-full" />
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-12 max-w-xl flex items-center gap-4 p-4 rounded-3xl bg-slate-100/50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800"
        >
          <Info size={18} className="text-purple-500 shrink-0" />
          <p className="text-[10px] md:text-xs text-slate-500">
            Click on the side cards or drag them to navigate through the
            projects.
          </p>
        </motion.div>
        <div className="relative w-full flex items-center justify-center h-130 md:h-150">
          <button
            onClick={prevStep}
            className="absolute left-0 md:left-4 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 dark:text-white text-slate-800 hover:bg-purple-600 hover:text-white transition-all hidden sm:flex shadow-2xl"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="relative w-full max-w-300 h-full flex items-center justify-center">
            <AnimatePresence initial={false}>
              {projects.map((project, i) => {
                const isCenter = i === index;
                const isLeft =
                  i === (index - 1 + projects.length) % projects.length;
                const isRight = i === (index + 1) % projects.length;

                if (!isCenter && !isLeft && !isRight) return null;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      zIndex: isCenter ? 30 : 10,
                      x: isCenter ? 0 : isLeft ? "-88%" : "88%",
                      scale: isCenter ? 1 : 0.8,
                      opacity: isCenter ? 1 : 0.35,
                      filter: isCenter ? "blur(0px)" : "blur(1px)",
                    }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    onClick={() => {
                      if (isLeft) prevStep();
                      if (isRight) nextStep();
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(_, info) => {
                      if (info.offset.x > 80) prevStep();
                      else if (info.offset.x < -80) nextStep();
                    }}
                    className={`absolute w-[92%] md:w-[72%] h-full rounded-[40px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden flex flex-col ${
                      isCenter
                        ? "cursor-default"
                        : "cursor-pointer hover:opacity-60"
                    } transition-all duration-300`}
                  >
                    <div className="relative h-[62%] md:h-[65%] w-full overflow-hidden">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt={project.title}
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/30 to-transparent p-6 md:p-10 flex flex-col justify-end">
                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-5 drop-shadow-lg">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-1.5 md:gap-2">
                          {project.tech.map((t, idx) => (
                            <Badge
                              key={idx}
                              className="bg-white/20 backdrop-blur-md text-white border-none px-2.5 py-1 text-[9px] md:text-xs"
                            >
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`p-6 md:p-10 flex flex-col justify-between grow ${
                        !isCenter && "pointer-events-none opacity-0"
                      }`}
                    >
                      <p className="text-slate-600 dark:text-slate-400 text-xs md:text-base leading-relaxed line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex gap-3 md:gap-4 mt-6">
                        {project.github ? (
                          <Button
                            variant="outline"
                            size="lg"
                            className="flex-1 rounded-2xl md:py-7 border-slate-200 dark:border-slate-700 h-10 md:h-12 text-xs md:text-sm"
                            asChild
                          >
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github size={16} className="mr-2" /> Code
                            </a>
                          </Button>
                        ) : (
                          <Button
                            disabled
                            size="lg"
                            variant="outline"
                            className="flex-1 rounded-2xl opacity-50 h-10 md:h-12 text-xs md:text-sm bg-slate-50 dark:bg-slate-800"
                          >
                            <Lock size={14} className="mr-2" /> Private
                          </Button>
                        )}

                        {project.live ? (
                          <Button
                            size="lg"
                            className="flex-1 bg-purple-600 text-white rounded-2xl shadow-xl hover:bg-purple-700 h-10 md:h-12 text-xs md:text-sm"
                            asChild
                          >
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink size={16} className="mr-2" /> Live
                            </a>
                          </Button>
                        ) : (
                          <Button
                            disabled
                            size="lg"
                            variant="outline"
                            className="flex-1 rounded-2xl opacity-50 h-10 md:h-12 text-xs md:text-sm bg-slate-50 dark:bg-slate-800"
                          >
                            <Lock size={14} className="mr-2" /> No Demo
                          </Button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <button
            onClick={nextStep}
            className="absolute right-0 md:right-4 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 dark:text-white text-slate-800 hover:bg-purple-600 hover:text-white transition-all hidden sm:flex shadow-2xl"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        <div className="flex gap-3 mt-12 md:mt-16">
          {projects.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setIndex(i)}
              initial={false}
              animate={{
                width: i === index ? 40 : 12,
                backgroundColor: i === index ? "#9333ea" : "#cbd5e1",
              }}
              className="h-3 rounded-full transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
