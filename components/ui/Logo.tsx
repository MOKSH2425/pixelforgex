import Link from "next/link";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="#hero" className={`inline-flex items-center gap-2.5 no-underline group ${className ?? ""}`}>
      <span className="w-8 h-8 rounded-[9px] bg-ink flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
        <span className="text-bg font-semibold text-[15px] tracking-tight">P</span>
      </span>
      <span className="font-semibold text-[17px] tracking-tight text-ink">
        Pixelforgex
      </span>
    </Link>
  );
}
