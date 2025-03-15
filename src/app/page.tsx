import DocsCTA from "@/components/docs-cta";
import FeatureSection from "@/components/FeatureCards";
import HeroSection from "@/components/hero-section";
import PromptShowcase from "@/components/promptShowcase";

export default function Home() {
  return (
    <div>
      {/* hero */}
      <HeroSection />

      {/* examples */}
      <PromptShowcase />

      {/* what in */}
      <FeatureSection />

      {/* CTA */}
      <DocsCTA />
    </div>
  );
}
