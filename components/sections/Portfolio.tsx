"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import SectionHeader from "@/components/ui/SectionHeader";
import { PROJECTS } from "@/lib/data";

const FILTERS = ["ALL", "WEB", "APP", "E-COM", "SAAS"] as const;
type Filter = (typeof FILTERS)[number];

// Bento spans, desktop only — mobile/tablet stay a clean, compact 2-col grid.
const SPANS = [
  "lg:col-span-2 lg:row-span-2",
  "",
  "",
  "lg:col-span-2",
  "",
  "lg:row-span-2",
  "",
  "lg:col-span-2",
  "",
  "",
  "",
];

function shade(hex: string, amt: number) {
  const n = parseInt(hex.replace("#", ""), 16);
  const r = Math.min(255, Math.max(0, (n >> 16) + amt));
  const g = Math.min(255, Math.max(0, ((n >> 8) & 0xff) + amt));
  const b = Math.min(255, Math.max(0, (n & 0xff) + amt));
  return `rgb(${r},${g},${b})`;
}

export default function Portfolio() {
  const [active, setActive] = useState<Filter>("ALL");

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
            sub="Real builds, not case studies. Every tile opens the live thing."
          />
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="flex gap-2 flex-wrap mb-6">
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

        <motion.div
          layout
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:auto-rows-[160px]"
        >
          <AnimatePresence initial={false} mode="popLayout">
            {visible.map((proj, i) => (
              <motion.a
                key={proj.id}
                layout
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.25 }}
                className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-square lg:aspect-auto no-underline ${SPANS[i % SPANS.length]}`}
                style={{
                  background: `linear-gradient(150deg, ${proj.color} 0%, ${shade(proj.color, -50)} 100%)`,
                }}
              >
                {/* subtle diagonal texture so the tile doesn't read as a flat SaaS block */}
                <span
                  aria-hidden
                  className="absolute inset-0 opacity-[0.08] pointer-events-none"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 14px)",
                  }}
                />
                <span
                  aria-hidden
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(0,0,0,0.55) 0%, transparent 55%)",
                  }}
                />

                <div className="relative h-full flex flex-col justify-between p-3.5 sm:p-5">
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-mono text-[9px] sm:text-[10.5px] font-medium uppercase tracking-wider text-white/85 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1 truncate">
                      {proj.category.split(" / ")[1] ?? proj.category}
                    </span>
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight size={13} className="text-white" />
                    </span>
                  </div>

                  <div>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[9px] sm:text-[10px] font-medium uppercase tracking-wide text-white/80 mb-1.5 sm:mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
                      {proj.status === "live" ? "Live" : "Demo"}
                    </span>
                    <h3 className="font-display font-semibold text-white leading-[1.05] tracking-tight text-[15px] sm:text-[19px] md:text-[22px] drop-shadow-sm">
                      {proj.name}
                    </h3>
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
