import Button from "./Button";

type DevelopmentCardProps = {
  title?: string;
  description?: string;
  features: string[];
  url?: string;
};

export default function DevelopmentCard({
  title = "Development Card Title",
  description = "Here is where a brief description of the project goes.",
  features = [],
  url = "/",
}: DevelopmentCardProps) {
  return (
    <article className="flex flex-col gap-4 w-full md:w-1/2 lg:w-1/3 h-auto bg-[var(--foreground)] p-4 md:p-6 my-auto rounded-lg hover:scale-105 transition-transform duration-300">
      <h3 className="text-lg md:text-xl lg:text-2xl font-bold">{title}</h3>
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
      <div className="flex justify-center">
        <Button label="See More" url={url} />
      </div>
    </article>
  );
}
