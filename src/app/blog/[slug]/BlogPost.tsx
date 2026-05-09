"use client";

import Link from "next/link";
import Image from "next/image";

import './blog-post.css';

import { Box, Chip, Container, Divider, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

type Post = {
  slug: string;
  title: string;
  category?: string;
  date: string;
  author?: string;
  mainImage?: string;
  excerpt?: string;
  contentHtml?: string;
};

export default function BlogPost({ post }: { post: Post }) {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>

      {/* Back link */}
      <Box
        component={Link}
        href="/services/blog"
        display="inline-flex"
        alignItems="center"
        gap={0.5}
        mb={4}
        sx={{
          color: "text.secondary",
          textDecoration: "none",
          fontSize: 14,
          "&:hover": { color: "primary.main" }
        }}
      >
        <ArrowBackIcon sx={{ fontSize: 18 }} />
        Back to blog
      </Box>

      {/* Category chip */}
      {post.category && (
        <Box mb={2}>
          <Chip label={post.category} size="small" color="primary" variant="outlined" />
        </Box>
      )}

      {/* Title */}
      <Typography variant="h3" fontWeight={700} lineHeight={1.25} mb={2}>
        {post.title}
      </Typography>

      {/* Meta: date + author */}
      <Box display="flex" alignItems="center" gap={2} mb={4}>
        <Typography variant="body2" color="text.secondary">
          {new Date(post.date).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
        </Typography>
        {post.author && (
          <>
            <Typography variant="body2" color="text.disabled">·</Typography>
            <Typography variant="body2" color="text.secondary">{post.author}</Typography>
          </>
        )}
      </Box>

      {/* Hero image */}
      {post.mainImage && (
        <Box
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: "16/9",
            borderRadius: 3,
            overflow: "hidden",
            mb: 5
          }}
        >
          <Image
            src={post.mainImage}
            alt={post.title}
            fill
            className='blog-post-cover-img'
            unoptimized
            priority
          />
        </Box>
      )}

      {/* Excerpt */}
      {post.excerpt && (
        <Typography
          className="blog-post-excerpt"
          variant="subtitle1"
          color="text.secondary"
          sx={{ fontStyle: "italic", borderLeft: "4px solid", borderColor: "primary.main", pl: 2, mb: 4 }}
        >
          {post.excerpt}
        </Typography>
      )}

      <Divider sx={{ mb: 4 }} />

      {/* Body content */}
      <Box
        sx={{
          "& h1": { fontSize: "2rem", fontWeight: 700, mt: 4, mb: 1.5 },
          "& h2": { fontSize: "1.5rem", fontWeight: 700, mt: 3.5, mb: 1.5 },
          "& h3": { fontSize: "1.25rem", fontWeight: 600, mt: 3, mb: 1 },
          "& h4,& h5,& h6": { fontWeight: 600, mt: 2.5, mb: 1 },
          "& p": { mb: 2, lineHeight: 1.8 },
          "& ul,& ol": { pl: 3, mb: 2 },
          "& li": { mb: 0.5, lineHeight: 1.8 },
          "& a": { color: "primary.main", textDecoration: "underline" },
          "& img": { maxWidth: "100%", borderRadius: 2, my: 2 },
          "& blockquote": {
            borderLeft: "4px solid",
            borderColor: "divider",
            pl: 2,
            ml: 0,
            my: 2,
            color: "text.secondary",
            fontStyle: "italic"
          },
          "& pre": {
            bgcolor: "action.hover",
            p: 2,
            borderRadius: 2,
            overflowX: "auto",
            mb: 2,
            fontSize: "0.875rem"
          },
          "& code": { fontFamily: "monospace", fontSize: "0.9em" },
          "& hr": { my: 3 }
        }}
        dangerouslySetInnerHTML={{ __html: post.contentHtml ?? "" }}
      />
    </Container>
  );
}
