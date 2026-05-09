import Image from 'next/image'

import dynamic from 'next/dynamic'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'


import './kids-services.css'
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
  const kidsHairstyles = allHairstyles.filter(h => h.category === 'kids')
  return (
    <Box className='kidsScrollContainer'>
      {/* Hero */}
      <Container maxWidth='lg' className='pgSection'>
        <Box className='pgTwoCol'>
          <Box className='pgCol'>
            <Typography variant='h4' className='pgPrimaryLabel'>
              Haircuts for
            </Typography>
            <Typography variant='h1' className='pgBoldTitle'>
              Kids
            </Typography>
            <Typography variant='body1' className='pgBodyMuted' sx={{ mb: 2 }}>
              Get your kids an adorable, stress-free haircut at Great Clips. Whether it’s time for your little one&apos;s first haircut or you’re simply looking for a fun and easy place to get your child’s hair done, we’ve got you covered.
            </Typography>
            <Button variant='contained' size='large' href='/services/check-in' className='pgRoundBtn' sx={{ mt: 4 }}>
              Find a salon
            </Button>
          </Box>
          <Box className='pgImgBox'>
            <Image
              src='/images/salon/greatClips-haircareServices-kids-hero.jpg'
              alt="Kids' Haircuts"
              fill
              className='pgCoverImg'
            />
          </Box>
        </Box>
      </Container>

      {/* Green gradient feature section */}
      <Box className='kidsGreenSection'>
        <Box className='pgGreenSectionInner'>
          <Typography variant='h2' className='pgBoldTitle pgWhiteText' sx={{ mb: 3, fontSize: { xs: '2rem', md: '3rem' } }}>
            Explore children’s haircuts
          </Typography>
          <Typography variant='h5' className='pgWhiteText' sx={{ mb: 4, fontSize: { xs: '1.1rem', md: '1.5rem' }, opacity: 0.9 }}>
            Our stylists are highly trained in cutting kids&apos; hair. Browse our kids’ haircuts to get inspired.
          </Typography>
          <Box className='kidsScrollCards'>
            {kidsHairstyles.map((style) => (
              <Box key={style.id} className='kidsScrollCard'>
                <Box className='kidsCardImgBox'>
                  <Image src={style.featureImage} alt={style.title} fill className='pgCoverImg' />
                </Box>
                <Box className='pgCardBody'>
                  <Typography variant='h6' className='pgBoldTitle'>
                    {style.title}
                  </Typography>
                  <Typography variant='body2' color='text.secondary' sx={{ mb: 2, flexGrow: 1 }}>
                    {style.tags.join(' • ')}
                  </Typography>
                  <Button href={`/hairstyles/${style.id}`} className='kidsCardLinkBtn'>
                    Check it Out
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
          <Box className='kidsServicesIntro'>
            <Typography variant='h3' className='pgBoldTitle pgWhiteText' sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
              Additional kids’ haircare services
            </Typography>
            <Typography variant='h6' className='pgWhiteText' sx={{ opacity: 0.85, maxWidth: 600, fontWeight: 400, fontSize: { xs: '1rem', md: '1.25rem' } }}>
              Need a quick and easy bang trim or hair shampoo for your little one? That’s great! Just visit your local salon and we’ll be happy to help.
            </Typography>
          </Box>
          <Box className='kidsServiceRow'>
            <Box className='kidsServiceItem'>
              <Image src='/images/illustrations/Scissors.png' alt='Scissors' width={64} height={64} className='kidsServiceIcon' />
              <Typography variant='h5' className='pgBoldTitle pgWhiteText'>
                Bang Trim
              </Typography>
            </Box>
            <Box className='kidsServiceItem'>
              <Image src='/images/illustrations/Shampoo.png' alt='Shampoo' width={64} height={64} className='kidsServiceIcon' />
              <Typography variant='h5' className='pgBoldTitle pgWhiteText'>
                Shampoo
              </Typography>
            </Box>
          </Box>
          <Button variant='contained' size='large' href='/services/check-in' className='kidsWhiteCtaBtn' sx={{ mt: 6 }}>
            Learn More
          </Button>
        </Box>
      </Box>

      {/* Center text section */}
      <Box className='kidsCenterSection'>
        <Image src='/images/illustrations/Scissors.png' alt='Scissors' width={72} height={72} className='kidsCenterIcon' />
        <Typography variant='h1' className='kidsCenterTitle'>
          The haircut your kids love, the first time and every time
        </Typography>
        <Typography variant='body1' className='pgBodyMuted' sx={{ maxWidth: 1000 }}>
          To make sure you get a haircut you love, we offer pre-cut consultations and store your Clip Notes—so you get the cut you want every time you step into a Bob Mulet salon.
        </Typography>
      </Box>

      {/* Split section 1 */}
      <Box className='overviewSplitSection'>
        <Box className='overviewSplitImage'>
          <Image
            src='/images/salon/greatClips-haircareServices-kids-1.jpg'
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
            If you’re not sure what haircut your child wants, your Great Clips stylist can help. In the pre-haircut consultation, your stylist will ask you and your child a few questions and, together, we can find the perfect look for your little one.
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
            Now you don’t have to remember the specific details of your child’s favorite haircut. Any time you visit a Great Clips salon, your stylist will add their haircut details to their Clip Notes profile. So sit back and relax knowing they’ll always get the look you love.
          </Typography>
        </Box>
        <Box className='overviewSplitImage'>
          <Image
            src='/images/salon/greatClips-haircareServices-kids-3.jpg'
            alt="Kids' hair styling"
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
