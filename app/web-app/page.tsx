import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import VerticalHero from "@/components/sections/VerticalHero";
import Ticker from "@/components/sections/Ticker";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import PixelButton from "@/components/ui/PixelButton";
import ChipCloud from "@/components/ui/ChipCloud";

export const metadata: Metadata = {
  title: "Web & App Development — PixelForgeX",
  description:
    "Custom web and mobile app development from a three-person studio in Surat. Real code, clean design, shipped fast.",
};

export default function WebAppPage() {
  return (
    <>
      <VerticalHero
        eyebrow="// WEB & APP DEVELOPMENT"
        headline={
          <>
            Websites and apps,
            <br />
            shipped properly.
          </>
        }
        sub="Custom builds, real code, clean design — from your first message to the day it ships. No templates, no bloated process."
        primaryLabel="Start a project"
        primaryHref="/#contact"
        secondaryLabel="See our work"
        secondaryHref="#portfolio"
        rightSlot={<ChipCloud className="h-[480px] w-full" />}
      />

      <Ticker />

      <Services
        id="services"
        label="What we build"
        title="Pick what you need, skip what you don't."
        sub="Every engagement starts with your goals — not a checklist."
      />

      <Portfolio
        id="portfolio"
        label="Selected work"
        title="Web and app builds we're proud of."
        sub="Real projects, live and clickable — no case study filler."
        restrictTags={["WEB", "APP"]}
        showFilters={false}
      />

      <Process
        id="process"
        label="Process"
        title="How we build"
        sub="A clean, predictable process. You always know where your project stands."
      />

      <section className="relative z-[1] py-24 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <h2
            className="font-display font-semibold text-ink tracking-tight leading-[1.1] mb-6"
            style={{ fontSize: "clamp(26px, 3.6vw, 38px)" }}
          >
            Got a web or app idea?
          </h2>
          <p className="text-subtle text-[16px] leading-7 mb-8">
            Tell us what you&apos;re building — we&apos;ll tell you honestly whether it&apos;s a good fit.
          </p>
          <PixelButton href="/#contact" className="px-6 py-3">
            Let&apos;s talk <ArrowRight size={16} strokeWidth={2} />
          </PixelButton>
        </div>
      </section>
    </>
  );
}
