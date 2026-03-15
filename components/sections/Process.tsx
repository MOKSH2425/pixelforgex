import FadeUp                      from "@/components/ui/FadeUp";
import { StaggerGrid, StaggerItem } from "@/components/ui/StaggerGrid";
import SectionHeader               from "@/components/ui/SectionHeader";
import { PROCESS_STEPS }           from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="relative z-[1] py-24 px-8 bg-[#060608]">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <SectionHeader
            label="PROCESS"
            title="HOW WE WORK"
            sub="Clean process. No surprises. You always know where your project stands."
          />
        </FadeUp>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-[22px] left-[10%] right-[10%] h-px"
               style={{ background: "linear-gradient(90deg,transparent,#00FFFF,#FF00FF,#00FFFF,transparent)", opacity: 0.3 }} />

          <StaggerGrid className="grid grid-cols-2 md:grid-cols-5 gap-0">
            {PROCESS_STEPS.map((step) => (
              <StaggerItem key={step.num}>
                <div className="px-6 py-8 text-center group">
                  <div className="w-11 h-11 mx-auto mb-6 flex items-center justify-center font-pixel text-[11px] text-[#00FFFF] bg-[#0D0D12] border border-[#1A1A28] relative z-[1] transition-all duration-300 group-hover:bg-[#00FFFF] group-hover:text-[#060608] group-hover:border-[#00FFFF]">
                    {step.num}
                  </div>
                  <h3 className="font-pixel text-[8px] text-white mb-3 leading-relaxed">{step.title}</h3>
                  <p className="text-[11px] text-[#555] leading-7">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </div>
    </section>
  );
}
