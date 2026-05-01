import { ArrowRight, ShieldCheck, Layers, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";

const techStack = [
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.47 1.29.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 0 1-.11-.21V7.71c0-.08.05-.17.11-.21l7.44-4.29c.06-.04.16-.04.22 0l7.44 4.29c.07.04.11.12.11.21v8.58c0 .08-.04.17-.11.21l-7.44 4.29c-.06.04-.16.04-.23 0L9.99 19.66c-.06-.03-.13-.04-.18-.01-.53.3-.62.34-1.12.51-.12.04-.31.11.07.32l2.48 1.47c.24.14.51.21.78.21s.54-.07.78-.21l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3a1.56 1.56 0 0 0-.79-.2zm2 5.99c-2.12 0-3.39.89-3.39 2.39 0 1.61 1.26 2.08 3.3 2.28 2.43.24 2.62.6 2.62 1.08 0 .83-.67 1.18-2.23 1.18-1.98 0-2.4-.49-2.55-1.47a.226.226 0 0 0-.22-.18h-.96c-.12 0-.22.1-.22.22 0 1.24.68 2.74 3.96 2.74 2.36 0 3.7-.93 3.7-2.55 0-1.61-1.08-2.03-3.37-2.34-2.31-.3-2.54-.46-2.54-1 0-.45.2-1.05 1.91-1.05 1.5 0 2.09.33 2.32 1.36.02.1.11.18.21.18h.97c.05 0 .11-.02.15-.07a.31.31 0 0 0 .07-.17c-.15-1.78-1.32-2.6-3.73-2.6z" />
      </svg>
    ),
  },
  {
    name: "AWS",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M6.76 10.46c0 .29.03.52.08.7.06.17.14.36.24.56.04.06.05.12.05.17 0 .07-.04.15-.14.22l-.45.3a.34.34 0 0 1-.18.06c-.07 0-.14-.04-.21-.1a2.18 2.18 0 0 1-.25-.34 5.4 5.4 0 0 1-.22-.42c-.56.66-1.26.99-2.1.99-.6 0-1.08-.17-1.43-.52-.35-.34-.53-.8-.53-1.38 0-.6.21-1.1.65-1.46.43-.37 1.01-.55 1.74-.55.24 0 .49.02.75.06.27.04.54.1.83.16v-.53c0-.55-.11-.93-.34-1.15-.23-.22-.62-.33-1.18-.33-.25 0-.51.03-.78.09-.27.06-.53.14-.78.24-.11.05-.2.08-.25.09a.4.4 0 0 1-.11.02c-.1 0-.15-.07-.15-.22v-.35c0-.11.02-.2.05-.25.04-.05.11-.1.21-.15.25-.13.55-.24.9-.32.35-.09.73-.13 1.13-.13.86 0 1.49.2 1.89.59.4.39.6.99.6 1.79v2.36zm-2.9 1.09c.23 0 .47-.04.72-.13.25-.08.47-.24.66-.45.11-.13.2-.28.24-.45.04-.17.07-.37.07-.61v-.29a5.93 5.93 0 0 0-1.32-.18c-.47 0-.82.09-1.05.29-.23.19-.34.47-.34.83 0 .34.09.59.27.77.18.18.43.27.75.27zm5.74.77c-.13 0-.21-.02-.27-.07-.06-.04-.11-.14-.15-.27L7.51 6.95a1.16 1.16 0 0 1-.06-.28c0-.11.05-.17.16-.17h.7c.13 0 .22.02.27.07.06.04.1.14.15.27l1.21 4.78 1.13-4.78c.04-.13.08-.22.14-.27.05-.05.15-.07.27-.07h.57c.13 0 .22.02.27.07.05.05.1.14.13.27l1.14 4.84 1.25-4.84c.04-.13.09-.22.14-.27.05-.05.15-.07.27-.07h.66c.11 0 .17.06.17.17l-.03.18a.42.42 0 0 1-.04.18l-1.74 5.59c-.04.13-.09.22-.15.27-.05.05-.14.07-.27.07h-.61c-.13 0-.22-.02-.27-.07-.05-.05-.1-.14-.13-.28l-1.13-4.66-1.12 4.66c-.03.13-.07.22-.13.28-.05.05-.14.07-.27.07h-.61zm9.18.19c-.38 0-.76-.04-1.13-.13-.36-.09-.65-.18-.83-.29-.12-.07-.2-.14-.22-.21a.51.51 0 0 1-.05-.21v-.36c0-.15.06-.22.17-.22.04 0 .09.01.13.02l.18.08c.27.12.55.21.86.27.31.06.62.1.93.1.49 0 .87-.09 1.13-.26.27-.17.41-.42.41-.74 0-.22-.07-.4-.21-.55-.14-.15-.4-.28-.78-.41l-1.13-.35c-.57-.18-.99-.45-1.25-.81a1.92 1.92 0 0 1-.39-1.15c0-.34.07-.63.22-.89.14-.26.34-.49.59-.66.25-.18.53-.32.86-.41.33-.09.67-.13 1.04-.13.18 0 .37.01.55.04.19.02.36.06.53.1.16.05.32.1.46.16.14.06.25.12.33.18.11.06.19.13.23.21.05.07.07.17.07.3v.34c0 .15-.06.23-.17.23a.78.78 0 0 1-.27-.09 3.31 3.31 0 0 0-1.39-.28c-.45 0-.79.07-1.04.22-.24.15-.36.38-.36.71 0 .22.07.4.23.55.16.15.45.3.86.43l1.11.35c.57.18.97.43 1.21.76.24.32.36.69.36 1.11 0 .35-.07.66-.21.94-.15.27-.34.51-.6.7a2.7 2.7 0 0 1-.92.46c-.36.11-.74.16-1.15.16z" />
        <path d="M21.7 17.55C18.66 19.8 14.24 21 10.43 21c-5.34 0-10.15-1.97-13.79-5.26-.29-.26-.03-.61.31-.41 3.93 2.28 8.78 3.66 13.8 3.66 3.39 0 7.11-.7 10.53-2.15.51-.22.94.34.42.71z" transform="translate(2)" />
        <path d="M22.97 16.11c-.39-.5-2.58-.24-3.57-.12-.3.04-.34-.22-.07-.41 1.74-1.22 4.6-.87 4.93-.46.34.41-.09 3.27-1.72 4.63-.25.21-.49.1-.38-.18.37-.92 1.2-2.97.81-3.46z" transform="translate(-2)" />
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M11.91 1.5c-1.27 0-2.48.11-3.55.31-3.13.55-3.7 1.71-3.7 3.85V8.5h7.4v.94H1.86c-2.16 0-4.04 1.3-4.63 3.76a13.4 13.4 0 0 0 0 6.27c.52 2.32 1.83 3.76 3.99 3.76h2.04v-3.41c0-2.45 2.12-4.62 4.65-4.62h7.39c2.06 0 3.7-1.7 3.7-3.77V5.66c0-2.01-1.7-3.52-3.7-3.85a23.21 23.21 0 0 0-3.39-.31zM7.91 3.77a1.39 1.39 0 1 1 .01 2.78 1.39 1.39 0 0 1-.01-2.78z" transform="translate(2.5 0)" />
        <path d="M21.14 9.44v3.32c0 2.55-2.16 4.7-4.65 4.7H9.1c-2.01 0-3.7 1.73-3.7 3.77v7.06c0 2.01 1.74 3.19 3.7 3.77 2.34.69 4.59.81 7.39 0 1.85-.54 3.7-1.62 3.7-3.77v-2.83h-7.39v-.94h11.07c2.16 0 2.96-1.5 3.7-3.76.78-2.33.74-4.57 0-6.27-.55-2.33-1.54-3.76-3.7-3.76h-2.74zm-4.16 17.6a1.39 1.39 0 0 1 1.41 1.4 1.4 1.4 0 1 1-2.8 0c0-.77.61-1.4 1.39-1.4z" transform="translate(-2.5 -8)" />
      </svg>
    ),
  },
  {
    name: "Docker",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M13.98 11.13h2.05v-2.1h-2.05v2.1zm-2.46 0h2.04v-2.1h-2.04v2.1zm-2.45 0h2.04v-2.1H9.07v2.1zm-2.46 0h2.04v-2.1H6.61v2.1zm-2.43 0h2.03v-2.1H4.18v2.1zm2.43-2.32h2.04V6.7H6.61v2.1zm2.46 0h2.04V6.7H9.07v2.1zm2.45 0h2.04V6.7h-2.04v2.1zm0-2.34h2.04V4.36h-2.04v2.1zm10.81 4.62s-.86-.65-2.66-.37c-.2-1.42-1.7-2.27-1.7-2.27s-1.43 1.71-.37 3.61c-.3.16-.81.36-1.55.36H1.36c-.27 1.55.18 3.56 1.65 4.93 1.43 1.34 3.58 1.85 6.36 1.85 6.04 0 10.51-2.78 12.6-7.84 1.36.03 2.75-.39 3.5-1.83.13-.21.32-.69.41-.93l-.43-.32a3.41 3.41 0 0 0-2.49.81z" />
      </svg>
    ),
  },
];

const features = [
  { icon: ShieldCheck, label: "Secure Systems" },
  { icon: Layers, label: "Scalable Architecture" },
  { icon: Zap, label: "Fast Delivery" },
];

const stats = [
  { value: "120+", label: "Projects Delivered" },
  { value: "30+", label: "Technologies Used" },
  { value: "12", label: "Countries Served" },
  { value: "98%", label: "Client Retention" },
];

const clientLogos = ["Nxt Wave", "Coders Spark", "GoSure.AI", "Forty4 TECH"];
export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        poster="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=60"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.32] mix-blend-multiply"
      >
        <source
          src="https://videos.pexels.com/video-files/3129957/3129957-uhd_3840_2160_25fps.mp4"
          type="video/mp4"
        />
        <source
          src="https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
        <source
          src="https://cdn.pixabay.com/video/2020/10/05/51920-466138847_large.mp4"
          type="video/mp4"
        />
      </video>
      {/* Warm tint overlay over video */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.974 0.012 85 / 0.55) 0%, oklch(0.974 0.012 85 / 0.85) 60%, oklch(0.974 0.012 85 / 0.98) 100%)",
        }}
      />



      {/* Faint blurred shapes */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[var(--sand)] opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-[var(--accent)] opacity-50 blur-3xl" />

      {/* Faint code snippet overlay */}
      <pre className="pointer-events-none absolute right-8 top-32 hidden select-none font-mono text-[10px] leading-relaxed text-[var(--brown-accent)] opacity-[0.07] lg:block">
        {`const build = async () => {
  const stack = ["Full Stack", "Git", "aws"];
  return stack.map(scale).filter(ship);
};
export default build;`}
      </pre>
      <pre className="pointer-events-none absolute left-8 bottom-24 hidden select-none font-mono text-[10px] leading-relaxed text-[var(--brown-accent)] opacity-[0.06] lg:block">
        {`function deploy(app) {
  return cloud.push(app, { region: "global" });
}`}
      </pre>

      {/* Nav */}
      <SiteNav />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 pt-12 pb-10 text-center sm:px-10 sm:pt-20 sm:pb-12">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground shadow-sm sm:mb-10 sm:text-xs">

          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--sage)] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--sage)]" />
          </span>
          Available for Freelance Projects
        </div>

        <h1 className="max-w-4xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          We Build Scalable Digital
          <br />
          Solutions for{" "}
          <span className="italic font-light text-[var(--maroon)]">Modern Businesses</span>
        </h1>


        <p className="mt-6 max-w-xl text-balance text-sm leading-relaxed text-muted-foreground sm:mt-8 sm:text-base md:text-lg">
          A senior three-person studio delivering full-stack development, cloud
          infrastructure, and digital transformation for startups and growing
          businesses — with the care of a boutique team.
        </p>


        <div className="mt-10 flex w-full flex-col items-stretch gap-4 sm:mt-12 sm:w-auto sm:flex-row sm:items-center">
          <Link to="/contact" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="group h-14 w-full rounded-full bg-[var(--maroon)] px-8 text-base font-bold text-white shadow-xl shadow-[var(--maroon)]/20 transition-all hover:scale-[1.02] active:scale-95 sm:w-auto"
            >
              Start a Project
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link to="/work" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="ghost"
              className="h-14 w-full rounded-full border border-border bg-card px-8 text-base font-bold text-foreground transition-all hover:bg-muted active:scale-95 sm:w-auto"

            >
              View Our Work
            </Button>
          </Link>
        </div>

        {/* Feature highlights */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs font-bold uppercase tracking-widest text-muted-foreground/80 sm:mt-16">
          {features.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 transition-colors hover:text-[var(--maroon)]">
              <Icon className="h-4 w-4 text-[var(--maroon)]" strokeWidth={2} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech stack flow */}
      <div className="relative z-10 mx-auto mt-2 w-full max-w-6xl px-5 pb-12 sm:mt-6 sm:px-8 sm:pb-16">
        <div className="relative hidden h-44 sm:block">
          {/* Curved flow line */}
          <svg
            viewBox="0 0 1000 160"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            <defs>
              <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="oklch(0.78 0.025 65)" stopOpacity="0" />
                <stop offset="20%" stopColor="oklch(0.55 0.04 55)" stopOpacity="0.6" />
                <stop offset="80%" stopColor="oklch(0.55 0.04 55)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="oklch(0.78 0.025 65)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 0 90 C 200 30, 350 130, 500 80 S 800 30, 1000 90"
              fill="none"
              stroke="url(#flowGrad)"
              strokeWidth="1.2"
            />
            <path
              d="M 0 95 C 200 35, 350 135, 500 85 S 800 35, 1000 95"
              fill="none"
              stroke="oklch(0.55 0.04 55)"
              strokeOpacity="0.12"
              strokeWidth="0.6"
            />
          </svg>

          {/* Tech nodes */}
          <div className="absolute inset-0 flex items-center justify-between">
            {techStack.map((tech, i) => {
              const offsets = ["-translate-y-2", "translate-y-4", "-translate-y-3", "translate-y-2"];
              return (
                <div
                  key={tech.name}
                  className={`flex flex-col items-center gap-3 ${offsets[i]}`}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card text-[var(--brown-accent)] shadow-sm transition-transform hover:-translate-y-1">

                    {tech.icon}
                  </div>
                  <span className="text-xs font-medium tracking-wide text-muted-foreground">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile tech row */}
        <div className="-mx-5 flex gap-3 overflow-x-auto px-5 pb-2 sm:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex shrink-0 flex-col items-center gap-2"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card text-[var(--brown-accent)] shadow-sm">

                {tech.icon}
              </div>
              <span className="text-[10px] font-medium tracking-wide text-muted-foreground">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:mt-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-card px-4 py-4 text-center sm:px-6 sm:py-5">

              <div className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">{s.value}</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.12em] text-muted-foreground sm:text-[11px]">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Client logos */}
        <div className="mt-8 flex flex-col items-center gap-5 sm:mt-10">
          <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            TRUSTED BY COMPANIES
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 opacity-60 sm:gap-x-10">
            {clientLogos.map((logo) => (
              <span
                key={logo}
                className="font-serif text-sm font-medium tracking-[0.05em] text-[var(--brown-accent)] sm:text-base"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
