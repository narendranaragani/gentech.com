import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { Process } from "@/components/Process";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — Trio Studio" },
      { name: "description", content: "How we work — discover, design, develop, deploy. A calm, four-step engagement model." },
      { property: "og:title", content: "Our Process — Trio Studio" },
      { property: "og:description", content: "A calm, four-step engagement model from discovery through deployment." },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <main className="bg-background">
      <SiteNav />
      <Process />
      <Footer />
    </main>
  );
}
