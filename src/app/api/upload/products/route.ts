import fs from "fs/promises";
import path from "path";

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File | null;

  if (!file) {
    return NextResponse.json({ error: "No file" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadsDir = path.join(process.cwd(), "public/uploads/products");

  await fs.mkdir(uploadsDir, { recursive: true });

  const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
  const filePath = path.join(uploadsDir, fileName);

  await fs.writeFile(filePath, buffer);

  const publicUrl = `/uploads/products/${fileName}`;

  return NextResponse.json({ url: publicUrl });
}

export async function DELETE(req: NextRequest) {
  const { url } = await req.json();

  if (!url || !url.startsWith("/uploads/products/")) {
    return NextResponse.json({ error: "Invalid file path" }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), "public", url);

  try {
    await fs.unlink(filePath);
  } catch {
    // File may already be deleted — ignore
  }

  return NextResponse.json({ success: true });
}
