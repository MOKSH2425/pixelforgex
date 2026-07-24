"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import PixelButton from "@/components/ui/PixelButton";
import Counter from "@/components/ui/Counter";
import CyclingWord from "@/components/ui/CyclingWord";
import ChipCloud from "@/components/ui/ChipCloud";
import { SITE } from "@/lib/data";

const STATS = [
  { value: "15+", label: "Projects shipped" },
  { value: "98%", label: "Client satisfaction" },
  { value: "24h", label: "Avg. response time" },
];

const AUDIENCE_WORDS = ["startups.", "founders.", "brands.", "small teams."];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-40 pb-24 px-6 overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[-120px] left-[8%] w-[440px] h-[440px] rounded-full opacity-[var(--hero-glow-opacity)] blur-[100px] animate-float"
          style={{ background: "var(--color-accent)" }}
        />
        <div
          className="absolute top-[80px] right-[6%] w-[400px] h-[400px] rounded-full opacity-[var(--hero-glow-opacity)] blur-[100px] animate-float"
          style={{ background: "var(--color-accent-2)", animationDelay: "1.5s" }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(var(--color-line) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            maskImage: "radial-gradient(ellipse 55% 60% at 50% 15%, black 30%, transparent 85%)",
            WebkitMaskImage: "radial-gradient(ellipse 55% 60% at 50% 15%, black 30%, transparent 85%)",
            opacity: 0.7,
          }}
        />
      </div>

      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 mb-8 shadow-softer"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-[13px] font-medium text-subtle">{SITE.status}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-semibold text-ink tracking-tight leading-[1.05]"
            style={{ fontSize: "clamp(38px, 5.4vw, 68px)" }}
          >
            We build digital
            <br />
            products for{" "}
            <CyclingWord words={AUDIENCE_WORDS} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-subtle max-w-lg mx-auto lg:mx-0 text-[17px] leading-8"
          >
            Pixelforgex is a small studio that plans, designs, and ships web &amp; app
            products — clean code, thoughtful design, and a team that actually replies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <PixelButton href="#contact">
              Start a project <ArrowRight size={16} strokeWidth={2} />
            </PixelButton>
            <PixelButton href="#portfolio" variant="outline">
              <Sparkles size={16} strokeWidth={2} /> See our work
            </PixelButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 grid grid-cols-3 gap-6 sm:gap-10 max-w-md mx-auto lg:mx-0"
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-[26px] sm:text-[30px] font-semibold text-ink tracking-tight">
                  <Counter value={s.value} />
                </p>
                <p className="text-[13px] text-faint mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: interactive chip cloud — tech tags that scatter from the cursor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block"
        >
          <ChipCloud className="h-[420px] w-full" />
        </motion.div>
      </div>
    </section>
  );
}
