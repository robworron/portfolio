type ButtonProps = {
  label?: string;
  url?: string;
  newTab?: boolean;
};

export default function Button({
  label = "Visit Website",
  url = "",
  newTab = false,
}: ButtonProps) {
  return (
    <a
      href={url}
      target={newTab ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="cursor-pointer px-4 py-2 rounded text-white bg-[linear-gradient(90deg,#2563eb_0%,#06b6d4_100%)] hover:opacity-80 transition-opacity duration-200"
    >
      {label}
    </a>
  );
}
