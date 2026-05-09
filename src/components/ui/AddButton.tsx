"use client";

import { useRouter } from "next/navigation";

import { Button } from "@mui/material";

export default function AddButton() {
  const router = useRouter();

  return (
    <Button
      variant="contained"
      onClick={() => router.push("/dashboard/products/add")}
    >
      Add Product
    </Button>
  );
}
