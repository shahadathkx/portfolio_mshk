import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import {
  GraduationCap,
  Trophy,
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export function Experience() {
  const { experiences } = portfolioData;

  const typeIcons: Record<string, React.ReactNode> = {
    Education: <GraduationCap className="w-5 h-5 text-indigo-500" />,
    "Leadership & Hackathon": <Trophy className="w-5 h-5 text-amber-500" />,
    Experience: <Briefcase className="w-5 h-5 text-emerald-500" />,
  };

  return (
    <section id="experience" className="py-20 sm:py-28 relative bg-zinc-50/50 dark:bg-zinc-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Career & Academic Path"
          title="Education, Hackathons &"
          titleHighlight="Experience"
          subtitle="A track record of academic dedication, collaborative technical leadership, and practical problem-solving."
        />

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-200 dark:border-indigo-900/60 space-y-10 sm:space-y-12">
          {experiences.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline marker icon */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border-2 border-indigo-500/80 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {typeIcons[item.type] || <Briefcase className="w-5 h-5 text-indigo-500" />}
              </div>

              {/* Timeline content card */}
              <Card
                hoverEffect={true}
                className="p-6 sm:p-7 bg-white/80 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800/80"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/60">
                      {item.type}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white mt-1.5">
                      {item.role}
                    </h3>
                    <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      {item.organization}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs text-zinc-500 dark:text-zinc-400 gap-1">
                    <span className="flex items-center gap-1 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mt-2">
                  {item.description}
                </p>

                {/* Key Highlights list */}
                <div className="mt-4 space-y-1.5">
                  {item.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Badges footer */}
                <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap gap-1.5">
                  {item.badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-zinc-700/70"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
