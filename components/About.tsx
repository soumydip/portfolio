"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 bg-linear-to-b from-slate-50 via-slate-100/60 to-slate-50 dark:from-slate-950 dark:via-slate-900/60 dark:to-slate-950 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight relative group inline-block pb-3">
            About
            <span className="text-purple-600 dark:text-purple-500 mx-2">
              Me
            </span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-1/2 bg-purple-500 rounded transition-all duration-500 group-hover:w-full" />
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            I build modern web systems that balance performance, simplicity and
            long-term maintainability.
          </p>
        </motion.div>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            My journey into web development started with curiosity about how
            digital systems work. Over time, that curiosity evolved into a focus
            on building production-grade applications using
            <span className="font-medium mx-1.5 text-purple-600 dark:text-purple-400">
              TypeScript
            </span>
            ,
            <span className="font-medium mx-1.5 text-purple-600 dark:text-purple-400">
              Next.js
            </span>
            and
            <span className="font-medium mx-1.5 text-purple-600 dark:text-purple-400">
              Node.js
            </span>
            .
          </p>

          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            I focus on clean architecture and scalability — working with
            <span className="font-medium mx-1.5 text-purple-600 dark:text-purple-400">
              Supabase
            </span>
            ,
            <span className="font-medium mx-1.5 text-purple-600 dark:text-purple-400">
              Redis
            </span>
            and
            <span className="font-medium mx-1.5 text-purple-600 dark:text-purple-400">
              BullMQ
            </span>
            for real-world backend systems. I&#39;ve shipped apps to production,
            including
            <span className="font-medium mx-1.5 text-purple-600 dark:text-purple-400 hover:underline ">
              <Link href="https://www.ucoder.in?utm_source=soumyadip_portfoilo&utm_medium=referral" target="_blank">
                Ucoder
              </Link>
            </span>
            and
            <span className="font-medium mx-1.5 text-purple-600 dark:text-purple-400 hover:underline ">
              <Link href="https://insights.ucoder.in?utm_source=soumyadip_portfoilo&utm_medium=referral" target="_blank">
                Ucoder Insights
              </Link>
            </span>
            — an analytics platform with its own
            <span className="font-medium mx-1.5 text-purple-600 dark:text-purple-400">
              npm SDK
            </span>
            .
          </p>

          {/* Quote */}
          <div className="rounded border border-slate-200/60 dark:border-slate-800 bg-gray-300/50 dark:bg-slate-900/50 backdrop-blur-md px-6 py-5">
            <p className="text-slate-700 dark:text-slate-300 italic leading-relaxed">
              &#34;I believe great software is built when clarity, performance
              and simplicity come together.&#34;
            </p>
          </div>

          {/* Para 3 */}
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Beyond coding, I enjoy exploring new infrastructure patterns and
            contributing to open-source. I&#39;m actively maintaining
            <span className="font-medium mx-1.5 text-purple-600 dark:text-purple-400">
              Ucoder Insights
            </span>
            in production — recently shipping
            <span className="font-medium mx-1.5 text-purple-600 dark:text-purple-400">
              rage click detection
            </span>
            ,
            <span className="font-medium mx-1.5 text-purple-600 dark:text-purple-400">
              AI crawler tracking
            </span>
            and
            <span className="font-medium mx-1.5 text-purple-600 dark:text-purple-400">
              bot detection
            </span>
            — because building is never really done.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
