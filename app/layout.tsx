import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PIXELFORGEX.DEV — Web & App Development Studio",
  description:
    "Full-stack web and app development studio. We build pixel-perfect, performance-obsessed digital products for startups, SMBs, and brands that care about quality.",
  keywords: [
    "web development",
    "app development",
    "UI/UX design",
    "Next.js",
    "React",
    "Flutter",
    "SaaS",
    "India",
  ],
  openGraph: {
    title: "PIXELFORGEX.DEV",
    description: "We forge digital experiences that actually hit different.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
