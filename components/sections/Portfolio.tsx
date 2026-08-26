"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import SectionHeader from "@/components/ui/SectionHeader";
import { PROJECTS } from "@/lib/data";

const FILTERS = ["ALL", "WEB", "APP", "E-COM", "SAAS"] as const;
type Filter = (typeof FILTERS)[number];

function hostname(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export default function Portfolio() {
  const [active, setActive] = useState<Filter>("ALL");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    setCanHover(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  const visible = PROJECTS.filter(
    (p) => active === "ALL" || p.tags.includes(active as never),
  );

  const hovered = visible.find((p) => p.id === hoveredId) ?? null;

  return (
    <section
      id="portfolio"
      className="relative z-[1] py-28 px-6 bg-surface-2"
      onMouseMove={(e) => {
        if (canHover) setMouse({ x: e.clientX, y: e.clientY });
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <SectionHeader
            label="Selected work"
            title="A few projects we're proud of."
            sub="Real builds, not case studies. Hover a name to preview it, click to open the live thing."
          />
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="flex gap-2 flex-wrap mb-4">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`text-[13px] font-medium rounded-full px-4 py-2 cursor-pointer transition-all duration-200 border ${
                  active === f
                    ? "text-accent-ink bg-accent border-accent"
                    : "text-subtle border-line hover:border-faint hover:text-ink"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </FadeUp>

        <div className="border-t border-line" onMouseLeave={() => setHoveredId(null)}>
          <AnimatePresence initial={false}>
            {visible.map((proj) => (
              <motion.a
                key={proj.id}
                layout
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredId(proj.id)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="group relative flex items-center justify-between gap-4 py-6 sm:py-7 border-b border-line no-underline"
              >
                <div className="min-w-0 flex-1">
                  <h3
                    className={`font-display text-[22px] sm:text-[32px] md:text-[38px] font-semibold leading-tight tracking-tight truncate transition-colors duration-200 ${
                      canHover && hoveredId && hoveredId !== proj.id
                        ? "text-faint"
                        : "text-ink group-hover:text-accent"
                    }`}
                  >
                    {proj.name}
                  </h3>
                  <p className="eyebrow text-[10.5px] sm:text-[11px] mt-1.5 normal-case tracking-normal truncate opacity-80">
                    {proj.category}
                  </p>
                </div>

                <div className="hidden sm:flex items-center flex-shrink-0">
                  <span
                    className="inline-flex items-center gap-1.5 font-mono text-[10.5px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full border"
                    style={{ borderColor: `${proj.color}55`, color: proj.color }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: proj.color }} />
                    {proj.status === "live" ? "Live" : "Demo"}
                  </span>
                </div>

                <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-line flex items-center justify-center transition-transform duration-200 group-hover:rotate-45">
                  <ArrowUpRight size={15} className="text-ink" />
                </span>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Cursor-following preview — desktop/pointer devices only */}
      {canHover && (
        <AnimatePresence>
          {hovered && (
            <motion.div
              key={hovered.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: Math.min(mouse.x + 28, (typeof window !== "undefined" ? window.innerWidth : 1200) - 300),
                y: mouse.y - 110,
              }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                y: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.15 },
                scale: { duration: 0.15 },
              }}
              className="fixed top-0 left-0 z-[500] w-[270px] pointer-events-none rounded-2xl overflow-hidden border border-line shadow-lift"
              style={{ background: "var(--color-surface)" }}
            >
              {/* faux browser chrome — shows the real URL, not a fake screenshot */}
              <div
                className="flex items-center gap-1.5 px-3.5 py-2.5 border-b border-line"
                style={{ background: `${hovered.color}12` }}
              >
                <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
                <span className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
                <span className="w-2 h-2 rounded-full bg-[#28C840]" />
                <span className="ml-2 font-mono text-[10px] text-subtle truncate">
                  {hostname(hovered.url)}
                </span>
              </div>

              <div
                className="relative h-[140px] flex items-center justify-center overflow-hidden"
                style={{
                  background: `linear-gradient(155deg, ${hovered.color}30, var(--color-surface-2))`,
                }}
              >
                <span
                  className="font-display font-semibold leading-none select-none opacity-25"
                  style={{ fontSize: "88px", color: hovered.color }}
                >
                  {hovered.name.charAt(0)}
                </span>
              </div>

              <div className="flex items-center justify-between px-3.5 py-3">
                <span className="text-[12.5px] font-medium text-ink truncate pr-2">
                  {hovered.name}
                </span>
                <span
                  className="font-mono text-[10px] font-medium uppercase tracking-wide flex-shrink-0"
                  style={{ color: hovered.color }}
                >
                  {hovered.linkLabel} →
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </section>
  );
}
