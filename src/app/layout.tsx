import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.robworron.ca"),
  verification: { google: "lI1vo6XjEPaeK7fonWtQzRDhdvErxRG4AoqS0QE4FXY" },
  title: "Rob Worron - Full-Stack Web Developer | Niagara",
  description:
    "Full-stack web developer based in Niagara building fast, accessible web apps with React, Next.js, and TypeScript.",

  openGraph: {
    siteName: "Rob Worron - Full-Stack Web Developer | Niagara",
    title: "Rob Worron - Full-Stack Web Developer | Niagara",
    description:
      "Full-stack web developer based in Niagara building fast, accessible web apps with React, Next.js, and TypeScript.",
    url: "https://www.robworron.ca/",
    images: [
      {
        url: "https://www.robworron.ca/robworron-wide.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rob Worron - Full-Stack Web Developer | Niagara",
    description:
      "Full-stack web developer based in Niagara building fast, accessible web apps with React, Next.js, and TypeScript.",
    images: ["https://www.robworron.ca/robworron-wide.png"],
  },

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

const geistSans = Geist({
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rob Worron",
    jobTitle: "Full-Stack Web Developer",
    url: "https://www.robworron.ca/",
    sameAs: [
      "https://www.linkedin.com/in/rob-worron/",
      "https://github.com/robworron",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Brock University",
    },
  };

  return (
    <html lang="en-CA">
      <body
        className={`${geistSans.className} ${geistMono.className} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
