import Image from "next/image";
import Button from "@/app/components/Button";
import SkillTag from "@/app/components/SkillTag";

type WebsiteCardProps = {
  title?: string;
  description?: string;
  features: string[];
  wordmarkSrc: string;
  wordmarkAlt: string;
  imageSrc: string;
  imageAlt: string;
  websiteURL?: string;
  clientTestimonial?: string;
  clientName?: string;
};

export default function WebsiteCard({
  title,
  description,
  features,
  wordmarkSrc,
  wordmarkAlt,
  imageSrc,
  imageAlt,
  websiteURL,
  clientTestimonial,
  clientName,
}: WebsiteCardProps) {
  return (
    <article className="flex flex-col w-full h-auto bg-[var(--foreground)] py-4 md:py-6 my-auto rounded-lg hover:scale-102 border border-transparent hover:border-[var(--accent)] transition-transform duration-300">
      <div className="flex">
        <div className="flex flex-col gap-6 flex-1 px-4 md:px-6">
          <div className="flex justify-center md:justify-start w-full">
            <Image
              src={wordmarkSrc}
              alt={wordmarkAlt}
              width={500}
              height={200}
              className="w-30 md:w-40 h-12 md:h-16"
            />
          </div>

          {/** FOR SMALL AND MEDIUM SCREENS */}
          <div className="flex flex-col gap-6 lg:gap-0">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
              {title}
            </h3>
            <Image
              src={imageSrc}
              alt={imageAlt}
              className="lg:hidden rounded object-contain w-full md:h-96 lg:h-72 order-1 md:order-none"
              width={1000}
              height={600}
            />
          </div>
          <p className="text-sm md:text-base text-[var(--secondary)]">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {features.length > 0 &&
              features.map((feature) => (
                <SkillTag key={feature} skill={feature} />
              ))}
          </div>
          <div className="m-auto pt-2">
            <Button url={websiteURL} ariaLabel={`Visit ${title} website`} />
          </div>
        </div>

        {/** FOR LARGE SCREENS */}
        <div className="hidden lg:flex flex-col gap-6 flex-1 my-auto px-4">
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="rounded object-cover w-full h-72"
            width={1000}
            height={600}
          />
        </div>
      </div>
      <blockquote className="italic my-auto pt-8 px-4 md:px-16 text-xs md:text-sm">
        {clientTestimonial}
        <footer className="pt-2 px-8 text-[var(--secondary)]">
          -- <cite>{clientName}</cite>
        </footer>
      </blockquote>
    </article>
  );
}
