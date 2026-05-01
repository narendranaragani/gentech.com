import { Code2, Cloud, PenTool, Plug, Workflow, Smartphone, Check, ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";


const services = [
  {
    icon: Code2,
    title: "Web Development",
    tagline: "From MVP to scale",
    description: "Production-grade React, Next.js and TypeScript applications built for performance, accessibility, and longevity.",
    deliverables: ["React / Next.js apps", "TypeScript end-to-end", "Design systems", "Performance audits"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    tagline: "AWS · Cloudflare · Vercel",
    description: "Infrastructure as code, serverless platforms, and resilient cloud architecture designed to scale predictably.",
    deliverables: ["AWS architecture", "Terraform / CDK", "CI/CD pipelines", "Observability stack"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: PenTool,
    title: "UI / UX Design",
    tagline: "Calm, considered interfaces",
    description: "Strong systems thinking, thoughtful interaction detail, and design that quietly makes products feel premium.",
    deliverables: ["Product UI design", "Design tokens", "Prototypes in Figma", "Accessibility reviews"],
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Plug,
    title: "API Development",
    tagline: "REST · GraphQL · tRPC",
    description: "Reliable APIs, integrations, and developer experience your team can build on for years without rewriting.",
    deliverables: ["REST & GraphQL APIs", "Auth & permissions", "Stripe / webhooks", "OpenAPI docs"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Workflow,
    title: "Automation",
    tagline: "Internal tools that earn back hours",
    description: "Workflow automation and admin tools that quietly remove friction across operations, finance, and support.",
    deliverables: ["Internal dashboards", "Zapier / n8n flows", "Reporting suites", "Slack bots"],
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Smartphone,
    title: "App Development",
    tagline: "iOS · Android · React Native",
    description: "Cross-platform apps with shared codebases, native feel, and a deployment pipeline that ships weekly.",
    deliverables: ["React Native apps", "App Store / Play submission", "Push & deep links", "Offline sync"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",

  },
];

export function Services() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-maroon-tint py-20 sm:py-32">
        <div className="pointer-events-none absolute -top-32 right-0 h-[400px] w-[600px] rounded-full bg-[var(--maroon)]/5 opacity-20 blur-3xl" />
        <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10">
          <div className="mb-12">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 transition-colors hover:text-[var(--maroon)]"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </div>
          <div className="mx-auto max-w-3xl text-center">

            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--maroon)]">
              Services
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              What we do, end to end
            </h2>

            <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
              Six focused practices, delivered by the same senior team from
              discovery through deployment. No silos, no hand-offs, no surprises.
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-maroon-tint pb-24 sm:pb-32">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {services.map(({ icon: Icon, title, tagline, description, deliverables, image }) => (
              <article
                key={title}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl"

              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--sand)]">
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale-[0.25] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--maroon)]/40 via-transparent to-transparent opacity-60" />
                  <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card text-[var(--maroon)] shadow-lg">

                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/80">
                    {tagline}
                  </span>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground">
                    {title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {description}
                  </p>
                  <ul className="mt-8 space-y-3">
                    {deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-sm text-foreground/90">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--maroon)]" strokeWidth={2.5} />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
