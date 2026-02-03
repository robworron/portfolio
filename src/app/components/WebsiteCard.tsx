import Button from "@/app/components/Button";
import Image from "next/image";

type WebsiteCardProps = {
  title?: string;
  description?: string;
  features: string[];
  wordmarkSrc: string;
  wordmarkAlt: string;
  imageSrc: string;
  imageAlt: string;
  websiteURL?: string;
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
}: WebsiteCardProps) {
  return (
    <article className="flex w-full h-auto bg-[var(--foreground)] py-4 md:py-6 my-auto rounded-lg hover:scale-105 transition-transform duration-300">
      <div className="flex flex-col gap-6 flex-1 px-2 md:px-6">
        <div className="flex justify-center md:justify-start w-full">
          <Image
            src={wordmarkSrc}
            alt={wordmarkAlt}
            width={500}
            height={200}
            className="w-30 md:w-40 h-12 md:h-16"
          />
        </div>
        <div className="flex flex-col gap-6 lg:gap-0">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold">{title}</h3>
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="lg:hidden rounded object-cover w-full h-48 md:h-96 lg:h-72 order-1 md:order-none"
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
              <div
                key={feature}
                className="flex justify-center items-center min-w-20 p-1 px-2 bg-[var(--tag-bg)] rounded-3xl text-xs tag"
              >
                {feature}
              </div>
            ))}
        </div>
        <div className="m-auto">
          <Button url={websiteURL} newTab />
        </div>
      </div>
      <div className="hidden lg:flex flex-col gap-6 flex-1 my-auto px-4">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="rounded object-cover w-full h-72"
          width={1000}
          height={600}
        />
      </div>
    </article>
  );
}
