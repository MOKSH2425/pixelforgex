"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeUp from "@/components/ui/FadeUp";
import { StaggerGrid, StaggerItem } from "@/components/ui/StaggerGrid";
import SectionHeader from "@/components/ui/SectionHeader";
import TiltCard from "@/components/ui/TiltCard";
import { PROCESS_STEPS } from "@/lib/data";

export default function Process() {
  const [hovered, setHovered] = useState<number | null>(null);
  const active = hovered ?? 0;

  return (
    <section id="process" className="relative z-[1] py-28 px-6">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <SectionHeader
            label="Process"
            title="How we work"
            sub="A clean, predictable process. You always know where your project stands."
          />
        </FadeUp>

        <div className="relative">
          <div className="hidden md:block absolute top-[27px] left-[8%] right-[8%] h-px bg-line overflow-hidden">
            <motion.div
              animate={{ scaleX: (active + 1) / PROCESS_STEPS.length }}
              transition={{ type: "spring", stiffness: 120, damping: 22 }}
              className="h-full origin-left"
              style={{ background: "var(--color-accent)" }}
            />
          </div>

          <StaggerGrid className="grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-4">
            {PROCESS_STEPS.map((step, i) => (
              <StaggerItem key={step.num}>
                <TiltCard
                  maxTilt={4}
                  liftScale={1.03}
                  className="px-3 py-2 text-center cursor-default rounded-2xl"
                >
                  <div
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    className="px-1"
                  >
                    <motion.div
                      animate={{
                        scale: i === active ? 1.12 : 1,
                        backgroundColor: i === active ? "var(--color-accent)" : "var(--color-surface)",
                        color: i === active ? "var(--color-accent-ink)" : "var(--color-ink)",
                        borderColor: i === active ? "var(--color-accent)" : "var(--color-line)",
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="w-11 h-11 mx-auto mb-5 flex items-center justify-center text-[14px] font-semibold rounded-full border relative z-[1]"
                    >
                      {step.num}
                    </motion.div>
                    <h3
                      className={`text-[14.5px] font-semibold mb-2 capitalize transition-colors duration-300 ${
                        i === active ? "text-ink" : "text-subtle"
                      }`}
                    >
                      {step.title.toLowerCase()}
                    </h3>
                    <p className="text-[13px] text-subtle leading-6">{step.desc}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </div>
    </section>
  );
}
