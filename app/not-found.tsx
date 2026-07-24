import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-bg relative">
      <span className="text-[13px] font-semibold text-accent bg-accent-soft rounded-full px-4 py-1.5 mb-8 inline-block">
        Error 404
      </span>

      <h1
        className="font-semibold text-ink mb-4 tracking-tight leading-tight"
        style={{ fontSize: "clamp(28px, 5vw, 48px)" }}
      >
        Page not found
      </h1>

      <p className="text-[15.5px] text-subtle leading-7 max-w-sm mx-auto mb-10">
        The page you&apos;re looking for has been moved, renamed, or never existed. It happens to the best of us.
      </p>

      <div className="flex gap-3 justify-center flex-wrap">
        <Link href="/" className="btn btn-primary">
          <ArrowLeft size={16} /> Back to home
        </Link>
        <Link href="/#contact" className="btn btn-outline">
          <MessageCircle size={16} /> Contact us
        </Link>
      </div>
    </main>
  );
}
