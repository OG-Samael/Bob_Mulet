import { NextResponse } from "next/server";

import { readJSON, writeJSON } from "@/utils/fileHandler";
import type { Category } from "@/types/category";
import { generateId } from "@/utils/generateId";
import { slugify } from "@/utils/slugify";

export async function GET() {
  const categories = await readJSON<Category[]>("categories.json");

  
return NextResponse.json({ categories });
}

export async function POST(req: Request) {
  const body = await req.json();
  const categories = await readJSON<Category[]>("categories.json");

  const newCategory: Category = {
    id: generateId(),
    name: body.name,
    slug: slugify(body.name),
    image: body.image || "",
    productIds: []
  };

  categories.push(newCategory);
  await writeJSON("categories.json", categories);

  return NextResponse.json({ success: true, category: newCategory });
}
