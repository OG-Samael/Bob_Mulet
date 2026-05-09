'use client'

import { useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import './services-overview.css'

const FooterContent = dynamic(() => import('@/components/layout/horizontal/FooterContent'), {
  loading: () => <Box sx={{ height: 200 }} />
})

interface ServiceCard {
  id: number
  title: string
  subtitle: string
  image: string
  link: string
  description: string
}

const serviceCardsData: ServiceCard[] = [
  {
    id: 1,
    title: 'HAIRCUTS FOR',
    subtitle: 'Men',
    image: '/images/salon/greatClips-mens-crewCut(1).png',
    link: '/services/men',
    description: 'Sharp, clean cuts for the modern man. From classic styles to the latest trends, our expert barbers deliver the perfect look every time.'
  },
  {
    id: 2,
    title: 'HAIRCUTS FOR',
    subtitle: 'Women',
    image: '/images/salon/haircuts-for-women.png',
    link: '/services/women',
    description: 'From everyday styles to special occasion looks, our talented stylists create cuts that enhance your beauty and match your lifestyle.'
  },
  {
    id: 3,
    title: 'HAIRCUTS FOR',
    subtitle: 'Kids',
    image: '/images/salon/greatClips-home-kids.png',
    link: '/services/kids',
    description: 'We make haircuts fun and stress-free for kids. Our friendly stylists know how to keep little ones comfortable and happy throughout their visit.'
  },
  {
    id: 4,
    title: 'HAIRCUTS FOR',
    subtitle: 'Seniors',
    image: '/images/salon/haircuts-for-seniors.png',
    link: '/services/seniors',
    description: 'Special pricing and personalized service for seniors. Our stylists listen carefully and deliver the exact cut you want, every single time.'
  },
  {
    id: 5,
    title: 'STYLING',
    subtitle: 'Services',
    image: '/images/salon/greatClips-home-additionalServices.png',
    link: '/services/additional',
    description: 'Beyond cuts, we offer a complete range of services including color, highlights, treatments, and more to keep you looking your best.'
  }
]

export default function Page() {
  useEffect(() => {
    async function fetchCards() {
      const res = await fetch('/api/cards')
      const data = await res.json()

      // Data fetching for reference, using hardcoded serviceCardsData instead
      console.log('Cards data:', data)
    }

    fetchCards()
  }, [])

  return (
    <Box className='overviewContainer'>
      {/* Hero Banner */}
      <Box className='overviewHeroSection'>
        <Image
          src='/images/pages/GreenScreen.png'
          alt='Hair Services Overview'
          fill
          priority
          className='overviewHeroImage'
        />
        <Box className='overviewHeroOverlay' />
        <Container maxWidth={false} className='overviewHeroContainer'>
          <Box className='overviewHeroContent'>
            <Typography variant='caption' className='overviewHeroCaption'>
              Haircare Services
            </Typography>
            <Typography variant='h2' className='overviewHeroTitle'>
              Get ready for a GREAT® haircut
            </Typography>
            <Typography variant='body1' className='overviewHeroDescription'>
              From short bobs and long layers to kids&apos; haircuts, bald fades and more, Bob Mulet has a look that&apos;s perfect for you.
            </Typography>
            <Button
              variant='contained'
              size='large'
              className='overviewHeroButton'
              href='/FindSalon'
            >
              Find a Salon near me
            </Button>
          </Box>
          <Box className='overviewHeroRightImage'>
            <Image
              src='/images/salon/Hair.png'
              alt='Salon stylist'
              width={400}
              height={400}
              className='overviewHeroRightImg'
            />
          </Box>
        </Container>
      </Box>

      {/* Section Heading */}
      <Box className='overviewSectionHeading'>
        <Typography variant='h2' className='overviewSectionHeadingText'>
          Get your haircut, every time
        </Typography>
      </Box>

      {/* Feature Cards Sections */}
      {serviceCardsData.map((card) => (
        <Box key={card.id} className={`overviewFeatureSection ${card.id % 2 === 0 ? 'reversed' : ''}`}>
          <Box className='overviewFeatureImage'>
            <Image
              src={card.image}
              alt={card.subtitle}
              width={600}
              height={600}
              className='overviewFeatureImg'
            />
          </Box>
          <Box className='overviewFeatureContent'>
            <Typography variant='caption' className='overviewFeatureCaption'>
              {card.title}
            </Typography>
            <Typography variant='h3' className='overviewFeatureTitle'>
              {card.subtitle}
            </Typography>
            <Typography variant='body1' className='overviewFeatureDescription'>
              {card.description}
            </Typography>
            <Link href={card.link} className='overviewShowMoreLink'>
              Show more →
            </Link>
          </Box>
        </Box>
      ))}
      <Box className='footerWrapper'>
        <FooterContent />
      </Box>
    </Box>
  )
}
