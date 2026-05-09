import Image from 'next/image'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import dynamic from 'next/dynamic'

import './college-football-playoff.css'

const FooterContent = dynamic(() => import('@/components/layout/horizontal/FooterContent'), {
  loading: () => <Box sx={{ height: 200 }} />
})

export default function Page() {
  return (
    <Box className='collegefootballContainer'>

      {/* ── Hero: Image left / Text right ───────────────── */}
      <Box className='collegefootballHeroSection'>

        {/* Left: image */}
        <Box className='collegefootballHeroImageBox'>
          <Image
            src='/images/salon/CFP_interim_hero.jpg'
            alt='College Football Playoff'
            width={520}
            height={420}
            priority
            className='collegefootballHeroImage'
          />
        </Box>

        {/* Right: text */}
        <Box className='collegefootballHeroText'>
          <Typography className='collegefootballSubHeading'>
            Paternership
          </Typography>

          <Typography variant='h1' className='collegefootballHeading'>
            Official Sponsor of the College Football Playoff®
          </Typography>
        </Box>

      </Box>

      {/* ── Video section: Text left / Video right ─────────── */}
      <Box className='collegefootballVideoSection'>

        {/* Left: heading + text */}
        <Box className='collegefootballVideoLeft'>
          <Typography variant='h3' className='collegefootballVideoHeading'>
            Get game-ready with Bob Mulet
          </Typography>
          <Typography variant='body1' className='collegefootballVideoText'>
            We helped fans sport winning haircuts throughout the 2025-26 season. Check out all the highlight-reel moments—both on the field and in our salons, by following @bobmulet on social media.
          </Typography>
        </Box>

        {/* Right: video player */}
        <Box className='collegefootballVideoBox'>
          <video
            controls
            width='100%'
            height='100%'
            className='collegefootballVideo'
            poster='/images/salon/GC_8043_BTS_HomePg_BTS_600x388_findyournextgreatcut.jpg'
          >
            <source src='/Video/sample-video.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </Box>

      </Box>

      {/* ── Green gradient bottom section ─────────────────── */}
      <Box className='collegefootballGreenSection'>
        <Box className='collegefootballGreenCard'>
          {/* Symbol / Icon at top */}
          <Typography className='collegefootballCardSymbol'>
            🏈
          </Typography>

          {/* Heading */}
          <Typography variant='h4' className='collegefootballCardHeading'>
            Are you ready for playoff season?
          </Typography>

          {/* Text */}
          <Typography variant='body1' className='collegefootballCardText'>
            Step up your hair game (for less!) at your local Bob Mulet salon.
          </Typography>

          {/* Button */}
          <Button
            variant='contained'
            size='large'
            href='/FindSalon'
            sx={{ borderRadius: '500px', alignSelf: 'center', mt: 2 }}
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
