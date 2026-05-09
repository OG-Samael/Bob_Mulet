import { NextResponse } from "next/server";

import { readJSON, writeJSON } from "@/utils/fileHandler";
import type { Product } from "@/types/product";
import { generateId } from "@/utils/generateId";

export async function GET() {
  const products = await readJSON<Product[]>("products.json");

  
return NextResponse.json({ products });
}

export async function POST(req: Request) {
  const body = await req.json();
  const products = await readJSON<Product[]>("products.json");

  const newProduct: Product = {
    id: generateId(),
    ...body
  };

  products.push(newProduct);
  await writeJSON("products.json", products);

  return NextResponse.json({ success: true, product: newProduct });
}
