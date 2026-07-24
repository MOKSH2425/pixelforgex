"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function FadeUp({
  children,
  delay = 0,
  className,
  once = true,
}: FadeUpProps) {
  const { ref, inView } = useInView({ triggerOnce: once, threshold: 0.12 });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ type: "spring", stiffness: 260, damping: 20, mass: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
