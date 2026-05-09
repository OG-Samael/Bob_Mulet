"use client";

import Link from "next/link";

import { Card, CardActionArea, Typography } from "@mui/material";

export default function AddNewCard() {
  return (
    <Card className="rounded-lg h-full min-h-80 flex items-center justify-center border-2 border-dashed border-gray-300 cursor-pointer transition-all hover:border-blue-600 hover:bg-blue-50" elevation={3}>
      <CardActionArea
        component={Link}
        href="/hairstyles/add"
        className="h-full flex flex-col items-center justify-center p-8 w-full text-center"
      >
        <Typography className="text-5xl font-light text-blue-600 mb-2">
          +
        </Typography>
        <Typography className="text-base">
          Add New Hairstyle
        </Typography>
      </CardActionArea>
    </Card>
  );
}
