import {
  Sparkles,
  ShieldCheck,
  Clock,
  Users,
  Headphones,
  GitBranch,
  Layers,
  Award,
} from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Predictable delivery",
    desc: "Two-week sprints, weekly demos, and a public roadmap you can actually trust.",
  },
  {
    icon: GitBranch,
    title: "Modern stack",
    desc: "TypeScript, React, Node, Postgres, AWS, creamflare. Boring tools that scale.",
  },
  {
    icon: Layers,
    title: "Design + engineering",
    desc: "One team for UI, UX, frontend, backend, and infrastructure — not five vendors.",
  },
  {
    icon: Headphones,
    title: "Real human support",
    desc: "Direct Slack with the people who built it. No tickets, no escalation queues.",
  },
];

export function FeaturesShowcase() {
  return (
    <section className="relative w-full bg-background py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-24">
          {/* Left Side: Sticky Content */}
          <div className="lg:sticky lg:top-32 lg:w-1/3">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--maroon)]">
              Why us
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Four reasons we keep getting referred
            </h2>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
              We're a small studio by design. Everything below is a direct consequence of staying
              that way.
            </p>
            <div className="mt-10 hidden lg:block">
              <div className="h-px w-20 bg-[var(--maroon)]/40" />
            </div>
          </div>

          {/* Right Side: Features List */}
          <div className="flex flex-1 flex-col gap-12 sm:gap-16">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="group relative flex flex-col gap-6 sm:flex-row sm:gap-10">
                <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-border bg-card text-[var(--maroon)] shadow-sm transition-transform group-hover:-translate-y-1">
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--maroon)] text-[10px] font-bold text-white shadow-lg">
                    0{i + 1}
                  </span>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    {title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
