import FadeUp           from "@/components/ui/FadeUp";
import SectionHeader    from "@/components/ui/SectionHeader";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const items = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="relative z-[1] py-24 bg-[#12121A] overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-8">
        <FadeUp>
          <SectionHeader label="CLIENT LOVE" title="WHAT THEY SAY" />
        </FadeUp>
      </div>

      <div className="overflow-hidden">
        <div className="flex gap-6 w-max animate-testimonial hover:[animation-play-state:paused]">
          {items.map((t, i) => (
            <div key={i} className="relative bg-[#0D0D12] border border-[#1A1A28] p-7 w-[340px] flex-shrink-0">
              <span className="absolute top-0 left-4 text-[80px] font-serif leading-none pointer-events-none select-none"
                    style={{ color: "rgba(0,255,255,0.06)" }}>
                &ldquo;
              </span>
              <div className="text-[#FFE600] text-[10px] mb-4">★★★★★</div>
              <p className="text-[12px] text-[#888] leading-8 mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center font-pixel text-[7px] text-[#00FFFF] bg-[#12121A] border border-[#1A1A28]">
                  {t.initials}
                </div>
                <div>
                  <span className="block font-pixel text-[7px] text-white mb-1">{t.name}</span>
                  <span className="text-[10px] text-[#555]">{t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
