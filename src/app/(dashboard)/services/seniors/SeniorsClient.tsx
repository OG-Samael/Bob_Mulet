'use client'

import { useState } from 'react'

import Image from 'next/image'
import dynamic from 'next/dynamic'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'

import './seniors-services.css'
import BlogTipsSection from '@/components/BlogTipsSection'

const FooterContent = dynamic(() => import('@/components/layout/horizontal/FooterContent'), {
  loading: () => <Box sx={{ height: 200 }} />
})

type Hairstyle = {
  id: string
  title: string
  featureImage: string
  tags: string[]
}

interface Props {
  seniorMaleHairstyles: Hairstyle[]
  seniorFemaleHairstyles: Hairstyle[]
}

export default function SeniorsClient({ seniorMaleHairstyles, seniorFemaleHairstyles }: Props) {
  const [gender, setGender] = useState<'men' | 'women'>('men')

  const hairstyles = gender === 'men' ? seniorMaleHairstyles : seniorFemaleHairstyles

  return (
    <Box className='seniorsScrollContainer'>
      {/* Hero */}
      <Container maxWidth='lg' className='pgSection'>
        <Box className='pgTwoCol'>
          <Box className='pgCol'>
            <Typography variant='h4' className='pgPrimaryLabel'>
              Haircuts for
            </Typography>
            <Typography variant='h1' className='pgBoldTitle'>
              Seniors
            </Typography>
            <Typography variant='body1' className='pgBodyMuted' sx={{ mb: 2 }}>
              Look and feel your best with senior haircuts at Great Clips. Whether your hair is long or short, thick or thin, curly or straight or somewhere in between, we have a haircut that's right for you.
            </Typography>
            <Button variant='contained' size='large' href='/services/check-in' className='pgRoundBtn' sx={{ mt: 4 }}>
              Find a salon
            </Button>
          </Box>
          <Box className='pgImgBox'>
            <Image
              src='/images/salon/greatClips-haricut-services-seniors-hero-fill.jpg'
              alt="Seniors' Haircuts"
              fill
              className='pgCoverImg'
            />
          </Box>
        </Box>
      </Container>

      {/* Green gradient feature section */}
      <Box className='seniorsGreenSection'>
        <Box className='pgGreenSectionInner'>
          <Typography variant='h2' className='pgBoldTitle pgWhiteText' sx={{ mb: 3, fontSize: { xs: '2rem', md: '3rem' } }}>
            Explore haircuts
          </Typography>
          <Typography variant='h5' className='pgWhiteText' sx={{ mb: 4, fontSize: { xs: '1.1rem', md: '1.5rem' }, opacity: 0.9 }}>
            Great haircuts have no age limits. Browse a selection of men's and women's haircuts to get inspired.
          </Typography>

          {/* Gender slider toggle */}
          <Box
            sx={{
              display: 'inline-flex',
              position: 'relative',
              bgcolor: 'rgba(0,0,0,0.25)',
              borderRadius: '500px',
              p: '4px',
              mb: 3,
              cursor: 'pointer',
              userSelect: 'none'
            }}
          >
            {/* sliding pill */}
            <Box
              sx={{
                position: 'absolute',
                top: 4,
                bottom: 4,
                width: 'calc(50% - 4px)',
                bgcolor: 'white',
                borderRadius: '500px',
                transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                left: gender === 'men' ? '4px' : 'calc(50%)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.18)'
              }}
            />
            {(['men', 'women'] as const).map(opt => (
              <Box
                key={opt}
                onClick={() => setGender(opt)}
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  px: 4,
                  py: 1,
                  borderRadius: '500px',
                  minWidth: 100,
                  textAlign: 'center',
                  transition: 'color 0.3s'
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: gender === opt ? '#2e7d32' : 'rgba(255,255,255,0.85)',
                    transition: 'color 0.3s',
                    lineHeight: 1.5
                  }}
                >
                  {opt.charAt(0).toUpperCase() + opt.slice(1)}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box className='seniorsScrollCards'>
            {hairstyles.map((style) => (
              <Box key={style.id} className='seniorsScrollCard'>
                <Box className='seniorsCardImgBox'>
                  <Image src={style.featureImage} alt={style.title} fill className='pgCoverImg' />
                </Box>
                <Box className='pgCardBody'>
                  <Typography variant='h6' className='pgBoldTitle'>
                    {style.title}
                  </Typography>
                  <Typography variant='body2' color='text.secondary' sx={{ mb: 2, flexGrow: 1 }}>
                    {style.tags.join(' • ')}
                  </Typography>
                  <Button href={`/hairstyles/${style.id}`} className='seniorsCardLinkBtn'>
                    Check it Out
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
          <Box className='seniorsServicesIntro'>
            <Typography variant='h3' className='pgBoldTitle pgWhiteText' sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
              Additional haircare services
            </Typography>
            <Typography variant='h6' className='pgWhiteText' sx={{ opacity: 0.85, maxWidth: 600, fontWeight: 400, fontSize: { xs: '1rem', md: '1.25rem' } }}>
              Need your hair shampooed, your neck trimmed or your bangs touched up? That's great! Just visit your local salon and we'll be happy to help.
            </Typography>
          </Box>
          <Box className='seniorsServiceRow'>
            <Box className='seniorsServiceItem'>
              <Image src='/images/illustrations/Clippers.png' alt='Clippers' width={64} height={64} className='seniorsServiceIcon' />
              <Typography variant='h5' className='pgBoldTitle pgWhiteText'>
                Neck Trim
              </Typography>
            </Box>
            <Box className='seniorsServiceItem'>
              <Image src='/images/illustrations/Scissors+Comb.png' alt='Scissors+Comb' width={64} height={64} className='seniorsServiceIcon' />
              <Typography variant='h5' className='pgBoldTitle pgWhiteText'>
                Beard Trim
              </Typography>
            </Box>
            <Box className='seniorsServiceItem'>
              <Image src='/images/illustrations/Scissors.png' alt='Scissors' width={64} height={64} className='seniorsServiceIcon' />
              <Typography variant='h5' className='pgBoldTitle pgWhiteText'>
                Bang Trim
              </Typography>
            </Box>
            <Box className='seniorsServiceItem'>
              <Image src='/images/illustrations/Shampoo.png' alt='Shampoo' width={64} height={64} className='seniorsServiceIcon' />
              <Typography variant='h5' className='pgBoldTitle pgWhiteText'>
                Shampoo
              </Typography>
            </Box>
            <Box className='seniorsServiceItem'>
              <Image src='/images/illustrations/Curler.png' alt='Curler' width={64} height={64} className='seniorsServiceIcon' />
              <Typography variant='h5' className='pgBoldTitle pgWhiteText'>
                Styling
              </Typography>
            </Box>
          </Box>
          <Button variant='contained' size='large' href='/services/check-in' className='seniorsWhiteCtaBtn' sx={{ mt: 6 }}>
            Learn More
          </Button>
        </Box>
      </Box>

      {/* Center text section */}
      <Box className='seniorsCenterSection'>
        <Image src='/images/illustrations/Scissors.png' alt='Scissors' width={72} height={72} className='seniorsCenterIcon' />
        <Typography variant='h1' className='seniorsCenterTitle'>
          The haircut you want, every single time
        </Typography>
        <Typography variant='body1' className='pgBodyMuted' sx={{ maxWidth: 1000 }}>
          To make sure you get a haircut you love, we offer pre-cut consultations and store your Clip Notes—so you get the cut you want every time you step into a Great Clips salon.
        </Typography>
      </Box>

      {/* Split section 1 */}
      <Box className='overviewSplitSection'>
        <Box className='overviewSplitImage'>
          <Image
            src='/images/salon/greatClips-home-seniors-ron.png'
            alt='Salon stylist'
            width={600}
            height={600}
            className='overviewSplitImg'
          />
        </Box>
        <Box className='overviewSplitText'>
          <Typography variant='h3' className='overviewSplitTitle'>
            Great guidance from expert stylists
          </Typography>
          <Typography variant='body1' className='overviewSplitDescription'>
            Not sure what you want? No problem. Our stylists provide a pre-haircut consultation to help you find a great look. Or if you're curious about a specific haircut, they can help you determine if it will work for your hair and your lifestyle.
          </Typography>
        </Box>
      </Box>

      {/* Split section 2 (reversed) */}
      <Box className='overviewSplitSectionReversed'>
        <Box className='overviewSplitText'>
          <Typography variant='h3' className='overviewSplitTitle'>
            Here's something worth noting
          </Typography>
          <Typography variant='body1' className='overviewSplitDescription'>
            You don't have to remember the specific details or salon jargon to get a great haircut. Any time you visit a Great Clips salon, your stylist will add your haircut details to your Clip Notes profile. So sit back and relax knowing you'll always get the look you love.
          </Typography>
        </Box>
        <Box className='overviewSplitImage'>
          <Image
            src='/images/salon/WHblog_gnV2.jpg'
            alt='Seniors hair styling'
            width={600}
            height={600}
            className='overviewSplitImg'
          />
        </Box>
      </Box>

      {/* Tips / news section */}
      <BlogTipsSection heading='Great things to know' category='Hair Care' />
      <Box className='footerWrapper'>
        <FooterContent />
      </Box>
    </Box>
  )
}
