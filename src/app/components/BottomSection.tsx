const DOT = <p className="hidden md:flex">•</p>;

export default function BottomSection() {
  return (
    <section className="flex flex-col items-center">
      <p className="py-4 font-semibold text-lg text-center">
        Open to full-stack and freelance work
      </p>
      <div className="flex flex-col md:flex-row gap-2 text-[var(--secondary)] text-sm md:text-base text-center">
        <a
          href="https://www.linkedin.com/in/rob-worron/"
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring"
        >
          https://www.linkedin.com/in/rob-worron/
        </a>
        {DOT}
        <a
          href="mailto:rworron94@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring"
        >
          rworron94@gmail.com
        </a>
        {DOT}
        <a
          href="https://www.github.com/robworron"
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring"
        >
          https://www.github.com/robworron
        </a>
      </div>
    </section>
  );
}
