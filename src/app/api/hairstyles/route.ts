import { NextResponse } from 'next/server'

import { generateId } from '@/utils/generateId'
import { readJSON, writeJSON } from '@/utils/fileHandler'

type Hairstyle = {
  id: string
  title: string
  category: string
  featureImage: string
  tags: string[]
  description: string
  cutFrequency: string
  sections: any[]
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const category = searchParams.get('category')

  const hairstyles = await readJSON<Hairstyle[]>('hairstyles.json')
  const result = category ? hairstyles.filter(h => h.category === category) : hairstyles

  return NextResponse.json(result)
}

export async function POST(req: Request) {
  const body = await req.json()
  const hairstyles = await readJSON<Hairstyle[]>('hairstyles.json')

  const newHairstyle: Hairstyle = {
    id: generateId(),
    ...body
  }

  hairstyles.push(newHairstyle)
  await writeJSON('hairstyles.json', hairstyles)

  return NextResponse.json({ success: true, hairstyle: newHairstyle })
}
