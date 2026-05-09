'use client'

import { useState, useEffect } from 'react'

import dynamic from 'next/dynamic'

import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'

import './home.css'
import BlogTipsSection from '@/components/BlogTipsSection'

import type { CardData } from '@/app/api/cards/route'

// Lazy load footer (below the fold)
const FooterContent = dynamic(() => import('@/components/layout/horizontal/FooterContent'), {
  loading: () => <Box sx={{ height: 200 }} />
})

export default function Page() {
  const [email, setEmail] = useState('')
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const [cardData, setCardData] = useState<CardData[]>([])

  useEffect(() => {
    async function fetchCards() {
      const res = await fetch('/api/cards')
      const data = await res.json()

      setCardData(data)
    }

    fetchCards()
  }, [])

  const handleEmailSubmit = () => {
    if (email.trim()) {
      setEmailSubmitted(true)

      // Here you would typically send the email to your backend
      console.log('Email submitted:', email)
    }
  }

  return (
    <Box className='scrollSnapContainer'>
      {/* Section 1: Hero Banner */}
      <Box className='snapSection'>
        <Box className='heroSection'>
          <video autoPlay muted loop className='heroVideo'>
            <source src='/Video/Sample_Video.mp4' type='video/mp4' />
          </video>
          <Container maxWidth={false} className='heroContainer'>
            <Box className='desktopHeroContent'>
              <Typography variant='h2' className='heroTitle whiteText'>
                Stunning Hair Unbeatable Prices
              </Typography>

              <Typography variant='h3' className='heroDescription whiteText'>
                Come & Experience Premium Haircut and Styling Services
              </Typography>

              <Button
                variant='contained'
                size='large'
                className='checkInButton'
                href='/services/check-in'
              >
                Check-In
              </Button>
            </Box>
          </Container>
        </Box>
        <Box className='mobileHeroContent'>
          <Typography variant='h2' className='heroTitle'>
            Stunning Hair Unbeatable Prices
          </Typography>

          <Typography variant='h3' className='heroDescription'>
            Come & Experience Premium Haircut and Styling Services
          </Typography>

          <Button
            variant='contained'
            size='large'
            className='checkInButton'
            href='/services/check-in'
          >
            Check-In
          </Button>
        </Box>
      </Box>

      {/* Section 2: Haircuts Cards */}
      <Box className='snapSection'>
        <Box className='textSection'>
          <Typography variant='h3' className='sectionTitle'>
            Great Haircut for Everyone
          </Typography>
          <Typography variant='body1' className='sectionSubtext'>
            Get a haircut that Suits your Hair, lifestyle and your look
          </Typography>
        </Box>

        <Box className='cardsSection'>
          <Box className='cardsContainer'>
            {cardData.map((card) => (
              <Box key={card.id} className='card'>
                <Box className='cardImage cardImageBackground' style={{ backgroundImage: `url('${card.image}')` }} />
                <Box className='cardContent'>
                  <Typography variant='caption' className='cardTitle'>
                    {card.title}
                  </Typography>
                  <Typography variant='h5' className='cardSubtitle'>
                    {card.subtitle}
                  </Typography>
                  <Link href={card.link} className='showMeLink'>
                    Show me →
                  </Link>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Section 3: Feature Cards */}
      <Box className='snapSection'>
        <Box className='scheduleSection'>
          <Typography variant='h3' className='scheduleTitle'>
            A GREAT haircut every time, on your schedule
          </Typography>
          <Typography variant='body1' className='scheduleSubtext'>
            Get the look you love with convenient haircuts that fit into your busy life.
          </Typography>
        </Box>
        <Box className='featureCardsSection'>
          <Container maxWidth='lg'>
            <Box className='featureCardsGrid'>
              {/* Online Check-In Card */}
              <Box className='featureCard'>
                <Box className='featureCardImage featureCardImageOnline' />
                <Box className='featureCardContent'>
                  <Box className='featureCardIcon'>
                    <Typography className='checkmarkIcon'>✓</Typography>
                  </Box>
                  <Typography variant='h5' className='featureCardTitle'>
                    ONLINE check-in
                  </Typography>
                  <Typography variant='body2' className='featureCardDescription'>
                    Make the most of your time with Online check-in—which lets you save your spot in line from anywhere.
                  </Typography>
                  <Button
                    variant='contained'
                    className='featureButton'
                    href='/services/check-in'
                  >
                    Check In
                  </Button>
                </Box>
              </Box>

              {/* Clip Notes Card */}
              <Box className='featureCard'>
                <Box className='featureCardImage featureCardImageClip' />
                <Box className='featureCardContent'>
                  <Box className='featureCardIcon'>
                    <Typography className='noteIcon'>📝</Typography>
                  </Box>
                  <Typography variant='h5' className='featureCardTitle'>
                    CLIP notes
                  </Typography>
                  <Typography variant='body2' className='featureCardDescription'>
                    Keep track of your haircut preferences and style history to get the perfect look every time.
                  </Typography>
                  <Button
                    variant='contained'
                    className='featureButton'
                    href='/services/clip-notes'
                  >
                    Learn More
                  </Button>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>

      {/* Section 4: Download App */}
      <Box className='snapSection'>
        <Box className='waitingListSection'>
          <Container maxWidth='lg'>
            <Box className='waitingListContent'>
              {/* Left side - Image */}
              <Box className='waitingListImage'>
                <Box className='waitingListImageBackground' />
              </Box>

              {/* Right side - Form */}
              <Box className='waitingListForm'>
                <Typography variant='caption' className='appLabel'>
                  download the App
                </Typography>
                <Typography variant='h3' className='waitingListTitle'>
                  Quick and easy check-in when you're on the go
                </Typography>
                <Typography variant='body1' className='waitingListDescription'>
                  Spend less time waiting and more time on what matters to you. Check the waiting time at each salon and join the virtual queue from anywhere.
                </Typography>

                <Box className='formGroup'>
                  <label className='formLabel'>
                    Email Address<span className='required'>*</span>
                  </label>
                  <TextField
                    fullWidth
                    type='email'
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='emailInput'
                  />
                </Box>

                <Button
                  variant='contained'
                  className='emailButton'
                  onClick={handleEmailSubmit}
                >
                  Email a link
                </Button>

                {emailSubmitted && (
                  <Typography variant='body2' className='successMessage'>
                    Check your email for the waiting list link!
                  </Typography>
                )}
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>

      {/* Section 5: Tips & Resources */}
      <Box className='snapSection'>
        <BlogTipsSection heading='Great News' />

        {/* Footer */}
        <Box className='footerWrapper'>
          <FooterContent />
        </Box>
      </Box>
    </Box>
  )
}
