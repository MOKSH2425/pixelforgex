import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/posts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Case Studies — Pixelforgex",
  description: "A closer look at the projects we've designed and built, from concept to polished final experience.",
};

export default function WorkPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-32 pb-24 px-6 relative z-[1]">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-14 border-b border-line pb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-subtle hover:text-ink transition-colors duration-200 mb-8"
            >
              <ArrowLeft size={14} /> Back to home
            </Link>
            <span className="eyebrow block mb-3">Case studies</span>
            <h1
              className="font-semibold text-ink mb-4 tracking-tight leading-tight"
              style={{ fontSize: "clamp(28px, 4.5vw, 44px)" }}
            >
              Our work
            </h1>
            <p className="text-subtle text-[15.5px] leading-7 max-w-lg">
              Explore the projects we&apos;ve brought to life with thoughtful design, strong front-end execution, and a focus on real-world usability.
            </p>
          </div>

          {posts.length === 0 ? (
            <p className="text-subtle text-[14px]">No case studies yet — check back soon.</p>
          ) : (
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/work/${post.slug}`}
                  className="group card overflow-hidden hover:shadow-soft hover:-translate-y-1 transition-all duration-300 block"
                >
                  <div
                    className="h-[150px] flex items-center justify-center relative overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${post.coverColor}22, var(--color-surface-2))` }}
                  >
                    <span
                      className="text-[14px] font-semibold tracking-tight px-4 text-center leading-relaxed"
                      style={{ color: post.coverColor }}
                    >
                      {post.client}
                    </span>
                  </div>

                  <div className="p-6">
                    <p className="eyebrow text-[11px] mb-2 normal-case tracking-normal">{post.category}</p>
                    <h2 className="text-[16px] font-semibold text-ink leading-snug mb-2">{post.title}</h2>
                    <p className="text-[13.5px] text-subtle leading-6 mb-4">{post.summary}</p>

                    <div className="flex flex-wrap gap-1.5">
                      {post.stack.slice(0, 3).map((s) => (
                        <span key={s} className="text-[12px] font-medium text-subtle bg-surface-2 border border-line rounded-full px-2.5 py-1">
                          {s}
                        </span>
                      ))}
                      {post.stack.length > 3 && (
                        <span className="text-[12px] text-faint px-1 py-1">+{post.stack.length - 3}</span>
                      )}
                    </div>
                  </div>

                  <div className="px-6 py-3.5 border-t border-line flex items-center justify-between">
                    <span className="text-[12.5px] text-faint">
                      {new Date(post.date).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}
                    </span>
                    <span className="text-[13px] font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200 inline-flex items-center gap-1">
                      Read <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
