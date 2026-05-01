import { Link } from "@tanstack/react-router";
import { Home, Briefcase, Layers, Users, Mail, GitBranch } from "lucide-react";


const links = [
  { to: "/services", label: "Services", desc: "What we build", icon: Layers },
  { to: "/work", label: "Work", desc: "Recent case studies", icon: Briefcase },
  { to: "/process", label: "Process", desc: "How we deliver", icon: GitBranch },
  { to: "/team", label: "Team", desc: "Meet the trio", icon: Users },
  { to: "/contact", label: "Contact", desc: "Start a project", icon: Mail },
] as const;

export function SiteNav() {
  return (
    <>
    <nav className="sticky top-0 z-30 w-full border-b border-border bg-background shadow-sm">



      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
      <Link to="/" className="flex items-center gap-3">

        <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-primary shadow-[var(--shadow-soft)] transition-transform hover:scale-105">
          {/* Abstract Tech Logo SVG */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-primary-foreground"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          {/* Subtle Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-50" />
        </div>
        <div className="flex flex-col items-start leading-none">
          <span className="text-lg font-bold tracking-tight text-foreground">
            Gen<span className="text-[var(--brown-accent)]">Tech</span>
          </span>
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
            Studio
          </span>
        </div>
      </Link>

      <div className="hidden items-center gap-1 rounded-full border border-border/60 bg-card/50 px-2 py-1.5 text-sm text-muted-foreground backdrop-blur md:flex">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="group relative flex items-center gap-2 rounded-full px-4 py-2 transition-all hover:bg-muted hover:text-foreground [&.active]:bg-primary [&.active]:text-primary-foreground [&.active]:shadow-sm"
          >
            {l.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-3">
        {/* Mobile Contact Button (Visible only on mobile) */}
        <Link to="/contact" className="md:hidden">
          <button className="inline-flex h-9 items-center justify-center rounded-full bg-primary px-4 text-xs font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all active:scale-95">
            Let's Talk
          </button>
        </Link>

        <div className="hidden items-center gap-4 md:flex">
          <Link to="/contact">
            <button className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95">
              Let's Talk
            </button>
          </Link>
        </div>
      </div>
    </div>
  </nav>

    {/* Bottom Navigation for Mobile */}
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/80 pb-safe backdrop-blur-lg md:hidden">
      <div className="flex h-16 items-center justify-around px-2">
        <Link to="/" className="flex flex-col items-center gap-1 px-3 py-1 text-muted-foreground [&.active]:text-primary">
          <Home className="h-5 w-5" />
          <span className="text-[10px] font-medium">Home</span>
        </Link>
        <Link to="/services" className="flex flex-col items-center gap-1 px-3 py-1 text-muted-foreground [&.active]:text-primary">
          <Layers className="h-5 w-5" />
          <span className="text-[10px] font-medium">Services</span>
        </Link>
        <Link to="/work" className="flex flex-col items-center gap-1 px-3 py-1 text-muted-foreground [&.active]:text-primary">
          <Briefcase className="h-5 w-5" />
          <span className="text-[10px] font-medium">Work</span>
        </Link>
        <Link to="/team" className="flex flex-col items-center gap-1 px-3 py-1 text-muted-foreground [&.active]:text-primary">
          <Users className="h-5 w-5" />
          <span className="text-[10px] font-medium">Team</span>
        </Link>
        <Link to="/contact" className="flex flex-col items-center gap-1 px-3 py-1 text-muted-foreground [&.active]:text-primary">
          <Mail className="h-5 w-5" />
          <span className="text-[10px] font-medium">Contact</span>
        </Link>
      </div>
    </div>
    </>
  );
}
