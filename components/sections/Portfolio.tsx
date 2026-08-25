"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import SectionHeader from "@/components/ui/SectionHeader";
import { PROJECTS } from "@/lib/data";

const FILTERS = ["ALL", "WEB", "APP", "E-COM", "SAAS"] as const;
type Filter = (typeof FILTERS)[number];

export default function Portfolio() {
  const [active, setActive] = useState<Filter>("ALL");
  const [hovered, setHovered] = useState<string | null>(null);

  const visible = PROJECTS.filter(
    (p) => active === "ALL" || p.tags.includes(active as never),
  );

  return (
    <section id="portfolio" className="relative z-[1] py-28 px-6 bg-surface-2">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <SectionHeader
            label="Selected work"
            title="A few projects we're proud of."
            sub="Real builds, not case studies. Every row links straight to the live thing."
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

        <div className="border-t border-line">
          <AnimatePresence initial={false} mode="popLayout">
            {visible.map((proj, i) => {
              const isHovered = hovered === proj.id;
              return (
                <motion.a
                  key={proj.id}
                  layout
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHovered(proj.id)}
                  onMouseLeave={() => setHovered(null)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="group relative flex items-center gap-4 sm:gap-8 py-6 sm:py-7 border-b border-line overflow-hidden no-underline"
                >
                  {/* accent wash on hover */}
                  <span
                    aria-hidden
                    className="absolute inset-0 -z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(90deg, ${proj.color}18, transparent 65%)`,
                    }}
                  />
                  {/* giant faint initial, revealed on hover */}
                  <span
                    aria-hidden
                    className="font-display font-semibold leading-none select-none pointer-events-none absolute -right-2 sm:right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-[0.16] transition-all duration-300 group-hover:-translate-x-2"
                    style={{ fontSize: "clamp(64px, 9vw, 120px)", color: proj.color }}
                  >
                    {proj.name.charAt(0)}
                  </span>

                  <span className="font-mono text-[12px] sm:text-[13px] text-faint flex-shrink-0 w-6 sm:w-8 pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0 flex-1 relative z-[1]">
                    <h3 className="font-display text-[19px] sm:text-[26px] md:text-[30px] font-semibold text-ink leading-tight tracking-tight truncate group-hover:text-accent transition-colors duration-200">
                      {proj.name}
                    </h3>
                    <p className="eyebrow text-[10px] sm:text-[11px] mt-1.5 normal-case tracking-normal truncate opacity-80">
                      {proj.category}
                    </p>
                  </div>

                  <div className="hidden lg:flex items-center gap-1.5 flex-shrink-0 relative z-[1]">
                    {proj.techColors.map((c, ci) => (
                      <span
                        key={ci}
                        className="w-2 h-2 rounded-full"
                        style={{ background: c }}
                      />
                    ))}
                  </div>

                  <div className="hidden sm:flex flex-shrink-0 relative z-[1]">
                    <span
                      className="inline-flex items-center gap-1.5 font-mono text-[10.5px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full border"
                      style={{ borderColor: `${proj.color}55`, color: proj.color }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: proj.color }}
                      />
                      {proj.status === "live" ? "Live" : "Demo"}
                    </span>
                  </div>

                  <div className="flex-shrink-0 relative z-[1] flex items-center gap-2">
                    <span className="hidden md:inline text-[13px] font-medium text-accent opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap">
                      {proj.linkLabel}
                    </span>
                    <span
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-line flex items-center justify-center flex-shrink-0 transition-all duration-200"
                      style={
                        isHovered
                          ? { background: proj.color, borderColor: proj.color }
                          : undefined
                      }
                    >
                      <ArrowUpRight
                        size={15}
                        className={
                          isHovered ? "text-white" : "text-ink"
                        }
                      />
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
