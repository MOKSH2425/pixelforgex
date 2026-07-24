"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  liftScale?: number;
}

/** Wraps content in a 3D-tilt-on-hover card that follows the cursor with spring physics. */
export default function TiltCard({
  children,
  className,
  maxTilt = 7,
  liftScale = 1.02,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const springCfg = { stiffness: 220, damping: 22, mass: 0.6 };

  const rotateX = useSpring(useTransform(py, [0, 1], [maxTilt, -maxTilt]), springCfg);
  const rotateY = useSpring(useTransform(px, [0, 1], [-maxTilt, maxTilt]), springCfg);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;
    px.set(relX);
    py.set(relY);
    glowRef.current?.style.setProperty("--gx", `${relX * 100}%`);
    glowRef.current?.style.setProperty("--gy", `${relY * 100}%`);
  }

  function handleMouseLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: liftScale }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      transition={springCfg}
      className={`relative group ${className ?? ""}`}
    >
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "radial-gradient(220px circle at var(--gx, 50%) var(--gy, 50%), var(--color-accent-soft), transparent 70%)",
        }}
      />
      {children}
    </motion.div>
  );
}
