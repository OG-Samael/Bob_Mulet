'use client'

import { useRouter } from 'next/navigation'

import Link from 'next/link'

import { Box, Typography, Button, IconButton } from '@mui/material'

interface ProductSectionProps {
  title: string
  categoryId: string
  products: any[]
  /** The URL the user should return to after viewing/editing a product (e.g. "/products/latitude") */
  returnTo: string
}

export default function ProductSection({ title, categoryId, products, returnTo }: ProductSectionProps) {
  const router = useRouter()
  const filtered = products.filter(p => p.categoryId === categoryId)
  const encoded = encodeURIComponent(returnTo)

  const handleDelete = async (e: React.MouseEvent, productId: string) => {
    e.preventDefault()
    e.stopPropagation()

    if (!confirm('Are you sure you want to delete this product?')) return

    await fetch(`/api/products/${productId}`, { method: 'DELETE' })
    router.refresh()
    window.location.reload()
  }

  return (
    <Box className='pgProductBox'>
      <Box className='flex items-center justify-center gap-3 flex-wrap mb-8'>
        <Typography variant='h3' className='pgBoldTitle'>{title}</Typography>
        <Button
          variant='contained'
          size='small'
          href={`/products/manage/add?categoryId=${categoryId}&returnTo=${encoded}`}
        >
          Add Product
        </Button>
      </Box>

      <Box className='pgProductGrid'>
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <Link
              key={product.id}
              href={`/products/manage/details/${product.id}?returnTo=${encoded}`}
              style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
            >
              <Box className='pgProductCard'>
                {product.image && (
                  <Box className='pgProductCardImg'>
                    <img
                      src={product.image}
                      alt={product.name}
                      className='w-full h-48 object-cover'
                    />
                  </Box>
                )}
                <Box className='pgProductCardBody'>
                  <Typography variant='h6' className='pgBoldTitle' sx={{ textAlign: 'center' }}>
                    {product.name}
                  </Typography>
                  {product.shortDescription && (
                    <Typography variant='body2' color='text.secondary' sx={{ textAlign: 'center', mt: 0.5 }}>
                      {product.shortDescription}
                    </Typography>
                  )}
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 1.5 }}>
                    <Button
                      variant='outlined'
                      size='small'
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        router.push(`/products/manage/edit/${product.id}?returnTo=${encoded}`)
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant='outlined'
                      size='small'
                      color='error'
                      onClick={(e) => handleDelete(e, product.id)}
                    >
                      Delete
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Link>
          ))
        ) : (
          <Typography className='col-span-full text-center py-12 text-gray-600'>
            No products yet. Use Add Product to get started.
          </Typography>
        )}
      </Box>
    </Box>
  )
}
