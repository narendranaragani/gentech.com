import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ExternalLink,
  Mail,
  CheckCircle2,
  Target,
  Lightbulb,
  Sparkles,
  Layout,
  Zap,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteNav } from "./SiteNav";
import { Footer } from "./Footer";
import { Project } from "@/data/projects";

export function ProjectDetail({ project }: { project: Project }) {
  const summaryCards = [
    { label: "Problem", value: project.problemShort, icon: Target },
    { label: "Solution", value: project.solutionShort, icon: Lightbulb },
    { label: "Result", value: project.resultShort, icon: TrendingUp },
    { label: "Category", value: project.category, icon: Layout },
  ];

  return (
    <main className="min-h-screen bg-background selection:bg-primary/10 selection:text-primary scroll-smooth">
      <SiteNav />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-10 md:pt-24 md:pb-16 bg-background">
        <div className="container mx-auto max-w-5xl px-6 text-center">
          <Link
            to="/work"
            className="group mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground transition-all hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            Back to Case Studies
          </Link>

          <div className="space-y-6">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary border border-primary/10">
              <Sparkles className="h-3.5 w-3.5" />
              Outcome: {project.metric} {project.metricLabel}
            </div>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-7xl lg:leading-[1.1]">
              {project.title}
            </h1>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="rounded-full bg-primary px-10 h-14 text-base shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] w-full"
              >
                View Live Project
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-border/80 px-10 h-14 text-base backdrop-blur-md transition-all hover:bg-muted/50 w-full"
              >
                Start a Project
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY STRIP */}
      <section className="relative z-10 py-6 md:py-8 bg-card/30 border-y border-border/40">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {summaryCards.map((card, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-2xl bg-background/50 border border-border/50 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
                  <card.icon className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
                    {card.label}
                  </span>
                  <p className="mt-1 text-sm font-semibold text-foreground leading-snug">
                    {card.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM & SOLUTION SECTION (COMPACT SPLIT) */}
      <section className="py-16 md:py-24 bg-grid-subtle">
        <div className="container mx-auto max-w-5xl px-6 space-y-16 md:space-y-24">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <Target className="h-5 w-5" />
                <h2 className="text-xs font-bold uppercase tracking-[0.2em]">The Challenge</h2>
              </div>
              <h3 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Identifying the bottleneck.
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {project.detailedProblem}
              </p>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-border/40 bg-card shadow-lg">
              <img
                src={project.image}
                alt="Problem Visualization"
                className="w-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1 relative overflow-hidden rounded-3xl border border-border/40 bg-card shadow-lg">
              <img
                src={project.screenshots[0]}
                alt="Solution Visualization"
                className="w-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <Lightbulb className="h-5 w-5" />
                <h2 className="text-xs font-bold uppercase tracking-[0.2em]">The Solution</h2>
              </div>
              <h3 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                A modern, scalable fix.
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {project.detailedSolution}
              </p>
              <div className="grid grid-cols-1 gap-3 pt-2">
                {project.features.slice(0, 3).map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl bg-background/80 border border-border/40"
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground">{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS STEPS (COMPACT) */}
      <section className="py-16 md:py-20 bg-muted/20 border-y border-border/40">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {project.steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-sm">
                  {i + 1}
                </div>
                <h4 className="mt-4 text-lg font-bold tracking-tight">{step.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                {i < 2 && (
                  <div className="absolute top-5 left-10 right-0 h-px bg-border/60 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS HIGHLIGHT (BOLD & COMPACT) */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="text-center space-y-10 rounded-[3rem] border border-border/60 bg-primary/5 p-12 md:p-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />
            <div className="relative space-y-4">
              <h3 className="text-2xl font-bold tracking-tight md:text-4xl">
                Measurable results, not just a site.
              </h3>
              <p className="text-muted-foreground max-w-lg mx-auto">{project.impact}</p>
            </div>
            <div className="relative pt-6">
              <div className="text-7xl md:text-9xl font-bold tracking-tighter text-primary">
                {project.metric}
              </div>
              <div className="mt-2 text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
                {project.metricLabel}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION (COMPACT) */}
      <section className="py-16 md:py-20 border-t border-border/40 bg-background">
        <div className="container mx-auto max-w-3xl px-6 text-center space-y-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold md:text-5xl tracking-tight">Want similar results?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              We turn complex problems into calm, high-performance solutions that convert.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <Link to="/contact">
              <Button
                size="lg"
                className="rounded-full px-12 h-16 text-lg shadow-xl shadow-primary/20 transition-all hover:scale-105"
              >
                Start a Project
              </Button>
            </Link>
            <a
              href="mailto:hello@gentech.com"
              className="flex items-center gap-2 font-bold text-foreground hover:text-primary transition-colors text-lg px-8"
            >
              <Mail className="h-5 w-5" />
              Email us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
