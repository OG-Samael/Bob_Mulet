'use client'

import { use, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import ProductDetails from '@/components/products/ProductDetails'

export default function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const searchParams = useSearchParams()
  const returnTo = searchParams.get('returnTo') ?? '/products/latitude'
  const [product, setProduct] = useState<any | null>(null)

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data.product))
  }, [id])

  if (!product) return null

  return <ProductDetails product={product} returnTo={returnTo} />
}
