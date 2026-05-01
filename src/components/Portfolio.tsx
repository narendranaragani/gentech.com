import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { allProjects } from "@/data/projects";
import { Link } from "@tanstack/react-router";

const categories = ["All", "Automation", "Full stack", "E-commerce", "Dashboards"];

export function Portfolio() {
  const [active, setActive] = useState("All");
  const projects = active === "All" ? allProjects : allProjects.filter((p) => p.category === active);

  return (
    <>
      <section className="relative w-full overflow-hidden bg-background pt-16 pb-12 md:pt-24 md:pb-16">

        <div className="relative mx-auto w-full max-w-7xl px-6">
          <div className="mb-12">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </div>
          <div className="mx-auto max-w-3xl text-center">

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              Portfolio
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Selected Projects
            </h1>



            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              A curated selection of our work across automation, full-stack development, and digital products.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-6 py-2 text-sm font-medium transition-all ${active === c
                    ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "border-border/60 bg-card/50 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full bg-background pb-28">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <article
                key={p.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"

              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-background/90 px-3 py-1 text-[9px] font-bold tracking-wide text-foreground backdrop-blur-md border border-border/40">
                    {p.metric}
                  </div>
                  <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-primary/90 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-primary-foreground backdrop-blur-md">
                    {p.category}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">

                  <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1 line-clamp-3">
                    {p.description}
                  </p>
                  <div className="mt-6 pt-5 border-t border-border/40">
                    <Link
                      to="/work/$projectId"
                      params={{ projectId: p.id }}

                      className="inline-flex items-center gap-2 text-sm font-bold text-foreground transition-colors hover:text-primary"
                    >
                      View Project
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
