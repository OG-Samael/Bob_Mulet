import fs from "fs/promises";
import path from "path";

import Link from "next/link";

import '../../blog.css';
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";

async function getPosts(category: string) {
  const raw = await fs.readFile(
    path.join(process.cwd(), "data/blog/posts.json"),
    "utf-8"
  );
  const posts: any[] = JSON.parse(raw);

  return posts.filter(
    (p) => p.status === "published" && p.category === category
  );
}

export default async function BlogCategoryPage({
  params
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const posts = await getPosts(category);

  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Category: {category}
      </Typography>

      <Box display="grid" gap={2}>
        {posts.map((post: any) => (
          <Card key={post.id}>
            {post.mainImage && (
              <CardMedia
                component="img"
                height="200"
                image={post.mainImage}
                alt={post.title}
              />
            )}
            <CardContent>
              <Link href={`/blog/${post.slug}`} className='blogPostLink'>
                <Typography variant="h5">{post.title}</Typography>
              </Link>
              <Typography variant="caption" display="block">
                {new Date(post.date).toLocaleDateString()}
              </Typography>
              <Typography variant="body2" mt={1}>
                {post.excerpt}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
