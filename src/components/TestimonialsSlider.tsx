import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "The team transformed our digital infrastructure. Their expertise in edge computing and Next.js allowed us to scale seamlessly during our highest traffic surges. A truly professional studio.",
    name: "Rahul Attuluri",
    role: "CEO, Nxt Wave",
    avatar: "/image.png",
    company: "NXT WAVE",
  },
  {
    quote:
      "The automated portal they built reduced our administrative overhead by 65%. Their focus on user experience and clean architecture is exceptional. Highly recommended.",
    name: "Karthik",
    role: "CEO, Coders Spark",
    avatar: "/image copy.png",
    company: "CODERS SPARK",
  },
  {
    quote:
      "The AI-driven fleet dashboard provided us with real-time visibility that we never had before. We saw a 27% reduction in fuel costs within three months. Brilliant execution.",
    name: "Rama.K",
    role: "Founder, GoSure.Ai",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2.5&w=300&h=300&q=80",
    company: "GOSURE.AI",
  },
];

export function TestimonialsSlider() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    intervalRef.current = setInterval(() => embla.scrollNext(), 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [embla]);

  return (
    <section className="relative w-full overflow-hidden bg-background py-20 sm:py-28 md:py-32">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[var(--sand)] opacity-50 blur-3xl sm:h-[500px] sm:w-[800px]" />

      <div className="relative mx-auto w-full max-w-5xl px-5 sm:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--brown-accent)]">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:mt-4 sm:text-5xl md:text-6xl">
            Quiet praise from the people we've built with
          </h2>
          <div className="mt-5 flex items-center justify-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-[var(--brown-accent)] text-[var(--brown-accent)]"
              />
            ))}
            <span className="ml-2 text-[11px] uppercase tracking-[0.14em] text-muted-foreground sm:text-xs">
              4.9 / 5 — 60+ engagements
            </span>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t) => (
              <div key={t.name} className="min-w-0 shrink-0 grow-0 basis-full px-1 sm:px-3">
                <figure className="relative mx-auto flex max-w-3xl flex-col items-center rounded-3xl border border-border bg-card p-7 text-center shadow-lg sm:p-12">
                  <Quote
                    className="absolute left-6 top-6 h-8 w-8 text-[var(--brown-accent)]/20 sm:left-10 sm:top-10 sm:h-12 sm:w-12"
                    strokeWidth={1.2}
                  />
                  <blockquote className="text-balance text-lg font-light leading-relaxed text-foreground sm:text-2xl md:text-[26px] md:leading-[1.45]">
                    "{t.quote}"
                  </blockquote>
                  <div className="mt-8 flex flex-col items-center gap-4 sm:mt-10">
                    <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-border/40 bg-muted shadow-sm sm:h-20 sm:w-20">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                      />
                    </div>
                    <figcaption className="flex flex-col items-center gap-1">
                      <div className="text-sm font-semibold text-foreground sm:text-base">
                        {t.name}
                      </div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                      <div className="mt-1 font-serif text-xs tracking-[0.18em] text-[var(--brown-accent)]/70">
                        {t.company}
                      </div>
                    </figcaption>
                  </div>
                </figure>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4 sm:mt-10 sm:gap-5">
          <button
            onClick={() => embla?.scrollPrev()}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-card text-muted-foreground transition-colors hover:border-border hover:text-foreground sm:h-11 sm:w-11"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            onClick={() => embla?.scrollNext()}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-card text-muted-foreground transition-colors hover:border-border hover:text-foreground sm:h-11 sm:w-11"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
