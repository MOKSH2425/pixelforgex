import FadeUp from "@/components/ui/FadeUp";
import { StaggerGrid, StaggerItem } from "@/components/ui/StaggerGrid";
import SectionHeader from "@/components/ui/SectionHeader";
import Counter from "@/components/ui/Counter";
import { CheckCircle2 } from "lucide-react";

const STATS = [
  { num: "10+",  label: "Projects shipped" },
  { num: "4.8",  label: "Avg. rating" },
  { num: "3",    label: "Years active" },
  { num: "100%", label: "Remote team" },
];

const STACK_GROUPS = [
  { label: "Frontend", items: ["React", "Next.js", "Vue", "Tailwind"] },
  { label: "Backend",  items: ["Node.js", "Express", "Django"] },
  { label: "Mobile",   items: ["Flutter", "React Native"] },
  { label: "Data",     items: ["Postgres", "MongoDB", "Firebase"] },
  { label: "Deploy",   items: ["Vercel", "AWS", "GCP"] },
];

export default function About() {
  return (
    <section id="about" className="relative z-[1] py-28 px-6">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <FadeUp>
            <SectionHeader label="About us" title={"Who's behind\nthe pixels"} />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-2 gap-4 mb-8">
            {STATS.map((s) => (
              <StaggerItem key={s.label}>
                <div className="card p-5 text-center hover:shadow-softer transition-shadow duration-300">
                  <span className="block text-[26px] font-semibold text-ink mb-1 tracking-tight">
                    <Counter value={s.num} />
                  </span>
                  <span className="block text-[12.5px] text-subtle">{s.label}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>

          <FadeUp delay={0.2} className="text-[15px] text-subtle leading-7 space-y-4">
            <p>Pixelforgex is a tight-knit dev studio that builds web and mobile products for startups, SMBs, and brands that care about quality.</p>
            <p>We don&apos;t churn out generic templates. Every project gets our full focus — from architecture decisions to the last detail in your UI.</p>
          </FadeUp>
        </div>

        <FadeUp delay={0.15}>
          <div className="card p-7">
            <p className="eyebrow mb-5">Our stack</p>
            <div className="space-y-5">
              {STACK_GROUPS.map((g) => (
                <div key={g.label} className="flex items-start gap-3">
                  <CheckCircle2 size={17} className="text-accent flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <p className="text-[13px] font-semibold text-ink mb-1">{g.label}</p>
                    <p className="text-[13.5px] text-subtle leading-6">{g.items.join(" · ")}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-line flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <p className="text-[13.5px] text-subtle">Currently taking new clients — est. start 2 weeks</p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
