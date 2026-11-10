"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import {
  Layout,
  Server,
  Terminal,
  CheckCircle2,
  Layers,
} from "lucide-react";

export function Skills() {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categoryMeta: Record<
    string,
    {
      icon: React.ReactNode;
      badgeText: string;
      colorClass: string;
      accentBg: string;
      hoverBorder: string;
    }
  > = {
    Frontend: {
      icon: <Layout className="w-5 h-5 text-indigo-500" />,
      badgeText: "Client-Side Engineering",
      colorClass: "from-indigo-500/10 via-sky-500/5 to-transparent",
      accentBg: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
      hoverBorder: "hover:border-indigo-400/70",
    },
    Backend: {
      icon: <Server className="w-5 h-5 text-emerald-500" />,
      badgeText: "APIs & Databases",
      colorClass: "from-emerald-500/10 via-teal-500/5 to-transparent",
      accentBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      hoverBorder: "hover:border-emerald-400/70",
    },
    Tools: {
      icon: <Terminal className="w-5 h-5 text-amber-500" />,
      badgeText: "DevOps & Core CS",
      colorClass: "from-amber-500/10 via-orange-500/5 to-transparent",
      accentBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
      hoverBorder: "hover:border-amber-400/70",
    },
  };

  const categories = ["All", "Frontend", "Backend", "Tools"];

  const filteredCategories =
    selectedCategory === "All"
      ? skills
      : skills.filter((c) => c.title.toLowerCase() === selectedCategory.toLowerCase());

  // Framer Motion variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants: Variants = {
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
    <section id="skills" className="py-20 sm:py-28 relative overflow-hidden bg-zinc-50/50 dark:bg-zinc-950/40">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            badge="Technical Competencies"
            title="Core Skills Grouped by"
            titleHighlight="Category"
            subtitle="Hands-on experience developing across the full stack with modern frontend libraries, backend runtimes, and engineering tooling."
          />
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {categories.map((cat) => {
            const isActive = selectedFilterMatch(selectedCategory, cat);
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                aria-pressed={isActive}
                className={`text-xs sm:text-sm font-medium px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/25 scale-105"
                    : "bg-white/90 dark:bg-zinc-900/90 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white border border-zinc-200/80 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* 3-Column Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredCategories.map((category) => {
            const meta = categoryMeta[category.title] || {
              icon: <Layers className="w-5 h-5 text-indigo-500" />,
              badgeText: "Core Technology",
              colorClass: "from-indigo-500/10 to-transparent",
              accentBg: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
              hoverBorder: "hover:border-indigo-400/70",
            };

            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                className="h-full flex"
              >
                <Card
                  hoverEffect={true}
                  className={`p-6 sm:p-7 flex flex-col justify-between w-full h-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/90 dark:border-zinc-800/90 ${meta.hoverBorder} transition-all duration-300 rounded-3xl relative overflow-hidden group`}
                >
                  {/* Subtle top-right corner gradient */}
                  <div
                    className={`absolute -top-12 -right-12 w-36 h-36 bg-gradient-to-br ${meta.colorClass} rounded-full blur-xl pointer-events-none`}
                  />

                  <div>
                    {/* Header: Icon, Title, and Subtitle */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800/90 border border-zinc-200/80 dark:border-zinc-700/70 shadow-xs group-hover:scale-105 transition-transform duration-300">
                          {meta.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-zinc-950 dark:text-zinc-50 tracking-tight">
                            {category.title}
                          </h3>
                          <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md border ${meta.accentBg}`}>
                            {meta.badgeText}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Skill Pills Matrix */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => {
                        const isAdvanced = skill.level === "Advanced";
                        const isProficient = skill.level === "Proficient";

                        return (
                          <div
                            key={skill.name}
                            className="group/skill inline-flex items-center justify-between gap-2 px-3 py-1.5 rounded-xl bg-zinc-100/90 dark:bg-zinc-800/70 hover:bg-white dark:hover:bg-zinc-800 border border-zinc-200/70 dark:border-zinc-700/60 hover:border-indigo-400 dark:hover:border-indigo-400 transition-all duration-200 shadow-2xs"
                          >
                            <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200 group-hover/skill:text-indigo-600 dark:group-hover/skill:text-indigo-400 transition-colors">
                              {skill.name}
                            </span>
                            <span
                              className={`text-[9px] px-1.5 py-0.5 rounded-md font-mono font-medium ${
                                isAdvanced
                                  ? "bg-purple-100 text-purple-700 dark:bg-purple-950/70 dark:text-purple-300"
                                  : isProficient
                                  ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-950/70 dark:text-indigo-300"
                                  : "bg-zinc-200/70 text-zinc-600 dark:bg-zinc-700/60 dark:text-zinc-300"
                              }`}
                            >
                              {skill.level}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Card Footer: Count & Verification */}
                  <div className="mt-8 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                    <span className="font-mono text-[11px]">
                      {category.skills.length} competencies
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium text-[11px] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Production Tested
                    </span>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function selectedFilterMatch(current: string, target: string) {
  return current.toLowerCase() === target.toLowerCase();
}
