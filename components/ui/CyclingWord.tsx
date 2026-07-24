"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CyclingWord({ words, interval = 2200 }: { words: string[]; interval?: number }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span
      className="relative inline-block overflow-hidden align-bottom"
      style={{ height: "1.05em", verticalAlign: "-0.1em" }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={words[i]}
          initial={{ y: "110%", opacity: 0, rotateX: 40 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: "-110%", opacity: 0, rotateX: -40 }}
          transition={{ type: "spring", stiffness: 300, damping: 26 }}
          className="inline-block"
          style={{
            backgroundImage: "linear-gradient(90deg, var(--color-accent), var(--color-accent-2))",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
