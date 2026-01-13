"use client";

import BioCard from "./components/BioCard";
import WebsiteSection from "./components/WebsiteSection";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-12 max-w-6xl mx-auto p-6">
      <BioCard />
      <WebsiteSection />
    </main>
  );
}
