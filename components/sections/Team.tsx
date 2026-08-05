import FadeUp from "@/components/ui/FadeUp";
import { StaggerGrid, StaggerItem } from "@/components/ui/StaggerGrid";
import SectionHeader from "@/components/ui/SectionHeader";
import PixelAvatar from "@/components/ui/PixelAvatar";
import TiltCard from "@/components/ui/TiltCard";
import { TEAM } from "@/lib/data";

export default function Team() {
  return (
    <section id="team" className="relative z-[1] py-28 px-6 bg-surface-2">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <SectionHeader
            label="The squad"
            title="Meet the team"
            sub="Small team, focused output. Every person here is a specialist who cares about their craft."
          />
        </FadeUp>

        <StaggerGrid className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member) => (
            <StaggerItem key={member.name}>
              <TiltCard
                maxTilt={6}
                className="card px-6 py-8 text-center hover:shadow-soft transition-shadow duration-300 h-full"
              >
                <div className="flex justify-center mb-5">
                  <PixelAvatar
                    palette={member.avatarPalette}
                    seed={member.name}
                  />
                </div>
                <h3 className="text-[16px] font-semibold text-ink mb-1">
                  {member.name}
                </h3>
                <p className="text-[13px] font-medium text-accent mb-3">
                  {member.role}
                </p>
                <p className="text-[13.5px] text-subtle leading-6">
                  {member.bio}
                </p>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
