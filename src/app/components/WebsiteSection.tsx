import WebsiteCard from "./WebsiteCard";

export default function WebsiteSection() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Websites</h2>
      <div className="flex flex-wrap gap-6">
        <WebsiteCard
          title="CMHL - Canucks Mens Hockey League"
          description="Built with Next.js and hosted on Vercel, this recreational hockey league website allows players to view schedules, standings, and statistics dynamically through its integration with the Google Sheets API. Designed mobile-first, the site provides an optimal, responsive experience across all devices."
          features={[
            "JavaScript",
            "React",
            "Next.js",
            "Vercel",
            "Responsive",
            "Dynamic Routing",
            "Google Sheets API",
          ]}
          wordmarkSrc="/cmhl-wordmark.png"
          wordmarkAlt="CMHL Wordmark"
          imageSrc="/cmhl-thumbnail.png"
          imageAlt="CMHL Website Image"
          websiteURL="https://cmhlniagara.com/"
        />
        <WebsiteCard
          title="Ozzy Renos"
          description="A showcase website for a Niagara-based contractor and renovator, featuring Formspree-powered contact forms, live Google Reviews via Elfsight, and SEO-optimized structure. Built with TypeScript, Next.js, and Tailwind CSS, it's fully responsive to ensure an optimal experience on all devices."
          features={[
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind",
            "Vercel",
            "Responsive",
            "Formspree",
            "Elfsight",
            "SEO",
          ]}
          wordmarkSrc="/ozzyrenos-wordmark.png"
          wordmarkAlt="Ozzy Renos Wordmark"
          imageSrc="/ozzyrenos-thumbnail.png"
          imageAlt="Ozzy Renos Website Image"
          websiteURL="https://www.ozzyrenos.ca/"
        />
        <WebsiteCard
          title="Dr. John Mignelli Chiropractic"
          description="Dr. John Mignelli provides chiropractic care in Niagara Falls. This website offers a professional space where clients can learn about Dr. Mignelli, explore his services, and book appointments through Formspree. Built with Next.js and deployed on Vercel, the site focuses on performance, accessibility, responsive design, and SEO to support strong local visibility and a smooth user experience."
          features={[
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind",
            "Vercel",
            "Responsive",
            "Formspree",
            "Elfsight",
            "SEO",
          ]}
          wordmarkSrc="/mignelli-wordmark.png"
          wordmarkAlt="Dr. John Mignelli Wordmark"
          imageSrc="/mignelli-thumbnail.png"
          imageAlt="Dr. John Mignelli Website Image"
          websiteURL="https://www.drjohnmignellidc.ca/"
        />
      </div>
    </section>
  );
}
