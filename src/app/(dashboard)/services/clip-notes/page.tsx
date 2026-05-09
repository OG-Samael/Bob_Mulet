import Image from 'next/image'

import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import dynamic from 'next/dynamic'

import './clip-notes-services.css'

const FooterContent = dynamic(() => import('@/components/layout/horizontal/FooterContent'), {
  loading: () => <Box sx={{ height: 200 }} />
})

export default function Page() {
  return (
    <Box className='clipNotesScrollContainer'>
      {/* Hero two-col */}
      <Container maxWidth='lg' className='pgSection'>
        <Box className='pgTwoCol'>
          <Box className='pgCol'>
            <Typography variant='h4' className='pgPrimaryLabel'>
              Stylist Notes
            </Typography>
            <Typography variant='h1' className='pgBoldTitle'>
              Clip Notes&reg;
            </Typography>
            <Typography variant='body1' className='pgBodyMuted' sx={{ mb: 4, fontSize: '1.1rem' }}>
              Get the haircut you want every time you step into one of our salons with Clip Notes. Clip Notes are
              detailed notes that your stylist enters into your customer profile about your hair, type of haircut, shape,
              texture, preferred length, favorite products and more.
            </Typography>
            <Button variant='contained' size='large' className='pgRoundBtn' href='/FindSalon'>
              Find a Salon
            </Button>
          </Box>
          <Box className='clipNotesVideoBox'>
            <iframe
              width='100%'
              height='100%'
              src='https://www.youtube.com/embed/HsGfnPffDwM'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
              className='clipNotesVideoFrame'
            />
          </Box>
        </Box>
      </Container>

      {/* Logo + description */}
      <Container maxWidth='lg' className='pgSectionCenter'>
        <Box className='clipNotesLogoBox'>
          <Image src='/images/salon/GC_Clip_Notes_4C_horz+2.png' alt='Clip Notes' fill className='pgContainImg' />
        </Box>
        <Typography variant='h3' className='pgBoldTitle'>
          We know your cut
        </Typography>
        <Typography variant='body1' className='pgBodyMuted' sx={{ maxWidth: 800, mx: 'auto', fontSize: '1.1rem' }}>
          Your Clip Notes are updated every time you come into any one of our salons for a haircut, so all your stylist
          has to do is pull them up and they&apos;ll know exactly what you want. Every single time.
        </Typography>
      </Container>

      {/* Any stylist */}
      <Container maxWidth='lg' className='pgSection'>
        <Box className='pgTwoColForward'>
          <Box className='pgImgBox'>
            <Image src='/images/salon/greatClips-haricut-services-1.jpg' alt='Haircut Services' fill className='pgCoverImg' />
          </Box>
          <Box className='pgCol'>
            <Typography variant='h3' className='pgBoldTitle'>
              Any stylist, every time
            </Typography>
            <Typography variant='body1' className='pgBodyMuted' sx={{ fontSize: '1.1rem' }}>
              Your Clip Notes are part of your Bob Mulet customer profile, which means that any stylist can see them
              every time you get a haircut. This means you can see any stylist and get the same great cut.
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Speak stylist */}
      <Container maxWidth='lg' className='pgSection'>
        <Box className='pgTwoCol'>
          <Box className='pgCol'>
            <Typography variant='h3' className='pgBoldTitle'>
              Clip Notes &ldquo;speak stylist&rdquo; for you
            </Typography>
            <Typography variant='body1' className='pgBodyMuted' sx={{ fontSize: '1.1rem' }}>
              Your stylist will enter Clip Notes about your haircut in a way that any stylist will understand. So you
              don&apos;t need to know the difference between a high fade and low fade or remember what a weight line is.
            </Typography>
          </Box>
          <Box className='pgImgBox'>
            <Image src='/images/salon/fe9378b05270a71795cfd75746b514ff.png' alt='Clip Notes' fill className='pgCoverImg' />
          </Box>
        </Box>
      </Container>

      {/* Updated cut to cut */}
      <Container maxWidth='lg' className='pgSection'>
        <Box className='pgTwoColForward'>
          <Box className='pgImgBox'>
            <Image src='/images/salon/1be4c94f432053f857837f87e84e2fd1.jpg' alt='Clip Notes' fill className='pgCoverImg' />
          </Box>
          <Box className='pgCol'>
            <Typography variant='h3' className='pgBoldTitle'>
              Updated from one cut to the next
            </Typography>
            <Typography variant='body1' className='pgBodyMuted' sx={{ fontSize: '1.1rem' }}>
              Clip Notes are updated every time. So whether you have your favorite go-to cut or love to mix it up, your
              stylist can review your Clip Notes, ask what you want and know exactly what to do for you.
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Kid-friendly */}
      <Container maxWidth='lg' className='pgSection'>
        <Box className='pgTwoCol'>
          <Box className='pgCol'>
            <Typography variant='h3' className='pgBoldTitle'>
              Clip Notes are kid-friendly (like us)
            </Typography>
            <Typography variant='body1' className='pgBodyMuted' sx={{ fontSize: '1.1rem' }}>
              Clip Notes gives you one less thing to worry about when it comes to your kids&apos; haircuts. We record
              the details of all their preferences, so your little ones get the right cut every time.
            </Typography>
          </Box>
          <Box className='pgImgBox'>
            <Image src='/images/salon/de4cc3d73aa382e026113f2d208cff86.png' alt='Clip Notes' fill className='pgCoverImg' />
          </Box>
        </Box>
      </Container>

      {/* CTA */}
      <Box className='clipNotesLightSection'>
        <Container maxWidth='lg'>
          <Box className='clipNotesCTACard'>
            <Box className='clipNotesIconBox'>
              <Image src='/images/illustrations/Scissors.png' alt='Scissors' fill className='pgContainImg' />
            </Box>
            <Typography variant='h3' className='pgBoldTitle'>
              Less wait, more GREAT&reg;
            </Typography>
            <Typography variant='body1' className='pgBodyMuted' sx={{ mb: 4, fontSize: '1.1rem' }}>
              Ready for your next great haircut? Then Bob Mulet is ready for you! Use Online Check-In now to find a
              salon and reserve your spot in line.
            </Typography>
            <Button variant='contained' size='large' className='pgRoundBtn' href='/FindSalon'>
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
