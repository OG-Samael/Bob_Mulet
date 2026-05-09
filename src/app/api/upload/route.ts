import fs from "fs/promises";
import path from "path";

import type { NextRequest} from "next/server";
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

  const uploadsDir = path.join(process.cwd(), "public/uploads/blog");

  await fs.mkdir(uploadsDir, { recursive: true });

  const fileName = `${Date.now()}-${file.name}`;
  const filePath = path.join(uploadsDir, fileName);

  await fs.writeFile(filePath, buffer);

  const publicUrl = `/uploads/blog/${fileName}`;

  
return NextResponse.json({ url: publicUrl });
}
