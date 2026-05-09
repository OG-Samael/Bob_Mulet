import Image from 'next/image'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import dynamic from 'next/dynamic'

import './ncaa.css'

const FooterContent = dynamic(() => import('@/components/layout/horizontal/FooterContent'), {
  loading: () => <Box sx={{ height: 200 }} />
})

export default function Page() {
  return (
    <Box className='ncaaContainer'>

      {/* ── Hero: Image left / Text right ───────────────── */}
      <Box className='ncaaHeroSection'>

        {/* Left: image */}
        <Box className='ncaaHeroImageBox'>
          <Image
            src='/images/salon/gc-home-clipNotes.png'
            alt='NCAA Tournament'
            width={520}
            height={420}
            priority
            className='ncaaHeroImage'
          />
        </Box>

        {/* Right: text */}
        <Box className='ncaaHeroText'>
          <Typography className='ncaaSubHeading'>
            Partnership
          </Typography>

          <Typography variant='h1' className='ncaaHeading'>
            Official Hair Salon of March Madness®
          </Typography>
        </Box>

      </Box>

      {/* ── Green section: Text + Button left / Image right ─── */}
      <Box className='ncaaGreenSection'>

        {/* Left: heading + text + button */}
        <Box className='ncaaGreenLeft'>
          <Typography variant='h3' className='ncaaGreenHeading'>
            Get your hair in shape for the tournament
          </Typography>
          <Typography variant='body1' className='ncaaGreenText'>
            March Madness will be here before you know it, and if you want to look as tournament-ready as you feel, now’s the time to get in for a haircut at your local Bob Mulet® salon. Download the Bob Mulet® app to score the look you love faster—and be the first to know about exciting offers during the Big Dance®.
          </Typography>

          <Button
            variant='contained'
            size='large'
            href='/services/check-in'
            sx={{ borderRadius: '500px', mt: 2, backgroundColor: 'white', color: '#2e7d32', fontWeight: 'bold' }}
          >
            Download the App
          </Button>
        </Box>

        {/* Right: image */}
        <Box className='ncaaGreenImage'>
          <Image
            src='/images/salon/gc-home-oci-woman-with-phone.png'
            alt='Bob Mulet App'
            fill
            className='ncaaGreenImg'
          />
        </Box>

      </Box>

      {/* ── White section: Text left / Image right ────────── */}
      <Box className='ncaaWhiteSection'>

        {/* Left: text */}
        <Box className='ncaaWhiteLeft'>
          <Typography className='ncaaWhiteSubHeading'>
            From our blog
          </Typography>

          <Typography variant='h3' className='ncaaWhiteHeading'>
            5 Hairstyling Tricks for Tournament Season
          </Typography>

          <Typography variant='body1' className='ncaaWhiteText'>
            With these style tips, your couch-side look will be good enough to compete for March Madness® greatness.
          </Typography>

          <Button
            variant='contained'
            size='large'
            href='/services/blog'
            sx={{ borderRadius: '500px', mt: 2 }}
          >
            Read More
          </Button>
        </Box>

        {/* Right: image */}
        <Box className='ncaaWhiteImage'>
          <Image
            src='/images/salon/greatClips-home-kids-liza.png'
            alt='Team Pride Hairstyle'
            fill
            className='ncaaWhiteImg'
          />
        </Box>

      </Box>

      {/* ── Green gradient bottom section ─────────────────── */}
      <Box className='ncaaGreenBottomSection'>
        <Box className='ncaaGreenBottomCard'>
          {/* Symbol / Icon at top */}
          <Typography className='ncaaCardSymbol'>
            🏀
          </Typography>

          {/* Heading */}
          <Typography variant='h4' className='ncaaCardHeading'>
            Are you ready for the Big Dance?
          </Typography>

          {/* Text */}
          <Typography variant='body1' className='ncaaCardText'>
            Step up your hair game (for less!) at your local Bob Mulet salon.
          </Typography>

          {/* Button */}
          <Button
            variant='contained'
            size='large'
            href='/FindSalon'
            sx={{ borderRadius: '500px', alignSelf: 'flex-start', mt: 2 }}
          >
            Find a Salon
          </Button>
        </Box>
      </Box>

      <Box className='footerWrapper'>
        <FooterContent />
      </Box>
    </Box>
  )
}
