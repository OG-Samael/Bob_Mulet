'use client'

import { use, useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

import ProductForm from '@/components/products/ProductForm'

export default function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const searchParams = useSearchParams()
  const returnTo = searchParams.get('returnTo') ?? '/products/latitude'
  const router = useRouter()
  const [initialData, setInitialData] = useState<any>(null)

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then(res => res.json())
      .then(data => setInitialData(data.product))
  }, [id])

  const handleSubmit = async (form: any) => {
    await fetch(`/api/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    router.push(returnTo)
  }

  if (!initialData) return null

  return <ProductForm initialData={initialData} onSubmit={handleSubmit} />
}
