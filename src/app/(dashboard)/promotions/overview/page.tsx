import Image from 'next/image'
import dynamic from 'next/dynamic'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'


import './promotions-overview.css'

const FooterContent = dynamic(() => import('@/components/layout/horizontal/FooterContent'), {
  loading: () => <Box sx={{ height: 200 }} />
})

export default function Page() {
  return (
    <Box className='promoOverviewContainer'>

      {/* ── Hero Banner ───────────────────────────────────── */}
      <Box className='promoOverviewHeroSection'>

        {/* Background: GreenScreen */}
        <Image
          src='/images/pages/GreenScreen.png'
          alt='Promotions hero background'
          fill
          priority
          className='promoOverviewHeroImage'
        />

        {/* Subtle dark overlay */}
        <Box className='promoOverviewHeroOverlay' />

        <Container maxWidth={false} className='promoOverviewHeroContainer'>

          {/* White content box — right side */}
          <Box className='promoOverviewHeroContent'>
            <Typography className='promoOverviewSubHeading'>
              Promotions
            </Typography>

            <Typography variant='h2' className='promoOverviewHeading'>
              GREAT® promotions
            </Typography>

            <Typography variant='body1' className='promoOverviewText'>
              Whether it’s for a single month, an entire season or all year long, Bob Mulet salons and our partners offer awesome promotions for our haircare services and products. Check out the latest and greatest now—and be sure to check back often because we’re always adding more!
            </Typography>

            <Button
              variant='contained'
              size='large'
              href='/FindSalon'
              sx={{ borderRadius: '500px' }}
            >
              Find a salon
            </Button>
          </Box>

          {/* Character image — far right */}
          <Box className='promoOverviewHeroRightImage'>
            <Image
              src='/images/salon/promotions+hero.png'
              alt='Dahmian'
              width={0}
              height={0}
              sizes='100vw'
              className='promoOverviewHeroRightImg'
            />
          </Box>

        </Container>
      </Box>

      {/* ── Offer Card Section ────────────────────────────── */}
      <Box className='promoOfferSection'>
        <Box className='promoOfferCard'>
          <Image
            src='/images/illustrations/Scissors.png'
            alt='Scissors icon'
            width={56}
            height={56}
            className='promoOfferIcon'
          />

          <Typography variant='h4' className='promoOfferHeading'>
            Sign up for our email list to get $2 off
          </Typography>

          <Typography variant='body1' className='promoOfferText'>
            Sign up to receive the latest deals, promotions and hair trend tips right to your email inbox. As a thank you, we’ll email you a coupon for $2 off* your next haircut.
          </Typography>

          <Button
            variant='contained'
            size='large'
            href='/support/contact'
            sx={{ borderRadius: '500px' }}
          >
            Sign Up
          </Button>
        </Box>

        <Typography className='promoOfferDisclaimer'>
          *Onetime offer only. Eligible for newly opted-in email addresses only. Not valid with other offers.
        </Typography>
      </Box>

      {/* ── Split Section 1: Text left / Image right ─────── */}
      <Box className='promoSplitSection'>
        <Container maxWidth='lg' className='promoSplitContainer'>

          {/* Left: text */}
          <Box className='promoSplitText'>
            <Typography variant='h3' className='promoSplitHeading'>
              From the chair to game time
            </Typography>

            <Typography variant='body1' className='promoSplitBody'>
              Your haircut sets the foundation. The right products help you finish strong. Through the end of April, select SexyHair products are on sale at participating Bob Mulet salons.
            </Typography>

            <MuiLink href='/promotions/haircare-sale' className='promoSplitLink' underline='hover'>
              Learn more &rarr;
            </MuiLink>
          </Box>

          {/* Right: image */}
          <Box className='promoSplitImageBox'>
            <Image
              src='/images/salon/sexyhair_sale2026.jpg'
              alt='Promotions image'
              fill
              className='promoSplitImage'
            />
          </Box>

        </Container>
      </Box>

      {/* ── Split Section 2: Image left / Text right ─────── */}
      <Box className='promoSplitSectionAlt'>
        <Container maxWidth='lg' className='promoSplitContainerReverse'>

          {/* Left: image */}
          <Box className='promoSplitImageBox'>
            <Image
              src='/images/salon/MMlogo2026.jpg'
              alt='Men haircare services'
              fill
              className='promoSplitImage'
            />
          </Box>

          {/* Right: text */}
          <Box className='promoSplitText'>
            <Typography variant='h3' className='promoSplitHeading'>
              The best time of the year is almost here
            </Typography>

            <Typography variant='body1' className='promoSplitBody'>
              College hoops fans: We get that March (okay, and the first week of April 😉) is your favorite month, and as the official hair salon of March Madness, we’ve got big plans to help make it even greater.
            </Typography>

            <MuiLink href='/promotions/ncaa' className='promoSplitLink' underline='hover'>
              Learn more &rarr;
            </MuiLink>
          </Box>

        </Container>
      </Box>

      {/* ── Split Section 3: Text left / Image right ─────── */}
      <Box className='promoSplitSection'>
        <Container maxWidth='lg' className='promoSplitContainer'>

          {/* Left: text */}
          <Box className='promoSplitText'>
            <Typography variant='h3' className='promoSplitHeading'>
              Senior discounts at Bob Mulet
            </Typography>

            <Typography variant='body1' className='promoSplitBody'>
              Bob Mulet salons offer great savings for seniors ages 65 and older all year long—no coupon needed!
            </Typography>

            <MuiLink href='/promotions/senior-discounts' className='promoSplitLink' underline='hover'>
              Learn more &rarr;
            </MuiLink>
          </Box>

          {/* Right: image */}
          <Box className='promoSplitImageBox'>
            <Image
              src='/images/salon/greatClips-seniors-promotion-hero.jpg'
              alt='Senior promotion'
              fill
              className='promoSplitImage'
            />
          </Box>

        </Container>
      </Box>

      {/* ── Split Section 4: Image left / Text right ─────── */}
      <Box className='promoSplitSectionAlt'>
        <Container maxWidth='lg' className='promoSplitContainerReverse'>

          {/* Left: image */}
          <Box className='promoSplitImageBox'>
            <Image
              src='/images/salon/nhlpromonew.jpg'
              alt='Kids haircut'
              fill
              className='promoSplitImage'
            />
          </Box>

          {/* Right: text */}
          <Box className='promoSplitText'>
            <Typography variant='h3' className='promoSplitHeading'>
              Official Hair Salon of the NHL®
            </Typography>

            <Typography variant='body1' className='promoSplitBody'>
              We gave away two tickets to the 2025 Stanley Cup Playoffs, plus other great prizes. This sweepstakes may be over, but you can always get a great flow at Bob Mulet without a big hit to your wallet.
            </Typography>

            <MuiLink href='/promotions/nhl' className='promoSplitLink' underline='hover'>
              Learn more &rarr;
            </MuiLink>
          </Box>

        </Container>
      </Box>

      {/* ── Split Section 5: Text left / Image right ─────── */}
      <Box className='promoSplitSection'>
        <Container maxWidth='lg' className='promoSplitContainer'>

          {/* Left: text */}
          <Box className='promoSplitText'>
            <Typography variant='h3' className='promoSplitHeading'>
              We’re all in for the College Football Playoff!
            </Typography>

            <Typography variant='body1' className='promoSplitBody'>
              As an official sponsor of the College Football Playoff, we’re pumped to help fans get game-ready with a great haircut from Bob Mulet®.
            </Typography>

            <MuiLink href='/promotions/college-football-playoff' className='promoSplitLink' underline='hover'>
              Learn more &rarr;
            </MuiLink>
          </Box>

          {/* Right: image */}
          <Box className='promoSplitImageBox'>
            <Image
              src='/images/salon/CFP_interim_hero.jpg'
              alt='Hair care products'
              fill
              className='promoSplitImage'
            />
          </Box>

        </Container>
      </Box>

      {/* ── FAQ Banner ─────────────────────────────────────────── */}
      <Box className='promoFaqSection'>
        <Box className='promoFaqCard'>
          <Typography variant='h3' className='promoFaqHeading'>
            Additional coupons may be available at your local salon
          </Typography>

          <Typography variant='body1' className='promoFaqText'>
            Bob Mulet salons are independently owned and operated franchised businesses, so most sales and coupons are locally created and are valid on an individual market, city or salon level.
          </Typography>

          <Typography variant='body1' className='promoFaqText'>
            Bob Mulet coupons will state where they are accepted and when they expire. You can also check with your local salon to see what promotions are currently available!
          </Typography>

          <Button
            variant='contained'
            size='large'
            href='/support/faqs'
            className='promoFaqButton'
          >
            More FAQs
          </Button>
        </Box>
      </Box>

      <Box className='footerWrapper'>
        <FooterContent />
      </Box>
    </Box>
  )
}

