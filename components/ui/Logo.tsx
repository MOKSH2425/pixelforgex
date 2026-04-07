import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-md border border-[#00FFFF] overflow-hidden ${className || ""}`}>
      <Image
        src="/logo.png"
        alt="PIXELFORGEX.DEV Logo"
        width={32}
        height={32}
        className="object-contain"
      />
    </div>
  );
}
