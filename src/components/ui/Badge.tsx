import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "success" | "accent" | "outline";
  size?: "sm" | "md";
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = "default",
  size = "md",
  className = "",
  icon,
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center font-medium rounded-full transition-colors duration-200";

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 gap-1",
    md: "text-xs px-3 py-1 gap-1.5",
  };

  const variantStyles = {
    default:
      "bg-zinc-100 text-zinc-700 border border-zinc-200/80 dark:bg-zinc-800/80 dark:text-zinc-300 dark:border-zinc-700/60",
    primary:
      "bg-indigo-50 text-indigo-700 border border-indigo-200/70 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800/50",
    success:
      "bg-emerald-50 text-emerald-700 border border-emerald-200/70 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/50",
    accent:
      "bg-sky-50 text-sky-700 border border-sky-200/70 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-800/50",
    outline:
      "border border-zinc-300 text-zinc-700 dark:border-zinc-700 dark:text-zinc-300",
  };

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
}
