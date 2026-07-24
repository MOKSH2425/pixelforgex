"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface ChipDef {
  label: string;
  top: string;
  left: string;
  delay: number;
  duration: string;
}

const CHIPS: ChipDef[] = [
  { label: "React",     top: "4%",  left: "8%",  delay: 0,    duration: "6s" },
  { label: "Next.js",   top: "0%",  left: "56%", delay: 0.6,  duration: "7s" },
  { label: "Flutter",   top: "30%", left: "82%", delay: 1.1,  duration: "6.5s" },
  { label: "Figma",     top: "58%", left: "2%",  delay: 0.3,  duration: "8s" },
  { label: "Stripe",    top: "80%", left: "58%", delay: 0.9,  duration: "6.8s" },
  { label: "Tailwind",  top: "48%", left: "38%", delay: 1.4,  duration: "7.4s" },
  { label: "Node.js",   top: "16%", left: "34%", delay: 1.8,  duration: "6.2s" },
];

/** A cluster of tech-tag chips that gently float and scatter away from the cursor. */
function Chip({ chip, containerRef }: { chip: ChipDef; containerRef: React.RefObject<HTMLDivElement | null> }) {
  const chipRef = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 160, damping: 14, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 160, damping: 14, mass: 0.6 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function handleMove(e: MouseEvent) {
      const rect = chipRef.current?.getBoundingClientRect();
      if (!rect) return;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = cx - e.clientX;
      const dy = cy - e.clientY;
      const dist = Math.hypot(dx, dy);
      const radius = 120;

      if (dist < radius && dist > 0) {
        const force = (radius - dist) / radius;
        x.set((dx / dist) * force * 46);
        y.set((dy / dist) * force * 46);
      } else {
        x.set(0);
        y.set(0);
      }
    }

    container.addEventListener("mousemove", handleMove);
    return () => container.removeEventListener("mousemove", handleMove);
  }, [containerRef, x, y]);

  return (
    <motion.span
      ref={chipRef}
      style={{ position: "absolute", top: chip.top, left: chip.left, x: sx, y: sy, animationDuration: chip.duration }}
      className="text-[12.5px] font-medium text-ink bg-surface border border-line rounded-full px-3.5 py-1.5 shadow-softer select-none whitespace-nowrap animate-float"
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.7 }}
      transition={{ delay: 0.6 + chip.delay * 0.15, type: "spring", stiffness: 260, damping: 20 }}
    >
      {chip.label}
    </motion.span>
  );
}

export default function ChipCloud({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className={`relative ${className ?? ""}`}>
      {CHIPS.map((chip) => (
        <Chip key={chip.label} chip={chip} containerRef={containerRef} />
      ))}
    </div>
  );
}
