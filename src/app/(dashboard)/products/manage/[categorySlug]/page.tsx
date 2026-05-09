"use client";

import { use, useEffect, useState } from "react";

import { Box, Typography } from "@mui/material";

import ProductCard from "@/components/products/ProductCards";

export default function CategoryProductsPage({ params }: { params: Promise<{ categorySlug: string }> }) {
  const { categorySlug } = use(params);
  const [category, setCategory] = useState<any>(null);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      const catRes = await fetch("/api/categories");
      const catData = await catRes.json();
      const foundCategory = catData.categories.find((c: any) => c.slug === categorySlug);

      setCategory(foundCategory);

      if (!foundCategory) return;

      const prodRes = await fetch("/api/products");
      const prodData = await prodRes.json();

      const filtered = prodData.products.filter(
        (p: any) => p.categoryId === foundCategory.id
      );

      setProducts(filtered);
    };

    load();
  }, [categorySlug]);

  if (!category) return null;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        {category.name}
      </Typography>

      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 2 }}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </Box>
    </Box>
  );
}
