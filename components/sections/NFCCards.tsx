import { Nfc, ArrowRight } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import { StaggerGrid, StaggerItem } from "@/components/ui/StaggerGrid";
import PixelButton from "@/components/ui/PixelButton";
import NFCCardVisual from "@/components/sections/NFCCardVisual";
import { NFC_FEATURES } from "@/lib/data";

export default function NFCCards() {
  return (
    <section id="nfc-cards" className="relative z-[1] py-28 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center mb-16">
          <FadeUp>
            <span className="eyebrow block mb-4">Also available</span>
            <h2
              className="font-display font-semibold text-ink tracking-tight leading-[1.15] mb-5"
              style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
            >
              NFC business cards, made for how you actually network.
            </h2>
            <p className="text-subtle text-[16px] leading-7 mb-8 max-w-md">
              One tap shares everything — your contact, your socials, your
              site. Custom-designed, no app needed on the other end.
            </p>
            <PixelButton href="/#contact" className="px-6 py-3">
              Get a custom quote <ArrowRight size={16} strokeWidth={2} />
            </PixelButton>
            <p className="text-[12.5px] text-faint mt-4">
              Pricing depends on material and finish — get a quote for your exact needs.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <NFCCardVisual />
            <p className="text-center text-[11.5px] text-faint mt-3">
              Illustrative mockup — final design is fully custom to your brand.
            </p>
          </FadeUp>
        </div>

        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {NFC_FEATURES.map((f) => (
            <StaggerItem key={f.title}>
              <div className="card p-6 rounded-[18px] flex items-start gap-4 h-full">
                <span className="w-11 h-11 rounded-xl bg-accent-soft flex items-center justify-center flex-shrink-0">
                  <Nfc size={19} className="text-accent" />
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold text-ink tracking-tight mb-1.5 capitalize">
                    {f.title.toLowerCase()}
                  </h3>
                  <p className="text-[13.5px] text-subtle leading-6">{f.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
