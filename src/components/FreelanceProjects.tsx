import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Globe,
  ShoppingBag,
  LineChart,
  Sparkles,
  Layers,
  Server,
} from "lucide-react";

const projects = [
  {
    icon: Globe,
    type: "SaaS Platforms",
    title: "Multi-tenant dashboards & admin panels",
    desc: "Subscription-ready SaaS products with auth, billing, role-based access, and analytics — built to launch in weeks.",
    tags: ["Next.js", "Stripe", "Postgres"],
  },
  {
    icon: ShoppingBag,
    type: "E-commerce",
    title: "Headless storefronts that convert",
    desc: "Custom Shopify Hydrogen and Next.js Commerce builds with editorial CMS, fast checkout, and tuned Core Web Vitals.",
    tags: ["Shopify", "Sanity", "Stripe"],
  },
  {
    icon: LineChart,
    type: "Data & Dashboards",
    title: "Internal tools & analytics dashboards",
    desc: "Real-time operational dashboards, reporting suites, and admin tools that replace spreadsheets and Retool sprawl.",
    tags: ["React", "GraphQL", "Postgres"],
  },
  {
    icon: Sparkles,
    type: "AI Integrations",
    title: "AI features inside your product",
    desc: "Chat, search, summarisation, and agent workflows wired into your existing app — with cost guardrails and evals.",
    tags: ["OpenAI", "LangChain", "Vector DB"],
  },
  {
    icon: Layers,
    type: "Brand & Marketing Sites",
    title: "Editorial websites & landing pages",
    desc: "High-converting marketing sites with a refined CMS, design systems, and motion that feels considered, not loud.",
    tags: ["Astro", "Sanity", "Vercel"],
  },
  {
    icon: Server,
    type: "cream & DevOps",
    title: "Infrastructure, CI/CD & migrations",
    desc: "AWS and creamflare architecture, IaC with Terraform, observability, and zero-downtime migrations off legacy stacks.",
    tags: ["AWS", "Terraform", "Docker"],
  },
];

export function FreelanceProjects() {
  return (
    <section className="relative w-full bg-background py-32">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--brown-accent)]">
              What We Build
            </span>
            <h2 className="mt-4 text-5xl font-bold tracking-tight text-foreground md:text-6xl">
              Freelance projects we take on
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              From early-stage MVPs to scale-ups replatforming legacy systems — we partner with
              founders, product teams, and agencies on focused, outcome-driven engagements.
            </p>
          </div>
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/60 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:bg-card"
          >
            See selected work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ icon: Icon, type, title, desc, tags }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-[var(--shadow-soft)]"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-background/80 text-[var(--brown-accent)]">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {type}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground">{title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border/70 bg-background/60 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
