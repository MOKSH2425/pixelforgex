"use client";

import { motion } from "framer-motion";
import PixelButton from "@/components/ui/PixelButton";

interface PixelShape {
  size: string;
  color: string;
  delay: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

const PIXEL_SHAPES: PixelShape[] = [
  { size: "8px",  color: "#00FFFF", top: "15%",  left: "8%",   delay: 0   },
  { size: "16px", color: "#FF00FF", top: "25%",  right: "10%", delay: 1   },
  { size: "6px",  color: "#00FF41", top: "70%",  left: "6%",   delay: 2   },
  { size: "12px", color: "#FFE600", bottom: "20%", right: "8%", delay: 0.5 },
  { size: "10px", color: "#00FFFF", top: "80%",  left: "20%",  delay: 1.5 },
];

const STATS = [
  { num: "50+", label: "PROJECTS SHIPPED" },
  { num: "30+", label: "HAPPY CLIENTS"    },
  { num: "3YR", label: "IN THE GAME"      },
  { num: "∞",   label: "PIXELS FORGED"   },
];

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as number[] } },
};

const statVariants = {
  hidden:  { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1,  transition: { duration: 0.5, ease: "backOut" } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center px-8 pt-20 pb-16 overflow-hidden z-[1]"
    >
      {/* Watermark */}
      <span
        className="absolute font-pixel pointer-events-none select-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
        style={{ fontSize: "clamp(60px,12vw,130px)", color: "#00FFFF", opacity: 0.025 }}
      >
        PIXELFORGEX
      </span>

      {/* Floating pixel shapes */}
      {PIXEL_SHAPES.map((s, i) => (
        <motion.span
          key={i}
          className="absolute pointer-events-none"
          style={{
            width:   s.size,
            height:  s.size,
            background: s.color,
            top:     s.top,
            left:    s.left,
            right:   s.right,
            bottom:  s.bottom,
          }}
          animate={{ y: [0, -8, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Main content */}
      <motion.div
        className="relative z-[2] max-w-3xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Tag */}
        <motion.div variants={itemVariants} className="mb-10">
          <span className="inline-block font-pixel text-[7px] text-[#00FF41] border border-[#00FF41] px-4 py-2 tracking-[0.1em]">
            <span>&gt; </span>CURRENTLY TAKING NEW PROJECTS
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="font-pixel leading-relaxed mb-4"
          style={{ fontSize: "clamp(20px,5vw,44px)" }}
        >
          <motion.span
            className="block text-[#00FFFF]"
            style={{ textShadow: "0 0 20px rgba(0,255,255,0.5)" }}
            animate={{
              textShadow: [
                "2px 0 #FF00FF, -2px 0 #00FFFF",
                "-2px 0 #FF00FF,  2px 0 #00FFFF",
                "2px 0 #FF00FF, -2px 0 #00FFFF",
              ],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            PIXELFORGEX.DEV
          </motion.span>
          <span className="block text-white mt-3" style={{ fontSize: "0.55em" }}>
            WE BUILD DIGITAL EXPERIENCES
          </span>
          <span
            className="block text-[#FF00FF] mt-2"
            style={{ fontSize: "0.5em", textShadow: "0 0 20px rgba(255,0,255,0.5)" }}
          >
            THAT ACTUALLY HIT DIFFERENT
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          variants={itemVariants}
          className="text-[13px] text-[#888] mx-auto mt-8 max-w-lg leading-8"
        >
          Full-stack web &amp; app development studio. We forge pixel-perfect,
          performance-obsessed digital products — from slick landing pages to complex SaaS platforms.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={itemVariants} className="flex gap-6 justify-center flex-wrap mt-10">
          <PixelButton href="#portfolio" variant="primary">VIEW OUR WORK →</PixelButton>
          <PixelButton href="#contact"   variant="outline">START A PROJECT</PixelButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex gap-12 justify-center mt-16 flex-wrap"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.6 } } }}
          initial="hidden"
          animate="visible"
        >
          {STATS.map((s) => (
            <motion.div key={s.label} variants={statVariants} className="text-center">
              <span
                className="block font-pixel text-xl text-[#00FFFF]"
                style={{ textShadow: "0 0 15px rgba(0,255,255,0.5)" }}
              >
                {s.num}
              </span>
              <span className="block font-pixel text-[7px] text-[#555] mt-2 tracking-[0.08em]">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
      >
        <span className="font-pixel text-[7px] text-[#444]">SCROLL</span>
        <span className="w-px h-8 bg-gradient-to-b from-[#444] to-transparent" />
      </motion.div>
    </section>
  );
}