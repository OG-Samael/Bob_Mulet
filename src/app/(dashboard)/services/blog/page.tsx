"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import NextLink from "next/link";

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Skeleton,
  Tooltip,
  Typography
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import './blog-services.css';

type BlogPost = {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  status: string;
  excerpt: string;
  mainImage: string;
};

export default function BlogDashboardPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [deleteTarget, setDeleteTarget] = useState<BlogPost | null>(null);
  const [deleting, setDeleting] = useState(false);

  const loadPosts = () => {
    setLoading(true);
    fetch("/api/blog?all=true")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category).filter(Boolean)))];

  const visiblePosts = activeCategory === "All"
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    await fetch(`/api/blog/${deleteTarget.id}`, { method: "DELETE" });
    setDeleting(false);
    setDeleteTarget(null);
    loadPosts();
  };

  return (
    <Box>
      {/* Header */}
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
        <Box>
          <Typography variant="h5" fontWeight={600}>Blog</Typography>
          <Typography variant="body2" color="text.secondary">
            {visiblePosts.length} post{visiblePosts.length !== 1 ? "s" : ""}
          </Typography>
        </Box>
        <Button component={NextLink} href="/services/blog/new" variant="contained">
          New Post
        </Button>
      </Box>

      {/* Category filter chips */}
      <Box display="flex" flexWrap="wrap" gap={1} mb={3}>
        {categories.map((cat) => (
          <Chip
            key={cat}
            label={cat}
            onClick={() => setActiveCategory(cat)}
            color={activeCategory === cat ? "primary" : "default"}
            variant={activeCategory === cat ? "filled" : "outlined"}
            sx={{ cursor: "pointer" }}
          />
        ))}
      </Box>

      {/* Card grid */}
      <Grid container spacing={3}>
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6, lg: 4 }}>
                <Card variant="outlined" sx={{ height: "100%" }}>
                  <Skeleton variant="rectangular" height={180} />
                  <CardContent>
                    <Skeleton width="40%" height={24} sx={{ mb: 1 }} />
                    <Skeleton width="80%" height={28} />
                    <Skeleton width="60%" height={20} sx={{ mb: 1 }} />
                    <Skeleton height={60} />
                  </CardContent>
                </Card>
              </Grid>
            ))
          : visiblePosts.map((post) => (
              <Grid key={post.id} size={{ xs: 12, sm: 6, lg: 4 }}>
                <Card
                  variant="outlined"
                  sx={{ height: "100%", display: "flex", flexDirection: "column" }}
                >
                  {/* Main image */}
                  <Box sx={{ position: "relative", width: "100%", aspectRatio: "16/9", bgcolor: "action.hover" }}>
                    {post.mainImage ? (
                      <Image
                        src={post.mainImage}
                        alt={post.title}
                        fill
                        className='blogCoverImg'
                        unoptimized
                      />
                    ) : (
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "text.disabled"
                        }}
                      >
                        <Typography variant="caption">No image</Typography>
                      </Box>
                    )}
                  </Box>

                  <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: 0.75 }}>
                    {/* Category & status */}
                    <Box display="flex" alignItems="center" gap={1}>
                      <Chip label={post.category || "Uncategorised"} size="small" variant="outlined" />
                      <Chip
                        label={post.status}
                        size="small"
                        color={post.status === "published" ? "success" : "default"}
                      />
                    </Box>

                    {/* Title */}
                    <Typography variant="subtitle1" fontWeight={600} lineHeight={1.3}>
                      {post.title}
                    </Typography>

                    {/* Date */}
                    <Typography variant="caption" color="text.secondary">
                      {new Date(post.date).toLocaleDateString(undefined, {
                        year: "numeric", month: "short", day: "numeric"
                      })}
                    </Typography>

                    {/* Excerpt */}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        flexGrow: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                      }}
                    >
                      {post.excerpt || "No excerpt provided."}
                    </Typography>

                    {/* Actions */}
                    <Box display="flex" alignItems="center" justifyContent="space-between" mt={1}>
                      <Button
                        component={NextLink}
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        size="small"
                        endIcon={<OpenInNewIcon sx={{ fontSize: "14px !important" }} />}
                      >
                        Read More
                      </Button>

                      <Box display="flex" gap={0.5}>
                        <Tooltip title="Edit post">
                          <IconButton
                            component={NextLink}
                            href={`/services/blog/${post.id}`}
                            size="small"
                            color="primary"
                          >
                            <EditIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete post">
                          <IconButton
                            size="small"
                            color="error"
                            onClick={() => setDeleteTarget(post)}
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}

        {/* Empty state */}
        {!loading && visiblePosts.length === 0 && (
          <Grid size={{ xs: 12 }}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              py={10}
              gap={2}
            >
              <Typography color="text.secondary">No blog posts yet.</Typography>
              <Button component={NextLink} href="/services/blog/new" variant="contained">
                Create your first post
              </Button>
            </Box>
          </Grid>
        )}
      </Grid>

      {/* Delete confirmation dialog */}
      <Dialog open={!!deleteTarget} onClose={() => !deleting && setDeleteTarget(null)} maxWidth="xs" fullWidth>
        <DialogTitle>Delete post?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <strong>"{deleteTarget?.title}"</strong> will be permanently deleted. This cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteTarget(null)} disabled={deleting}>Cancel</Button>
          <Button onClick={handleDelete} color="error" variant="contained" disabled={deleting}>
            {deleting ? "Deleting…" : "Delete"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
