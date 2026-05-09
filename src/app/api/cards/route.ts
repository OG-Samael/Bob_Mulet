import { NextResponse } from 'next/server'

export interface CardData {
  id: number
  title: string
  subtitle: string
  image: string
  link: string
}

const cardData: CardData[] = [
  {
    id: 1,
    title: 'HAIRCUTS FOR',
    subtitle: 'Men',
    image: '/images/salon/Image+3+(1)+(1).png',
    link: '/services/men'
  },
  {
    id: 2,
    title: 'HAIRCUTS FOR',
    subtitle: 'Women',
    image: '/images/salon/greatClips-home-women-sarah.png',
    link: '/services/women'
  },
  {
    id: 3,
    title: 'HAIRCUTS FOR',
    subtitle: 'Kids',
    image: '/images/salon/greatClips-home-kids-liza.png',
    link: '/services/kids'
  },
  {
    id: 4,
    title: 'HAIRCUTS FOR',
    subtitle: 'Seniors',
    image: '/images/salon/greatClips-home-seniors-ron.png',
    link: '/services/seniors'
  },
  {
    id: 5,
    title: 'STYLING',
    subtitle: 'Services',
    image: '/images/salon/greatClips-home-additionalServices.png',
    link: '/services/additional'
  }
]

export async function GET() {
  return NextResponse.json(cardData)
}
