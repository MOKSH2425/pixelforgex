"use client";

import { useEffect, useRef } from "react";

/** A very soft radial glow that trails the cursor across the whole page. Desktop only. */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      ref.current?.style.setProperty("--x", `${e.clientX}px`);
      ref.current?.style.setProperty("--y", `${e.clientY}px`);
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="fixed inset-0 pointer-events-none z-[2] hidden md:block"
      style={{
        background:
          "radial-gradient(560px circle at var(--x, 50%) var(--y, 50%), var(--color-accent) 0%, transparent 70%)",
        opacity: "var(--glow-opacity)",
      }}
    />
  );
}
