type ButtonProps = {
  label?: string;
  url?: string;
};

export default function Button({
  label = "Visit Website",
  url = "",
}: ButtonProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer px-4 py-2 rounded text-white bg-[linear-gradient(90deg,#2563eb_0%,#06b6d4_100%)] hover:opacity-80 transition-opacity duration-200"
    >
      {label}
    </a>
  );
}
