import { NextResponse } from 'next/server'

import { readJSON, writeJSON } from '@/utils/fileHandler'

type Hairstyle = {
  id: string
  [key: string]: any
}

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const hairstyles = await readJSON<Hairstyle[]>('hairstyles.json')
  const hairstyle = hairstyles.find(h => h.id === id)

  if (!hairstyle) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  return NextResponse.json(hairstyle)
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const body = await req.json()
  const hairstyles = await readJSON<Hairstyle[]>('hairstyles.json')
  const index = hairstyles.findIndex(h => h.id === id)

  if (index === -1) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  hairstyles[index] = { ...hairstyles[index], ...body }
  await writeJSON('hairstyles.json', hairstyles)

  return NextResponse.json({ success: true, hairstyle: hairstyles[index] })
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const hairstyles = await readJSON<Hairstyle[]>('hairstyles.json')
  const filtered = hairstyles.filter(h => h.id !== id)

  await writeJSON('hairstyles.json', filtered)

  return NextResponse.json({ success: true })
}
