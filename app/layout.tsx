import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CursorGlow from "@/components/ui/CursorGlow";
import { ThemeProvider, themeInitScript } from "@/lib/theme";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pixelforgex.dev"),
  title: "Pixelforgex — Web & App Development Studio",
  description:
    "Full-stack web and app development studio. We build clean, performance-obsessed digital products for startups, SMBs, and brands that care about quality.",
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
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
  },
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pixelforgex.dev";

export const defaultMetadata: Metadata = {
  openGraph: {
    title: "Pixelforgex",
    description: "We build digital experiences that actually work well.",
    type: "website",
    url: SITE_URL,
    siteName: "Pixelforgex",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Pixelforgex — Web & App Development Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixelforgex",
    description: "We build digital experiences that actually work well.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${bricolage.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased font-sans bg-bg text-ink">
        <ThemeProvider>
          <CursorGlow />
          {children}

          {/* Replace 919876543210 with your real number: 91 + your 10-digit mobile */}
          <WhatsAppButton
            phoneNumber="916353444388"
            message="Hi! I visited pixelforgex.dev and I'd like to discuss a project."
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
