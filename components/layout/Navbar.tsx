"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-10 h-14 border-b border-[#1A1A28]"
         style={{ background: "rgba(6,6,8,0.92)", backdropFilter: "blur(12px)" }}>

      {/* Logo */}
      <Link href="#hero" className="font-pixel text-[10px] text-[#00FFFF] tracking-[0.05em] no-underline animate-neonpulse">
        PIXEL<span className="text-[#FF00FF]">FORGE</span>X<span className="text-[#FF00FF]">.DEV</span>
      </Link>

      {/* Links */}
      <ul className="hidden md:flex gap-8 list-none">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="font-pixel text-[7px] text-[#666] no-underline tracking-[0.08em] hover:text-[#00FFFF] transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#00FFFF] scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="#contact"
        className="font-pixel text-[7px] text-[#060608] bg-[#00FFFF] px-[14px] py-2 tracking-[0.05em] clip-skew-sm hover:bg-[#FF00FF] transition-colors duration-200"
      >
        HIRE US
      </Link>
    </nav>
  );
}
