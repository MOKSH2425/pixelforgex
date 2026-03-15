import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

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
      <body className="antialiased">
        {children}

        {/* ── WhatsApp floating button ── */}
        {/* Replace 919876543210 with your real number: 91 + your 10-digit mobile */}
        {/* Example: 919824000000 for +91 98240 00000 */}
        <WhatsAppButton
          phoneNumber="916353444388"
          message="Hi! I visited pixelforgex.dev and I'd like to discuss a project."
        />
      </body>
    </html>
  );
}
