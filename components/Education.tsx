"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Trophy,
  BookOpen,
} from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Swami Vivekananda University",
    location: "Kolkata, West Bengal",
    duration: "2023 - 2027",
    result: "Average 8.0 YGPA (Ongoing)",
    description:
      "Focusing on Software Engineering, Data Structures, and Web Technologies.",
    icon: <GraduationCap size={22} />,
  },
  {
    degree: "Higher Secondary (Class XII)",
    institution: "Changrachak Jagadishchandra High School",
    location: "Purba Medinipur, West Bengal",
    duration: "2021 - 2023",
    result: "74% Marks (HS)",
    description:
      "Science Stream with Mathematics, Physics, Chemistry, and Biology.",
    icon: <BookOpen size={22} />,
  },
  {
    degree: "Secondary School (Class X)",
    institution: "Kalai Gobardhan High School",
    location: "Purba Medinipur, West Bengal",
    duration: "2015 - 2019",
    result: "91.28% Marks (Madhyamik)",
    description: "Foundation in General Science and Mathematics.",
    icon: <Trophy size={22} />,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6 dark:bg-slate-950 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white relative group inline-block cursor-default"
          >
            Educa<span className="text-purple-600">tion</span>
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-0.75 w-1/2 bg-purple-500 rounded transition-all duration-500 group-hover:w-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
          </motion.h2>
        </div>

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-800 before:to-transparent">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded border-4 border-white dark:border-slate-950 bg-slate-100 dark:bg-slate-900 shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-200 dark:group-hover:border-purple-900">
                <div className="text-purple-600 group-hover:text-white transition-colors">
                  {edu.icon}
                </div>
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 md:p-8 rounded border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl shadow-sm hover:shadow-purple-500/10 hover:border-purple-500/50 transition-all duration-500">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold text-purple-600 flex items-center gap-1.5 bg-purple-50 dark:bg-purple-900/20 px-3 py-1 rounded">
                    <Calendar size={14} /> {edu.duration}
                  </span>
                  <div className="px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-[10px] font-black tracking-tight border border-slate-200 dark:border-slate-700">
                    {edu.result}
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 transition-colors duration-300">
                  {edu.degree}
                </h3>

                <div className="text-sm md:text-base font-semibold text-slate-600 dark:text-slate-300 mb-4 flex items-center gap-2">
                  {edu.institution}
                </div>

                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 italic">
                  {edu.description}
                </p>

                <div className="flex items-center gap-2 text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold pt-4 border-t border-slate-100 dark:border-slate-800">
                  <MapPin size={12} className="text-purple-500" />
                  {edu.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
