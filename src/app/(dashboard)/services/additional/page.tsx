import Image from 'next/image'
import dynamic from 'next/dynamic'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'

import './additional-services.css'

const FooterContent = dynamic(() => import('@/components/layout/horizontal/FooterContent'), {
  loading: () => <Box sx={{ height: 200 }} />
})

const services = [
  {
    title: 'Bang Trim',
    desc: 'Are your bangs getting long between haircuts? Are you constantly brushing them out of your eyes? Get a refreshed look in just a few minutes with a bang trim from Bob Mulet.',
    icon: '/images/illustrations/Scissors.png'
  },
  {
    title: 'Beard Trim',
    desc: 'Look polished and professional with a quick beard touch-up. Our trained stylists can trim your beard to your preferred shape and length.',
    icon: '/images/illustrations/Scissors+Comb.png'
  },
  {
    title: 'Neck Trim',
    desc: 'Clean up excess neck hair between cuts or add on a neck trim to your haircut to complete your fresh new look. This service works especially well in combination with shorter haircuts, like fades and pixies.',
    icon: '/images/illustrations/Clippers.png'
  },
  {
    title: 'Shampoo',
    desc: 'Unwind with a relaxing shampoo service. Our stylists use your favorite professional shampoos and conditioners to clean and nourish your hair.',
    icon: '/images/illustrations/Shampoo.png'
  },
  {
    title: 'Styling',
    desc: 'Places to go and people to see? You can add a blowdry and style to your haircut! We also offer formal styling and updos for special occasions.',
    icon: '/images/illustrations/Curler.png'
  },
  {
    title: 'Perm*',
    desc: 'Create a whole new look for yourself with a perm, a treatment that adds waves or curls to your hair. Availability varies by location.',
    icon: '/images/illustrations/Mirror.png'
  }
]

const newsCards = [
  {
    title: '3 tips for maintaining bushy eyebrows',
    desc: 'As men grow older, their eyebrows can become bushier and more unruly. Here are 3 tips to keep your brows looking great.',
    image: '/images/salon/WHblog_gnV2.jpg',
    link: '/services/blog'
  },
  {
    title: 'Find you perfect hair and beard Combo',
    desc: 'Are you looking for perfect hair and beard combo? Check out our lookbook for inspiration and find your next great cut.',
    image: '/images/salon/GC_8043_BTS_HomePg_BTS_600x388_findyournextgreatcut.jpg',
    link: '/services/lookbook'
  },
  {
    title: '9 Simple hairstyle for school dances',
    desc: 'It’s school dance season! Check out these 9 simple hairstyles that will have you looking great on the dance floor.',
    image: '/images/salon/GC_8043_BTS_HomePg_BTS_600x388_workgreatly.jpg',
    link: '/about/career'
  }
]

export default function Page() {
  return (
    <Box className='additionalScrollContainer'>
      {/* Hero */}
      <Container maxWidth='lg' className='pgSection'>
        <Box className='pgTwoCol'>
          <Box className='pgCol'>
            <Typography variant='h4' className='pgPrimaryLabel'>
              Additional Services
            </Typography>
            <Typography variant='h1' className='pgBoldTitle'>
              Haircare services to keep you looking GREAT®
            </Typography>
            <Typography variant='body1' className='pgBodyMuted' sx={{ mb: 4 }}>
              Look and feel your best with extra haircare services from Great Clips. Add a shampoo service, a beard trim or a neck trim to your next haircut for a fully polished look. You can also visit us in between cuts for a formal style or a quick touchup of your bangs. Just stop by your local salon and we’ll be happy to help.
            </Typography>
            <Button variant='contained' size='large' href='/services/check-in' className='pgRoundBtn'>
              Find a salon
            </Button>
          </Box>
          <Box className='pgImgBox'>
            <Image src='/images/pages/GreenScreen.png' alt='Background' fill className='pgCoverImg' />
            <Image
              src='/images/salon/greatClips-home-additionalServices.png'
              alt='Additional Services'
              fill
              className='pgCoverImg'
            />
          </Box>
        </Box>
      </Container>

      {/* Services grid with green gradient */}
      <Box className='additionalGreenSection'>
        <Box className='pgGreenSectionInner'>
          <Container maxWidth='lg'>
            <Typography variant='h2' className='pgBoldTitle pgWhiteText' sx={{ mb: 6, fontSize: { xs: '2rem', md: '3rem' } }}>
              Additional haircare services
            </Typography>
            <Box className='additionalServiceGrid' sx={{ mb: 4 }}>
              {services.map((service, index) => (
                <Box key={index} className='additionalServiceCard'>
                  <Box className='additionalServiceIcon'>
                    <Image src={service.icon} alt={service.title} fill className='pgContainImg' />
                  </Box>
                  <Typography variant='h5' className='pgBoldTitle'>
                    {service.title}
                  </Typography>
                  <Typography variant='body1' className='pgBodyMuted'>
                    {service.desc}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Typography variant='caption' className='additionalDisclaimer'>
              * service availability may vary
            </Typography>
          </Container>
        </Box>
      </Box>

      {/* Great Deeds */}
      <Container maxWidth='lg' className='pgSection'>
        <Box className='pgSectionCenter' sx={{ mb: 8 }}>
          <Typography variant='h3' className='pgBoldTitle'>
            Doing Great Deeds&reg; for those in need
          </Typography>
          <Typography variant='body1' className='pgBodyMuted' sx={{ maxWidth: 800, mx: 'auto' }}>
            Great Deeds&reg; causes represent our shared commitment to help those in need when it matters most. We
            offer two services related to our Great Deeds program.
          </Typography>
        </Box>
        <Box className='additionalDeedCards'>
          <Box className='additionalDeedCard'>
            <Typography variant='subtitle1' className='pgPrimaryLabel'>
              Helping cancer patients
            </Typography>
            <Typography variant='h4' className='pgBoldTitle'>
              Clips of Kindness&reg;
            </Typography>
            <Typography variant='body1' className='pgBodyMuted' sx={{ mb: 4, flexGrow: 1 }}>
              Our Clips of Kindness&reg; program offers complimentary clipper cuts to cancer patients who are facing
              hair loss.
            </Typography>
            <Button variant='contained' size='large' className='pgRoundBtn' href='/support/contact'>
              Learn more
            </Button>
          </Box>
          <Box className='additionalDeedCard'>
            <Typography variant='subtitle1' className='pgPrimaryLabel'>
              Supporting Children&apos;s Health
            </Typography>
            <Typography variant='h4' className='pgBoldTitle'>
              Wigs for Kids
            </Typography>
            <Typography variant='body1' className='pgBodyMuted' sx={{ mb: 4, flexGrow: 1 }}>
              Many Bob Mulet salons are proud to provide free haircuts to anyone who wants to donate their hair to
              Wigs for Kids.
            </Typography>
            <Button variant='contained' size='large' className='pgRoundBtn' href='/support/contact'>
              Learn more
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Dark green news section */}
      <Box className='additionalDarkSection'>
        <Container maxWidth='lg'>
          <Typography variant='h4' className='pgBoldTitle pgWhiteText' sx={{ mb: 6, textAlign: 'center' }}>
            Great things to know
          </Typography>
          <Box className='pgCardGrid'>
            {newsCards.map((card, index) => (
              <Box key={index} className='additionalNewsCard'>
                <Box className='additionalNewsCardImg'>
                  <Image src={card.image} alt={card.title} fill className='pgCoverImg' />
                </Box>
                <Box className='additionalNewsCardBody'>
                  <Typography variant='h5' className='pgBoldTitle' sx={{ mb: 2 }}>
                    {card.title}
                  </Typography>
                  <Typography variant='body1' className='pgBodyMuted' sx={{ mb: 3, flexGrow: 1 }}>
                    {card.desc}
                  </Typography>
                  <Link href={card.link} className='additionalNewsLink'>
                    Read more &rarr;
                  </Link>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Light green CTA */}
      <Box className='additionalLightSection'>
        <Container maxWidth='lg'>
          <Box className='additionalCTACard'>
            <Box className='additionalIconBox'>
              <Image src='/images/illustrations/Mirror.png' alt='Mirror' fill className='pgContainImg' />
            </Box>
            <Typography variant='h3' className='pgBoldTitle'>
              Find a salon
            </Typography>
            <Typography variant='body1' className='pgBodyMuted' sx={{ mb: 4 }}>
              Ready for your next great haircut? Then Bob Mulet is ready for you! Find a salon or check in now.
            </Typography>
            <Button variant='outlined' size='large' className='pgRoundBtn' href='/FindSalon'>
              Find a Salon
            </Button>
          </Box>
        </Container>
      </Box>
      <Box className='footerWrapper'>
        <FooterContent />
      </Box>
    </Box>
  )
}
