import { SERVICES } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeUp from "@/components/ui/FadeUp";
import { StaggerGrid, StaggerItem } from "@/components/ui/StaggerGrid";
import TiltCard from "@/components/ui/TiltCard";
import { ArrowUpRight } from "lucide-react";

// Bento spans per card index — creates an asymmetric, magazine-style grid.
const SPANS = [
  "lg:col-span-2",
  "lg:row-span-2",
  "",
  "",
  "lg:col-span-2",
  "",
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 max-w-[1100px] mx-auto">
      <FadeUp>
        <SectionHeader
          label="What we do"
          title="Services built around your product, not our template."
          sub="Every engagement starts with your goals — not a checklist. Pick what you need, skip what you don't."
        />
      </FadeUp>

      <StaggerGrid
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 [grid-auto-flow:dense] lg:auto-rows-[210px]"
      >
        {SERVICES.map((svc, i) => {
          const big = SPANS[i]?.includes("col-span-2") || SPANS[i]?.includes("row-span-2");
          return (
            <StaggerItem key={svc.num} className={SPANS[i] ?? ""}>
              <TiltCard
                maxTilt={5}
                className="card p-7 h-full flex flex-col justify-between rounded-[20px] overflow-hidden"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-[0.15]"
                  style={{ background: svc.accent }}
                />

                <div className="relative">
                  <div
                    className={`flex items-center justify-center rounded-2xl mb-6 ${big ? "w-14 h-14 text-[26px]" : "w-12 h-12 text-[22px]"}`}
                    style={{ background: `${svc.accent}18` }}
                  >
                    {svc.icon}
                  </div>
                  <h3 className={`font-semibold text-ink tracking-tight mb-2 capitalize ${big ? "text-[19px]" : "text-[17px]"}`}>
                    {svc.title.toLowerCase()}
                  </h3>
                  <p className="text-[14.5px] text-subtle leading-6 mb-5">{svc.desc}</p>
                </div>

                <div className="relative flex items-end justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {svc.tags.slice(0, big ? svc.tags.length : 2).map((t) => (
                      <span
                        key={t}
                        className="text-[12px] font-medium text-subtle bg-surface-2 border border-line rounded-full px-2.5 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-accent flex-shrink-0 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
                  />
                </div>
              </TiltCard>
            </StaggerItem>
          );
        })}
      </StaggerGrid>
    </section>
  );
}
