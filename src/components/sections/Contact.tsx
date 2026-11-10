"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  Mail,
  Send,
  Check,
  Copy,
  MapPin,
  Clock,
  MessageSquare,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import confetti from "canvas-confetti";

export function Contact() {
  const { personal } = portfolioData;

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successResponse, setSuccessResponse] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields (Name, Email, Message).");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formState.name.trim(),
          email: formState.email.trim(),
          message: formState.message.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to deliver message. Please try again.");
      }

      setStatus("success");
      setSuccessResponse(data.message || "Message sent successfully!");
      setFormState({ name: "", email: "", message: "" });

      confetti({
        particleCount: 75,
        spread: 65,
        origin: { y: 0.65 },
        colors: ["#6366f1", "#10b981", "#38bdf8", "#a855f7"],
      });
    } catch (err: unknown) {
      setStatus("error");
      const errText = err instanceof Error ? err.message : "Something went wrong while sending.";
      setErrorMessage(errText);
    }
  };

  // Motion variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 22 },
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
    <section id="contact" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/10 via-sky-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            badge="Get In Touch"
            title="Let's Build Something"
            titleHighlight="Exceptional Together"
            subtitle="I am actively seeking software engineering and full-stack web developer opportunities. Whether you have a question, role, or proposal, let's connect!"
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Left Column: Direct Links & Info */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/90 dark:border-zinc-800/90 shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-bold text-zinc-950 dark:text-white tracking-tight">
                  Contact Information
                </h3>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                  Reach out directly via email, GitHub, or LinkedIn.
                </p>
              </div>

              {/* Email Card with Copy & Direct Mail Action */}
              <div className="p-4 rounded-2xl bg-zinc-50/90 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/60 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden min-w-0">
                  <div className="p-2.5 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">Direct Email</p>
                    <a
                      href={personal.socials.email}
                      className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors truncate block"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  id="copy-email-btn"
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-white dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 hover:text-indigo-600 dark:hover:text-indigo-400 border border-zinc-200 dark:border-zinc-600 transition-all duration-200 shrink-0 cursor-pointer hover:scale-105 active:scale-95 shadow-2xs"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                      <Check className="w-3.5 h-3.5" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Social Channels (GitHub, LinkedIn) */}
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-mono">
                  Online Profiles
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* GitHub Profile */}
                  <a
                    href={personal.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-zinc-50/90 dark:bg-zinc-800/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700/60 hover:border-indigo-400 dark:hover:border-indigo-400 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="p-2 rounded-lg bg-zinc-200/70 dark:bg-zinc-700 text-zinc-900 dark:text-white">
                        <GithubIcon className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <p className="text-xs font-bold text-zinc-900 dark:text-white">GitHub</p>
                        <p className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate">@shahadathkx</p>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-indigo-500 transition-colors shrink-0" />
                  </a>

                  {/* LinkedIn Profile */}
                  <a
                    href={personal.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-zinc-50/90 dark:bg-zinc-800/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700/60 hover:border-indigo-400 dark:hover:border-indigo-400 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="p-2 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400">
                        <LinkedinIcon className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <p className="text-xs font-bold text-zinc-900 dark:text-white">LinkedIn</p>
                        <p className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate">shahadathkx</p>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-indigo-500 transition-colors shrink-0" />
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-3.5 px-4 py-3 rounded-2xl bg-zinc-50/90 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/60">
                <div className="p-2.5 rounded-xl bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">Location</p>
                  <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                    {personal.location} (Open to Remote & Relocation)
                  </p>
                </div>
              </div>

              {/* Response Time Indicator */}
              <div className="flex items-center gap-3.5 px-4 py-3 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300">
                <Clock className="w-4 h-4 shrink-0 text-emerald-500" />
                <p className="text-xs font-medium">
                  Quick turnaround — usually responds within 24 hours.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Working Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <Card
              hoverEffect={false}
              className="p-6 sm:p-8 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/90 dark:border-zinc-800/90 rounded-3xl shadow-sm"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-100 dark:border-zinc-800/80">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-semibold uppercase tracking-wider">
                  <MessageSquare className="w-4 h-4" />
                  <span>Send a Direct Message</span>
                </div>
                <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-800/60 px-2 py-0.5 rounded-md">
                  API Powered
                </span>
              </div>

              {status === "success" ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="p-8 rounded-2xl bg-emerald-50/90 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 text-center space-y-4 animate-in fade-in duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/25">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-emerald-950 dark:text-emerald-200">
                      Message Delivered Successfully!
                    </h4>
                    <p className="text-xs text-emerald-800 dark:text-emerald-300 max-w-md mx-auto mt-1 leading-relaxed">
                      {successResponse || "Thank you for reaching out! MD SHAHADAT HOSSAIN KHAN has received your message and will respond shortly."}
                    </p>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setStatus("idle")}
                    className="mt-2 bg-white dark:bg-zinc-800"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" id="portfolio-contact-form" noValidate>
                  {status === "error" && (
                    <div
                      id="contact-form-error"
                      role="alert"
                      aria-live="assertive"
                      className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5"
                    >
                      Your Name <span className="text-indigo-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      autoComplete="name"
                      aria-required="true"
                      aria-invalid={status === "error" && !formState.name.trim()}
                      placeholder="e.g. Alex Johnson"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/70 border border-zinc-200 dark:border-zinc-700 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5"
                    >
                      Your Email <span className="text-indigo-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      autoComplete="email"
                      aria-required="true"
                      aria-invalid={status === "error" && (!formState.email.trim() || !formState.email.includes("@"))}
                      placeholder="alex@company.com"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/70 border border-zinc-200 dark:border-zinc-700 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5"
                    >
                      Your Message <span className="text-indigo-500" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      aria-required="true"
                      aria-invalid={status === "error" && !formState.message.trim()}
                      placeholder="Tell me about your project, internship opportunity, or team..."
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/70 border border-zinc-200 dark:border-zinc-700 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={status === "loading"}
                      className="w-full sm:w-auto"
                      icon={
                        status === "loading" ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Send className="w-4 h-4" />
                        )
                      }
                    >
                      {status === "loading" ? "Sending..." : "Send Message"}
                    </Button>

                    <span className="hidden sm:inline-block text-[11px] text-zinc-400 dark:text-zinc-500">
                      Protected &bull; No spam guarantee
                    </span>
                  </div>
                </form>
              )}
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
