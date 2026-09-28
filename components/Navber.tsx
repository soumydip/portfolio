"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleScroll = (
    e: React.MouseEvent<HTMLButtonElement>,
    targetId: string,
    name: string,
  ) => {
    e.preventDefault();

    const element = document.getElementById(targetId);

    if (!element) {
      setIsOpen(false);
      return;
    }

    setActive(name);
    setIsOpen(false);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.link))
      .filter((element): element is HTMLElement => element !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visibleSections.length) return;

        const activeId = visibleSections[0].target.id;

        const current = navItems.find((item) => item.link === activeId);

        if (current) {
          setActive(current.name);
        }
      },
      {
        root: null,

        rootMargin: "-25% 0px -60% 0px",

        threshold: [0, 0.2, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className="
          fixed
          top-0
          left-0
          right-0
          z-50
          w-full
        "
      >
        <div
          className=" flex items-center justify-between border-b border-black/5 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-md

            dark:border-white/5
            dark:bg-slate-950/80

            sm:px-6
          "
        >
          <button
            type="button"
            onClick={(e) => handleScroll(e, "home", "Home")}
            className="
            text-xl
            font-bold
            italic
            tracking-tighter
            text-slate-900
            dark:text-white
            sm:text-2xl
            "
            aria-label="Go to home"
          >
            SOUMYA
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = active === item.name;

              return (
                <li
                  key={item.name}
                  className="
                    relative
                    flex
                    items-center
                    px-3
                    py-2
                  "
                >
                  <button
                    type="button"
                    onClick={(e) => handleScroll(e, item.link, item.name)}
                    className={`
                      relative
                      z-10
                      rounded-lg
                      px-2
                      py-1
                      text-sm
                      font-medium
                      transition-colors
                      duration-200

                      ${
                        isActive
                          ? "text-purple-600 dark:text-purple-400"
                          : "text-slate-600 hover:text-purple-500 dark:text-slate-300"
                      }
                    `}
                  >
                    {item.name}
                  </button>

                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="
                        absolute
                        bottom-0
                        left-1/2
                        h-0.5
                        w-6
                        -translate-x-1/2
                        rounded-full
                        bg-purple-500
                      "
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-lg
              border
              border-slate-200
              bg-white
              text-slate-900
              transition-colors
              hover:bg-slate-100

              dark:border-slate-800
              dark:bg-slate-900
              dark:text-white
              dark:hover:bg-slate-800

              md:hidden
            "
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
          >
            <Menu size={21} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setIsOpen(false)}
              className="
                fixed
                inset-0
                z-[60]
                bg-black/50
                md:hidden
              "
              aria-hidden="true"
            />

            {/* Drawer */}

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.22,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                fixed
                right-0
                top-0
                z-[70]
                flex
                h-dvh
                w-[82%]
                max-w-sm
                flex-col
                bg-white
                p-5
                shadow-2xl
                will-change-transform

                dark:bg-slate-950

                sm:w-[70%]
                md:hidden
              "
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              {/* Header */}

              <div className="flex items-center justify-between">
                <span
                  className="
                    text-xl
                    font-bold
                    italic
                    tracking-tighter
                    text-slate-900
                    dark:text-white
                  "
                >
                  SOUMYA
                </span>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-lg
                    text-slate-900
                    transition-colors
                    hover:bg-slate-100

                    dark:text-white
                    dark:hover:bg-slate-800
                  "
                  aria-label="Close navigation menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Divider */}

              <div
                className="
                  my-6
                  h-px
                  bg-slate-200
                  dark:bg-slate-800
                "
              />

              {/* Navigation */}

              <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = active === item.name;

                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={(e) => handleScroll(e, item.link, item.name)}
                      className={`
                        w-full
                        rounded-xl
                        px-4
                        py-3.5
                        text-left
                        text-base
                        font-semibold
                        transition-colors
                        duration-150

                        ${
                          isActive
                            ? "bg-purple-600 text-white"
                            : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
                        }
                      `}
                    >
                      {item.name}
                    </button>
                  );
                })}
              </nav>

              {/* Footer */}

              <div
                className="
                  mt-auto
                  border-t
                  border-slate-200
                  pt-5
                  text-center

                  dark:border-slate-800
                "
              >
                <p className="text-xs text-slate-500">
                  © 2026 Soumyadip Portfolio
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
