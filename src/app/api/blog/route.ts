import fs from "fs/promises";
import path from "path";

import type { NextRequest} from "next/server";
import { NextResponse } from "next/server";


const postsPath = path.join(process.cwd(), "data/blog/posts.json");

async function readPosts() {
  const raw = await fs.readFile(postsPath, "utf-8");

  
return JSON.parse(raw);
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const all = searchParams.get("all") === "true";
  const posts = await readPosts();

  let result = all ? posts : posts.filter((p: any) => p.status === "published");

  if (category) {
    result = result.filter((p: any) => p.category === category);
  }

  return NextResponse.json(result);
}

export async function POST(req: NextRequest) {
  // TODO: plug in your auth/role check here
  const body = await req.json();
  const posts = await readPosts();

  const newPost = {
    ...body,
    id: crypto.randomUUID(),
    date: body.date ?? new Date().toISOString()
  };

  posts.push(newPost);
  await fs.writeFile(postsPath, JSON.stringify(posts, null, 2), "utf-8");

  return NextResponse.json(newPost, { status: 201 });
}
