import SectionHeader              from "@/components/ui/SectionHeader";
import FadeUp                     from "@/components/ui/FadeUp";
import { StaggerGrid, StaggerItem } from "@/components/ui/StaggerGrid";
import { SERVICES }               from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="relative z-[1] py-24 px-8 bg-[#060608]">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <SectionHeader
            label="SERVICES"
            title="WHAT WE BUILD"
            sub="From concept to code to launch — we cover the full stack so you don't have to."
          />
        </FadeUp>

        <StaggerGrid
          className="grid gap-[1.5px] bg-[#1A1A28] border border-[#1A1A28]"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
        >
          {SERVICES.map((svc, i) => (
            <StaggerItem key={svc.num}>
              <div
                className="relative bg-[#0D0D12] p-10 overflow-hidden group transition-colors duration-300 hover:bg-[#12121A] h-full"
                style={{ color: svc.accent }}
              >
                {/* Bottom reveal accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: svc.accent }}
                />

                {/* Card number */}
                <span className="absolute top-6 right-6 font-pixel text-[8px] text-[#1A1A28] group-hover:text-current transition-colors duration-300">
                  {svc.num}
                </span>

                {/* Icon */}
                <span
                  className="block text-3xl mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ animationDelay: `${i * 0.3}s`, filter: `drop-shadow(0 0 8px ${svc.accent})` }}
                >
                  {svc.icon}
                </span>

                <h3 className="font-pixel text-[10px] text-white mb-4 leading-relaxed">{svc.title}</h3>
                <p className="text-[12px] text-[#666] leading-8 mb-6">{svc.desc}</p>

                <div className="flex flex-wrap gap-1.5">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-pixel text-[6px] text-[#555] border border-[#222] px-2 py-1 tracking-wide group-hover:border-current group-hover:text-current transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
