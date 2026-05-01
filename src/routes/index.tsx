import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { LogoMarquee } from "@/components/LogoMarquee";
import { FeaturesShowcase } from "@/components/FeaturesShowcase";
import { WorkPreviewSlider } from "@/components/WorkPreviewSlider";
import { TestimonialsSlider } from "@/components/TestimonialsSlider";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <LogoMarquee />
      <FeaturesShowcase />
      <WorkPreviewSlider />
      <TestimonialsSlider />
      <Footer />
    </main>
  );
}
