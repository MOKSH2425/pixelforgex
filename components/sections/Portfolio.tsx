"use client";

import { useEffect, useState } from "react";
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
  "lg:row-span-2",
  "",
  "lg:col-span-2",
  "",
  "",
  "lg:row-span-2",
  "lg:col-span-2",
  "",
  "",
];

export default function Portfolio() {
  const [active, setActive] = useState<Filter>("ALL");
  const [expanded, setExpanded] = useState(false);

  const visible = PROJECTS.filter(
    (p) => active === "ALL" || p.tags.includes(active as never),
  );

  useEffect(() => {
    setExpanded(false);
  }, [active]);

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

        <div
          className={`relative overflow-hidden transition-[max-height] duration-500 ease-out sm:!max-h-none sm:!overflow-visible ${
            expanded ? "max-h-[3000px]" : "max-h-[640px]"
          }`}
        >
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
                  className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-square lg:aspect-auto no-underline border border-white/[0.06] ${SPANS[i % SPANS.length]}`}
                  style={{
                    background:
                      "linear-gradient(155deg, #121218 0%, #0A0A0F 100%)",
                  }}
                >
                  {/* corner glow in the project's own color — restrained, not a full-color tile */}
                  <span
                    aria-hidden
                    className="absolute -top-10 -right-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full opacity-[0.28] blur-2xl pointer-events-none transition-opacity duration-300 group-hover:opacity-[0.4]"
                    style={{ background: proj.color }}
                  />
                  {/* faint signature initial for texture */}
                  <span
                    aria-hidden
                    className="absolute -bottom-4 -right-2 font-display font-semibold leading-none select-none pointer-events-none opacity-[0.06]"
                    style={{ fontSize: "clamp(64px, 9vw, 128px)", color: "#fff" }}
                  >
                    {proj.name.charAt(0)}
                  </span>

                  <div className="relative h-full flex flex-col justify-between p-3.5 sm:p-5">
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-mono text-[9px] sm:text-[10.5px] font-medium uppercase tracking-wider text-white/60 truncate">
                        {proj.category.split(" / ")[1] ?? proj.category}
                      </span>
                      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/15 flex items-center justify-center flex-shrink-0 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                        <ArrowUpRight size={13} className="text-white" />
                      </span>
                    </div>

                    <div>
                      <span
                        className="inline-flex items-center gap-1.5 font-mono text-[9px] sm:text-[10px] font-medium uppercase tracking-wide mb-1.5 sm:mb-2"
                        style={{ color: proj.color }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: proj.color }} />
                        {proj.status === "live" ? "Live" : "Demo"}
                      </span>
                      <h3 className="font-display font-semibold text-white leading-[1.05] tracking-tight text-[15px] sm:text-[19px] md:text-[22px]">
                        {proj.name}
                      </h3>
                    </div>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </motion.div>

          {!expanded && (
            <div
              className="sm:hidden absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
              style={{
                background:
                  "linear-gradient(0deg, var(--color-surface-2) 15%, transparent 100%)",
              }}
            />
          )}
        </div>

        {!expanded && visible.length > 4 && (
          <button
            onClick={() => setExpanded(true)}
            className="sm:hidden mt-5 w-full text-[13.5px] font-medium text-ink border border-line rounded-full py-3 hover:border-faint transition-colors duration-200"
          >
            View all projects ({visible.length})
          </button>
        )}
      </div>
    </section>
  );
}
