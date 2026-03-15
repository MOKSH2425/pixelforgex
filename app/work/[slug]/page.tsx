import { notFound }              from "next/navigation";
import Link                       from "next/link";
import { MDXRemote }              from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import GlitchBar                  from "@/components/ui/GlitchBar";
import Navbar                     from "@/components/layout/Navbar";
import Footer                     from "@/components/layout/Footer";

// ── Static params for build ───────────────────────────────────
export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title:       `${post.title} — PIXELFORGEX.DEV`,
    description: post.summary,
  };
}

// ── MDX components ────────────────────────────────────────────
const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-pixel text-[10px] text-white leading-relaxed mt-10 mb-4" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-pixel text-[8px] text-[#00FFFF] leading-relaxed mt-8 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-[13px] text-[#888] leading-8 mb-5" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="text-white font-normal font-pixel text-[10px]" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="space-y-2 mb-6 pl-4" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-[13px] text-[#888] leading-8 before:content-['▸'] before:text-[#00FFFF] before:mr-3 before:font-pixel before:text-[8px]" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className="border-l-2 border-[#FF00FF] pl-6 py-2 my-8 bg-[#0D0D12] pr-6"
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="font-mono text-[11px] text-[#00FF41] bg-[#0D0D12] px-2 py-0.5 border border-[#1A1A28]"
      {...props}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="font-mono text-[11px] text-[#C8C8D8] bg-[#090912] border border-[#1A1A28] p-6 overflow-x-auto my-6 leading-7"
      {...props}
    />
  ),
};

// ── Page ─────────────────────────────────────────────────────
export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <GlitchBar />
      <Navbar />

      <main className="min-h-screen pt-24 relative z-[1]">

        {/* ── Hero banner ── */}
        <div
          className="relative py-20 px-8 text-center overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${post.bgFrom} 0%, ${post.bgTo} 100%)` }}
        >
          {/* Glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at center, ${post.coverColor}18 0%, transparent 70%)` }}
          />

          <div className="relative max-w-2xl mx-auto">
            <p className="font-pixel text-[7px] tracking-[0.15em] mb-4" style={{ color: post.coverColor }}>
              {post.category}
            </p>
            <h1
              className="font-pixel leading-relaxed mb-4"
              style={{ fontSize: "clamp(12px,2.5vw,20px)", color: post.coverColor, textShadow: `0 0 30px ${post.coverColor}80` }}
            >
              {post.title}
            </h1>
            <p className="text-[13px] text-[#888] leading-8">{post.summary}</p>

            {/* Tags */}
            <div className="flex gap-2 flex-wrap justify-center mt-6">
              {post.stack.map((s) => (
                <span
                  key={s}
                  className="font-pixel text-[6px] border px-2 py-1 tracking-wide"
                  style={{ color: post.coverColor, borderColor: `${post.coverColor}44` }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#060608] to-transparent" />
        </div>

        {/* ── Main content ── */}
        <div className="max-w-[900px] mx-auto px-8 pb-24">

          {/* Back link */}
          <Link
            href="/work"
            className="inline-block font-pixel text-[7px] text-[#555] hover:text-[#00FFFF] transition-colors duration-200 mt-10 mb-12"
          >
            ← ALL CASE STUDIES
          </Link>

          {/* 3-column meta cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <div className="bg-[#0D0D12] border border-[#1A1A28] p-5">
              <span className="block font-pixel text-[6px] text-[#555] mb-3 tracking-[0.1em]">CLIENT</span>
              <span className="font-pixel text-[8px] text-white">{post.client}</span>
            </div>
            <div className="bg-[#0D0D12] border border-[#1A1A28] p-5">
              <span className="block font-pixel text-[6px] text-[#555] mb-3 tracking-[0.1em]">DELIVERED</span>
              <span className="font-pixel text-[8px] text-white">
                {new Date(post.date).toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
              </span>
            </div>
            <div className="bg-[#0D0D12] border border-[#1A1A28] p-5">
              <span className="block font-pixel text-[6px] text-[#555] mb-3 tracking-[0.1em]">CATEGORY</span>
              <span className="font-pixel text-[8px] text-[#FF00FF]">{post.category}</span>
            </div>
          </div>

          {/* Deliverables + Results side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-[#0D0D12] border border-[#1A1A28] p-6">
              <span className="block font-pixel text-[7px] text-[#00FFFF] mb-5 tracking-[0.1em]">
                DELIVERABLES
              </span>
              <ul className="space-y-3">
                {post.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-[12px] text-[#888]">
                    <span className="font-pixel text-[8px] text-[#00FFFF] mt-0.5 flex-shrink-0">▸</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0D0D12] border border-[#1A1A28] p-6">
              <span className="block font-pixel text-[7px] text-[#00FF41] mb-5 tracking-[0.1em]">
                RESULTS
              </span>
              <ul className="space-y-3">
                {post.results.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-[12px] text-[#888]">
                    <span className="font-pixel text-[8px] text-[#00FF41] mt-0.5 flex-shrink-0">✓</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* MDX content */}
          <article className="border-t border-[#1A1A28] pt-12">
            <MDXRemote source={post.content} components={mdxComponents} />
          </article>

          {/* CTA */}
          <div className="mt-16 border border-[#1A1A28] bg-[#0D0D12] p-8 text-center">
            <span className="block font-pixel text-[7px] text-[#00FFFF] mb-3 tracking-[0.1em]">
              WANT RESULTS LIKE THESE?
            </span>
            <h2 className="font-pixel text-white leading-relaxed mb-6"
                style={{ fontSize: "clamp(12px,2vw,18px)" }}>
              LET&apos;S BUILD SOMETHING TOGETHER
            </h2>
            <Link
              href="/#contact"
              className="inline-block font-pixel text-[8px] text-[#060608] bg-[#00FFFF] px-8 py-4 hover:bg-[#FF00FF] transition-colors duration-200 clip-skew"
            >
              START A PROJECT →
            </Link>
          </div>
        </div>
      </main>

      <GlitchBar />
      <Footer />
    </>
  );
}
