'use client'

import { useState, useEffect } from 'react'

import NextLink from 'next/link'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import './blog-tips-section.css'

type Post = {
  id: string
  slug: string
  title: string
  excerpt: string
  mainImage: string
  category: string
  status: string
}

type Props = {
  heading?: string
  category?: string
}

export default function BlogTipsSection({ heading = 'Great things to know', category }: Props) {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const url = category ? `/api/blog?category=${encodeURIComponent(category)}` : '/api/blog'

    fetch(url)
      .then(r => r.json())
      .then((data: Post[]) => {
        if (data.length > 0) {
          setPosts(data.slice(0, 3))
        } else if (category) {
          // fallback: show any published posts if none match this category
          fetch('/api/blog')
            .then(r => r.json())
            .then((all: Post[]) => setPosts(all.slice(0, 3)))
            .catch(() => {})
        }
      })
      .catch(() => {})
  }, [category])

  if (posts.length === 0) return null

  return (
    <Box className='mt-4'>
      <Container maxWidth='lg'>
        <Typography variant='h4' className='font-bold text-center mb-12'>
          {heading}
        </Typography>
        <Box className='blogTipsGrid'>
          {posts.map(post => (
            <Box key={post.id} className='blogTipsCard'>
              <Box
                className='blogTipsCardImg'
                style={{
                  backgroundImage: post.mainImage
                    ? `url('${post.mainImage}')`
                    : "url('/images/salon/WHblog_gnV2.jpg')"
                }}
              />
              <Typography variant='h5' className='blogTipsCardTitle'>
                {post.title}
              </Typography>
              <Typography variant='body2' className='blogTipsCardExcerpt'>
                {post.excerpt}
              </Typography>
              <NextLink href={`/blog/${post.slug}`} className='blogTipsCardLink'>
                Read more &rarr;
              </NextLink>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
