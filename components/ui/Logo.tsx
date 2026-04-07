import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className || ""}`}>
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-[#060608] border border-[#00FFFF] shadow-[0_0_25px_rgba(0,255,255,0.16)] overflow-hidden">
        <Image
          src="/logo.png"
          alt="PIXELFORGEX.DEV Logo"
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
      <span className="flex flex-col leading-none">
        <span className="font-pixel text-[10px] tracking-[0.05em] text-[#00FFFF]">
          PIXEL<span className="text-[#FF00FF]">FORGE</span>X<span className="text-[#FF00FF]">.DEV</span>
        </span>
        <span className="text-[8px] uppercase tracking-[0.18em] text-[#888]">Web Development Studio</span>
      </span>
    </span>
  );
}
