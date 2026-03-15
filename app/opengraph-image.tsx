import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt     = "PIXELFORGEX.DEV — Web & App Development Studio";
export const size    = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#060608",
          position: "relative",
          fontFamily: "monospace",
        }}
      >
        {/* Grid lines */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(0,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,255,0.04) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }} />

        {/* Glitch bar top */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: "linear-gradient(90deg,#00FFFF,#FF00FF,#00FF41,#FFE600)",
        }} />

        {/* Glitch bar bottom */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 4,
          background: "linear-gradient(90deg,#00FFFF,#FF00FF,#00FF41,#FFE600)",
        }} />

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
          {/* Tag */}
          <div style={{
            display: "flex", border: "1px solid #00FF41",
            padding: "6px 18px", marginBottom: 32, color: "#00FF41", fontSize: 14, letterSpacing: "0.15em",
          }}>
            &gt; WEB &amp; APP DEVELOPMENT STUDIO
          </div>

          {/* Logo */}
          <div style={{ display: "flex", fontSize: 72, letterSpacing: "0.02em", marginBottom: 20 }}>
            <span style={{ color: "#00FFFF", textShadow: "0 0 40px rgba(0,255,255,0.6)" }}>PIXEL</span>
            <span style={{ color: "#FF00FF", textShadow: "0 0 40px rgba(255,0,255,0.6)" }}>FORGE</span>
            <span style={{ color: "#00FFFF" }}>X</span>
            <span style={{ color: "#FF00FF" }}>.DEV</span>
          </div>

          {/* Tagline */}
          <div style={{ color: "#888", fontSize: 22, letterSpacing: "0.05em", marginBottom: 48 }}>
            We forge digital experiences that actually hit different.
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: 60 }}>
            {[["50+","PROJECTS"],["30+","CLIENTS"],["3YR","EXPERIENCE"]].map(([n, l]) => (
              <div key={l} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap: 6 }}>
                <span style={{ color: "#00FFFF", fontSize: 32, letterSpacing: "0.05em" }}>{n}</span>
                <span style={{ color: "#555", fontSize: 12, letterSpacing: "0.12em" }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
