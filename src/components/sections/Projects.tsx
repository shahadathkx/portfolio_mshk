"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import projectsData from "@/data/projects.json";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  ExternalLink,
} from "lucide-react";

export interface ProjectItem {
  id?: string;
  title: string;
  tagline?: string;
  description: string;
  image: string;
  tags?: string[];
  techTags?: string[];
  githubUrl?: string;
  githubLink?: string;
  liveUrl?: string;
  liveLink?: string;
  category?: string;
  featured?: boolean;
}

export function Projects() {
  const projects: ProjectItem[] = projectsData as ProjectItem[];

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
    <section id="projects" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background ambient decorative glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            badge="Selected Projects"
            title="Projects made"
            titleHighlight="for people"
            subtitle="A closer look at BazarDor and BookNook—two live web projects built to make everyday experiences better."
          />
        </motion.div>

        {/* Responsive Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, idx) => {
            const projectKey = project.id || `project-${idx}`;
            const tags = project.tags || project.techTags || [];
            const liveDemoLink = project.liveUrl || project.liveLink;

            return (
              <motion.div
                key={projectKey}
                variants={cardVariants}
                className="h-full flex"
              >
                <Card
                  hoverEffect={true}
                  className="flex flex-col w-full h-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800/80 group overflow-hidden rounded-3xl"
                >
                  {/* Project Image Container */}
                  <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
                    <Image
                      src={project.image}
                      alt={`Screenshot and preview of ${project.title} - ${project.description}`}
                      width={640}
                      height={360}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent pointer-events-none" />

                    {/* Badges Overlay */}
                    <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2 z-10">
                      {project.category && (
                        <Badge
                          variant="primary"
                          size="sm"
                          className="backdrop-blur-md bg-indigo-600/90 text-white border border-indigo-400/30"
                        >
                          {project.category}
                        </Badge>
                      )}
                      {project.featured && (
                        <Badge
                          variant="success"
                          size="sm"
                          className="backdrop-blur-md bg-emerald-600/90 text-white border border-emerald-400/30"
                        >
                          Featured
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Project Body */}
                  <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-6">
                    <div>
                      {/* Title & Tagline */}
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h3>

                      {project.tagline && (
                        <p className="mt-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                          {project.tagline}
                        </p>
                      )}

                      {/* One-Line Description */}
                      <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Tags */}
                      {tags.length > 0 && (
                        <div className="mt-5 flex flex-wrap gap-1.5">
                          {tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 text-xs font-mono font-medium rounded-lg bg-zinc-100/90 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200/70 dark:border-zinc-700/60"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="border-t border-zinc-100 pt-5 dark:border-zinc-800/80">
                      {liveDemoLink && (
                        <a
                          href={liveDemoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-indigo-500/20 transition-all duration-200 hover:scale-[1.02] hover:bg-indigo-700 active:scale-95 dark:bg-indigo-500 dark:hover:bg-indigo-600 sm:text-sm"
                          aria-label={`Visit ${project.title} website (opens in new tab)`}
                        >
                          <span>View website</span>
                          <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                        </a>
                      )}
                    </div>
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
