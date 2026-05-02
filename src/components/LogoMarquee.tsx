const logos = [
  "Nxt Wave",
  "Coders Spark",
  "GoSure.AI",
  "Forty4 TECH",
  "AnalyticsInsight",
  "EcommerceAdmin",
  "ForeverBuy",
  "EWA India",
  "HIRE MINS",
  "PRINTMAANIA",
  "DASH-IN",
];

export function LogoMarquee() {
  const list = [...logos, ...logos];
  return (
    <section className="relative w-full overflow-hidden border-y border-border/60 bg-[var(--cream)]/40 py-12">
      <div className="mx-auto mb-6 max-w-7xl px-8 text-center">
        <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          OUR PROJECTS
        </span>
      </div>
      <div className="pause-on-hover relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[var(--cream)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[var(--cream)] to-transparent" />
        <div className="flex w-max animate-marquee items-center gap-16 px-8">
          {list.map((l, i) => (
            <span
              key={`${l}-${i}`}
              className="font-serif text-2xl font-medium tracking-[0.05em] text-[var(--brown-accent)]/60 transition-colors hover:text-[var(--brown-accent)]"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
