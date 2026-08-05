import FadeUp from "@/components/ui/FadeUp";
import { StaggerGrid, StaggerItem } from "@/components/ui/StaggerGrid";
import SectionHeader from "@/components/ui/SectionHeader";
import Counter from "@/components/ui/Counter";

const STATS = [
  { num: "10+", label: "Projects shipped" },
  { num: "4.8", label: "Avg. rating" },
  { num: "3", label: "Years active" },
  { num: "100%", label: "Remote team" },
];

const STACK_GROUPS = [
  { label: "Frontend", items: ["React", "Next.js", "Vue", "Tailwind"] },
  { label: "Backend", items: ["Node.js", "Express", "Django"] },
  { label: "Mobile", items: ["Flutter", "React Native"] },
  { label: "Data", items: ["Postgres", "MongoDB", "Firebase"] },
  { label: "Deploy", items: ["Vercel", "AWS", "GCP"] },
];

export default function About() {
  return (
    <section id="about" className="relative z-[1] py-32 px-6">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <FadeUp>
            <SectionHeader
              label="About us"
              title={"Who's behind\nthe pixels"}
            />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-2 gap-4 mb-8">
            {STATS.map((s) => (
              <StaggerItem key={s.label}>
                <div className="card p-5 text-center hover:shadow-softer transition-shadow duration-300">
                  <span className="block text-[26px] font-semibold text-ink mb-1 tracking-tight">
                    <Counter value={s.num} />
                  </span>
                  <span className="block text-[12.5px] text-subtle">
                    {s.label}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>

          <FadeUp
            delay={0.2}
            className="text-[15px] text-subtle leading-7 space-y-4"
          >
            <p>
              Pixelforgex is a tight-knit dev studio that builds web and mobile
              products for startups, SMBs, and brands that care about quality.
            </p>
            <p>
              We don&apos;t churn out generic templates. Every project gets our
              full focus — from architecture decisions to the last detail in
              your UI.
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.15}>
          <div className="card p-7">
            <div className="mb-5 flex items-center justify-between gap-3">
              <p className="eyebrow">Our stack</p>
              <span className="text-[12px] text-faint uppercase tracking-[0.18em]">
                developer view
              </span>
            </div>

            <div className="rounded-2xl border border-line bg-[#07080c] p-6 font-mono text-[13px] leading-6 text-subtle overflow-x-auto shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#34D399]" />
              </div>
              <pre className="whitespace-pre-wrap break-words text-sm">
                <code>
                  {`const stack = {
${STACK_GROUPS.map((g) => `  ${g.label.toLowerCase()}: [${g.items.map((item) => `"${item}"`).join(", ")}],`).join("\n")}
};`}
                </code>
              </pre>
            </div>

            <div className="mt-6 pt-6 border-t border-line flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <p className="text-[13.5px] text-subtle">
                Currently taking new clients — est. start 2 weeks
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
