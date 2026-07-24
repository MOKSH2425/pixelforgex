import FadeUp from "@/components/ui/FadeUp";
import SectionHeader from "@/components/ui/SectionHeader";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

function toTitleCase(s: string) {
  return s
    .toLowerCase()
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function Testimonials() {
  const items = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="relative z-[1] py-28 bg-surface-2 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6">
        <FadeUp>
          <SectionHeader label="Client love" title="What they say" />
        </FadeUp>
      </div>

      <div className="overflow-hidden">
        <div className="flex gap-5 w-max animate-testimonial hover:[animation-play-state:paused]">
          {items.map((t, i) => (
            <div key={i} className="card p-7 w-[330px] flex-shrink-0 bg-surface">
              <div className="flex gap-0.5 text-amber-400 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-[14px] text-subtle leading-7 mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex-shrink-0 rounded-full flex items-center justify-center text-[12px] font-semibold text-accent bg-accent-soft">
                  {t.initials}
                </div>
                <div>
                  <span className="block text-[13.5px] font-semibold text-ink">{toTitleCase(t.name)}</span>
                  <span className="text-[12.5px] text-faint">{toTitleCase(t.company)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
