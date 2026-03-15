interface SectionHeaderProps {
  label: string;
  title: string;
  sub?: string;
}

export default function SectionHeader({ label, title, sub }: SectionHeaderProps) {
  return (
    <div className="mb-14">
      <span className="block font-pixel text-[7px] text-[#00FFFF] tracking-[0.15em] mb-3">
        <span className="text-[#1A1A28]">// </span>
        {label}
      </span>
      <h2 className="font-pixel text-white leading-relaxed mb-3"
          style={{ fontSize: "clamp(14px, 2.5vw, 22px)" }}>
        {title}
      </h2>
      {sub && (
        <p className="text-[#666] text-[13px] leading-8 max-w-lg">{sub}</p>
      )}
    </div>
  );
}
