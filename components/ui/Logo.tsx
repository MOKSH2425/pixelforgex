import Image from "next/image";
import Link from "next/link";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 no-underline group ${className ?? ""}`}
    >
      <span className="relative w-10 h-10 rounded-[13px] overflow-hidden bg-surface border border-line flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
        <Image
          src="/logo.png"
          alt="PixelForgeX logo"
          fill
          className="object-contain"
        />
      </span>
      <span className="font-semibold text-[17px] tracking-tight text-ink">
        PixelForgeX
      </span>
    </Link>
  );
}
