import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:        "var(--color-bg)",
        surface:   "var(--color-surface)",
        surface2:  "var(--color-surface-2)",
        ink:       "var(--color-ink)",
        subtle:    "var(--color-subtle)",
        faint:     "var(--color-faint)",
        line:      "var(--color-line)",
        accent:    "var(--color-accent)",
        "accent-soft": "var(--color-accent-soft)",
        "accent-ink":  "var(--color-accent-ink)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft:  "0 1px 2px rgba(0,0,0,0.04), 0 8px 24px -8px rgba(0,0,0,0.08)",
        softer: "0 1px 2px rgba(0,0,0,0.03), 0 4px 12px -4px rgba(0,0,0,0.06)",
        lift:  "0 20px 40px -16px rgba(0,0,0,0.16)",
      },
      animation: {
        float:       "float 6s ease-in-out infinite",
        ticker:      "ticker 40s linear infinite",
        testimonial: "ticker 50s linear infinite",
        marquee:     "ticker 26s linear infinite",
        fadeup:      "fadeup 0.7s ease both",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-10px)" },
        },
        ticker: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeup: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
