"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface StaggerGridProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  once?: boolean;
}

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 18, mass: 0.6 },
  },
};

export function StaggerGrid({
  children,
  className,
  style,
  once = true,
}: StaggerGridProps) {
  const { ref, inView } = useInView({ triggerOnce: once, threshold: 0.08 });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
