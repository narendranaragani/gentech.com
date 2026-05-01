import { Linkedin, Github, MapPin, Briefcase, ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";


const team = [
  {
    name: "Narendra",
    role: "Frontend Engineer",
    location: "HYD, TG",
    bio: "Crafts high-performance interfaces with a focus on motion and accessibility. Specialist in design systems and complex state management.",
    skills: ["React", "MERN", "REST API", "Next.js", "Redux", "AWS", "Design Systems"],
    image: "/team-member.jpeg",
    github: "https://github.com/narendranaragani",
    linkedin: "https://www.linkedin.com/in/narendra-naragani/",
  },
  {
    name: "Guru Mahesh",
    role: "Backend & Cloud Engineer",
    location: "HYD, AP",
    bio: "Architects resilient distributed systems and AI-driven backends. Expert in scaling MERN stack applications and AWS infrastructure.",
    skills: ["Node.js", "React", "MongoDB", "AWS", "LangChain"],
    image: "/team-member.jpg",
    github: "https://github.com/GuruMahesh7",
    linkedin: "https://www.linkedin.com/in/guru-mahesh-busani",
  },
  {
    name: "Laxmi Prasad",
    role: "Full Stack & Enterprise Architect",
    location: "HYD, TG",
    bio: "Specialist in large-scale enterprise solutions and AEM architecture. Expert in bridging robust Java backends with modern React frontends.",
    skills: ["React JS", "Angular", "Java", "Spring Boot", "AEM"],
    image: "/team-member1.jpeg",
    github: "https://github.com/laxmiprasads",
    linkedin: "https://www.linkedin.com/in/laxmi-prasad-suraram/",
  },
];

const values = [
  { v: "33", l: "Combined years of experience" },
  { v: "3", l: "Continents, one Slack" },
  { v: "0", l: "Account managers" },
  { v: "100%", l: "Hands-on the work" },
];

export function Team() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-background py-20 sm:py-32">
        <div className="pointer-events-none absolute -top-32 left-0 h-[400px] w-[600px] rounded-full bg-[var(--maroon)]/5 opacity-10 blur-3xl" />
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
              The team
            </span>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Three people. Senior across the stack.
            </h2>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
              You'll work directly with the people designing and building your
              product — no account managers, no hand-offs, no offshore middle layer.
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-background pb-24 sm:pb-32">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-12">
            {team.map((m) => (
              <div key={m.name} className="group flex flex-col items-center text-center md:items-start md:text-left">
                <div className="relative aspect-[3/4] w-full max-w-[340px] overflow-hidden rounded-3xl bg-[var(--sand)] shadow-lg transition-all duration-500 hover:shadow-xl">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 opacity-100 md:opacity-0 md:translate-y-4 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500">
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-110 active:scale-90"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={m.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-110 active:scale-90"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                <div className="mt-10 w-full">
                  <div className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--maroon)] md:justify-start">
                    <MapPin className="h-3 w-3" /> {m.location}
                  </div>
                  <h3 className="mt-4 text-3xl font-bold tracking-tight text-foreground transition-colors group-hover:text-[var(--maroon)]">
                    {m.name}
                  </h3>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground/80">
                    {m.role}
                  </p>
                  <p className="mt-6 text-base italic leading-relaxed text-muted-foreground">
                    "{m.bio}"
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 border-t border-border/50 pt-8 md:justify-start">
                    {m.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-bold uppercase tracking-wider text-foreground/40 transition-colors group-hover:text-[var(--maroon)]/60"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full bg-maroon-deep py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-4">
            {values.map((s) => (
              <div key={s.l} className="bg-[var(--maroon)] px-6 py-14 text-center transition-colors hover:bg-white/5">
                <div className="text-4xl font-bold tracking-tight text-[var(--cream)] sm:text-5xl">{s.v}</div>
                <div className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--cream)]/40">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
