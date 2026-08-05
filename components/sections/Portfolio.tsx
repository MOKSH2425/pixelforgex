"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import SectionHeader from "@/components/ui/SectionHeader";
import TiltCard from "@/components/ui/TiltCard";
import { PROJECTS } from "@/lib/data";
import Link from "next/link";

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
            sub="Real client builds — each one shaped around clear goals, clean execution, and a polished user experience."
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
                  <Link href={`/work/${proj.id}`} className="block h-full">
                    <div
                      className="h-[180px] flex items-center justify-center relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${proj.color}22, var(--color-surface-2))`,
                      }}
                    >
                      <div
                        className="w-[160px] h-[110px] rounded-xl border flex flex-col gap-1.5 p-3 bg-surface"
                        style={{ borderColor: `${proj.color}55` }}
                      >
                        <div
                          className="h-1.5 w-[55%] rounded-full"
                          style={{ background: proj.color }}
                        />
                        <div className="h-1 w-4/5 rounded-full bg-line" />
                        <div className="h-1 w-1/2 rounded-full bg-line" />
                        <div className="grid grid-cols-2 gap-1 mt-1">
                          <div
                            className="h-6 rounded-md"
                            style={{ background: `${proj.color}30` }}
                          />
                          <div className="h-6 rounded-md bg-line" />
                        </div>
                      </div>

                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface shadow-softer flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <ArrowUpRight size={15} className="text-ink" />
                      </div>
                    </div>

                    <div className="flex h-full flex-col p-6">
                      <div>
                        <p className="eyebrow text-[11px] mb-2 normal-case tracking-normal">
                          {proj.category}
                        </p>
                        <h3 className="text-[16px] font-semibold text-ink leading-snug mb-2">
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
                          View project →
                        </span>
                      </div>
                    </div>
                  </Link>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
