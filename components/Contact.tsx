"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { ContactForm } from "./contactFrom";

const socialLinks = [
  {
    name: "GitHub",
    icon: <Github size={20} />,
    link: "https://github.com/soumydip",
    color: "hover:text-black dark:hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin size={20} />,
    link: "https://www.linkedin.com/in/soumyadip-maity-183ba3310/",
    color: "hover:text-blue-600 dark:hover:text-blue-400",
  },
  {
    name: "X",
    icon: <Twitter size={20} />,
    link: "https://x.com/soumyadip2maity",
    color: "hover:text-sky-500 dark:hover:text-sky-400",
  },
  {
    name: "Email",
    icon: <Mail size={20} />,
    link: "mailto:maitysoumyadip22@gmail.com",
    color: "hover:text-purple-600 dark:hover:text-purple-400",
  },
];



export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-white dark:bg-slate-950 transition-colors duration-500"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6 relative group inline-block pb-3"
          >
            Let&apos;s <span className="text-purple-600">Connect</span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-1/2 bg-purple-500 rounded transition-all duration-500 group-hover:w-full" />
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            I&apos;m open to new opportunities. Reach out through any platform!
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-12 gap-x-6">
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`flex items-center justify-center gap-3 text-slate-500 transition-all group ${social.color}`}
            >
              <span className="p-3 rounded bg-slate-100 dark:bg-slate-900 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 transition-colors">
                {social.icon}
              </span>
              <div className="flex flex-col items-start">
                <span className="font-semibold text-slate-800 dark:text-slate-300 group-hover:text-inherit">
                  {social.name}
                </span>
                <span className="text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-all flex items-center">
                  Follow <ArrowUpRight size={10} className="ml-1" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
      <ContactForm/>
    </section>
  );
}
