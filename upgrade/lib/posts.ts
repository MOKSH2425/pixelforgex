import fs   from "fs";
import path  from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content/work");

export interface PostMeta {
  slug:        string;
  title:       string;
  client:      string;
  category:    string;
  date:        string;
  coverColor:  string;
  bgFrom:      string;
  bgTo:        string;
  tags:        string[];
  summary:     string;
  deliverables: string[];
  stack:       string[];
  results:     string[];
}

export interface Post extends PostMeta {
  content: string;
}

/** Return all posts sorted newest-first */
export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw  = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf-8");
      const { data } = matter(raw);
      return { slug, ...(data as Omit<PostMeta, "slug">) };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/** Return a single post with its MDX content */
export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { slug, ...(data as Omit<PostMeta, "slug">), content };
}
