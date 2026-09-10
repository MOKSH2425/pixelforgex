import Link from "next/link";
import { ArrowUpRight, AtSign } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import SectionHeader from "@/components/ui/SectionHeader";
import { StaggerGrid, StaggerItem } from "@/components/ui/StaggerGrid";
import TiltCard from "@/components/ui/TiltCard";
import { DM_CLIENTS } from "@/lib/data";

export default function Results() {
  return (
    <section id="results" className="relative z-[1] py-28 px-6 bg-surface-2">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <SectionHeader
            label="Who we work with"
            title="Real accounts we manage."
            sub="No inflated numbers — just the brands we actually run content and platforms for, day to day."
          />
        </FadeUp>

        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {DM_CLIENTS.map((c) => (
            <StaggerItem key={c.handle}>
              <Link href={c.url} target="_blank" rel="noopener noreferrer" className="block no-underline group h-full">
                <TiltCard maxTilt={4} className="card p-6 sm:p-7 h-full rounded-[20px] overflow-hidden relative">
                  <span
                    aria-hidden
                    className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-[0.14] blur-3xl pointer-events-none"
                    style={{ background: c.color }}
                  />
                  <div className="relative flex items-start justify-between gap-3 mb-5">
                    <span
                      className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: `${c.color}22` }}
                    >
                      <AtSign size={18} style={{ color: c.color }} />
                    </span>
                    <ArrowUpRight
                      size={17}
                      className="text-faint flex-shrink-0 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
                    />
                  </div>

                  <h3 className="font-display text-[18px] font-semibold text-ink tracking-tight mb-1">
                    {c.name}
                  </h3>
                  <p className="font-mono text-[11.5px] text-faint mb-3">{c.handle}</p>
                  <p className="eyebrow text-[10.5px] mb-3 normal-case tracking-normal opacity-70">
                    {c.niche}
                  </p>
                  <p className="text-[13.5px] text-subtle leading-6">{c.scope}</p>
                </TiltCard>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <p className="text-[13px] text-faint mt-8 text-center">
          Real numbers on request — reach out and we'll walk you through what's worked for accounts like these.
        </p>
      </div>
    </section>
  );
}
