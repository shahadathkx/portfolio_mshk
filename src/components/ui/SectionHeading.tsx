import React from "react";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  badge,
  title,
  titleHighlight,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === "center" ? "text-center max-w-2xl mx-auto" : "text-left max-w-2xl"
      }`}
    >
      {badge && (
        <div className="mb-3">
          <Badge variant="primary" size="md">
            {badge}
          </Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {title}{" "}
        {titleHighlight && (
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent">
            {titleHighlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
