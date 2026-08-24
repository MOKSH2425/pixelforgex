interface SectionHeaderProps {
  label: string;
  title: string;
  sub?: string;
}

export default function SectionHeader({ label, title, sub }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <span className="eyebrow block mb-3">{label}</span>
      <h2
        className="font-display font-semibold text-ink tracking-tight leading-[1.15] mb-3 whitespace-pre-line"
        style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
      >
        {title}
      </h2>
      {sub && (
        <p className="text-subtle text-[16px] leading-7 max-w-lg">{sub}</p>
      )}
    </div>
  );
}
