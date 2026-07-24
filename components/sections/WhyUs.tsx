import FadeUp from "@/components/ui/FadeUp";
import { StaggerGrid, StaggerItem } from "@/components/ui/StaggerGrid";
import SectionHeader from "@/components/ui/SectionHeader";
import TiltCard from "@/components/ui/TiltCard";
import { WHY_ITEMS } from "@/lib/data";

export default function WhyUs() {
  return (
    <section id="why" className="relative z-[1] py-28 px-6 border-t border-b border-line">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <SectionHeader label="Why pixelforgex" title="What makes us different" />
        </FadeUp>

        <StaggerGrid
          className="grid gap-5"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))" }}
        >
          {WHY_ITEMS.map((item) => (
            <StaggerItem key={item.title}>
              <TiltCard maxTilt={6} className="card px-6 py-7 h-full hover:shadow-softer transition-shadow duration-300">
                <span className="block text-[22px] mb-4">{item.icon}</span>
                <h3 className="text-[15px] font-semibold text-ink mb-2 capitalize">{item.title.toLowerCase()}</h3>
                <p className="text-[13.5px] text-subtle leading-6">{item.desc}</p>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
