import Link      from "next/link";
import GlitchBar from "@/components/ui/GlitchBar";

export default function NotFound() {
  return (
    <>
      <GlitchBar />
      <main className="min-h-screen flex flex-col items-center justify-center text-center px-8 bg-[#060608] relative z-[1]">
        {/* Watermark */}
        <span className="absolute font-pixel pointer-events-none select-none opacity-[0.03] text-[#00FFFF]"
              style={{ fontSize: "clamp(80px,18vw,200px)" }}>
          404
        </span>

        <div className="relative z-10">
          <span className="block font-pixel text-[7px] text-[#00FF41] border border-[#00FF41] px-4 py-2 mb-8 tracking-[0.1em] inline-block">
            &gt; ERROR_404
          </span>

          <h1 className="font-pixel text-[#00FFFF] mb-4 leading-relaxed"
              style={{ fontSize: "clamp(18px,4vw,36px)", textShadow: "0 0 20px rgba(0,255,255,0.5)" }}>
            PAGE NOT FOUND
          </h1>

          <p className="text-[13px] text-[#666] leading-8 max-w-sm mx-auto mb-10">
            The page you&apos;re looking for has been deleted, moved, or never existed. It happens.
          </p>

          {/* Terminal block */}
          <div className="bg-[#090912] border border-[#1A1A28] p-6 font-mono text-[12px] text-left max-w-sm mx-auto mb-10">
            <span className="block text-[#00FF41]">$ find / -name &quot;this-page&quot;</span>
            <span className="block text-[#888] pl-4 mt-1">find: no such file or directory</span>
            <span className="block text-[#555] pl-4">exit code: 404</span>
            <span className="block mt-3">
              <span className="text-[#00FF41]">$ </span>
              <span className="inline-block w-2 h-3 bg-[#00FF41] align-middle animate-cursor-blink" />
            </span>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/"
                  className="font-pixel text-[8px] text-[#060608] bg-[#00FFFF] px-7 py-4 hover:bg-[#FF00FF] transition-colors duration-200 clip-skew">
              ← BACK TO HOME
            </Link>
            <Link href="/#contact"
                  className="font-pixel text-[8px] text-[#FF00FF] border border-[#FF00FF] px-7 py-4 hover:bg-[rgba(255,0,255,0.08)] transition-colors duration-200">
              CONTACT US
            </Link>
          </div>
        </div>
      </main>
      <GlitchBar />
    </>
  );
}
