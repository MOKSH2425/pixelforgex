import FadeUp                      from "@/components/ui/FadeUp";
import { StaggerGrid, StaggerItem } from "@/components/ui/StaggerGrid";
import SectionHeader               from "@/components/ui/SectionHeader";
import { WHY_ITEMS }               from "@/lib/data";

export default function WhyUs() {
  return (
    <section id="why" className="relative z-[1] py-24 px-8 bg-[#060608] border-t border-b border-[#1A1A28]">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <SectionHeader label="WHY PIXELFORGEX" title="THE DIFFERENCE" />
        </FadeUp>

        <StaggerGrid
          className="grid gap-px bg-[#1A1A28] border border-[#1A1A28]"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}
        >
          {WHY_ITEMS.map((item) => (
            <StaggerItem key={item.title}>
              <div className="bg-[#060608] px-7 py-8 transition-colors duration-300 hover:bg-[#0D0D12] h-full">
                <span className="block text-[22px] mb-4">{item.icon}</span>
                <h3 className="font-pixel text-[8px] text-white leading-relaxed mb-3">{item.title}</h3>
                <p className="text-[12px] text-[#666] leading-8">{item.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
