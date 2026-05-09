"use client";

import { useRouter } from "next/navigation";

import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    shortDescription: string;
    image: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();

  return (
    <Card className="rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg cursor-pointer">
      <CardActionArea onClick={() => router.push(`/products/manage/details/${product.id}`)}>  
        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
        )}
        <CardContent className="p-4">
          <Typography className="font-bold text-base mb-1">
            {product.name}
          </Typography>
          <Typography className="text-sm text-gray-600">
            {product.shortDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
