import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  glass?: boolean;
  className?: string;
}

export function Card({
  children,
  hoverEffect = true,
  glass = true,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={`rounded-2xl transition-all duration-300 relative overflow-hidden ${
        glass
          ? "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm"
          : "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
      } ${
        hoverEffect
          ? "hover:shadow-xl hover:shadow-indigo-500/5 dark:hover:shadow-indigo-500/10 hover:border-indigo-300/60 dark:hover:border-indigo-700/60 hover:-translate-y-1"
          : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
