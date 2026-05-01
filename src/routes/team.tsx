import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { Team } from "@/components/Team";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "The Team — Trio Studio" },
      { name: "description", content: "Meet the three senior engineers and designers behind Trio Studio." },
      { property: "og:title", content: "The Team — Trio Studio" },
      { property: "og:description", content: "Three senior engineers and designers — the same people from kickoff to deploy." },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <main className="bg-background">
      <SiteNav />
      <Team />
      <Footer />
    </main>
  );
}
