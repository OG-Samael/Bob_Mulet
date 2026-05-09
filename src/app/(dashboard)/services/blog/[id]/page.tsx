"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import { useRouter, useParams } from "next/navigation";

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  TextField,
  Tooltip,
  Typography
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";

import BlogEditor from "@/components/BlogEditor";
import '../blog-services.css';

const DEFAULT_CATEGORIES = ["Hair Cut", "Hair Color", "Hair Care", "Styling"];

type BlogPost = {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  mainImage: string;
  contentHtml: string;
  status: string;
};

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const id = params.id;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [post, setPost] = useState<BlogPost | null>(null);

  const [categories, setCategories] = useState<string[]>(DEFAULT_CATEGORIES);
  const [newCategory, setNewCategory] = useState("");
  const [usedCategories, setUsedCategories] = useState<Set<string>>(new Set());

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [contentHtml, setContentHtml] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("blog-categories");
    if (stored) setCategories(JSON.parse(stored));

    fetch("/api/blog?all=true")
      .then((r) => r.json())
      .then((posts: { category: string }[]) => {
        setUsedCategories(new Set(posts.map((p) => p.category)));
      });
  }, []);

  const handleAddCategory = () => {
    const trimmed = newCategory.trim();
    if (!trimmed || categories.includes(trimmed)) return;
    const updated = [...categories, trimmed];
    setCategories(updated);
    localStorage.setItem("blog-categories", JSON.stringify(updated));
    setCategory(trimmed);
    setNewCategory("");
  };

  const handleRemoveCategory = (cat: string) => {
    const updated = categories.filter((c) => c !== cat);
    setCategories(updated);
    localStorage.setItem("blog-categories", JSON.stringify(updated));
    if (category === cat) setCategory("");
  };

  useEffect(() => {
    if (!id) return;

    (async () => {
      const res = await fetch(`/api/blog/${id}`);

      if (!res.ok) {
        setLoading(false);
        
return;
      }

      const data = await res.json();

      setPost(data);
      setTitle(data.title);
      setCategory(data.category);
      setExcerpt(data.excerpt);
      setMainImage(data.mainImage || "");
      setImagePreview(data.mainImage || "");
      setContentHtml(data.contentHtml || "");
      setLoading(false);
    })();
  }, [id]);

  const handleMainImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // Show local preview immediately
    setImagePreview(URL.createObjectURL(file));

    const formData = new FormData();

    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData
    });

    const data = await res.json();

    setMainImage(data.url);
    setImagePreview(data.url);
  };

  const handleRemoveImage = () => {
    setMainImage("");
    setImagePreview("");
  };

  const handleSave = async () => {
    if (!post) return;

    setSaving(true);

    const body = {
      title,
      category,
      excerpt,
      mainImage,
      contentHtml
    };

    await fetch(`/api/blog/${post.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    setSaving(false);
    router.push("/services/blog");
  };

  if (loading) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center" minHeight={300}>
        <CircularProgress />
      </Box>
    );
  }

  if (!post) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center" minHeight={300}>
        <Typography color="text.secondary">Post not found.</Typography>
      </Box>
    );
  }

  return (
    <Box>
      {/* Header */}
      <Box display="flex" alignItems="center" gap={1} mb={3}>
        <IconButton onClick={() => router.push("/services/blog")} size="small">
          <ArrowBackIcon />
        </IconButton>
        <Box>
          <Typography variant="h5" fontWeight={600}>Edit Blog Post</Typography>
          <Typography variant="body2" color="text.secondary">{post.title}</Typography>
        </Box>
        <Chip label={post.status} size="small" color={post.status === "published" ? "success" : "default"} sx={{ ml: "auto" }} />
      </Box>

      <Grid container spacing={3}>
        {/* Left: main content */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Card variant="outlined">
            <CardContent sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <TextField
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
                variant="outlined"
              />

              <TextField
                label="Excerpt"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                fullWidth
                multiline
                rows={3}
                variant="outlined"
                helperText="A short description shown in listings."
              />

              <Box>
                <Typography variant="subtitle2" fontWeight={600} mb={1} color="text.secondary">
                  CONTENT
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <BlogEditor value={contentHtml} onChange={setContentHtml} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Right: sidebar */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Box display="flex" flexDirection="column" gap={2}>

            {/* Publish card */}
            <Card variant="outlined">
              <CardContent>
                <Typography variant="subtitle2" fontWeight={600} mb={2} color="text.secondary">
                  PUBLISH
                </Typography>
                <TextField
                  select
                  label="Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  fullWidth
                  size="small"
                  sx={{ mb: 1 }}
                >
                  {categories.map((c) => (
                    <MenuItem key={c} value={c}>{c}</MenuItem>
                  ))}
                </TextField>
                <Box display="flex" gap={1} mb={1}>
                  <TextField
                    size="small"
                    placeholder="New category…"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleAddCategory()}
                    fullWidth
                  />
                  <IconButton
                    onClick={handleAddCategory}
                    disabled={!newCategory.trim()}
                    color="primary"
                    size="small"
                    sx={{ border: "1px solid", borderColor: "divider", borderRadius: 1 }}
                  >
                    <AddIcon fontSize="small" />
                  </IconButton>
                </Box>
                <Box sx={{ mb: 2, maxHeight: 160, overflowY: "auto", border: "1px solid", borderColor: "divider", borderRadius: 1 }}>
                  {categories.map((c) => {
                    const inUse = usedCategories.has(c);
                    return (
                      <Box
                        key={c}
                        display="flex"
                        alignItems="center"
                        px={1}
                        py={0.25}
                        sx={{ "&:not(:last-child)": { borderBottom: "1px solid", borderColor: "divider" } }}
                      >
                        <Typography variant="body2" sx={{ flexGrow: 1 }}>{c}</Typography>
                        <Tooltip title={inUse ? "In use by a post" : "Remove category"}>
                          <span>
                            <IconButton
                              size="small"
                              onClick={() => handleRemoveCategory(c)}
                              disabled={inUse}
                              sx={{ color: inUse ? "text.disabled" : "error.main", p: 0.5 }}
                            >
                              <DeleteIcon sx={{ fontSize: 16 }} />
                            </IconButton>
                          </span>
                        </Tooltip>
                      </Box>
                    );
                  })}
                </Box>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={saving ? <CircularProgress size={16} color="inherit" /> : <SaveIcon />}
                  onClick={handleSave}
                  disabled={saving}
                >
                  {saving ? "Saving…" : "Save Changes"}
                </Button>
              </CardContent>
            </Card>

            {/* Main image card */}
            <Card variant="outlined">
              <CardContent>
                <Typography variant="subtitle2" fontWeight={600} mb={2} color="text.secondary">
                  MAIN IMAGE
                </Typography>

                {imagePreview ? (
                  <Box sx={{ position: "relative", mb: 2 }}>
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "16/9",
                        borderRadius: 2,
                        overflow: "hidden",
                        border: "1px solid",
                        borderColor: "divider"
                      }}
                    >
                      <Image
                        src={imagePreview}
                        alt="Main image preview"
                        fill
                        className='blogCoverImg'
                        unoptimized
                      />
                    </Box>
                    <IconButton
                      size="small"
                      onClick={handleRemoveImage}
                      sx={{
                        position: "absolute",
                        top: 6,
                        right: 6,
                        bgcolor: "background.paper",
                        boxShadow: 1,
                        "&:hover": { bgcolor: "error.light", color: "white" }
                      }}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      width: "100%",
                      aspectRatio: "16/9",
                      border: "2px dashed",
                      borderColor: "divider",
                      borderRadius: 2,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                      color: "text.disabled"
                    }}
                  >
                    <CloudUploadIcon sx={{ fontSize: 36, mb: 1 }} />
                    <Typography variant="caption">No image selected</Typography>
                  </Box>
                )}

                <Button
                  variant="outlined"
                  component="label"
                  fullWidth
                  startIcon={<CloudUploadIcon />}
                  size="small"
                >
                  {imagePreview ? "Change Image" : "Upload Image"}
                  <input type="file" accept="image/*" hidden onChange={handleMainImageUpload} />
                </Button>
              </CardContent>
            </Card>

          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
