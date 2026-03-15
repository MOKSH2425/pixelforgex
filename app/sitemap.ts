import { MetadataRoute } from "next";
import { getAllPosts }    from "@/lib/posts";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pixelforgex.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,       lastModified: new Date(), changeFrequency: "monthly",  priority: 1   },
    { url: `${BASE}/work`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
  ];

  const postRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url:             `${BASE}/work/${post.slug}`,
    lastModified:    new Date(post.date),
    changeFrequency: "monthly",
    priority:        0.8,
  }));

  return [...staticRoutes, ...postRoutes];
}
