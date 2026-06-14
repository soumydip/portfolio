"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

const skills = [
  // Languages
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    desc: "Enhancing code reliability with static typing across full-stack applications.",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    desc: "Core language for building interactive and dynamic web applications.",
  },

  // Frontend
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    desc: "Building SEO-friendly, high-performance full-stack applications with App Router.",
  },
  {
    name: "React.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    desc: "Building component-based UIs with efficient state management.",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    desc: "Crafting modern, responsive designs with utility-first CSS.",
  },

  // Backend
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    desc: "Powering server-side applications with fast, scalable execution.",
  },


  // Databases
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    desc: "Designing relational databases with complex queries, RLS and migrations.",
  },
  {
    name: "Supabase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    desc: "Building scalable backends with auth, real-time DB and storage.",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    desc: "Designing flexible NoSQL databases for modern web applications.",
  },
  {
    name: "Redis",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    desc: "High-performance caching, session management and job queue systems.",
  },

  // Infrastructure

  {
    name: "BullMQ",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    desc: "Implementing robust job queues and background processing for scalable applications.",
  },
  {
    name: "WebSockets",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
    desc: "Enabling real-time, bidirectional communication for live features.",
  },
  // Tools
  {
    name: "Git & GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    desc: "Version control and collaborative development through industry standards.",
  },
];

export default function Skills() {
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) return;
    const intervalId = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 2500);
    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="flex flex-col items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 dark:text-white relative group cursor-default"
          >
            Technical <span className="text-purple-600">Expertise</span>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-0.75 w-1/2 bg-purple-500 rounded-full transition-all duration-500 group-hover:w-full" />
          </motion.h2>
        </div>

        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {skills.map((skill, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  {/* --- Hover Card Container --- */}
                  <div className="group flex flex-col items-center text-center p-8 rounded-3xl h-75 border border-slate-200 dark:border-slate-800 transition-all duration-500 bg-slate-200 dark:bg-slate-900/50 hover:bg-purple-400  dark:hover:bg-purple-700 hover:shadow-2xl hover:shadow-purple-500/40 hover:border-transparent">
                    {/* Logo Section */}
                    <div className="relative w-16 h-16 mb-6 transition-all duration-500 group-hover:scale-110 ">
                      <Image
                        src={skill.logo}
                        alt={skill.name}
                        fill
                        loading="lazy"
                        className="object-contain"
                      />
                    </div>

                    {/* Title Section */}
                    <h3 className="text-xl font-bold mb-3 transition-colors duration-500 text-slate-800 dark:text-white group-hover:text-white">
                      {skill.name}
                    </h3>

                    {/* Description Section */}
                    <p className="text-sm leading-relaxed transition-colors duration-500 text-slate-500 dark:text-slate-400 group-hover:text-purple-50">
                      {skill.desc}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-10 md:absolute md:top-1/2 md:w-full md:justify-between md:mt-0 md:-translate-y-1/2 md:px-2 pointer-events-none">
              <button
                onClick={() => api?.scrollPrev()}
                className="pointer-events-auto p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 hover:text-purple-600 transition-all active:scale-90"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => api?.scrollNext()}
                className="pointer-events-auto p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 hover:text-purple-600 transition-all active:scale-90"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
