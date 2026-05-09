import Image from 'next/image'
import dynamic from 'next/dynamic'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'


import './senior-discounts.css'

const FooterContent = dynamic(() => import('@/components/layout/horizontal/FooterContent'), {
  loading: () => <Box sx={{ height: 200 }} />
})

export default function Page() {
  return (
    <Box className='seniorContainer'>

      {/* ── Hero: Image left / Text right ───────────────── */}
      <Box className='seniorHeroSection'>

        {/* Left: image */}
        <Box className='seniorHeroImageBox'>
          <Image
            src='/images/salon/greatClips-seniors-promotion-hero.jpg'
            alt='Senior haircut'
            width={520}
            height={420}
            priority
            className='seniorHeroImage'
          />
        </Box>

        {/* Right: text */}
        <Box className='seniorHeroText'>
          <Typography className='seniorSubHeading'>
            Promotions
          </Typography>

          <Typography variant='h1' className='seniorHeading'>
            Senior Discounts
          </Typography>
        </Box>

      </Box>

      {/* ── Green two-column section ─────────────────────────── */}
      <Box className='seniorGreenSection'>

        {/* Left: heading + text */}
        <Box className='seniorGreenLeft'>
          <Typography variant='h3' className='seniorGreenHeading'>
            GREAT® savings for seniors
          </Typography>
          <Typography variant='body1' className='seniorGreenText'>
            With age comes great wisdom, great experience and great discounts! At Bob Mulet, seniors ages 65 and older enjoy extra savings on our already low haircut prices—no coupon needed. When you check out, just let your stylist know you qualify and they’ll make sure you get our senior haircut pricing.*
          </Typography>
          <Typography variant='body1' className='seniorGreenText'>
            *At participating salons only. Senior discounts may vary by location. Discount does not apply to additional services, like styling or hair products.
          </Typography>
        </Box>

        {/* Right: white card with bullet points */}
        <Box className='seniorGreenCard'>
          <Typography variant='h5' className='seniorGreenCardHeading'>
            The Bob Mulet senior discount
          </Typography>

          <List className='seniorGreenList' disablePadding>
            {[
              'Anyone age 65 and older qualifies',
              'Receive an everyday great price on your haircut',
              'Available year-round',
            ].map(item => (
              <ListItem key={item} className='seniorGreenListItem' disableGutters>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>

          <Button
            variant='contained'
            size='large'
            href='/FindSalon'
            sx={{ borderRadius: '500px', mt: 1 }}
          >
            Find a Salon
          </Button>
        </Box>

      </Box>

      {/* ── White split box ─────────────────────────────────────── */}
      <Box className='seniorWhiteBox'>

        {/* Left: text */}
        <Box className='seniorWhiteBoxText'>
          <Typography className='seniorWhiteSubHeading'>
            From our blog
          </Typography>

          <Typography variant='h4' className='seniorWhiteHeading'>
            5 simple hairstyles for seniors to achieve volume
          </Typography>

          <Typography variant='body1' className='seniorWhiteBody'>
            Hair texture and volume can change throughout your life, and if you have finer hair now than you used to, styling it might be a challenge. But it doesn’t have to be! Try out some of these hairstyles dedicated to changing your hair’s texture and increasing volume.
          </Typography>

          <Button
            variant='contained'
            size='large'
            href='/services/blog'
            sx={{ borderRadius: '500px' }}
          >
            Read the Blog
          </Button>
        </Box>

        {/* Right: image */}
        <Box className='seniorWhiteBoxImage'>
          <Image
            src='/images/salon/greatClips-home-seniors-ron.png'
            alt='Senior customer'
            fill
            className='seniorWhiteBoxImg'
          />
        </Box>

      </Box>

      {/* ── Full-width green section with 3 cards ───────────────── */}
      <Box className='seniorFullGreenSection'>
        <Typography variant='h3' className='seniorFullGreenHeading'>
          We make it easy to look and feel GREAT®
        </Typography>
        <Typography variant='body1' className='seniorFullGreenSubtext'>
          In addition to providing great savings for Seniors, we offer a variety of other ways to ensure you enjoy your visit with us.
        </Typography>

        <Box className='seniorCardRow'>
          {[
            {
              heading: 'Save time by checking in online',
              text: 'Spend your time waiting wherever you want with Online Check-In—the contactless, do-it-from-anywhere way to reserve your spot in line.',
              btn: 'Find a Salon',
              link: '/FindSalon',
            },
            {
              heading: 'Bob Mulet® app',
              text: 'Check in on the go with the Bob Mulet® app. Add your name to the waitlist and see your real-time estimated wait.',
              btn: 'Get the App',
              link: '/services/check-in',
            },
            {
              heading: 'Get a great haircut, every time',
              text: 'Get the haircut you want every time you step into one of our salons with Clip Notes—detailed notes about your haircut preferences, updated each visit.',
              btn: 'Learn More',
              link: '/services/clip-notes',
            },
          ].map(card => (
            <Box key={card.heading} className='seniorCard'>
              <Typography variant='h6' className='seniorCardHeading'>
                {card.heading}
              </Typography>
              <Typography variant='body2' className='seniorCardText'>
                {card.text}
              </Typography>
              <Button
                variant='outlined'
                size='medium'
                href={card.link}
                sx={{ borderRadius: '500px', mt: 'auto' }}
              >
                {card.btn}
              </Button>
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

