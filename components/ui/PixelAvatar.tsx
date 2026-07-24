"use client";

import { useMemo } from "react";

interface PixelAvatarProps {
  palette: readonly string[];
  seed: string;
}

function seededHash(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  return parts.slice(0, 2).map((p) => p[0]).join("").toUpperCase();
}

/** Kept the filename/props to avoid touching Team.tsx; now renders a soft gradient avatar with initials. */
export default function PixelAvatar({ palette, seed }: PixelAvatarProps) {
  const { from, to } = useMemo(() => {
    const hash = seededHash(seed);
    const a = palette[hash % palette.length];
    const b = palette[(hash + 1) % palette.length];
    return { from: a, to: b };
  }, [palette, seed]);

  return (
    <div
      className="w-20 h-20 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-soft"
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      {initials(seed)}
    </div>
  );
}
