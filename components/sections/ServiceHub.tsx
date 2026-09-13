import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import TiltCard from "@/components/ui/TiltCard";

const HUB_CARDS = [
  {
    href: "/web-app",
    icon: "🖥️",
    color: "#0A84FF",
    eyebrow: "Web & App Development",
    title: "Websites and apps, shipped properly.",
    desc: "Custom builds, real code, clean design — from your first message to launch day.",
  },
  {
    href: "/digital-marketing",
    icon: "📈",
    color: "#E1306C",
    eyebrow: "Digital Marketing",
    title: "Content, ads, and platforms — fully managed.",
    desc: "Instagram, Facebook, Google, YouTube, and performance marketing, run by one team.",
  },
] as const;

export default function ServiceHub() {
  return (
    <section className="relative z-[1] py-8 px-6">
      <div className="max-w-[1100px] mx-auto">
        <p className="eyebrow text-center mb-5">Pick your lane</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {HUB_CARDS.map((c, i) => (
          <FadeUp key={c.href} delay={i * 0.1}>
            <Link href={c.href} className="block no-underline group h-full">
              <TiltCard
                maxTilt={4}
                className="relative rounded-[24px] overflow-hidden h-full min-h-[220px] border border-white/[0.06]"
              >
                <div
                  className="absolute inset-0 -z-[1]"
                  style={{ background: "linear-gradient(155deg, #121218 0%, #0A0A0F 100%)" }}
                />
                <span
                  aria-hidden
                  className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-[0.3] blur-3xl pointer-events-none transition-opacity duration-300 group-hover:opacity-[0.42]"
                  style={{ background: c.color }}
                />

                <div className="relative h-full flex flex-col justify-between p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-[22px] flex-shrink-0"
                      style={{ background: `${c.color}22` }}
                    >
                      {c.icon}
                    </span>
                    <span className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center flex-shrink-0 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight size={16} className="text-white" />
                    </span>
                  </div>

                  <div>
                    <p
                      className="font-mono text-[11px] font-medium uppercase tracking-wider mb-2.5"
                      style={{ color: c.color }}
                    >
                      {c.eyebrow}
                    </p>
                    <h3 className="font-display font-semibold text-white text-[21px] sm:text-[24px] leading-tight tracking-tight mb-2">
                      {c.title}
                    </h3>
                    <p className="text-[14px] text-white/55 leading-6 max-w-sm">
                      {c.desc}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </Link>
          </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
