export default function GlitchBar() {
  return (
    <div
      className="h-[3px] w-full animate-rgbshift"
      style={{
        background: "linear-gradient(90deg, #00FFFF, #FF00FF, #00FF41, #FFE600)",
      }}
    />
  );
}
