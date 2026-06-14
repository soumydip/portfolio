import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navber";
import Home from "@/components/Home";
import Footer from "@/components/Footer";
import Education from "@/components/Education";

const About = dynamic(() => import("@/components/About"), {
  loading: () => <div className="h-screen bg-transparent" />,
  ssr: true,
});

const Achievements = dynamic(() => import("@/components/Achievements"), {
  ssr: true,
});

const Skills = dynamic(() => import("@/components/Skill"), {
  ssr: true,
});

const Projects = dynamic(() => import("@/components/ProjectShowcase"), {
  ssr: true,
});

const Contact = dynamic(() => import("@/components/Contact"), {
  ssr: true,
});
const Npm = dynamic(() => import("@/components/NpmSection"), {
  ssr: true,
});

const GitState = dynamic(() => import("@/components/GitState"), {
  ssr: true,
});

export default function Page() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Home />
      <About />
      <GitState />
      <Skills />
      <Achievements />
      <Npm />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
