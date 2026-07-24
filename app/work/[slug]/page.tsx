import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Pixelforgex`,
    description: post.summary,
  };
}

const mdxComponents = {
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-accent underline underline-offset-4 hover:opacity-80 transition-opacity duration-200" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-[22px] font-semibold text-ink leading-snug mt-10 mb-4 tracking-tight" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-[17px] font-semibold text-ink leading-snug mt-8 mb-3 tracking-tight" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-[15px] text-subtle leading-8 mb-5" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="text-ink font-semibold" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="space-y-2.5 mb-6 pl-1" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-[15px] text-subtle leading-7 pl-5 relative before:content-['—'] before:text-accent before:absolute before:left-0" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLElement>) => (
    <blockquote className="border-l-2 border-accent pl-6 py-1 my-8 text-ink" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="font-mono text-[13px] text-accent bg-accent-soft px-2 py-0.5 rounded-md" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="font-mono text-[13px] text-ink bg-surface-2 border border-line rounded-2xl p-6 overflow-x-auto my-6 leading-7" {...props} />
  ),
};

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-32 relative z-[1]">
        <div
          className="relative py-16 px-6 text-center overflow-hidden"
          style={{ background: `linear-gradient(180deg, ${post.coverColor}14, var(--color-bg))` }}
        >
          <div className="relative max-w-2xl mx-auto">
            <p className="eyebrow mb-4 normal-case tracking-normal" style={{ color: post.coverColor }}>
              {post.category}
            </p>
            <h1
              className="font-semibold text-ink leading-tight mb-4 tracking-tight"
              style={{ fontSize: "clamp(24px, 4vw, 40px)" }}
            >
              {post.title}
            </h1>
            <p className="text-[15.5px] text-subtle leading-7">{post.summary}</p>

            <div className="flex gap-2 flex-wrap justify-center mt-6">
              {post.stack.map((s) => (
                <span
                  key={s}
                  className="text-[12.5px] font-medium border rounded-full px-3 py-1.5"
                  style={{ color: post.coverColor, borderColor: `${post.coverColor}44` }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-[820px] mx-auto px-6 pb-24">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-subtle hover:text-ink transition-colors duration-200 mt-8 mb-12"
          >
            <ArrowLeft size={14} /> All case studies
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <div className="card p-5">
              <span className="block text-[12px] font-medium text-faint mb-2">Client</span>
              <span className="text-[14.5px] font-semibold text-ink">{post.client}</span>
            </div>
            <div className="card p-5">
              <span className="block text-[12px] font-medium text-faint mb-2">Delivered</span>
              <span className="text-[14.5px] font-semibold text-ink">
                {new Date(post.date).toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
              </span>
            </div>
            <div className="card p-5">
              <span className="block text-[12px] font-medium text-faint mb-2">Category</span>
              <span className="text-[14.5px] font-semibold text-accent">{post.category}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
            <div className="card p-6">
              <span className="block text-[13px] font-semibold text-ink mb-5">Deliverables</span>
              <ul className="space-y-3">
                {post.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-[14px] text-subtle leading-6">
                    <span className="text-accent mt-0.5 flex-shrink-0">•</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6">
              <span className="block text-[13px] font-semibold text-ink mb-5">Results</span>
              <ul className="space-y-3">
                {post.results.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-[14px] text-subtle leading-6">
                    <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <article className="border-t border-line pt-12">
            <MDXRemote source={post.content} components={mdxComponents} />
          </article>

          <div className="mt-16 card bg-surface-2 p-9 text-center">
            <span className="eyebrow block mb-3">Want results like these?</span>
            <h2 className="font-semibold text-ink leading-snug mb-6 tracking-tight" style={{ fontSize: "clamp(18px,2.5vw,26px)" }}>
              Let&apos;s build something together
            </h2>
            <Link href="/#contact" className="btn btn-primary">
              Start a project <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
