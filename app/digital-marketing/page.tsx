import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import VerticalHero from "@/components/sections/VerticalHero";
import Ticker from "@/components/sections/Ticker";
import Services from "@/components/sections/Services";
import Results from "@/components/sections/Results";
import NFCCards from "@/components/sections/NFCCards";
import Process from "@/components/sections/Process";
import PixelButton from "@/components/ui/PixelButton";
import { DM_SERVICES, DM_PROCESS_STEPS, DM_TICKER_ITEMS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Digital Marketing — PixelForgeX",
  description:
    "Complete Instagram, Facebook, Google My Business, and YouTube management, plus performance marketing and custom NFC business cards — run by one team.",
};

export default function DigitalMarketingPage() {
  return (
    <>
      <VerticalHero
        eyebrow="// DIGITAL MARKETING"
        headline={
          <>
            Content, ads, and platforms —
            <br />
            fully managed.
          </>
        }
        sub="Instagram, Facebook, Google My Business, and YouTube — strategy, content, and performance marketing, run by one team that actually replies."
        primaryLabel="Start a project"
        primaryHref="/#contact"
        secondaryLabel="See real accounts"
        secondaryHref="#results"
        glowA="#E1306C"
        glowB="#8B5CF6"
      />

      <Ticker items={DM_TICKER_ITEMS} />

      <Services
        id="services"
        label="What's included"
        title="Everything your presence actually needs."
        sub="Platform management, monthly content, and performance marketing — pick what you need."
        items={DM_SERVICES}
      />

      <Results />

      <NFCCards />

      <Process
        id="process"
        label="Process"
        title="How we run it"
        sub="A clean monthly rhythm — you always know what's shipping and when."
        steps={DM_PROCESS_STEPS}
      />

      <section className="relative z-[1] py-24 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <h2
            className="font-display font-semibold text-ink tracking-tight leading-[1.1] mb-6"
            style={{ fontSize: "clamp(26px, 3.6vw, 38px)" }}
          >
            Ready to actually get found online?
          </h2>
          <p className="text-subtle text-[16px] leading-7 mb-8">
            Tell us about your brand — we'll tell you honestly what it needs.
          </p>
          <PixelButton href="/#contact" className="px-6 py-3">
            Let's talk <ArrowRight size={16} strokeWidth={2} />
          </PixelButton>
        </div>
      </section>
    </>
  );
}
