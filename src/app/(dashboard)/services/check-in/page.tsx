import Image from 'next/image'
import dynamic from 'next/dynamic'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'

import './check-in-services.css'

const FooterContent = dynamic(() => import('@/components/layout/horizontal/FooterContent'), {
  loading: () => <Box sx={{ height: 200 }} />
})

export default function Page() {
  return (
    <Box className='checkInScrollContainer'>
      {/* Hero two-col */}
      <Container maxWidth='lg' className='pgSection'>
        <Box className='pgTwoCol'>
          <Box className='pgCol'>
            <Typography variant='h4' className='checkInPrimaryLabel'>
              Fast, easy, convenient
            </Typography>
            <Typography variant='h1' className='pgBoldTitle'>
              Online Check-In
            </Typography>
            <Typography variant='body1' className='pgBodyMuted'>
              Make the most of your day with Online Check-In. Find a salon near you, see local wait times and add your
              name to the waitlist from anywhere.
            </Typography>
            <Button variant='contained' size='large' className='pgRoundBtn' href='/FindSalon' sx={{ mt: 4 }}>
              Find a Salon
            </Button>
          </Box>
          <Box className='pgImgBox'>
            <Image src='/images/salon/ocipagehero.jpg' alt='Online Check-In' fill className='pgCoverImg' />
          </Box>
        </Box>
      </Container>

      {/* Logo + description */}
      <Container maxWidth='lg' className='pgSectionCenter'>
        <Box className='checkInLogoBox'>
          <Image
            src='/images/salon/greatClips-intro-oci-logo.jpg'
            alt='Online Check-In Logo'
            fill
            className='pgContainImg'
          />
        </Box>
        <Typography variant='h3' className='pgBoldTitle'>
          Fast, convenient and GREAT
        </Typography>
        <Typography variant='body1' className='pgBodyMuted' sx={{ maxWidth: 800, mx: 'auto' }}>
          Online Check-In is the fastest, easiest way to add your name to the waitlist. Find a nearby salon, view the
          wait times, select the Check In pin, grab your spot in line and just like that you are all set for your next
          great haircut.
        </Typography>
      </Container>

      {/* Website check-in steps */}
      <Container maxWidth='lg' className='pgSection'>
        <Typography variant='h3' className='pgBoldTitle' sx={{ mb: 6, textAlign: 'center' }}>
          How to check in on the Bob Mulet website
        </Typography>
        <Box className='pgTwoColForward'>
          <Box className='pgImgBox'>
            <Image src='/images/salon/desktopandmobile.jpg' alt='Desktop and Mobile' fill className='pgCoverImg' />
          </Box>
          <Box className='pgCol'>
            <Typography variant='body1' className='pgBodyMuted' sx={{ mb: 2 }}>
              You can check in online from any device that has internet access, like a computer or tablet.
            </Typography>
            <Box component='ul' className='checkInList'>
              {[
                'Click Find a Salon in the header (or anywhere on the Bob Mulet website).',
                'If you have location services enabled, you’ll see a map with salons in your area and their wait times. Click on the salon location you prefer.',
                'Tell us your name, how many people will be getting haircuts and your phone number.',
                'If you’d like to receive a text when your estimated wait time reaches 15 minutes, be sure to select that option.',
                'Click Check In.'
              ].map((item, index) => (
                <Typography component='li' variant='body1' key={index} className='checkInListItem'>
                  {item}
                </Typography>
              ))}
            </Box>
            <Button variant='contained' size='large' className='pgRoundBtn' href='/FindSalon'>
              Find a Salon
            </Button>
          </Box>
        </Box>
      </Container>

      {/* App check-in steps */}
      <Container maxWidth='lg' className='pgSection'>
        <Typography variant='h3' className='pgBoldTitle' sx={{ mb: 6, textAlign: 'center' }}>
          How to check in on the Bob Mulet app
        </Typography>
        <Box className='pgTwoColForward'>
          <Box className='pgImgBox'>
            <Image src='/images/salon/appMobileGray.png' alt='App Mobile' fill className='pgCoverImg' />
          </Box>
          <Box className='pgCol'>
            <Typography variant='body1' className='pgBodyMuted' sx={{ mb: 2 }}>
              You can check in using the Bob Mulet app, which is available for iOS and Android.
            </Typography>
            <Box component='ul' className='checkInList'>
              {[
                'Open the Bob Mulet app.',
                'You can check in directly from the list of salons on your home screen or tap View map or the search icon to see more salons.',
                'Tap Check In for the salon you’d like to visit.',
                'Tell us your name, how many people will be getting haircuts and your phone number.',
                'If you’d like to receive a notification when your estimated wait time reaches 15 minutes, be sure to select either push notification or text.',
                'Tap Check In.'
              ].map((item, index) => (
                <Typography component='li' variant='body1' key={index} className='checkInListItem'>
                  {item}
                </Typography>
              ))}
            </Box>
            <Button variant='contained' size='large' className='pgRoundBtn' href='/services/check-in'>
              Learn more
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Questions CTA */}
      <Box className='checkInLightSection'>
        <Container maxWidth='lg'>
          <Box className='checkInCTACard'>
            <Typography variant='h3' className='pgBoldTitle'>
              Questions?
            </Typography>
            <Typography variant='body1' className='pgBodyMuted' sx={{ mb: 4 }}>
              Visit our Customer Service page to find answers to commonly asked questions about Bob Mulet and to learn
              how to contact us.
            </Typography>
            <Button variant='contained' size='large' className='pgRoundBtn' href='/support/help'>
              Customer Service
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
