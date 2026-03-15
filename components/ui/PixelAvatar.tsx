"use client";

import { useMemo } from "react";

interface PixelAvatarProps {
  palette: readonly string[];
  seed: string;
}

function seededRand(seed: string, index: number): number {
  let hash = 0;
  const str = seed + index;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export default function PixelAvatar({ palette, seed }: PixelAvatarProps) {
  const colors = useMemo(() => {
    const allColors = ["transparent", ...palette];
    const grid: string[] = new Array(64);

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 4; col++) {
        const idx = row * 8 + col;
        const v = seededRand(seed, idx) % allColors.length;
        const color = allColors[v];
        grid[row * 8 + col] = color;
        grid[row * 8 + (7 - col)] = color; // mirror
      }
    }
    return grid;
  }, [palette, seed]);

  return (
    <div
      className="w-20 h-20 border-2 border-[#1A1A28] overflow-hidden"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(8, 1fr)",
        imageRendering: "pixelated",
      }}
    >
      {colors.map((color, i) => (
        <span key={i} className="block aspect-square" style={{ background: color }} />
      ))}
    </div>
  );
}
