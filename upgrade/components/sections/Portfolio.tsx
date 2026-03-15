"use client";

import { useState }               from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeUp                     from "@/components/ui/FadeUp";
import SectionHeader              from "@/components/ui/SectionHeader";
import { PROJECTS }               from "@/lib/data";
import Link                       from "next/link";

const FILTERS = ["ALL", "WEB", "APP", "E-COM", "SAAS"] as const;
type Filter = (typeof FILTERS)[number];

export default function Portfolio() {
  const [active, setActive] = useState<Filter>("ALL");

  const visible = PROJECTS.filter(
    (p) => active === "ALL" || p.tags.includes(active as never)
  );

  return (
    <section id="portfolio" className="relative z-[1] py-24 px-8 bg-[#12121A]">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <SectionHeader
            label="PORTFOLIO"
            title="SELECTED WORK"
            sub="A few things we've forged. Each one built with care, coffee, and way too many Figma frames."
          />
        </FadeUp>

        {/* Filter buttons */}
        <FadeUp delay={0.1}>
          <div className="flex gap-3 flex-wrap mb-10">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`font-pixel text-[7px] border px-[14px] py-2 tracking-[0.05em] cursor-pointer transition-all duration-200 relative ${
                  active === f
                    ? "text-[#00FFFF] border-[#00FFFF]"
                    : "text-[#555] border-[#222] hover:text-[#00FFFF] hover:border-[#00FFFF]"
                }`}
              >
                {f}
                {active === f && (
                  <motion.span
                    layoutId="filter-underline"
                    className="absolute -bottom-px left-0 right-0 h-px bg-[#00FFFF]"
                  />
                )}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Grid */}
        <motion.div
          layout
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))" }}
        >
          <AnimatePresence mode="popLayout">
            {visible.map((proj) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.25,0.1,0.25,1] }}
                className="bg-[#0D0D12] border border-[#1A1A28] overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(255,0,255,0.4)]"
                whileHover={{ y: -6 }}
              >
                {/* Thumb */}
                <div
                  className="h-[200px] flex items-center justify-center relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${proj.bgFrom}, ${proj.bgTo})` }}
                >
                  <div
                    className="w-[180px] h-[120px] border-2 flex flex-col gap-1.5 p-3"
                    style={{ borderColor: `${proj.color}4D` }}
                  >
                    <div className="h-1.5 w-[60%]" style={{ background: `${proj.color}80` }} />
                    <div className="h-1 w-4/5 bg-white/10" />
                    <div className="h-1 w-1/2 bg-white/10" />
                    <div className="grid grid-cols-2 gap-1 mt-1">
                      <div className="h-7" style={{ background: `${proj.color}26` }} />
                      <div className="h-7 bg-white/5" />
                    </div>
                  </div>

                  {/* Overlay on hover */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ background: "rgba(6,6,8,0.75)" }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <Link
                      href={`/work/${proj.id}`}
                      className="font-pixel text-[8px] text-[#00FFFF] border border-[#00FFFF] px-4 py-2 hover:bg-[#00FFFF] hover:text-[#060608] transition-all duration-200"
                    >
                      READ CASE STUDY →
                    </Link>
                  </motion.div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <p className="font-pixel text-[6px] text-[#FF00FF] tracking-[0.1em] mb-2">{proj.category}</p>
                  <h3 className="font-pixel text-[9px] text-white leading-relaxed mb-2">{proj.name}</h3>
                  <p className="text-[11px] text-[#666] leading-relaxed">{proj.desc}</p>
                </div>

                <div className="flex items-center justify-between px-6 py-3 border-t border-[#1A1A28]">
                  <div className="flex gap-1.5">
                    {proj.techColors.map((c, i) => (
                      <span key={i} className="w-1.5 h-1.5" style={{ background: c }} />
                    ))}
                  </div>
                  <span className="font-pixel text-[7px] text-[#00FFFF] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    VIEW →
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
