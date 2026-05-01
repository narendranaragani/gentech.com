import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Gen Tech" },
      { name: "description", content: "Web development, cloud architecture, UI/UX, APIs, automation and custom applications — six focused practices delivered by a senior freelance team." },
      { property: "og:title", content: "Services — Gen Tech" },
      { property: "og:description", content: "Six focused practices delivered end-to-end by a three-person freelance studio." },

    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main className="bg-background">
      <SiteNav />
      <Services />
      <Footer />
    </main>
  );
}
