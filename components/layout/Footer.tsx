import Link from "next/link";
import { FOOTER_COLUMNS, SITE } from "@/lib/data";
import Logo from "@/components/ui/Logo";

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/pixelforgex.dev?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
  { label: "Email",     href: "mailto:pixelforgex.dev@gmail.com" },
  { label: "Call",      href: "tel:635344388" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-2 border-t border-line relative z-[1]">
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
            <p className="text-[13px] font-semibold text-ink mb-5 tracking-tight capitalize">
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

      <div className="max-w-[1100px] mx-auto px-6 md:px-8 mt-10 border-t border-line py-6 flex flex-wrap items-center justify-between gap-4">
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
