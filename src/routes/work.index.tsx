import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { Portfolio } from "@/components/Portfolio";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Selected Work — Gen Tech" },
      {
        name: "description",
        content:
          "Recent freelance projects shipped by Gen Tech — SaaS, e-commerce, dashboards, and brand sites.",
      },
      { property: "og:title", content: "Selected Work — Gen Tech" },
      {
        property: "og:description",
        content: "A small slice of products designed, built and deployed by the same three people.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <main className="bg-background">
      <SiteNav />
      <Portfolio />
      <Footer />
    </main>
  );
}
