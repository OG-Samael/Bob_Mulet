import type { NextRequest} from "next/server";
import { NextResponse } from "next/server";

import { readJSON, writeJSON } from "@/utils/fileHandler";
import type { Category } from "@/types/category";

export async function PUT(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const body = await request.json();

  const categories = await readJSON<Category[]>("categories.json");
  const index = categories.findIndex((c) => c.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Category not found" }, { status: 404 });
  }

  categories[index] = { ...categories[index], ...body };
  await writeJSON("categories.json", categories);

  return NextResponse.json({ success: true, category: categories[index] });
}

export async function DELETE(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;

  const categories = await readJSON<Category[]>("categories.json");
  const filtered = categories.filter((c) => c.id !== id);

  await writeJSON("categories.json", filtered);

  return NextResponse.json({ success: true });
}
