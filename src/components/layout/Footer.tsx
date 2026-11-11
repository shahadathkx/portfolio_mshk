"use client";

import {
  ArrowUp,
  Mail,
  Phone,
} from "lucide-react";
import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "@/components/ui/Icons";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/50 py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5">
              <span className="font-bold text-base text-zinc-900 dark:text-zinc-100">
                {portfolioData.personal.name}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                Internship Ready
              </span>
            </div>
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              Crafting high-performance web experiences with Next.js, React & Node.js.
            </p>
          </div>

          {/* Socials & Top Scroll Button */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
            <a
              href={portfolioData.personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Md Shahadat Hossain Khan on GitHub (opens in new tab)"
              className="p-2.5 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Md Shahadat Hossain Khan on LinkedIn (opens in new tab)"
              className="p-2.5 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.socials.email}
              aria-label="Send direct email to Md Shahadat Hossain Khan"
              className="p-2.5 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <Mail className="w-4 h-4" />
            </a>
            {portfolioData.personal.socials.phone && (
              <a
                href={`tel:${portfolioData.personal.socials.phone}`}
                aria-label={`Call ${portfolioData.personal.socials.phone}`}
                className="inline-flex items-center gap-2 rounded-xl border border-transparent px-2.5 py-2.5 text-sm text-zinc-600 transition-colors hover:border-zinc-200 hover:bg-zinc-100 hover:text-zinc-950 focus-visible:ring-2 focus-visible:ring-indigo-500 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-white"
              >
                <Phone className="w-4 h-4" />
                <span>{portfolioData.personal.socials.phone}</span>
              </a>
            )}
            {portfolioData.personal.socials.whatsapp && (
              <a
                href={portfolioData.personal.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message on WhatsApp (opens in new tab)"
                className="p-2.5 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <WhatsappIcon className="w-4 h-4" />
              </a>
            )}
            {portfolioData.personal.socials.facebook && (
              <a
                href={portfolioData.personal.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Facebook profile (opens in new tab)"
                className="p-2.5 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            )}

            <button
              type="button"
              onClick={scrollToTop}
              id="footer-back-to-top"
              aria-label="Scroll back to top of the page"
              className="ml-2 p-2.5 rounded-xl bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-all duration-300 cursor-pointer shadow-xs hover:scale-105 focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-200/60 dark:border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 dark:text-zinc-500 gap-2">
          <p>© {new Date().getFullYear()} Md Shahadat Hossain Khan. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
