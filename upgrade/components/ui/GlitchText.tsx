"use client";

import { motion } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "span" | "p";
}

export default function GlitchText({ text, className, as: Tag = "span" }: GlitchTextProps) {
  return (
    <motion.div
      className="relative inline-block"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Red/cyan glitch layers */}
      <Tag
        className={`absolute inset-0 ${className ?? ""}`}
        style={{
          color: "#FF00FF",
          clipPath: "inset(20% 0 60% 0)",
          transform: "translateX(-3px)",
          opacity: 0.7,
          pointerEvents: "none",
          userSelect: "none",
        }}
        aria-hidden
      >
        {text}
      </Tag>
      <Tag
        className={`absolute inset-0 ${className ?? ""}`}
        style={{
          color: "#00FFFF",
          clipPath: "inset(60% 0 10% 0)",
          transform: "translateX(3px)",
          opacity: 0.7,
          pointerEvents: "none",
          userSelect: "none",
        }}
        aria-hidden
      >
        {text}
      </Tag>
      {/* Main text */}
      <Tag className={`relative ${className ?? ""}`}>{text}</Tag>
    </motion.div>
  );
}
