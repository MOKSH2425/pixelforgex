import FadeUp from "@/components/ui/FadeUp";
import SectionHeader from "@/components/ui/SectionHeader";
import { StaggerGrid, StaggerItem } from "@/components/ui/StaggerGrid";
import { WHY_ITEMS } from "@/lib/data";

export default function WhyStrip() {
  return (
    <section className="relative z-[1] py-20 px-6 bg-surface-2">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <SectionHeader
            label="Why build with us"
            title="Real reasons, not marketing filler."
          />
        </FadeUp>

        <StaggerGrid className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {WHY_ITEMS.map((item) => (
            <StaggerItem key={item.title}>
              <div className="card p-5 h-full">
                <span className="text-[22px] leading-none block mb-3">
                  {item.icon}
                </span>
                <p className="text-[13.5px] font-semibold text-ink tracking-tight leading-tight mb-1.5">
                  {item.title}
                </p>
                <p className="text-[12.5px] text-subtle leading-5">
                  {item.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
