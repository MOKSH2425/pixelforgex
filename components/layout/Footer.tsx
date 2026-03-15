import Link from "next/link";
import { FOOTER_COLUMNS, SITE } from "@/lib/data";

const SOCIALS = [
  { label: "GH", href: "#" },
  { label: "TW", href: "#" },
  { label: "LI", href: "#" },
  { label: "IG", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#060608] border-t border-[#1A1A28] relative z-[1]">
      <div className="max-w-[1100px] mx-auto px-8 pt-12 pb-0 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12">

        {/* Brand */}
        <div>
          <span className="block font-pixel text-[11px] text-[#00FFFF] mb-4"
                style={{ textShadow: "0 0 10px #00FFFF" }}>
            PIXEL<span className="text-[#FF00FF]">FORGE</span>X<span className="text-[#FF00FF]">.DEV</span>
          </span>
          <p className="text-[11px] text-[#444] leading-8 mb-6 max-w-xs">
            {SITE.tagline} Let&apos;s build something worth shipping.
          </p>
          <div className="flex gap-3 flex-wrap">
            {SOCIALS.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="font-pixel text-[6px] text-[#444] border border-[#222] px-3 py-2 hover:text-[#FF00FF] hover:border-[#FF00FF] transition-all duration-200"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Column links */}
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title}>
            <p className="font-pixel text-[7px] text-white mb-5 tracking-[0.08em]">
              {col.title}
            </p>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[12px] text-[#444] hover:text-[#00FFFF] transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1100px] mx-auto px-8 mt-8 border-t border-[#1A1A28] py-6 flex flex-wrap items-center justify-between gap-4">
        <p className="font-pixel text-[6px] text-[#333] tracking-[0.05em]">
          © 2025 <span className="text-[#00FFFF]">PIXELFORGEX.DEV</span> — ALL RIGHTS RESERVED
        </p>
        <p className="text-[10px] text-[#333]">
          Made with <span className="text-[#FF00FF]">❤</span> in Surat, India
        </p>
      </div>
    </footer>
  );
}
