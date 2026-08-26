import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { FOOTER_COLUMNS, SITE } from "@/lib/data";
import Logo from "@/components/ui/Logo";

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/pixelforgex.dev?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
  { label: "Email",     href: "mailto:pixelforgex.dev@gmail.com" },
  { label: "Call",      href: "tel:+916353444388" },
];

const MARQUEE_ITEMS = [
  "AVAILABLE FOR NEW PROJECTS",
  "LET'S BUILD SOMETHING WORTH SHIPPING",
  "SURAT, INDIA — REMOTE WORLDWIDE",
];

export default function Footer() {
  return (
    <footer className="relative z-[1] bg-surface-2 border-t border-line">
      {/* Scrolling identity strip */}
      <div className="border-b border-line overflow-hidden py-3">
        <div className="flex gap-8 w-max animate-marquee">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((t, i) => (
            <span
              key={i}
              className="font-mono text-[11px] tracking-widest text-faint whitespace-nowrap flex items-center gap-8"
            >
              {t}
              <span className="w-1 h-1 rounded-full bg-accent" />
            </span>
          ))}
        </div>
      </div>

      {/* Giant brand statement */}
      <Link
        href="/#contact"
        className="group relative flex items-center justify-center gap-3 sm:gap-5 py-12 sm:py-16 border-b border-line no-underline overflow-hidden"
      >
        <h2
          className="font-display font-semibold text-ink tracking-tight leading-none group-hover:text-accent transition-colors duration-300 text-center"
          style={{ fontSize: "clamp(32px, 8vw, 96px)" }}
        >
          Let&apos;s talk.
        </h2>
        <span className="hidden sm:inline-flex w-14 h-14 rounded-full border border-line items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:border-accent transition-colors duration-300">
          <ArrowUpRight
            size={22}
            className="text-ink group-hover:text-white transition-colors duration-300"
          />
        </span>
      </Link>

      <div className="max-w-[1100px] mx-auto px-6 md:px-8 pt-14 pb-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-x-10 gap-y-12">
        <div>
          <div className="mb-4">
            <Logo />
          </div>
          <p className="text-[14px] text-subtle leading-7 mb-6 max-w-xs">
            {SITE.tagline}
          </p>
          <div className="flex gap-3 flex-wrap">
            {SOCIALS.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="text-[13px] font-medium text-subtle border border-line rounded-full px-4 py-2 hover:text-ink hover:border-faint transition-all duration-200"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title}>
            <p className="eyebrow text-[11px] mb-5 normal-case tracking-normal">
              {col.title.toLowerCase()}
            </p>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-subtle hover:text-ink transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Compact contact row */}
      <div className="max-w-[1100px] mx-auto px-6 md:px-8 mt-12">
        <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6">
          <a
            href="tel:+916353444388"
            className="inline-flex items-center gap-2 text-[13px] text-subtle hover:text-ink transition-colors duration-200 no-underline"
          >
            <Phone size={14} className="text-accent" />
            +91 63534 44388
          </a>
          <span className="inline-flex items-center gap-2 text-[13px] text-subtle">
            <MapPin size={14} className="text-accent" />
            {SITE.location}
          </span>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-2 text-[13px] text-subtle hover:text-ink transition-colors duration-200 no-underline"
          >
            <Mail size={14} className="text-accent" />
            {SITE.email}
          </a>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 md:px-8 mt-8 border-t border-line py-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-[13px] text-faint">
          © 2025 Pixelforgex — All rights reserved
        </p>
        <p className="text-[13px] text-faint">
          Made with care in Surat, India
        </p>
      </div>
    </footer>
  );
}
