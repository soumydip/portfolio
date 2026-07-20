"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, MoonStar } from "lucide-react";
import { useTheme } from "next-themes";
const navItems = [
  { name: "Home", link: "home" },
  { name: "About", link: "about" },
  { name: "Skills", link: "skills" },
  { name: "Open Source", link: "npm" },
  { name: "Projects", link: "projects" },
  { name: "Education", link: "education" },
  { name: "Contact", link: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleScroll = (
    e: React.MouseEvent,
    targetId: string,
    name: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActive(name);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (!mounted) return;

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const current = navItems.find(
            (item) => item.link === entry.target.id,
          );
          if (current) setActive(current.name);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.link);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [mounted]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 inset-x-0 z-50 w-full"
      >
        <div className="flex items-center justify-between border-b border-black/5 dark:border-white/5 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl px-6 py-3 shadow-sm">
          {/* Logo */}
          <button
            onClick={(e) => handleScroll(e, "home", "Home")}
            className="text-2xl font-bold italic tracking-tighter text-slate-900 dark:text-white"
          >
            SOUMYA
          </button>

          <ul className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              return (
                <li
                  key={item.name}
                  className="relative flex flex-col items-center px-4 py-2"
                >
                  <button
                    onClick={(e) => handleScroll(e, item.link, item.name)}
                    className={`relative z-10 text-sm font-medium transition-colors duration-300 ${
                      active === item.name
                        ? "text-purple-600 dark:text-purple-400"
                        : "text-slate-600 dark:text-slate-300 hover:text-purple-500"
                    }`}
                  >
                    <motion.span
                      initial={false}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 -z-10 bg-purple-500/15 rounded opacity-0 scale-75 transition-all"
                      style={{ padding: "8px 16px", margin: "-8px -16px" }}
                    />
                    {item.name}
                  </button>

                  {active === item.name && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 h-1 w-1/2 rounded bg-purple-500"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2 border rounded px-2 border-slate-200 dark:border-slate-800">
            <button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="rounded p-2 text-slate-900 dark:text-white flex items-center gap-2"
            >
              {mounted ? (
                resolvedTheme === "dark" ? (
                  <Sun size={18} />
                ) : (
                  <MoonStar size={18} />
                )
              ) : (
                <div className="w-[18px] h-[18px]" />
              )}
              {mounted && (
                <span className="text-xs font-semibold hidden sm:block uppercase tracking-wider">
                  {resolvedTheme === "dark" ? "Light" : "Dark"}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 text-slate-900 dark:text-white"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-60"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[75%] max-w-sm bg-white dark:bg-slate-950 shadow-2xl z-70 p-6 flex flex-col"
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Sidebar Links */}
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={(e) => handleScroll(e, item.link, item.name)}
                    className={`block w-full rounded-xl px-4 py-4 text-left text-lg font-bold transition-all ${
                      active === item.name
                        ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-purple-600"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 text-center">
                <p className="text-xs text-slate-500">
                  &copy; 2025 Soumyadip Portfolio
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
