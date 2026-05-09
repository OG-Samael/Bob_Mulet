'use client'

import { useSearchParams, useRouter } from 'next/navigation'

import ProductForm from '@/components/products/ProductForm'

export default function AddProductPage() {
  const searchParams = useSearchParams()
  const categoryId = searchParams.get('categoryId') ?? ''
  const returnTo = searchParams.get('returnTo') ?? '/products/latitude'
  const router = useRouter()

  const initialData = {
    name: '',
    shortDescription: '',
    longDescription: '',
    image: '',
    categoryId,
    benefits: '',
    instructions: '',
    ingredients: '',
    amazonUrl: '',
    salonUrl: ''
  }

  const handleSubmit = async (form: any) => {
    await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    router.push(returnTo)
  }

  return <ProductForm initialData={initialData} onSubmit={handleSubmit} />
}
