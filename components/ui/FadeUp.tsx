"use client";

import { motion, Variants } from "framer-motion";
import { useInView }        from "react-intersection-observer";

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const variants: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0  },
};

export default function FadeUp({
  children,
  delay    = 0,
  duration = 0.6,
  className,
  once     = true,
}: FadeUpProps) {
  const { ref, inView } = useInView({ triggerOnce: once, threshold: 0.12 });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
