import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { allProjects } from "@/data/projects";

const previews = allProjects.map(p => ({
  id: p.id,
  title: p.title,
  type: p.category,
  metric: p.metric,
  desc: p.problemShort, // Using problem statement as short desc
  tags: p.stack,
  img: p.image
}));

export function WorkPreviewSlider() {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false,
  });
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
    intervalRef.current = setInterval(() => embla.scrollNext(), 4500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [embla]);

  return (
    <section className="relative w-full overflow-hidden bg-[var(--cream)]/50 py-20 sm:py-28 md:py-32">
      <div className="mx-auto mb-10 w-full max-w-7xl px-5 sm:mb-12 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--brown-accent)]">
              Selected work
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:mt-4 sm:text-5xl md:text-6xl">
              Recent products we've shipped
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-base md:text-lg">
              Swipe through a curated reel of freelance engagements — from
              E-commerce platforms to custom dashboards — each one shipped end-to-end.
            </p>
          </div>
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/60 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:bg-card"
          >
            All projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {previews.map((p, i) => {
              const isActive = i === selected;
              return (
                <Link
                  key={p.title}
                  to={`/work/${p.id}`}
                  className="min-w-0 shrink-0 grow-0 basis-[88%] px-2 sm:basis-[60%] sm:px-3 md:basis-[42%] lg:basis-[34%] xl:basis-[30%]"
                >
                  <article
                    className={`group overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-all duration-500 ${
                      isActive
                        ? "scale-100 opacity-100 shadow-xl"
                        : "scale-[0.94] opacity-60"
                    }`}
                  >

                    <div className="relative aspect-[16/11] overflow-hidden bg-[var(--sand)]">
                      <img
                        src={p.img}
                        alt={p.title}
                        loading="lazy"
                        className="h-full w-full object-cover grayscale-[0.15] transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                      <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-card/90 px-3 py-1 text-[10px] font-medium tracking-wide text-foreground backdrop-blur">
                        {p.metric}
                      </div>
                      <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-background/85 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-[var(--brown-accent)] backdrop-blur">
                        {p.type}
                      </div>
                    </div>
                    <div className="p-4 sm:p-5">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                          {p.title}
                        </h3>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        {p.desc}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-border/60 bg-background/60 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="mx-auto mt-8 flex w-full max-w-7xl items-center justify-center gap-4 px-5 sm:mt-10 sm:px-8">
        <div className="flex items-center gap-3">
          <button
            onClick={() => embla?.scrollPrev()}
            aria-label="Previous"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary/20 hover:text-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => embla?.scrollNext()}
            aria-label="Next"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary/20 hover:text-foreground"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

    </section>
  );
}
