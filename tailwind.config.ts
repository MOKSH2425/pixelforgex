import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          cyan:    "#00FFFF",
          magenta: "#FF00FF",
          green:   "#00FF41",
          yellow:  "#FFE600",
          orange:  "#FF6B00",
          bg:      "#060608",
          bg2:     "#0D0D12",
          bg3:     "#12121A",
          border:  "#1A1A28",
        },
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', "monospace"],
        mono:  ['"Share Tech Mono"', "monospace"],
      },
      animation: {
        glitch:      "glitch 6s ease-in-out infinite",
        blink:       "blink 2s ease-in-out infinite",
        float:       "float 4s ease-in-out infinite",
        neonpulse:   "neonpulse 3s ease-in-out infinite",
        ticker:      "ticker 28s linear infinite",
        testimonial: "ticker 35s linear infinite",
        fadeup:      "fadeup 0.8s ease both",
        rgbshift:    "rgbshift 4s linear infinite",
        "cursor-blink": "cursor-blink 1s step-end infinite",
      },
      keyframes: {
        glitch: {
          "0%,100%": { textShadow: "2px 0 #FF00FF, -2px 0 #00FFFF", transform: "none" },
          "20%":     { textShadow: "-2px 0 #FF00FF, 2px 0 #00FFFF", transform: "translateX(3px)" },
          "40%":     { textShadow: "4px 0 #FF00FF, -4px 0 #00FFFF", transform: "translateX(-3px)" },
          "60%":     { textShadow: "-1px 0 #00FF41, 1px 0 #FF00FF", transform: "none" },
          "80%":     { textShadow: "3px 0 #00FFFF, -3px 0 #FF00FF", transform: "translateX(2px)" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%":     { opacity: "0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-8px)" },
        },
        neonpulse: {
          "0%,100%": { boxShadow: "0 0 6px #00FFFF, 0 0 20px rgba(0,255,255,0.3)" },
          "50%":     { boxShadow: "0 0 12px #00FFFF, 0 0 40px rgba(0,255,255,0.5), 0 0 60px rgba(0,255,255,0.15)" },
        },
        ticker: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeup: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        rgbshift: {
          "0%,100%": { filter: "hue-rotate(0deg)" },
          "50%":     { filter: "hue-rotate(15deg)" },
        },
        "cursor-blink": {
          "0%,100%": { opacity: "1" },
          "50%":     { opacity: "0" },
        },
      },
      backgroundImage: {
        "scanlines": "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.18) 2px, rgba(0,0,0,0.18) 4px)",
        "pixel-grid": "linear-gradient(rgba(0,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.025) 1px, transparent 1px)",
        "glitch-bar": "linear-gradient(90deg, #00FFFF, #FF00FF, #00FF41, #FFE600)",
      },
      backgroundSize: {
        "pixel-grid": "32px 32px",
      },
    },
  },
  plugins: [],
};

export default config;
