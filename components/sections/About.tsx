import FadeUp                      from "@/components/ui/FadeUp";
import { StaggerGrid, StaggerItem } from "@/components/ui/StaggerGrid";
import SectionHeader                from "@/components/ui/SectionHeader";

const STATS = [
  { num: "50+",  label: "PROJECTS SHIPPED" },
  { num: "30+",  label: "HAPPY CLIENTS"    },
  { num: "3",    label: "YEARS ACTIVE"     },
  { num: "100%", label: "REMOTE TEAM"      },
];

const TERMINAL_LINES = [
  { type: "cmd",   text: "whoami" },
  { type: "out",   text: "PIXELFORGEX.DEV",                         color: "#00FFFF" },
  { type: "out",   text: "Web & App Development Studio" },
  { type: "blank" },
  { type: "cmd",   text: "cat stack.txt" },
  { type: "out",   text: "Frontend: React, Next.js, Vue, Tailwind",  color: "#00FFFF" },
  { type: "out",   text: "Backend:  Node.js, Express, Django",        color: "#FF00FF" },
  { type: "out",   text: "Mobile:   Flutter, React Native",           color: "#FFE600" },
  { type: "out",   text: "Database: Postgres, MongoDB, Firebase" },
  { type: "out",   text: "Deploy:   Vercel, AWS, GCP" },
  { type: "blank" },
  { type: "cmd",   text: "get --open-projects" },
  { type: "out",   text: "✓ Taking new clients",                     color: "#00FF41" },
  { type: "out",   text: "Estimated start: 2 weeks" },
  { type: "blank" },
  { type: "prompt" },
] as const;

export default function About() {
  return (
    <section id="about" className="relative z-[1] py-24 px-8 bg-[#060608]">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>
          <FadeUp>
            <SectionHeader label="ABOUT US" title={"WHO'S BEHIND\nTHE PIXELS"} />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-2 gap-4 mb-8">
            {STATS.map((s) => (
              <StaggerItem key={s.label}>
                <div className="bg-[#0D0D12] border border-[#1A1A28] p-6 text-center transition-colors duration-300 hover:border-[#00FFFF]">
                  <span className="block font-pixel text-lg text-[#00FFFF] mb-1.5"
                        style={{ textShadow: "0 0 15px rgba(0,255,255,0.4)" }}>
                    {s.num}
                  </span>
                  <span className="block text-[10px] text-[#555]">{s.label}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>

          <FadeUp delay={0.2} className="text-[13px] text-[#666] leading-8 space-y-4">
            <p>PIXELFORGEX.DEV is a tight-knit dev studio that builds web and mobile products for startups, SMBs, and brands that care about quality.</p>
            <p>We don&apos;t churn out generic templates. Every project gets our full focus — from architecture decisions to the last pixel in your favicon.</p>
            <p>
              <span className="font-pixel text-[10px] text-[#00FFFF]">OUR STACK: </span>
              React, Next.js, Node.js, Flutter, Firebase, Postgres, Vercel — and whatever your project actually needs.
            </p>
          </FadeUp>
        </div>

        {/* Right — terminal */}
        <FadeUp delay={0.15}>
          <div className="bg-[#090912] border border-[#1A1A28] font-mono text-[12px]">
            <div className="bg-[#12121A] border-b border-[#1A1A28] px-4 py-2.5 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57] inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28CA41] inline-block" />
              <span className="font-pixel text-[7px] text-[#444] ml-2">PIXELFORGEX.DEV — terminal</span>
            </div>
            <div className="p-6 leading-8">
              {TERMINAL_LINES.map((line, i) => {
                if (line.type === "blank") return <br key={i} />;
                if (line.type === "prompt") return (
                  <span key={i} className="block">
                    <span className="text-[#00FF41]">$ </span>
                    <span className="inline-block w-2 h-3.5 bg-[#00FF41] align-middle animate-cursor-blink" />
                  </span>
                );
                if (line.type === "cmd") return (
                  <span key={i} className="block">
                    <span className="text-[#00FF41]">$ </span>
                    <span className="text-[#CCC]">{line.text}</span>
                  </span>
                );
                return (
                  <span key={i} className="block pl-4"
                        style={{ color: (line as { color?: string }).color ?? "#888" }}>
                    {line.text}
                  </span>
                );
              })}
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
