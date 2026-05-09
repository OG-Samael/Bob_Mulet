import Image from 'next/image'
import dynamic from 'next/dynamic'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'

import './men-services.css'
import BlogTipsSection from '@/components/BlogTipsSection'
import { readJSON } from '@/utils/fileHandler'

type Hairstyle = {
  id: string
  title: string
  category: string
  featureImage: string
  tags: string[]
}

const FooterContent = dynamic(() => import('@/components/layout/horizontal/FooterContent'), {
  loading: () => <Box sx={{ height: 200 }} />
})

export default async function Page() {
  const allHairstyles = await readJSON<Hairstyle[]>('hairstyles.json')
  const menHairstyles = allHairstyles.filter(h => h.category === 'men')
  return (
    <Box className='menScrollContainer'>
      {/* Hero */}
      <Container maxWidth='lg' className='pgSection'>
        <Box className='pgTwoCol'>
          <Box className='pgCol'>
            <Typography variant='h4' className='pgPrimaryLabel'>
              Haircuts for
            </Typography>
            <Typography variant='h1' className='pgBoldTitle'>
              Men
            </Typography>
            <Typography variant='body1' className='pgBodyMuted' sx={{ mb: 2 }}>
              Whether you’re a fan of short layers, a bald fade, classic clipper cuts or something in between, you can get the haircut you want at your local Great Clips salon. Look and feel your best with men’s haircuts and barber-style services at Bob Mulet.
            </Typography>
            <Button variant='contained' size='large' href='/services/check-in' className='pgRoundBtn' sx={{ mt: 4 }}>
              Check In Now
            </Button>
          </Box>
          <Box className='pgImgBox'>
            <Image
              src='/images/salon/greatClips-haircareServices-men-hero.jpg'
              alt="Men's Haircuts"
              fill
              className='pgCoverImg'
            />
          </Box>
        </Box>
      </Container>

      {/* Green gradient feature section */}
      <Box className='menGreenSection'>
        <Box className='pgGreenSectionInner'>
          <Typography variant='h2' className='pgBoldTitle pgWhiteText' sx={{ mb: 3, fontSize: { xs: '2rem', md: '3rem' } }}>
            Explore men&apos;s haircuts
          </Typography>
          <Typography variant='h5' className='pgWhiteText' sx={{ mb: 4, fontSize: { xs: '1.1rem', md: '1.5rem' }, opacity: 0.9 }}>
            Browse a selection of our men’s haircuts to get inspired.
          </Typography>
          <Box className='menScrollCards'>
            {menHairstyles.map((style) => (
              <Box key={style.id} className='menScrollCard'>
                <Box className='menCardImgBox'>
                  <Image src={style.featureImage} alt={style.title} fill className='pgCoverImg' />
                </Box>
                <Box className='pgCardBody'>
                  <Typography variant='h6' className='pgBoldTitle'>
                    {style.title}
                  </Typography>
                  <Typography variant='body2' color='text.secondary' sx={{ mb: 2, flexGrow: 1 }}>
                    {style.tags.join(' • ')}
                  </Typography>
                  <Button href={`/hairstyles/${style.id}`} className='menCardLinkBtn'>
                    Check it Out
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
          <Box className='menServicesIntro'>
            <Typography variant='h3' className='pgBoldTitle pgWhiteText' sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
              Additional men’s haircare services
            </Typography>
            <Typography variant='h6' className='pgWhiteText' sx={{ opacity: 0.85, maxWidth: 600, fontWeight: 400, fontSize: { xs: '1rem', md: '1.25rem' } }}>
              Need barbershop-style services like a beard or neck trim? Or how about a quick shampoo? We’ve got you covered! Visit your local Great Clips salon so you can stay looking great in between cuts.
            </Typography>
          </Box>
          <Box className='menServiceRow'>
            <Box className='menServiceItem'>
              <Image src='/images/illustrations/Clippers.png' alt='Clippers' width={64} height={64} className='menServiceIcon' />
              <Typography variant='h5' className='pgBoldTitle pgWhiteText'>
                Neck Trim
              </Typography>
            </Box>
            <Box className='menServiceItem'>
              <Image src='/images/illustrations/Scissors+Comb.png' alt='Scissors and Comb' width={64} height={64} className='menServiceIcon' />
              <Typography variant='h5' className='pgBoldTitle pgWhiteText'>
                Beard Trim
              </Typography>
            </Box>
            <Box className='menServiceItem'>
              <Image src='/images/illustrations/Shampoo.png' alt='Shampoo' width={64} height={64} className='menServiceIcon' />
              <Typography variant='h5' className='pgBoldTitle pgWhiteText'>
                Shampoo
              </Typography>
            </Box>
          </Box>
          <Button variant='contained' size='large' href='/services/check-in' className='menWhiteCtaBtn' sx={{ mt: 6 }}>
            Learn More
          </Button>
        </Box>
      </Box>

      {/* Center text section */}
      <Box className='menCenterSection'>
        <Image src='/images/illustrations/Scissors.png' alt='Scissors' width={72} height={72} className='menCenterIcon' />
        <Typography variant='h1' className='menCenterTitle'>
          The haircut you want, the first time and every time
        </Typography>
        <Typography variant='body1' className='pgBodyMuted' sx={{ maxWidth: 1000 }}>
          To make sure you get a haircut you love, we offer pre-cut consultations and store your Clip Notes—so you get
          the cut you want every time you step into a Bob Mulet salon.
        </Typography>
      </Box>

      {/* Split section 1 */}
      <Box className='overviewSplitSection'>
        <Box className='overviewSplitImage'>
          <Image
            src='/images/salon/greatClips-haricut-services-nas.jpg'
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
           Not sure what you want? No problem. Our stylists provide a pre-haircut consultation to help you find a great look. Or if you’re curious about a specific haircut, they can help you determine if it will work for your hair and your lifestyle.
          </Typography>
        </Box>
      </Box>

      {/* Split section 2 (reversed) */}
      <Box className='overviewSplitSectionReversed'>
        <Box className='overviewSplitText'>
          <Typography variant='h3' className='overviewSplitTitle'>
            Here’s something worth noting
          </Typography>
          <Typography variant='body1' className='overviewSplitDescription'>
            You don’t need to talk like a barber or remember salon lingo to get a great cut. Any time you visit a Great Clips salon for a haircut, your stylist will add your details to your Clip Notes profile. So sit back and relax knowing you’ll always get the look you love.
          </Typography>
        </Box>
        <Box className='overviewSplitImage'>
          <Image
            src='/images/salon/greatClips-haricut-services-steve.jpg'
            alt="Men's hair styling"
            width={600}
            height={600}
            className='overviewSplitImg'
          />
        </Box>
      </Box>

      {/* Tips / news section */}
      <BlogTipsSection heading='Great things to know' category='Styling' />
      <Box className='footerWrapper'>
        <FooterContent />
      </Box>
    </Box>
  )
}
