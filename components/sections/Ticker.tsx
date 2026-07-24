import { TICKER_ITEMS } from "@/lib/data";

export default function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="relative border-y border-line bg-surface-2 py-5 overflow-hidden">
      <div
        className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, var(--color-surface-2), transparent)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(270deg, var(--color-surface-2), transparent)" }}
      />

      <div className="flex w-max animate-ticker">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 text-[14px] font-medium text-subtle whitespace-nowrap px-8"
          >
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-line" />
          </span>
        ))}
      </div>
    </div>
  );
}
