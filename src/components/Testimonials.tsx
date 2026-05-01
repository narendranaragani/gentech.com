import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "The team transformed our digital infrastructure. Their expertise in edge computing and Next.js allowed us to scale seamlessly during our highest traffic surges. A truly professional studio.",
    name: "Rahul Attuluri",
    role: "CEO, Nxt Wave",
  },
  {
    quote:
      "The automated portal they built reduced our administrative overhead by 65%. Their focus on user experience and clean architecture is exceptional. Highly recommended for complex SaaS solutions.",
    name: "Karthik",
    role: "CEO, Coders Spark",
  },
  {
    quote:
      "The AI-driven fleet dashboard provided us with real-time visibility that we never had before. We saw a 27% reduction in fuel costs within three months. Brilliant technical execution.",
    name: "Rama.K",
    role: "Founder, GoSure.Ai",
  },
];

export function Testimonials() {
  return (
    <section className="relative w-full bg-background py-28">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--brown-accent)]">
            Testimonials
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Quiet praise from people we've worked with
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative flex flex-col rounded-2xl border border-border/70 bg-card/60 p-7 backdrop-blur-md"
            >
              <Quote className="h-5 w-5 text-[var(--brown-accent)]/40" strokeWidth={1.5} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border/60 pt-4">
                <div className="text-sm font-medium text-foreground">{t.name}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
