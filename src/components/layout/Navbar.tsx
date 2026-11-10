"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, FileText, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scrollspy logic
      const sections = ["hero", "about", "skills", "projects", "experience", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 160 && rect.bottom >= 160;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white/85 dark:bg-zinc-950/85 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 shadow-xs"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand with Gemini Colors */}
          <a
            href="#hero"
            id="brand-logo"
            aria-label="Md Shahadat Hossain Khan - Return to Top / Hero"
            className="flex items-center gap-2.5 group cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-xl"
          >
            <div className="relative p-[1.5px] rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 via-purple-600 to-pink-500 shadow-md shadow-indigo-500/20 group-hover:scale-105 group-hover:shadow-indigo-500/35 transition-all duration-300">
              <div className="px-2.5 py-1.5 rounded-[10px] bg-zinc-950 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
                <span className="font-extrabold text-xs tracking-wider bg-gradient-to-r from-blue-400 via-sky-300 via-purple-300 to-pink-400 bg-clip-text text-transparent font-mono">
                  MSHK
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Shahadat Khan
              </span>
              <span className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                CSE Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 bg-zinc-100/80 dark:bg-zinc-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-zinc-200/70 dark:border-zinc-800/70"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                    isActive
                      ? "bg-white dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400 shadow-xs font-semibold"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />

            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="navbar-resume-btn"
              aria-label="Download Curriculum Vitae (PDF opens in new tab)"
              className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-all duration-200 shadow-sm hover:scale-[1.02] active:scale-95 cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              className="p-2 rounded-xl text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <nav
            id="mobile-nav-menu"
            aria-label="Mobile Menu"
            className="md:hidden mt-3 p-4 rounded-2xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-xl space-y-2 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3.5 py-2.5 rounded-xl text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 flex flex-col gap-2">
              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-700 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
