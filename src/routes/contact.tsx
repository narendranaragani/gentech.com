import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Trio Studio" },
      { name: "description", content: "Start a project with Trio Studio — a senior three-person freelance team available for Q3 engagements." },
      { property: "og:title", content: "Contact — Trio Studio" },
      { property: "og:description", content: "Tell us about your project — we usually reply within a business day." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="bg-background">
      <SiteNav />
      <Contact />
      <Footer />
    </main>
  );
}
