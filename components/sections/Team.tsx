import Link                        from "next/link";
import FadeUp                      from "@/components/ui/FadeUp";
import { StaggerGrid, StaggerItem } from "@/components/ui/StaggerGrid";
import SectionHeader               from "@/components/ui/SectionHeader";
import PixelAvatar                 from "@/components/ui/PixelAvatar";
import { TEAM }                    from "@/lib/data";

export default function Team() {
  return (
    <section id="team" className="relative z-[1] py-24 px-8 bg-[#12121A]">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <SectionHeader
            label="THE SQUAD"
            title="MEET THE TEAM"
            sub="Small team, massive output. Every person here is a specialist who gives a damn about their craft."
          />
        </FadeUp>

        <StaggerGrid
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}
        >
          {TEAM.map((member) => (
            <StaggerItem key={member.name}>
              <div className="bg-[#0D0D12] border border-[#1A1A28] px-6 py-8 text-center group transition-all duration-300 hover:border-[rgba(0,255,255,0.3)] hover:-translate-y-1">
                <div className="flex justify-center mb-6">
                  <PixelAvatar palette={member.avatarPalette} seed={member.name} />
                </div>
                <h3 className="font-pixel text-[9px] text-white leading-relaxed mb-1.5">{member.name}</h3>
                <p className="font-pixel text-[6px] text-[#00FFFF] tracking-[0.08em] mb-4">{member.role}</p>
                <p className="text-[11px] text-[#555] leading-relaxed mb-6">{member.bio}</p>
                <div className="flex gap-2 justify-center flex-wrap">
                  {member.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="font-pixel text-[6px] text-[#444] border border-[#222] px-2 py-1.5 hover:text-[#FF00FF] hover:border-[#FF00FF] transition-all duration-200"
                    >
                      {link.label}
                    </Link>
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
