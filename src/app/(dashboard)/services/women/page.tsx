import Image from 'next/image'
import dynamic from 'next/dynamic'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'

import './women-services.css'
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
  const womenHairstyles = allHairstyles.filter(h => h.category === 'women')
  return (
    <Box className='womenScrollContainer'>
      {/* Hero */}
      <Container maxWidth='lg' className='pgSection'>
        <Box className='pgTwoCol'>
          <Box className='pgCol'>
            <Typography variant='h4' className='pgPrimaryLabel'>
              Haircuts for
            </Typography>
            <Typography variant='h1' className='pgBoldTitle'>
              Women
            </Typography>
            <Typography variant='body1' className='pgBodyMuted' sx={{ mb: 2 }}>
              Look and feel your best with women’s haircuts at Great Clips. Whether your hair is long or short, thick or thin, curly or straight or somewhere in between, you can get the haircut you want at your local Great Clips salon.
            </Typography>
            <Button variant='contained' size='large' href='/services/check-in' className='pgRoundBtn' sx={{ mt: 4 }}>
              Find a Salon
            </Button>
          </Box>
          <Box className='pgImgBox'>
            <Image
              src='/images/salon/greatClips-haircareServices-women-hero.jpg'
              alt="Women's Haircuts"
              fill
              className='pgCoverImg'
            />
          </Box>
        </Box>
      </Container>

      {/* Green gradient feature section */}
      <Box className='womenGreenSection'>
        <Box className='pgGreenSectionInner'>
          <Typography variant='h2' className='pgBoldTitle pgWhiteText' sx={{ mb: 3, fontSize: { xs: '2rem', md: '3rem' } }}>
            Explore women’s haircuts
          </Typography>
          <Typography variant='h5' className='pgWhiteText' sx={{ mb: 4, fontSize: { xs: '1.1rem', md: '1.5rem' }, opacity: 0.9 }}>
            Browse a selection of our women’s haircuts to get inspired.
          </Typography>
          <Box className='womenScrollCards'>
            {womenHairstyles.map((style) => (
              <Box key={style.id} className='womenScrollCard'>
                <Box className='womenCardImgBox'>
                  <Image src={style.featureImage} alt={style.title} fill className='pgCoverImg' />
                </Box>
                <Box className='pgCardBody'>
                  <Typography variant='h6' className='pgBoldTitle'>
                    {style.title}
                  </Typography>
                  <Typography variant='body2' color='text.secondary' sx={{ mb: 2, flexGrow: 1 }}>
                    {style.tags.join(' • ')}
                  </Typography>
                  <Button href={`/hairstyles/${style.id}`} className='womenCardLinkBtn'>
                    Check it Out
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
          <Box className='womenServicesIntro'>
            <Typography variant='h3' className='pgBoldTitle pgWhiteText' sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
              Additional women’s haircare services
            </Typography>
            <Typography variant='h6' className='pgWhiteText' sx={{ opacity: 0.85, maxWidth: 600, fontWeight: 400, fontSize: { xs: '1rem', md: '1.25rem' } }}>
              Need your bangs touched up or your hair formally styled? That’s great! Just visit your local salon and we’ll be happy to help.
            </Typography>
          </Box>
          <Box className='womenServiceRow'>
            <Box className='womenServiceItem'>
              <Image src='/images/illustrations/Scissors.png' alt='Scissors' width={64} height={64} className='womenServiceIcon' />
              <Typography variant='h5' className='pgBoldTitle pgWhiteText'>
                Bang Trim
              </Typography>
            </Box>
            <Box className='womenServiceItem'>
              <Image src='/images/illustrations/Shampoo.png' alt='Shampoo' width={64} height={64} className='womenServiceIcon' />
              <Typography variant='h5' className='pgBoldTitle pgWhiteText'>
                Shampoo
              </Typography>
            </Box>
            <Box className='womenServiceItem'>
              <Image src='/images/illustrations/Curler.png' alt='Curler' width={64} height={64} className='womenServiceIcon' />
              <Typography variant='h5' className='pgBoldTitle pgWhiteText'>
                Styling
              </Typography>
            </Box>
          </Box>
          <Button variant='contained' size='large' href='/services/check-in' className='womenWhiteCtaBtn' sx={{ mt: 6 }}>
            Learn More
          </Button>
        </Box>
      </Box>

      {/* Center text section */}
      <Box className='womenCenterSection'>
        <Image src='/images/illustrations/Scissors.png' alt='Curler' width={72} height={72} className='womenCenterIcon' />
        <Typography variant='h1' className='womenCenterTitle'>
          The haircut you want, the first time and every time
        </Typography>
        <Typography variant='body1' className='pgBodyMuted' sx={{ maxWidth: 1000 }}>
          To make sure you get a haircut you love, we offer pre-cut consultations and store your Clip Notes�so you get
          the cut you want every time you step into a Bob Mulet salon.
        </Typography>
      </Box>

      {/* Split section 1 */}
      <Box className='overviewSplitSection'>
        <Box className='overviewSplitImage'>
          <Image
            src='/images/salon/greatClips-women-1.jpg'
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
            You don’t have to remember the specific details or salon jargon to get a great haircut. Any time you visit a Great Clips salon, your stylist will add your haircut details to your Clip Notes profile. So sit back and relax knowing you’ll always get the look you love.
          </Typography>
        </Box>
        <Box className='overviewSplitImage'>
          <Image
            src='/images/salon/greatClips-women-2.jpg'
            alt='Women hair styling'
            width={600}
            height={600}
            className='overviewSplitImg'
          />
        </Box>
      </Box>

      {/* Tips / news section */}
      <BlogTipsSection heading='Great things to know' category='Hair Color' />
      <Box className='footerWrapper'>
        <FooterContent />
      </Box>
    </Box>
  )
}
