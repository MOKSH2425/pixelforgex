"use client";

import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useMagnetic } from "@/lib/useMagnetic";

interface PixelButtonProps {
  href: string;
  variant?: "primary" | "outline";
  children: React.ReactNode;
  className?: string;
}

/** Kept the filename to avoid touching every import; now a magnetic, springy pill button. */
export default function PixelButton({
  href,
  variant = "primary",
  children,
  className,
}: PixelButtonProps) {
  const { ref, x, y, handleMouseMove, handleMouseLeave } = useMagnetic<HTMLDivElement>(0.25);

  return (
    <motion.div
      ref={ref}
      style={{ x, y, display: "inline-block" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.93 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <Link href={href} className={clsx("btn", variant === "primary" ? "btn-primary" : "btn-outline", className)}>
        {children}
      </Link>
    </motion.div>
  );
}
