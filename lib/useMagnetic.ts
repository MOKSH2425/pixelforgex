"use client";

import { useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

/** Pulls an element toward the cursor within its own bounds, springs back on leave. */
export function useMagnetic<T extends HTMLElement = HTMLDivElement>(strength = 0.3) {
  const ref = useRef<T>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 320, damping: 18, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 320, damping: 18, mass: 0.5 });

  function handleMouseMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return { ref, x: springX, y: springY, handleMouseMove, handleMouseLeave };
}
