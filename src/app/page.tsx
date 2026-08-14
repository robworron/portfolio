import BioSection from "./components/BioSection";
import BottomSection from "./components/BottomSection";
import SkillsSection from "./components/SkillsSection";
import WebsiteSection from "./components/WebsiteSection";
import FadeIn from "./components/FadeIn";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-12 max-w-6xl mx-auto p-6">
      <FadeIn>
        <BioSection />
      </FadeIn>
      <FadeIn delay={200}>
        <SkillsSection />
      </FadeIn>
      <FadeIn delay={400}>
        <WebsiteSection />
      </FadeIn>
      <FadeIn>
        <BottomSection />
      </FadeIn>
    </main>
  );
}
