"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight, CheckCircle2, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Hero() {
  const { personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2200);
    } catch (error) {
      console.error("Could not copy email address:", error);
    }
  };

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
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="hero"
      aria-label="Hero Introduction"
      className="relative flex min-h-[85vh] items-center overflow-hidden py-28 sm:py-32"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <motion.div
          className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-5">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-emerald-500"
              />
              {personal.status.text}
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold leading-tight tracking-tight text-zinc-950 dark:text-white sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Md Shahadat Hossain Khan
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-xl font-medium text-zinc-700 dark:text-zinc-300 sm:text-2xl"
          >
            CSE engineer and Full Stack Web developer
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg"
          >
            {personal.bio}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <a
              href="#projects"
              id="hero-cta-view-projects"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              View projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              id="hero-cta-contact-me"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-900 focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <Mail className="h-4 w-4 text-indigo-500" aria-hidden="true" />
              Contact me
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm text-zinc-500 dark:text-zinc-400 lg:justify-start"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {personal.location}
            </span>
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-zinc-900 dark:hover:text-white"
              aria-label="GitHub (opens in new tab)"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-zinc-900 dark:hover:text-white"
              aria-label="LinkedIn (opens in new tab)"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="transition-colors hover:text-zinc-900 dark:hover:text-white"
              aria-label={
                copiedEmail
                  ? "Email address copied to clipboard"
                  : "Copy email address to clipboard"
              }
              title="Copy email address"
            >
              {copiedEmail ? (
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              ) : (
                <Mail className="h-4 w-4" />
              )}
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="mx-auto w-full max-w-xs sm:max-w-sm lg:col-span-5 lg:max-w-md"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900">
            <Image
              src="/profile.jpg"
              alt="Md Shahadat Hossain Khan"
              fill
              sizes="(max-width: 640px) 320px, (max-width: 1024px) 384px, 448px"
              priority
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
