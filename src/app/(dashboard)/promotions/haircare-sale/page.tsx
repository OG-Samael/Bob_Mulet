import Image from 'next/image'
import dynamic from 'next/dynamic'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'


import './haircare-sale.css'

const FooterContent = dynamic(() => import('@/components/layout/horizontal/FooterContent'), {
  loading: () => <Box sx={{ height: 200 }} />
})

export default function Page() {
  return (
    <Box className='haircareContainer'>

      {/* ── Hero: Image left / Text right ───────────────── */}
      <Box className='haircareHeroSection'>

        {/* Left: image */}
        <Box className='haircareHeroImageBox'>
          <Image
            src='/images/salon/sexyhair_sale2026.jpg'
            alt='Haircare products'
            width={520}
            height={420}
            priority
            className='haircareHeroImage'
          />
        </Box>

        {/* Right: text */}
        <Box className='haircareHeroText'>
          <Typography className='haircareSubHeading'>
            Promotions
          </Typography>

          <Typography variant='h1' className='haircareHeading'>
            Save on haircare products
          </Typography>
        </Box>

      </Box>

      {/* ── Green two-column section ─────────────────────────── */}
      <Box className='haircareGreenSection'>

        {/* Left: heading + text */}
        <Box className='haircareGreenLeft'>
          <Typography variant='h3' className='haircareGreenHeading'>
            From the salon chair to game time
          </Typography>
          <Typography variant='body1' className='haircareGreenText'>
            Every winning look starts with a great cut, and the right products will make sure your style finishes strong. Through the end of April, SexyHair products are on sale at your local Bob Mulet salon. Add volume, enhance texture, or lock in your look with help from your stylist so your style stays game-ready all day.
          </Typography>
          <Typography variant='body1' className='haircareGreenText'>
            *Offer valid at participating Bob Mulet salons. Product availability subject to change. Excludes 33.8oz and minis.
          </Typography>
        </Box>

        {/* Right: white card with bullet points */}
        <Box className='haircareGreenCard'>
          <Typography variant='h5' className='haircareGreenCardHeading'>
            Less wait, more GREAT®
          </Typography>

          <Typography variant='h5' className='haircareGreenCardHeading'>
            Get a fresh haircut at your local salon, and stock up on your favorite products when you’re there. Use Online Check-In now to find a salon and reserve your spot in line.
          </Typography>

          <Button
            variant='contained'
            size='large'
            href='/FindSalon'
            sx={{ borderRadius: '500px', mt: 1 }}
          >
            Find a salon
          </Button>
        </Box>

      </Box>

      {/* ── Full-width green section with image cards ─────────── */}
      <Box className='haircareFullGreenSection'>
        <Typography variant='h3' className='haircareFullGreenHeading'>
          Great things to know
        </Typography>

        <Box className='haircareCardRow'>
          {[
            {
              img: '/images/salon/Solutions+TT+shampoo.jpg',
              alt: 'Tea Tree Shampoo',
              heading: 'Tea Tree Shampoo',
              text: 'A refreshing cleanse that removes build-up and leaves hair feeling light, clean and revitalised.',
            },
            {
              img: '/images/salon/Solutions-curl+hydra+souffle.jpg',
              alt: 'Curl Hydra Soufflé',
              heading: 'Curl Hydra Soufflé',
              text: 'Define and hydrate your curls with this lightweight soufflé that fights frizz and adds lasting bounce.',
            },
            {
              img: '/images/salon/Solutions-TT+Paste.jpg',
              alt: 'Styling Paste',
              heading: 'Styling Paste',
              text: 'Achieve flexible hold and natural texture with our professional styling paste. Perfect for any look.',
            },
          ].map(card => (
            <Box key={card.heading} className='haircareCard'>
              <Box className='haircareCardImageBox'>
                <Image
                  src={card.img}
                  alt={card.alt}
                  fill
                  className='haircareCardImage'
                />
              </Box>
              <Box className='haircareCardBody'>
                <Typography variant='h6' className='haircareCardHeading'>
                  {card.heading}
                </Typography>
                <Typography variant='body2' className='haircareCardText'>
                  {card.text}
                </Typography>
                <MuiLink href='/products/overview' className='haircareCardLink' underline='hover'>
                  Read more &rarr;
                </MuiLink>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box className='footerWrapper'>
        <FooterContent />
      </Box>
    </Box>
  )
}

