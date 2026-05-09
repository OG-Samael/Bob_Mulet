import fs from "fs/promises";
import path from "path";

import { notFound } from "next/navigation";

import BlogPost from "./BlogPost";

async function getPost(slug: string) {
  const raw = await fs.readFile(
    path.join(process.cwd(), "data/blog/posts.json"),
    "utf-8"
  );
  const posts: any[] = JSON.parse(raw);

  return posts.find((p) => p.slug === slug) ?? null;
}

export default async function BlogDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return notFound();

  return <BlogPost post={post} />;
}
