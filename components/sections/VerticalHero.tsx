"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PixelButton from "@/components/ui/PixelButton";

interface VerticalHeroProps {
  eyebrow: string;
  headline: ReactNode;
  sub: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  glowA?: string;
  glowB?: string;
  rightSlot?: ReactNode;
}

export default function VerticalHero({
  eyebrow,
  headline,
  sub,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  glowA = "var(--color-accent)",
  glowB = "var(--color-accent-2)",
  rightSlot,
}: VerticalHeroProps) {
  return (
    <section className="relative pt-44 pb-24 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[-120px] left-[8%] w-[440px] h-[440px] rounded-full opacity-[var(--hero-glow-opacity)] blur-[100px] animate-float"
          style={{ background: glowA }}
        />
        <div
          className="absolute top-[80px] right-[6%] w-[400px] h-[400px] rounded-full opacity-[var(--hero-glow-opacity)] blur-[100px] animate-float"
          style={{ background: glowB, animationDelay: "1.5s" }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(var(--color-line) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            maskImage:
              "radial-gradient(ellipse 55% 60% at 50% 15%, black 30%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 55% 60% at 50% 15%, black 30%, transparent 85%)",
            opacity: 0.7,
          }}
        />
      </div>

      <div
        className={`mx-auto grid grid-cols-1 items-center ${
          rightSlot ? "max-w-[1180px] lg:grid-cols-[1.05fr_0.95fr] gap-10" : "max-w-[760px]"
        }`}
      >
        <div className={`text-center ${rightSlot ? "lg:text-left" : ""}`}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 mb-8 shadow-softer"
          >
            <span className="font-mono text-[12.5px] font-medium text-subtle tracking-tight">
              {eyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className={`font-display font-semibold text-ink tracking-tight leading-[1.05] max-w-[55ch] mx-auto ${
              rightSlot ? "lg:mx-0" : ""
            }`}
            style={{ fontSize: "clamp(34px, 4.6vw, 58px)" }}
          >
            {headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className={`mt-6 text-subtle max-w-lg mx-auto text-[17px] leading-8 ${
              rightSlot ? "lg:mx-0" : ""
            }`}
          >
            {sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 ${
              rightSlot ? "lg:justify-start" : ""
            }`}
          >
            <PixelButton href={primaryHref} className="w-full sm:w-auto px-6 py-3 text-lg">
              {primaryLabel} <ArrowRight size={16} strokeWidth={2} />
            </PixelButton>
            {secondaryLabel && secondaryHref && (
              <PixelButton
                href={secondaryHref}
                variant="outline"
                className="w-full sm:w-auto px-4 py-2 text-sm mt-3 sm:mt-0"
              >
                {secondaryLabel}
              </PixelButton>
            )}
          </motion.div>
        </div>

        {rightSlot && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            {rightSlot}
          </motion.div>
        )}
      </div>
    </section>
  );
}
