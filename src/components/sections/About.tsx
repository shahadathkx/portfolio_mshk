"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Cpu,
  GraduationCap,
  Zap,
  CheckCircle2,
  Terminal,
  MapPin,
  FileText,
  ArrowUpRight,
} from "lucide-react";

export function About() {
  const { personal } = portfolioData;

  const coreStrengths = [
    {
      icon: <Cpu className="w-5 h-5 text-indigo-500" />,
      title: "CS Engineering Foundations",
      desc: "Strong grasp of Data Structures, Algorithms, Computer Architecture, and Object-Oriented Design.",
      color: "from-indigo-500/10 to-indigo-500/0",
      border: "hover:border-indigo-400/60",
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: "Modern Full-Stack Fluency",
      desc: "End-to-end development with Next.js, React, Node.js, Express, MongoDB, and Tailwind CSS.",
      color: "from-amber-500/10 to-amber-500/0",
      border: "hover:border-amber-400/60",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
      title: "Quality & Performance First",
      desc: "Writing modular, self-documenting code, responsive layouts, and optimized database queries.",
      color: "from-emerald-500/10 to-emerald-500/0",
      border: "hover:border-emerald-400/60",
    },
  ];

  // Motion variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            badge="About Me"
            title="Bridging Theoretical CS with"
            titleHighlight="Modern Full Stack Engineering"
            subtitle="A passionate Computer Science Engineering student and developer dedicated to crafting scalable, resilient, and intuitive web solutions."
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Left Narrative Column */}
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
            {/* Primary Bio Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/90 dark:border-zinc-800/90 shadow-sm space-y-5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800/80 pb-4">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-semibold uppercase tracking-wider">
                  <Terminal className="w-4 h-4" />
                  <span>Developer Bio & Philosophy</span>
                </div>
                <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-800/60 px-2.5 py-1 rounded-md">
                  CSE &bull; Full Stack
                </span>
              </div>

              {/* Featured Lead Bio */}
              <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40">
                <p className="text-sm sm:text-base font-medium text-indigo-950 dark:text-indigo-200 leading-relaxed italic">
                  &ldquo;{personal.bio}&rdquo;
                </p>
              </div>

              {/* Long Bio Paragraphs */}
              <div className="space-y-4 pt-1">
                {personal.aboutLong.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Skill Tags */}
              <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 flex flex-wrap gap-2">
                <Badge variant="primary" size="sm">
                  Full Stack Development
                </Badge>
                <Badge variant="accent" size="sm">
                  REST APIs & Databases
                </Badge>
                <Badge variant="success" size="sm">
                  Open for Internships 2026
                </Badge>
                <Badge variant="outline" size="sm">
                  Data Structures & Algorithms
                </Badge>
              </div>
            </div>

            {/* Core Strengths Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {coreStrengths.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl bg-zinc-50/90 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 flex flex-col justify-between ${item.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
                >
                  <div className="mb-3 p-2.5 rounded-xl bg-white dark:bg-zinc-800 w-fit shadow-xs">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-xs text-zinc-900 dark:text-zinc-100 mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Stats, Profile Summary & Education */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-5">
            {/* Quick Profile Summary Card with /profile.jpg */}
            <div className="p-5 rounded-3xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/90 dark:border-zinc-800/90 shadow-sm flex items-center gap-4 group">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 border-2 border-indigo-500/40 shadow-sm">
                <Image
                  src="/profile.jpg"
                  alt="Md Shahadat Hossain Khan - Profile portrait thumbnail"
                  width={64}
                  height={64}
                  sizes="64px"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 truncate">
                  {personal.name}
                </h4>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium truncate">
                  CSE Engineer & Full Stack Web Developer
                </p>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-zinc-400 shrink-0" />
                  <span className="truncate">{personal.location} &bull; Open to Remote</span>
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {personal.stats.map((stat, idx) => (
                <Card
                  key={idx}
                  hoverEffect={true}
                  className="p-5 flex flex-col items-center text-center justify-center bg-gradient-to-b from-white/90 to-zinc-50/90 dark:from-zinc-900/90 dark:to-zinc-950/90 border-zinc-200/80 dark:border-zinc-800/80"
                >
                  <span className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-tr from-indigo-600 via-indigo-500 to-sky-400 dark:from-indigo-400 dark:via-sky-300 dark:to-emerald-300 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                  <span className="mt-2 text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                    {stat.label}
                  </span>
                  <span className="mt-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                    {stat.subtext}
                  </span>
                </Card>
              ))}
            </div>

            {/* Academic Focus Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-tr from-indigo-600/10 via-sky-500/5 to-purple-600/10 border border-indigo-200/80 dark:border-indigo-900/60 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-500/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                    Academic Background
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    B.Sc. in Computer Science and Engineering
                  </p>
                </div>
              </div>

              <p className="mt-3.5 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Actively learning and seeking internship positions where I can contribute to production codebases, collaborate in agile sprints, and ship performant features.
              </p>

              <div className="mt-4 pt-3 border-t border-indigo-100 dark:border-indigo-900/40 flex items-center justify-between text-xs">
                <span className="text-zinc-500 dark:text-zinc-400 font-medium">Availability:</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Ready Immediately (2026)
                </span>
              </div>
            </div>

            {/* Quick Contact & CV Actions */}
            <div className="p-4 rounded-2xl bg-zinc-100/70 dark:bg-zinc-900/50 border border-zinc-200/70 dark:border-zinc-800/70 flex items-center justify-between gap-3">
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-700/80 border border-zinc-200 dark:border-zinc-700 shadow-2xs transition-all hover:scale-[1.02]"
              >
                <FileText className="w-3.5 h-3.5 text-indigo-500" />
                <span>Resume / CV</span>
              </a>

              <a
                href="#contact"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-700 shadow-xs shadow-indigo-500/20 transition-all hover:scale-[1.02]"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
