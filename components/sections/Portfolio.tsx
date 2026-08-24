"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import SectionHeader from "@/components/ui/SectionHeader";
import TiltCard from "@/components/ui/TiltCard";
import { PROJECTS } from "@/lib/data";

const FILTERS = ["ALL", "WEB", "APP", "E-COM", "SAAS"] as const;
type Filter = (typeof FILTERS)[number];

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
            sub="Real builds, not case studies. Every card links straight to the live site."
          />
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="flex gap-2 flex-wrap mb-10">
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
          className="grid gap-6 items-stretch"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))",
          }}
        >
          <AnimatePresence mode="popLayout">
            {visible.map((proj) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <TiltCard
                  maxTilt={5}
                  className="card overflow-hidden rounded-[20px] hover:shadow-soft transition-shadow duration-300 h-full"
                >
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full"
                  >
                    <div
                      className="h-[180px] relative overflow-hidden flex items-end"
                      style={{
                        background: `linear-gradient(155deg, ${proj.color}26, var(--color-surface-2) 70%)`,
                      }}
                    >
                      {/* Signature mark: the project's own accent, not a fake screenshot */}
                      <span
                        aria-hidden
                        className="font-display font-semibold leading-none select-none absolute -bottom-3 -left-2 opacity-[0.14] group-hover:opacity-[0.22] transition-opacity duration-300"
                        style={{ fontSize: "128px", color: proj.color }}
                      >
                        {proj.name.charAt(0)}
                      </span>

                      <div className="relative z-[1] w-full flex items-center justify-between px-4 sm:px-5 pb-4">
                        <span
                          className="inline-flex items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full border bg-surface/80 backdrop-blur-sm"
                          style={{ borderColor: `${proj.color}55`, color: proj.color }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: proj.color }}
                          />
                          {proj.status === "live" ? "Live" : "Demo"}
                        </span>

                        <div className="w-8 h-8 rounded-full bg-surface shadow-softer flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <ArrowUpRight size={15} className="text-ink" />
                        </div>
                      </div>
                    </div>

                    <div className="flex h-full flex-col p-4 sm:p-6">
                      <div>
                        <p className="eyebrow text-[11px] mb-2 normal-case tracking-normal">
                          {proj.category}
                        </p>
                        <h3 className="font-display text-[17px] font-semibold text-ink leading-snug mb-2">
                          {proj.name}
                        </h3>
                        <p className="text-[13.5px] text-subtle leading-6">
                          {proj.desc}
                        </p>
                      </div>

                      <div className="mt-auto flex items-center justify-between px-0 py-3.5 border-t border-line">
                        <div className="flex gap-1.5">
                          {proj.techColors.map((c, i) => (
                            <span
                              key={i}
                              className="w-2 h-2 rounded-full"
                              style={{ background: c }}
                            />
                          ))}
                        </div>
                        <span className="text-[13px] font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          {proj.linkLabel} →
                        </span>
                      </div>
                    </div>
                  </a>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
