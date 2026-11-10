import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none active:scale-95";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/25 dark:shadow-indigo-500/15 border border-indigo-500/20 hover:scale-[1.02]",
    secondary:
      "bg-zinc-100 hover:bg-zinc-200 text-zinc-900 dark:bg-zinc-800/80 dark:hover:bg-zinc-700/80 dark:text-zinc-100 border border-zinc-200/80 dark:border-zinc-700/60",
    outline:
      "border border-zinc-300 dark:border-zinc-700 hover:border-indigo-500 dark:hover:border-indigo-400 text-zinc-900 dark:text-zinc-100 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20",
    ghost:
      "text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </button>
  );
}
