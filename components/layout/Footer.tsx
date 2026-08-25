import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { FOOTER_COLUMNS, SITE } from "@/lib/data";
import Logo from "@/components/ui/Logo";

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/pixelforgex.dev?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
  { label: "Email",     href: "mailto:pixelforgex.dev@gmail.com" },
  { label: "Call",      href: "tel:+91635344388" },
];

export default function Footer() {
  return (
    <footer className="relative z-[1]">
      {/* CTA band */}
      <div className="max-w-[1100px] mx-auto px-6 md:px-8 pt-4">
        <div
          className="relative overflow-hidden rounded-[28px] px-8 py-14 sm:py-16 text-center"
          style={{
            background:
              "linear-gradient(155deg, var(--color-accent) 0%, var(--color-accent-2) 100%)",
          }}
        >
          <span
            aria-hidden
            className="absolute -top-10 -left-10 w-56 h-56 rounded-full opacity-20 blur-3xl"
            style={{ background: "#ffffff" }}
          />
          <p className="font-mono text-[12px] uppercase tracking-widest text-white/80 mb-4">
            // let&apos;s build
          </p>
          <h2 className="font-display font-semibold text-white text-[30px] sm:text-[42px] leading-[1.1] tracking-tight max-w-[16ch] mx-auto mb-8">
            Got a project in mind?
          </h2>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-white text-[#0A0A0B] font-medium text-[14.5px] rounded-full px-6 py-3.5 no-underline hover:gap-3 transition-all duration-200"
          >
            Start a conversation
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      <div className="bg-surface-2 border-t border-line mt-16">
        <div className="max-w-[1100px] mx-auto px-6 md:px-8 pt-16 pb-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-x-10 gap-y-12">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-[14px] text-subtle leading-7 mb-6 max-w-xs">
              {SITE.tagline} Let&apos;s build something worth shipping.
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

        {/* Contact info blocks */}
        <div className="max-w-[1100px] mx-auto px-6 md:px-8 mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 border border-line rounded-[20px] overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-line">
            <a
              href="tel:+91635344388"
              className="flex items-center gap-3 px-6 py-5 no-underline group hover:bg-surface transition-colors duration-200"
            >
              <Phone size={16} className="text-accent flex-shrink-0" />
              <span className="text-[13.5px] text-subtle group-hover:text-ink transition-colors">
                +91 63534 4388
              </span>
            </a>
            <div className="flex items-center gap-3 px-6 py-5">
              <MapPin size={16} className="text-accent flex-shrink-0" />
              <span className="text-[13.5px] text-subtle">{SITE.location}</span>
            </div>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-3 px-6 py-5 no-underline group hover:bg-surface transition-colors duration-200"
            >
              <Mail size={16} className="text-accent flex-shrink-0" />
              <span className="text-[13.5px] text-subtle group-hover:text-ink transition-colors truncate">
                {SITE.email}
              </span>
            </a>
          </div>
        </div>

        <div className="max-w-[1100px] mx-auto px-6 md:px-8 mt-10 border-t border-line py-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-[13px] text-faint">
            © 2025 Pixelforgex — All rights reserved
          </p>
          <p className="text-[13px] text-faint">
            Made with care in Surat, India
          </p>
        </div>
      </div>
    </footer>
  );
}
