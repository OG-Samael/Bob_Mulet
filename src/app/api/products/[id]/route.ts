import { NextResponse } from "next/server";

import { readJSON, writeJSON } from "@/utils/fileHandler";
import type { Product } from "@/types/product";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const products = await readJSON<Product[]>("products.json");
  const product = products.find(p => p.id === id);

  return NextResponse.json({ product });
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await req.json();

  const products = await readJSON<Product[]>("products.json");
  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  products[index] = { ...products[index], ...body };
  await writeJSON("products.json", products);

  return NextResponse.json({ success: true, product: products[index] });
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const products = await readJSON<Product[]>("products.json");
  const filtered = products.filter(p => p.id !== id);

  await writeJSON("products.json", filtered);

  return NextResponse.json({ success: true });
}
