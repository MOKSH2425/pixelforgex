import type { CSSProperties } from "react";
import FadeUp from "@/components/ui/FadeUp";
import SectionHeader from "@/components/ui/SectionHeader";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

function toTitleCase(s: string) {
  return s
    .toLowerCase()
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

// Cycling accent palette — ties each card to the same signature-color
// language used across the portfolio and hero, without repeating one hue.
const ACCENTS = ["#0071E3", "#8B5CF6", "#14B8A6", "#F2725A", "#E8A33D"];

// Alternating rotation + vertical offset gives the row visual rhythm
// instead of a flat, uniform strip — a "pinned notes" feel rather than cards.
const TILTS = [-2.5, 1.5, -1, 2, -1.5, 1];
const LIFTS = [0, 10, -6, 8, -10, 4];

export default function Testimonials() {
  const items = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      id="testimonials"
      className="relative z-[1] py-28 bg-surface-2 overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <FadeUp>
          <SectionHeader label="Client love" title="What they say" />
        </FadeUp>
      </div>

      <div className="overflow-hidden py-6">
        <div className="flex gap-7 w-max animate-testimonial hover:[animation-play-state:paused]">
          {items.map((t, i) => {
            const accent = ACCENTS[i % ACCENTS.length];
            const tilt = TILTS[i % TILTS.length];
            const lift = LIFTS[i % LIFTS.length];
            return (
              <div
                key={i}
                className="testimonial-card card relative p-7 w-[320px] flex-shrink-0 bg-surface"
                style={
                  {
                    "--tilt": `${tilt}deg`,
                    "--lift": `${lift}px`,
                    borderTop: `3px solid ${accent}`,
                  } as CSSProperties
                }
              >
                <Quote
                  size={54}
                  strokeWidth={0}
                  fill={accent}
                  className="absolute -top-3 -right-2 opacity-[0.09] pointer-events-none"
                />

                <p className="relative text-[14px] text-subtle leading-7 mb-6">
                  {t.quote}
                </p>

                <div className="relative flex items-center gap-3">
                  <div
                    className="w-9 h-9 flex-shrink-0 rounded-full flex items-center justify-center font-mono text-[11px] font-semibold text-white"
                    style={{ background: accent }}
                  >
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[13.5px] font-semibold text-ink truncate">
                      {toTitleCase(t.name)}
                    </span>
                    <span className="font-mono text-[11px] text-faint truncate block">
                      {toTitleCase(t.company)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
