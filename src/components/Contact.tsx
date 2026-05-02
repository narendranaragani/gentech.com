import { useState, useRef } from "react";
import {
  Send,
  Mail,
  Calendar,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Loader2,
  ArrowLeft,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const channels = [
  { icon: Mail, label: "Email", value: "support@gen-tech.in", href: "mailto:support@gen-tech.in" },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "+91 63006 03869",
    href: "https://wa.me/916300603869",
  },
  { icon: MessageSquare, label: "Call", value: "+91 63006 03869", href: "tel:+916300603869" },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        formRef.current?.reset();
        // Reset status after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full bg-background flex items-center justify-center py-12 px-6">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-full max-w-4xl bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left Column: Context */}
        <div className="space-y-10">
          <div className="mb-4">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 transition-colors hover:text-[var(--brown-accent)]"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[var(--brown-accent)]">
              Contact
            </div>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[0.9]">
              Let's build <br />
              <span className="italic font-light text-[var(--brown-accent)]">something quiet.</span>
            </h1>
            <p className="mt-8 text-base text-muted-foreground leading-relaxed max-w-md">
              I'm currently available for new projects and collaborations. Tell me about your
              vision, and I'll get back to you within 24 hours.
            </p>
          </div>

          <div className="space-y-6">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="group flex items-center gap-4 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/60 bg-card/40 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                  <c.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="text-sm font-medium text-foreground">{c.value}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-border/40">
            <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Availability
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Accepting projects for Q3 2026
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-card/40 border border-border/60 rounded-3xl p-8 md:p-10 backdrop-blur-xl shadow-[var(--shadow-glass)]">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-in fade-in zoom-in duration-500">
              <div className="h-20 w-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
              <p className="text-muted-foreground max-w-xs">
                Thank you for reaching out. I'll get back to you at support@gen-tech.in within 24
                hours.
              </p>
              <Button
                variant="outline"
                onClick={() => setStatus("idle")}
                className="mt-4 rounded-full px-8"
              >
                Send another message
              </Button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="access_key" value="b309f8d6-e6c8-4a61-b069-a6530cc65ddf" />
              <input type="hidden" name="subject" value="New Contact Form Submission - Gen Tech" />
              <input type="hidden" name="from_name" value="Gen Tech Portfolio" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">
                    Name
                  </label>
                  <Input
                    name="name"
                    required
                    placeholder="Enter your name..."
                    className="h-12 bg-background/50 border-border/40 rounded-xl px-4"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email..."
                    className="h-12 bg-background/50 border-border/40 rounded-xl px-4"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">
                  Subject
                </label>
                <Input
                  name="subject_line"
                  required
                  placeholder="How can I help?"
                  className="h-12 bg-background/50 border-border/40 rounded-xl px-4"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">
                  Message
                </label>
                <Textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Share your project details..."
                  className="bg-background/50 border-border/40 rounded-xl px-4 py-3 resize-none"
                />
              </div>

              <Button
                disabled={status === "loading"}
                type="submit"
                className="w-full h-14 rounded-full bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
              {status === "error" && (
                <p className="text-center text-xs text-red-500 font-medium">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
