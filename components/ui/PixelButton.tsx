import Link from "next/link";
import clsx from "clsx";

interface PixelButtonProps {
  href: string;
  variant?: "primary" | "outline";
  children: React.ReactNode;
  className?: string;
}

export default function PixelButton({
  href,
  variant = "primary",
  children,
  className,
}: PixelButtonProps) {
  const base =
    "inline-block font-pixel text-[9px] tracking-[0.06em] px-7 py-4 cursor-pointer transition-transform duration-100 active:translate-y-0.5 clip-skew select-none";

  const styles = {
    primary:
      "text-[#060608] bg-[#00FFFF] hover:bg-[#00E5E5]",
    outline:
      "text-[#FF00FF] bg-transparent border border-[#FF00FF] hover:bg-[rgba(255,0,255,0.08)]",
  };

  return (
    <Link href={href} className={clsx(base, styles[variant], className)}>
      {children}
    </Link>
  );
}
