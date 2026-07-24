"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/data";
import Logo from "@/components/ui/Logo";
import ThemeToggle from "@/components/ui/ThemeToggle";
import PixelButton from "@/components/ui/PixelButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[1000] flex justify-center px-4 pt-4">
      <motion.nav
        animate={{
          width: scrolled ? "min(880px, 94vw)" : "min(1040px, 96vw)",
          height: scrolled ? 56 : 64,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        className="flex items-center justify-between px-5 md:px-7 rounded-full border border-line"
        style={{
          background: "var(--color-surface)",
          opacity: 0.85,
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: scrolled
            ? "0 8px 30px -8px rgba(0,0,0,0.16)"
            : "0 2px 12px -4px rgba(0,0,0,0.06)",
        }}
      >
        <Logo />

        <ul className="hidden md:flex items-center gap-7 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[14px] font-medium text-subtle no-underline hover:text-ink transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle className="hidden sm:inline-flex" />
          <PixelButton href="#contact" className="!py-2 !px-[18px] !text-[13.5px]">
            Get in touch
          </PixelButton>
        </div>
      </motion.nav>
    </div>
  );
}
