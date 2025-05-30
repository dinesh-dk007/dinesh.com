import dayjs from "dayjs";
import { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";
import { getAllPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((post) => ({
    url: `${SITE_INFO.url}/blog/${post.slug}`,
    lastModified: dayjs(post.metadata.updatedAt).toISOString(),
  }));

  const routes = ["", "/blog"].map((route) => ({
    url: `${SITE_INFO.url}${route}`,
    lastModified: dayjs().toISOString(),
  }));

  return [...routes, ...posts];
}
