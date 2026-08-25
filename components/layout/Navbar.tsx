"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import Logo from "@/components/ui/Logo";
import ThemeToggle from "@/components/ui/ThemeToggle";
import PixelButton from "@/components/ui/PixelButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open, close on route/hash change
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[1000] flex justify-center px-4 pt-4">
      <div className="w-full flex flex-col items-center" style={{ maxWidth: "min(1040px, 96vw)" }}>
        <motion.nav
          animate={{
            width: scrolled ? "min(880px, 94vw)" : "min(1040px, 96vw)",
            height: scrolled ? 56 : 64,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          className="flex items-center justify-between px-5 md:px-7 rounded-full border border-line relative"
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
            <PixelButton
              href="/#contact"
              className="hidden sm:!inline-flex !py-2 !px-[18px] !text-[13.5px]"
            >
              Get in touch
            </PixelButton>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-line text-ink"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={menuOpen ? "x" : "menu"}
                  initial={{ rotate: -60, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 60, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="inline-flex"
                >
                  {menuOpen ? <X size={17} /> : <Menu size={17} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </motion.nav>

        {/* Mobile dropdown panel — matches the pill/blur language, not a generic full-screen drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden w-full mt-2.5 rounded-[26px] border border-line overflow-hidden"
              style={{
                background: "var(--color-surface)",
                opacity: 0.97,
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                boxShadow: "0 16px 40px -10px rgba(0,0,0,0.2)",
              }}
            >
              <ul className="list-none py-2">
                {NAV_LINKS.map((link, i) => (
                  <li key={link.href} className="border-b border-line last:border-b-0">
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-4 px-6 py-4 no-underline group"
                    >
                      <span className="font-mono text-[12px] text-faint">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-[19px] font-semibold text-ink group-active:text-accent transition-colors">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between gap-3 px-6 py-4 border-t border-line">
                <span className="text-[13px] text-subtle">Theme</span>
                <ThemeToggle />
              </div>

              <div className="px-4 pb-4 pt-1">
                <Link
                  href="/#contact"
                  onClick={() => setMenuOpen(false)}
                  className="btn btn-primary w-full justify-center no-underline"
                >
                  Get in touch
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
