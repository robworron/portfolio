import WebsiteCard from "./WebsiteCard";
import FadeIn from "./FadeIn";

export default function WebsiteSection() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Websites</h2>
      <span className="w-12 md:w-20 h-1 bg-[var(--accent)] mb-4" />
      <div className="flex flex-wrap gap-6">
        <FadeIn delay={200}>
          <WebsiteCard
            title="CMHL - Canucks Men's Hockey League"
            description="Built with Next.js and hosted on Vercel, this recreational hockey league website allows players to view schedules, standings, and statistics dynamically through its integration with the Google Sheets API. Designed mobile-first, the site provides an optimal, responsive experience across all devices."
            features={[
              "JavaScript",
              "React",
              "Next.js",
              "Vercel",
              "Dynamic Routing",
              "Google Sheets API",
              "Server-Side Caching",
              "SEO",
            ]}
            wordmarkSrc="/cmhl-wordmark.png"
            wordmarkAlt="CMHL Wordmark"
            imageSrc="/cmhl-thumbnail.png"
            imageAlt="Screenshot of CMHL website homepage"
            websiteURL="https://cmhlniagara.com/"
            clientTestimonial={`"We're really happy with how our website turned out. Rob understood what a men's hockey league actually needs, and the result looks sharp and is easy to get around. It works just as well on a phone as it does on a desktop, which matters when guys are checking the schedule from the parking lot. The biggest thing for us is that he connected the site to our Google Sheets. Our stats, standings, and schedule update on their own as soon as we make a change on our end. His turnaround is quick too. When we ask for something or run into an issue, he works through it efficiently and without a lot of back and forth. He also comes to us with ideas rather than waiting on direction, and it shows in the details, from the news section to the photo gallery to the team logos linking out to Instagram."`}
            clientName="Roberto Gallo - Co-Commissioner, CMHL"
          />
        </FadeIn>
        <FadeIn delay={200}>
          <WebsiteCard
            title="Olympia Mortgage Group"
            description="With over 35 years of combined experience, Olympia Mortgage Group brings a unique blend of residential construction and real estate expertise to the mortgage industry. This website serves as a platform to give the company credibility and provide a space for clients to learn about their services. Built with Next.js and deployed on Vercel, this site focuses on responsive design and SEO to support strong local visibility and provide a smooth user experience across all devices."
            features={[
              "TypeScript",
              "React",
              "Next.js",
              "Tailwind",
              "Vercel",
              "Responsive",
              "Formspree",
              "SEO",
            ]}
            wordmarkSrc="/olympia-wordmark.png"
            wordmarkAlt="Olympia Mortgage Group Wordmark"
            imageSrc="/olympia-thumbnail.png"
            imageAlt="Screenshot of Olympia Mortgage Group website homepage"
            websiteURL="https://www.olympiamortgagegroup.com/"
            clientTestimonial={`"I recently had the pleasure of working with Rob when designing and launching a new website. From the first meeting, Rob was extremely professional, understanding, and took time to explain everything thoroughly. Throughout the process, he was transparent and ensured everything was exactly as we wanted. Our website is excellent and we couldn't be happier. We would recommend Rob to anyone."`}
            clientName="Justin Domanico - Mortgage Broker, Olympia Mortgage Group"
          />
        </FadeIn>
        <FadeIn delay={200}>
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
            imageAlt="Screenshot of Dr. John Mignelli website homepage"
            websiteURL="https://www.johnmignellichiropractic.ca/"
            clientTestimonial={`"The website Rob built for me has helped my business exponentially. He was able to execute the vision I had for my website and actually made it better than what I had in mind. I can't recommend him enough if you need an expert level webpage design."`}
            clientName="Dr. John Mignelli - Chiropractor"
          />
        </FadeIn>
        <FadeIn delay={200}>
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
            imageAlt="Screenshot of Ozzy Renos website homepage"
            websiteURL="https://www.ozzyrenos.ca/"
            clientTestimonial={`"Rob was very easy going and great to work with. He built an amazing website for my renovation business and exceeded all of my expectations. From the beginning, Rob put an incredible amount of time, effort, and attention to detail into every part of the project. If there was a certain part of the design or website I didn't like, he fixed it. Rob made sure the website reflected exactly what I wanted."`}
            clientName="Brandon Osborne - Founder, Ozzy Renos"
          />
        </FadeIn>
      </div>
    </section>
  );
}
