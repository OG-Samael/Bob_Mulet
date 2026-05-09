"use client";

import { useRef, useState } from "react";

import { Box, TextField, Button, MenuItem, Typography } from "@mui/material";

const CATEGORY_OPTIONS = [
  { value: "", label: "— Select a sub-category —", disabled: true },
  { value: "cat-latitude-shampoo", label: "Latitude — Shampoo & Conditioner" },
  { value: "cat-latitude-styling", label: "Latitude — Styling" },
  { value: "cat-tea-tree-collection", label: "Tea Tree Solutions — Tea Tree Collection" },
  { value: "cat-solution-shampoo", label: "Solutions — Shampoo & Conditioner" },
  { value: "cat-solution-styling", label: "Solutions — Styling" },
  { value: "cat-solution-curl", label: "Solutions — Curl" },
  { value: "cat-solution-kids", label: "Solutions — Kids" }
];

export default function ProductForm({ initialData, onSubmit }: any) {
  const [form, setForm] = useState(initialData);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (field: string, value: any) => {
    setForm({ ...form, [field]: value });
  };

  const deleteOldImage = async (imageUrl: string) => {
    if (imageUrl && imageUrl.startsWith("/uploads/products/")) {
      await fetch("/api/upload/products", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: imageUrl }),
      }).catch(() => {});
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setUploading(true);

    try {
      // Delete the previous uploaded image first
      if (form.image) {
        await deleteOldImage(form.image);
      }

      const formData = new FormData();

      formData.append("file", file);

      const res = await fetch("/api/upload/products", { method: "POST", body: formData });
      const data = await res.json();

      if (data.url) {
        handleChange("image", data.url);
      }
    } finally {
      setUploading(false);
    }
  };

  return (
    <Box className="grid gap-4">
      <TextField
        select
        fullWidth
        label="Sub-category"
        value={form.categoryId}
        onChange={(e) => handleChange("categoryId", e.target.value)}
      >
        {CATEGORY_OPTIONS.map(opt => (
          <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
        ))}
      </TextField>

      <TextField
        fullWidth
        label="Product Name"
        value={form.name}
        onChange={(e) => handleChange("name", e.target.value)}
      />

      <TextField
        fullWidth
        label="Short Description"
        value={form.shortDescription}
        onChange={(e) => handleChange("shortDescription", e.target.value)}
        sx={{ mb: 2 }}
      />

      <TextField
        fullWidth
        label="Long Description"
        multiline
        rows={3}
        value={form.longDescription}
        onChange={(e) => handleChange("longDescription", e.target.value)}
        sx={{ mb: 2 }}
      />

      <Box sx={{ mb: 2 }}>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={handleImageUpload}
        />
        <Button
          variant="outlined"
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
        >
          {uploading ? "Uploading…" : form.image ? "Change Image" : "Upload Image"}
        </Button>
        {form.image && (
          <Box sx={{ mt: 1.5 }}>
            <img
              src={form.image}
              alt="Product preview"
              style={{ maxWidth: 200, maxHeight: 200, borderRadius: 8, objectFit: "cover" }}
            />
          </Box>
        )}
      </Box>

      <Button variant="contained" onClick={() => onSubmit(form)}>
        Save
      </Button>
    </Box>
  );
}
