"use client";

import Link from "next/link";

import { Card, CardActionArea, CardContent, Typography, Box } from "@mui/material";

interface Props {
  style: {
    id: string;
    title: string;
    featureImage: string;
    tags: string[];
  };
}

export default function HairstyleCard({ style }: Props) {
  return (
    <Card className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow" elevation={3}>
      <CardActionArea component={Link} href={`/hairstyles/${style.id}`}>
        <img
          src={style.featureImage}
          alt={style.title}
          className="w-full h-56 object-cover"
        />

        <CardContent className="p-4">
          <Typography className="font-bold text-lg mb-2">
            {style.title}
          </Typography>

          <Typography className="text-sm text-gray-600 mb-3">
            {style.tags.join(" • ")}
          </Typography>

          <Box className="font-semibold text-blue-600 cursor-pointer hover:translate-x-1 transition-transform">
            Check it out →
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
