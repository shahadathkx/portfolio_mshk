"use client";

import { useId } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const instanceId = useId();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      id={`theme-toggle-btn-${instanceId}`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="relative p-2 rounded-xl text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white bg-zinc-100/80 hover:bg-zinc-200/80 dark:bg-zinc-800/80 dark:hover:bg-zinc-700/80 border border-zinc-200/80 dark:border-zinc-700/60 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 cursor-pointer group"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-5 h-5 text-amber-400 transition-transform duration-300 group-hover:rotate-45" />
        ) : (
          <Moon className="w-5 h-5 text-indigo-600 transition-transform duration-300 group-hover:-rotate-12" />
        )}
      </div>
    </button>
  );
}
