import { Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const columns = [
  {
    title: "Studio",
    links: [
      { label: "Services", to: "/services" },
      { label: "Selected Work", to: "/work" },
      { label: "Process", to: "/process" },
      { label: "Our Team", to: "/team" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "WhatsApp", href: "https://wa.me/916300603869" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/guru-mahesh-busani" },
      { label: "GitHub", href: "https://github.com/GuruMahesh7" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative w-full border-t border-border/40 bg-background pt-20 pb-12">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-8">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-foreground transition-transform group-hover:scale-105">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-background"
                >
                  <path d="M4 7V4h16v3M9 20h6M12 4v16" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Gen<span className="text-[var(--brown-accent)]">Tech</span>
                <span className="ml-1 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground opacity-60">Studio</span>
              </span>
            </Link>
            
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
              A boutique digital studio building high-performance web applications, 
              cream architectures, and seamless user experiences for the modern web.
            </p>

            <div className="flex items-center gap-4">
              <a 
                href="mailto:support@gen-tech.in"
                className="group flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-[var(--brown-accent)]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-card transition-colors group-hover:border-[var(--brown-accent)] group-hover:bg-[var(--brown-accent)] group-hover:text-white">
                  <Mail className="h-4 w-4" strokeWidth={1.5} />
                </div>
                support@gen-tech.in
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  {col.title}
                </h4>
                <ul className="mt-6 space-y-4">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {l.to ? (
                        <Link
                          to={l.to}
                          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {l.label}
                        </Link>
                      ) : (
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {l.label}
                          <ArrowUpRight className="h-3 w-3 opacity-0 transition-all -translate-y-0.5 group-hover:opacity-100" />
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Availability */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Status
              </h4>
              <div className="mt-6 p-5 rounded-2xl border border-border/60 bg-card/50 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                  </span>
                  <span className="text-xs font-semibold text-foreground">Available</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Accepting new projects for Q3 2026. Let's discuss your vision.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex text-[10px] font-bold uppercase tracking-widest text-[var(--brown-accent)] hover:underline"
                >
                  Start a project
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-[11px] text-muted-foreground">
              © 2026 Gen Tech Studio. Built with deliberate care.
            </span>
            <div className="flex items-center gap-4 text-[10px] text-muted-foreground/60 uppercase tracking-widest">
              <a href="#" className="hover:text-foreground">Privacy</a>
              <span>·</span>
              <a href="#" className="hover:text-foreground">Terms</a>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="text-[10px] font-medium text-muted-foreground flex items-center gap-2">
              <span className="h-px w-8 bg-border" />
              India · Remote
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
