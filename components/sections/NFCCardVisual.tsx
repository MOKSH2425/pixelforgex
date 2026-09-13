"use client";

import { Nfc } from "lucide-react";
import { motion } from "framer-motion";
import TiltCard from "@/components/ui/TiltCard";

export default function NFCCardVisual() {
  return (
    <div
      style={{ perspective: 1200 }}
      className="flex items-center justify-center py-6"
    >
      <TiltCard
        maxTilt={16}
        liftScale={1.04}
        className="w-full max-w-[360px] aspect-[1.586/1] rounded-[22px] shadow-2xl"
      >
        <div
          className="relative w-full h-full rounded-[22px] overflow-hidden p-6 flex flex-col justify-between border border-white/[0.08]"
          style={{
            background:
              "linear-gradient(135deg, #1c1c26 0%, #0a0a0f 60%, #16161f 100%)",
          }}
        >
          {/* subtle diagonal texture, standing in for a brushed-card finish */}
          <span
            aria-hidden
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 10px)",
            }}
          />

          <div className="relative flex items-start justify-between">
            <span className="font-display font-semibold text-white text-[15px] tracking-tight">
              PixelForgeX
            </span>
            <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
              <Nfc size={18} className="text-white/80" />
            </span>
          </div>

          {/* animated tap-to-share waves */}
          <div className="relative flex-1 flex items-center justify-center">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                aria-hidden
                className="absolute rounded-full border border-white/25"
                style={{ width: 40, height: 40 }}
                animate={{ scale: [1, 2.8], opacity: [0.6, 0] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: "easeOut",
                }}
              />
            ))}
            <span className="w-3 h-3 rounded-full bg-white/80 relative z-[1]" />
          </div>

          <div className="relative">
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-1">
              Tap to share
            </p>
            <p className="text-white/60 text-[13px] italic">Your name here</p>
          </div>
        </div>
      </TiltCard>
    </div>
  );
}
