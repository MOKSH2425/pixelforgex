import { TICKER_ITEMS } from "@/lib/data";

export default function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS]; // infinite loop trick

  return (
    <div className="bg-[#0D0D12] border-t border-b border-[rgba(0,255,255,0.15)] overflow-hidden py-3 relative z-[1]">
      <div className="flex w-max animate-ticker">
        {[...doubled, ...doubled].map((item, i) => (
          <span
            key={i}
            className="font-pixel text-[7px] text-[#555] whitespace-nowrap px-10"
          >
            ⬛ {item} <span className="text-[#00FFFF]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
