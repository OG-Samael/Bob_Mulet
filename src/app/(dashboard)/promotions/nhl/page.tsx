import Image from 'next/image'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import dynamic from 'next/dynamic'

import './nhl.css'

const FooterContent = dynamic(() => import('@/components/layout/horizontal/FooterContent'), {
  loading: () => <Box sx={{ height: 200 }} />
})

export default function Page() {
  return (
    <Box className='nhlContainer'>

      {/* ── Hero: Image left / Text right ───────────────── */}
      <Box className='nhlHeroSection'>

        {/* Left: image */}
        <Box className='nhlHeroImageBox'>
          <Image
            src='/images/salon/gc-home-clipNotes.png'
            alt='NHL Season'
            width={520}
            height={420}
            priority
            className='nhlHeroImage'
          />
        </Box>

        {/* Right: text */}
        <Box className='nhlHeroText'>
          <Typography className='nhlSubHeading'>
            Partnership
          </Typography>

          <Typography variant='h1' className='nhlHeading'>
            Official Hair Salon of the NHL®
          </Typography>
        </Box>

      </Box>

      {/* ── Green section (REVERSED): Image left / Text + Button right ─── */}
      <Box className='nhlGreenSection'>

        {/* Left: image */}
        <Box className='nhlGreenImage'>
          <Image
            src='/images/salon/gc-home-oci-woman-with-phone.png'
            alt='Bob Mulet App'
            fill
            className='nhlGreenImg'
          />
        </Box>

        {/* Right: text + button */}
        <Box className='nhlGreenRight'>
          <Typography variant='h3' className='nhlGreenHeading'>
            Don't get checked by high prices
          </Typography>
          <Typography variant='body1' className='nhlGreenText'>
            Get a great flow without a big hit to your wallet. Use Online Check-in for an affordable and convenient haircut at a Bob Mulet® salon near you.
          </Typography>
          <Button
            variant='contained'
            size='large'
            href='/FindSalon'
            sx={{ borderRadius: '500px', mt: 2, backgroundColor: 'white', color: '#2e7d32', fontWeight: 'bold' }}
          >
            Find a Salon
          </Button>
        </Box>

      </Box>

      {/* ── Videos Section ─────────────────────────────── */}
      <Box className='nhlVideosSection'>
        <Box className='nhlVideosGrid'>
          {/* Video 1 - Phone */}
          <Box className='nhlVideoCard nhlVideoCardPhone'>
            <Box className='nhlVideoBox'>
              <video
                controls
                className='nhlVideoPlayer'
                poster='/images/salon/GC_8043_BTS_HomePg_BTS_600x388_findyournextgreatcut.jpg'
              >
                <source src='/Video/sample-video.mp4' type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </Box>
            <Typography variant='h6' className='nhlVideoBoldText'>
              Matthew Tkachuk Scores a Haircut at Bob Mulet
            </Typography>
          </Box>

          {/* Video 2 - Phone */}
          <Box className='nhlVideoCard nhlVideoCardPhone'>
            <Box className='nhlVideoBox'>
              <video
                controls
                className='nhlVideoPlayer'
                poster='/images/salon/GC_8043_BTS_HomePg_BTS_600x388_workgreatly.jpg'
              >
                <source src='/Video/sample-video.mp4' type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </Box>
            <Typography variant='h6' className='nhlVideoBoldText'>
              NHL® Player Matthew Tkachuk Uses His Checking Skills
            </Typography>
          </Box>

          {/* Video 3 - Device (Horizontal) */}
          <Box className='nhlVideoCard nhlVideoCardDevice'>
            <Box className='nhlVideoBox'>
              <video
                controls
                className='nhlVideoPlayer'
                poster='/images/salon/GC_8043_BTS_HomePg_BTS_600x388_findyournextgreatcut.jpg'
              >
                <source src='/Video/sample-video.mp4' type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </Box>
            <Typography variant='h6' className='nhlVideoBoldText'>
              NHL® Winter Classic Flow Check
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* ── Hub section: Text left / Image right ────────── */}
      <Box className='nhlHubSection'>

        {/* Left: text */}
        <Box className='nhlHubLeft'>
          <Typography className='nhlHubSubHeading'>
            from our blog
          </Typography>

          <Typography variant='h3' className='nhlHubHeading'>
            Find the flow that fits you
          </Typography>

          <Typography variant='body1' className='nhlHubText'>
            Epic Hockey Hair is all about celebrating your own personal style—luckily, we're here to help you find your legendhairy look.
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
        <Box className='nhlHubImage'>
          <Image
            src='/images/salon/greatClips-home-women-sarah.png'
            alt='Hockey Fan Style'
            fill
            className='nhlHubImg'
          />
        </Box>

      </Box>
      <Typography variant='body1' className='nhlHubText'>
          NHL, the NHL Shield and the word mark and image of the Stanley Cup are registered trademarks and the Stanley Cup Playoffs logo is a trademark of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © 2025 NHL. All Rights Reserved..
      </Typography>
      <Typography variant='body1' className='nhlHubText'>
          NHLPA and the NHLPA logo are registered trademarks of the National Hockey League Players’ Association. © NHLPA. All Rights Reserved.
      </Typography>      <Box className='footerWrapper'>
        <FooterContent />
      </Box>    </Box>
  )
}
