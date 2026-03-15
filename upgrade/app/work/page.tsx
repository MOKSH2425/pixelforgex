import Link          from "next/link";
import { getAllPosts } from "@/lib/posts";
import GlitchBar      from "@/components/ui/GlitchBar";
import Navbar         from "@/components/layout/Navbar";
import Footer         from "@/components/layout/Footer";

export const metadata = {
  title: "Case Studies — PIXELFORGEX.DEV",
  description: "Deep dives into how we built our best work. Real problems, real solutions, real results.",
};

export default function WorkPage() {
  const posts = getAllPosts();

  return (
    <>
      <GlitchBar />
      <Navbar />

      <main className="min-h-screen pt-24 pb-24 px-8 relative z-[1]">
        <div className="max-w-[1100px] mx-auto">

          {/* Header */}
          <div className="mb-16 border-b border-[#1A1A28] pb-12">
            <Link
              href="/"
              className="inline-block font-pixel text-[7px] text-[#555] hover:text-[#00FFFF] transition-colors duration-200 mb-8"
            >
              ← BACK TO HOME
            </Link>
            <span className="block font-pixel text-[7px] text-[#00FFFF] tracking-[0.15em] mb-3">
              <span className="text-[#1A1A28]">// </span>CASE STUDIES
            </span>
            <h1 className="font-pixel text-white mb-4 leading-relaxed"
                style={{ fontSize: "clamp(14px,3vw,28px)" }}>
              THE WORK
            </h1>
            <p className="text-[#666] text-[13px] leading-8 max-w-lg">
              Deep dives into how we built our best projects. Real briefs, real challenges, real results — no fluff.
            </p>
          </div>

          {/* Posts grid */}
          {posts.length === 0 ? (
            <p className="font-pixel text-[8px] text-[#333]">NO CASE STUDIES YET — CHECK BACK SOON.</p>
          ) : (
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/work/${post.slug}`}
                  className="group bg-[#0D0D12] border border-[#1A1A28] overflow-hidden hover:border-[rgba(255,0,255,0.4)] transition-all duration-300 hover:-translate-y-1 block"
                >
                  {/* Thumb */}
                  <div
                    className="h-[160px] flex items-center justify-center relative overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${post.bgFrom}, ${post.bgTo})` }}
                  >
                    <span
                      className="font-pixel text-[8px] tracking-[0.1em] px-4 text-center leading-relaxed"
                      style={{ color: post.coverColor, textShadow: `0 0 20px ${post.coverColor}80` }}
                    >
                      {post.client}
                    </span>
                    <div
                      className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                      style={{ background: post.coverColor }}
                    />
                  </div>

                  {/* Meta */}
                  <div className="p-6">
                    <p className="font-pixel text-[6px] text-[#FF00FF] tracking-[0.1em] mb-2">
                      {post.category}
                    </p>
                    <h2 className="font-pixel text-[9px] text-white leading-relaxed mb-3">
                      {post.title}
                    </h2>
                    <p className="text-[11px] text-[#666] leading-relaxed mb-4">
                      {post.summary}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.stack.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="font-pixel text-[6px] text-[#555] border border-[#222] px-2 py-1"
                        >
                          {s}
                        </span>
                      ))}
                      {post.stack.length > 3 && (
                        <span className="font-pixel text-[6px] text-[#333] px-2 py-1">
                          +{post.stack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="px-6 py-3 border-t border-[#1A1A28] flex items-center justify-between">
                    <span className="text-[10px] text-[#444]">
                      {new Date(post.date).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}
                    </span>
                    <span className="font-pixel text-[7px] text-[#00FFFF] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      READ →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <GlitchBar />
      <Footer />
    </>
  );
}
