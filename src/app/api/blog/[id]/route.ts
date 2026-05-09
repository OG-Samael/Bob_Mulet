import fs from "fs/promises";

import path from "path";

import type { NextRequest} from "next/server";
import { NextResponse } from "next/server";


const postsPath = path.join(process.cwd(), "data/blog/posts.json");

async function readPosts() {
  const raw = await fs.readFile(postsPath, "utf-8");

  
return JSON.parse(raw);
}

async function writePosts(posts: any[]) {
  await fs.writeFile(postsPath, JSON.stringify(posts, null, 2), "utf-8");
}

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const posts = await readPosts();
  const post = posts.find((p: any) => p.id === id);

  if (!post) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(post);
}

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const body = await req.json();
  const posts = await readPosts();

  const index = posts.findIndex((p: any) => p.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  posts[index] = { ...posts[index], ...body };
  await writePosts(posts);

  return NextResponse.json(posts[index]);
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const posts = await readPosts();
  const filtered = posts.filter((p: any) => p.id !== id);

  await writePosts(filtered);

  return NextResponse.json({ success: true });
}
