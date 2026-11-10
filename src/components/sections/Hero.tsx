"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import {
  ArrowRight,
  Mail,
  Sparkles,
  Code2,
  Database,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import confetti from "canvas-confetti";

export function Hero() {
  const { personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const triggerCelebrate = () => {
    confetti({
      particleCount: 85,
      spread: 75,
      origin: { y: 0.65 },
      colors: ["#6366f1", "#38bdf8", "#10b981", "#a855f7", "#f59e0b"],
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  // Framer Motion variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const photoVariants: Variants = {
    hidden: { opacity: 0, scale: 0.94, y: 26 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="hero"
      aria-label="Hero Introduction"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glows with overflow boundaries */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] max-w-full h-[360px] bg-gradient-to-tr from-indigo-500/20 via-sky-400/15 to-purple-500/20 rounded-full blur-3xl pointer-events-none -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-10 right-4 sm:right-10 w-[260px] max-w-full h-[260px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text, Tagline & CTAs */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status Pill */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-indigo-50/90 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/70 shadow-xs backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold text-indigo-950 dark:text-indigo-200 tracking-wide">
                  {personal.status.text}
                </span>
              </div>
            </motion.div>

            {/* Name Headline - Single H1 for SEO */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.12]"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 dark:from-indigo-400 dark:via-sky-300 dark:to-teal-300 bg-clip-text text-transparent">
                Md Shahadat Hossain Khan
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.div variants={itemVariants} className="mt-4">
              <div className="inline-block px-3.5 py-1.5 rounded-xl bg-zinc-100/90 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/80 backdrop-blur-sm shadow-xs">
                <p className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-zinc-800 via-indigo-700 to-sky-700 dark:from-zinc-100 dark:via-indigo-300 dark:to-sky-300 bg-clip-text text-transparent font-sans tracking-tight">
                  CSE engineer and Full Stack Web developer
                </p>
              </div>
            </motion.div>

            {/* Bio summary */}
            <motion.p
              variants={itemVariants}
              className="mt-5 text-base sm:text-lg text-zinc-700 dark:text-zinc-300 max-w-xl leading-relaxed"
            >
              {personal.bio}
            </motion.p>

            {/* Tech Badges Row */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-wrap justify-center lg:justify-start gap-2 max-w-lg"
              aria-label="Core Technical Stack"
            >
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Node.js",
                "Express",
                "MongoDB",
                "Tailwind CSS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono font-medium rounded-lg bg-zinc-100 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-zinc-700/70 hover:border-indigo-400 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Two Action Buttons (View Projects, Contact Me) */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3.5 sm:gap-4 w-full"
            >
              {/* Button 1: View Projects */}
              <motion.a
                href="#projects"
                id="hero-cta-view-projects"
                aria-label="View Projects Section"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-base text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-lg shadow-indigo-500/25 dark:shadow-indigo-500/20 border border-indigo-400/30 transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {/* Button 2: Contact Me */}
              <motion.a
                href="#contact"
                id="hero-cta-contact-me"
                aria-label="Navigate to Contact Section"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-base text-zinc-900 dark:text-zinc-100 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800/90 dark:hover:bg-zinc-700/90 border border-zinc-300/80 dark:border-zinc-700/80 shadow-sm transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500 group"
              >
                <Mail className="w-4 h-4 text-indigo-500 group-hover:scale-110 transition-transform" />
                <span>Contact Me</span>
              </motion.a>

              {/* Celebrate easter egg */}
              <motion.button
                type="button"
                onClick={triggerCelebrate}
                id="hero-celebrate-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                aria-label="Trigger celebration confetti animation"
                title="Celebrate!"
                className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-amber-500 shadow-xs cursor-pointer transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <Sparkles className="w-5 h-5 animate-pulse" />
              </motion.button>
            </motion.div>

            {/* Social links row & Location */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-zinc-600 dark:text-zinc-400"
            >
              <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 bg-zinc-100/80 dark:bg-zinc-800/60 px-3 py-1.5 rounded-lg border border-zinc-200/70 dark:border-zinc-700/60">
                <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                <span>Dhaka, Bangladesh</span>
              </div>

              <div className="h-4 w-px bg-zinc-300 dark:bg-zinc-700 hidden sm:block" aria-hidden="true" />

              <div className="flex items-center gap-2">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-950 dark:hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500"
                  aria-label="View Md Shahadat Hossain Khan on GitHub (opens in new tab)"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-950 dark:hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500"
                  aria-label="Connect with Md Shahadat Hossain Khan on LinkedIn (opens in new tab)"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-950 dark:hover:text-white transition-colors relative cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500"
                  aria-label={copiedEmail ? "Email address copied to clipboard" : "Copy email address to clipboard"}
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Mail className="w-4 h-4" />
                  )}
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Photo Card at /public/profile.jpg with Responsive Scaling */}
          <motion.div
            className="lg:col-span-5 flex justify-center relative w-full"
            variants={photoVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-72 sm:w-80 md:w-[380px] max-w-[calc(100vw-3rem)] aspect-square">
              {/* Multi-layer Gradient Halo Glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500 via-sky-400 to-purple-600 opacity-35 blur-2xl animate-pulse"
              />

              {/* Main Photo Card using /profile.jpg */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white/70 dark:border-zinc-700/80 shadow-2xl bg-zinc-900 group">
                <Image
                  src="/profile.jpg"
                  alt="Md Shahadat Hossain Khan - CSE Engineer & Full Stack Web Developer wearing formal shirt and tie"
                  width={440}
                  height={440}
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 440px"
                  priority
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle dark gradient overlay at base for contrast */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none"
                />

                {/* Glass banner on avatar */}
                <div className="absolute bottom-3 inset-x-3 p-3.5 rounded-2xl bg-zinc-900/85 backdrop-blur-md border border-zinc-700/60 text-white flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold leading-tight">Available for Hire</p>
                      <p className="text-[10px] text-zinc-400">Internship & Full-time 2026</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-semibold">
                    CSE &bull; Engineer
                  </span>
                </div>
              </div>

              {/* Floating Badge 1 - Top Left */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="absolute -top-3 left-1 sm:-top-4 sm:-left-6 px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border border-zinc-200/90 dark:border-zinc-700/80 shadow-xl flex items-center gap-2.5 z-20"
              >
                <div className="w-8 h-8 rounded-xl bg-indigo-100 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shadow-xs">
                  <Code2 className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400">Full Stack</p>
                  <p className="text-xs font-bold text-zinc-900 dark:text-white">Next.js & MERN</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 - Bottom Right */}
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="absolute -bottom-3 right-1 sm:-bottom-4 sm:-right-6 px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border border-zinc-200/90 dark:border-zinc-700/80 shadow-xl flex items-center gap-2.5 z-20"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-xs">
                  <Database className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400">Architecture</p>
                  <p className="text-xs font-bold text-zinc-900 dark:text-white">APIs & MongoDB</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
