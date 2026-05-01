import { Compass, PencilRuler, Code2, Rocket, MessageSquare, FileText, GitPullRequest, LineChart, ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";


const steps = [
  {
    icon: Compass,
    title: "Discover",
    week: "Week 1",
    description: "Understand goals, constraints, and the people the product serves.",
    deliverables: ["Goals workshop", "Tech audit", "Scoping doc"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: PencilRuler,
    title: "Design",
    week: "Week 2 – 3",
    description: "Shape the interface, system, and architecture with deliberate care.",
    deliverables: ["Figma prototypes", "Design tokens", "Architecture diagram"],
    image: "https://i.pinimg.com/1200x/1b/85/4f/1b854f96ec39e8310f22f5284f6dc254.jpg",
  },
  {
    icon: Code2,
    title: "Develop",
    week: "Week 4 – 9",
    description: "Build with senior engineers — clean code, tested, reviewed, demoed weekly.",
    deliverables: ["2-week sprints", "Weekly demos", "Staging env"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Rocket,
    title: "Deploy",
    week: "Week 10+",
    description: "Ship to production with monitoring, documentation, and ongoing support.",
    deliverables: ["Production launch", "Runbooks", "30-day support"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
  },
];

const principles = [
  { icon: MessageSquare, title: "Direct communication", desc: "Slack with the people building it. No account managers." },
  { icon: FileText, title: "Written by default", desc: "Decisions live in docs you can revisit, not meetings you missed." },
  { icon: GitPullRequest, title: "Reviewed code", desc: "Every PR reviewed by a second senior engineer before merge." },
  { icon: LineChart, title: "Measured outcomes", desc: "We define success metrics upfront and report against them." },
];

export function Process() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-background py-24">
        <div className="pointer-events-none absolute -top-32 right-0 h-[400px] w-[600px] rounded-full bg-[var(--sand)] opacity-50 blur-3xl" />
        <div className="relative mx-auto w-full max-w-7xl px-8">
          <div className="mb-12">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 transition-colors hover:text-[var(--brown-accent)]"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </div>
          <div className="mx-auto max-w-3xl text-center">

            <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--brown-accent)]">
              Our process
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              How we work
            </h1>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              A four-phase rhythm we've refined across hundreds of engagements —
              transparent, predictable, and quietly thorough.
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-background pb-24">
        <div className="mx-auto w-full max-w-6xl px-8">
          <div className="space-y-10">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className={`grid grid-cols-1 gap-8 overflow-hidden rounded-3xl border border-border bg-card p-8 md:grid-cols-2 md:gap-12 md:p-10 ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                  }`}

              >
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--brown-accent)]">
                      Step 0{i + 1} · {s.week}
                    </span>
                  </div>
                  <h3 className="mt-3 flex items-center gap-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    <s.icon className="h-7 w-7 text-[var(--brown-accent)]" strokeWidth={1.5} />
                    {s.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {s.deliverables.map((d) => (
                      <li
                        key={d}
                        className="rounded-full border border-border/70 bg-background/60 px-3 py-1 text-xs text-foreground/80"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--sand)]">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale-[0.25]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--brown-accent)]/15 via-transparent to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full bg-[var(--cream)]/50 py-24">
        <div className="mx-auto w-full max-w-7xl px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--brown-accent)]">
              Working principles
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              How we keep it calm
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {principles.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-border/70 bg-card/70 p-7 backdrop-blur"
              >
                <Icon className="h-6 w-6 text-[var(--brown-accent)]" strokeWidth={1.5} />
                <h4 className="mt-5 text-base font-semibold text-foreground">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
