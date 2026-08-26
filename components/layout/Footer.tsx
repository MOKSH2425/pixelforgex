import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FOOTER_COLUMNS, NAV_LINKS, SITE } from "@/lib/data";

const SOCIALS = [
  { label: "INSTAGRAM", href: "https://www.instagram.com/pixelforgex.dev?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
  { label: "EMAIL",     href: "mailto:pixelforgex.dev@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="relative z-[1] pt-6">
      <div
        className="relative mx-3 sm:mx-6 rounded-[40px] overflow-hidden"
        style={{
          background:
            "linear-gradient(155deg, #0A0A0F 0%, #0E0E16 55%, #0A0A0F 100%)",
        }}
      >
        {/* subtle radial glow, standing in for the reference's teal color-block energy — in our own accent */}
        <span
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[560px] h-[280px] rounded-full opacity-[0.16] blur-[90px]"
          style={{ background: "var(--color-accent)" }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -right-16 w-[360px] h-[280px] rounded-full opacity-[0.12] blur-[90px]"
          style={{ background: "#8B5CF6" }}
        />

        {/* PAGES + brand mark + FOLLOW */}
        <div className="relative grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-start md:items-center gap-y-12 gap-x-6 px-7 sm:px-12 pt-16 pb-14">
          <div className="order-1">
            <p className="font-mono text-[11px] tracking-widest text-white/40 mb-5">
              // PAGES
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[15px] sm:text-[16px] font-semibold text-white/90 hover:text-white transition-colors duration-200 no-underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-3 md:order-2 col-span-2 md:col-span-1 flex flex-col items-center text-center">
            <span className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center mb-4">
              <Image src="/logo.png" alt="PixelForgeX logo" fill className="object-contain p-2" />
            </span>
            <p className="font-display font-semibold text-white text-[20px] sm:text-[22px] tracking-tight mb-2">
              PixelForgeX
            </p>
            <p className="text-[13.5px] text-white/50 max-w-[260px] leading-6 mb-5">
              {SITE.tagline}
            </p>
            <Link
              href="/#contact"
              className="text-[13.5px] font-medium text-accent underline underline-offset-4 decoration-accent/40 hover:decoration-accent transition-all duration-200 no-underline"
              style={{ textDecoration: "underline" }}
            >
              Start a project
            </Link>
          </div>

          <div className="order-2 md:order-3 text-right">
            <p className="font-mono text-[11px] tracking-widest text-white/40 mb-5">
              FOLLOW //
            </p>
            <ul className="space-y-3">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-[15px] sm:text-[16px] font-semibold text-white/90 hover:text-white transition-colors duration-200 no-underline"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bordered contact info bar */}
        <div className="relative px-4 sm:px-8 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 rounded-2xl border border-white/10 divide-y sm:divide-y-0 sm:divide-x divide-white/10 overflow-hidden">
            <a
              href="tel:+916353444388"
              className="flex items-center justify-center gap-2.5 px-5 py-5 no-underline group"
            >
              <Phone size={14} className="text-accent flex-shrink-0" />
              <span className="text-[13.5px] font-medium text-white/80 group-hover:text-white transition-colors">
                +91 63534 44388
              </span>
            </a>
            <div className="flex items-center justify-center gap-2.5 px-5 py-5 text-center">
              <MapPin size={14} className="text-accent flex-shrink-0" />
              <span className="text-[13.5px] text-white/80">{SITE.location}</span>
            </div>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center justify-center gap-2.5 px-5 py-5 no-underline group"
            >
              <Mail size={14} className="text-accent flex-shrink-0" />
              <span className="text-[13.5px] font-medium text-white/80 group-hover:text-white transition-colors truncate">
                {SITE.email}
              </span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative border-t border-white/10 px-7 sm:px-12 py-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {FOOTER_COLUMNS.find((c) => c.title === "LEGAL")?.links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[12.5px] text-white/40 hover:text-white/70 transition-colors duration-200 no-underline"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <p className="text-[12.5px] text-white/40">
            © 2025 PixelForgeX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
