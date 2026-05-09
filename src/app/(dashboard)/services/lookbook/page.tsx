import Image from 'next/image'
import dynamic from 'next/dynamic'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'

import './lookbook-services.css'
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
  const all = await readJSON<Hairstyle[]>('hairstyles.json')
  const menStyles = all.filter(h => h.category === 'men')
  const womenStyles = all.filter(h => h.category === 'women')
  const kidsStyles = all.filter(h => h.category === 'kids')
  const seniorMaleStyles = all.filter(h => h.category === 'senior-male')
  const seniorFemaleStyles = all.filter(h => h.category === 'senior-female')
  return (
    <Box className='lookbookScrollContainer'>
      {/* Hero */}
      <Box className='lookbookHero'>
        <Image
          src='/images/pages/GreenScreen.png'
          alt='Green Screen Background'
          fill
          className='pgHeroOverlayImg'
          priority
        />
        <Container maxWidth='lg' className='pgHeroContainer'>
          <Box className='pgTwoColForward'>
            <Box className='lookbookHeroWhiteBox'>
              <Typography variant='subtitle1' className='lookbookPrimaryLabel'>
                Lookbook
              </Typography>
              <Typography variant='h3' className='pgBoldTitle'>
                Find your new favorite haircut
              </Typography>
              <Typography variant='body1' className='pgBodyMuted'>
                Browse our lookbook to get inspired, see how to style various haircuts at home and learn what to tell
                your stylist to get the look you want.
              </Typography>
            </Box>
            <Box className='pgImgBox43'>
              <Image
                src='/images/salon/Lookbook-OverviewHero.png'
                alt='Lookbook Overview'
                fill
                className='pgCoverImg'
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Men */}
      <Container maxWidth='lg'>
        <Typography variant='h3' className='lookbookSectionTitle'>Men&apos;s haircuts</Typography>
      </Container>
      <Box className='pgScrollRow'>
        {menStyles.map((style) => (
          <Box key={style.id} className='pgScrollCard'>
            <Box className='pgScrollCardImgBox'>
              <Image src={style.featureImage} alt={style.title} fill className='pgCoverImg' />
            </Box>
            <Box className='pgScrollCardBody'>
              <Typography variant='h6' className='pgBoldTitle'>{style.title}</Typography>
              <Typography variant='body2' className='pgBodyMuted' sx={{ mb: 2, flexGrow: 1 }}>{style.tags.join(' • ')}</Typography>
              <Link href={`/hairstyles/${style.id}`} underline='hover' className='lookbookCardCheckout'>Check it out</Link>
            </Box>
          </Box>
        ))}
        <Box className='pgScrollCard'>
          <Link href='/hairstyles/add' className='lookbookAddLink'>
            <Box className='pgScrollCardBody' sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', border: '2px dashed #ccc', borderRadius: 3, width: '100%', minHeight: 260 }}>
              <Typography variant='h2' color='primary' fontWeight={300}>+</Typography>
              <Typography variant='body2'>Add Hairstyle</Typography>
            </Box>
          </Link>
        </Box>
      </Box>

      {/* Women */}
      <Container maxWidth='lg'>
        <Typography variant='h3' className='lookbookSectionTitle'>Women&apos;s haircuts</Typography>
      </Container>
      <Box className='pgScrollRow'>
        {womenStyles.map((style) => (
          <Box key={style.id} className='pgScrollCard'>
            <Box className='pgScrollCardImgBox'>
              <Image src={style.featureImage} alt={style.title} fill className='pgCoverImg' />
            </Box>
            <Box className='pgScrollCardBody'>
              <Typography variant='h6' className='pgBoldTitle'>{style.title}</Typography>
              <Typography variant='body2' className='pgBodyMuted' sx={{ mb: 2, flexGrow: 1 }}>{style.tags.join(' • ')}</Typography>
              <Link href={`/hairstyles/${style.id}`} underline='hover' className='lookbookCardCheckout'>Check it out</Link>
            </Box>
          </Box>
        ))}
        <Box className='pgScrollCard'>
          <Link href='/hairstyles/add' className='lookbookAddLink'>
            <Box className='pgScrollCardBody' sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', border: '2px dashed #ccc', borderRadius: 3, width: '100%', minHeight: 260 }}>
              <Typography variant='h2' color='primary' fontWeight={300}>+</Typography>
              <Typography variant='body2'>Add Hairstyle</Typography>
            </Box>
          </Link>
        </Box>
      </Box>

      {/* Kids */}
      <Container maxWidth='lg'>
        <Typography variant='h3' className='lookbookSectionTitle'>Kids&apos; haircuts</Typography>
      </Container>
      <Box className='pgScrollRow'>
        {kidsStyles.map((style) => (
          <Box key={style.id} className='pgScrollCard'>
            <Box className='pgScrollCardImgBox'>
              <Image src={style.featureImage} alt={style.title} fill className='pgCoverImg' />
            </Box>
            <Box className='pgScrollCardBody'>
              <Typography variant='h6' className='pgBoldTitle'>{style.title}</Typography>
              <Typography variant='body2' className='pgBodyMuted' sx={{ mb: 2, flexGrow: 1 }}>{style.tags.join(' • ')}</Typography>
              <Link href={`/hairstyles/${style.id}`} underline='hover' className='lookbookCardCheckout'>Check it out</Link>
            </Box>
          </Box>
        ))}
        <Box className='pgScrollCard'>
          <Link href='/hairstyles/add' className='lookbookAddLink'>
            <Box className='pgScrollCardBody' sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', border: '2px dashed #ccc', borderRadius: 3, width: '100%', minHeight: 260 }}>
              <Typography variant='h2' color='primary' fontWeight={300}>+</Typography>
              <Typography variant='body2'>Add Hairstyle</Typography>
            </Box>
          </Link>
        </Box>
      </Box>
      {/* Senior Male */}
      <Container maxWidth='lg'>
        <Typography variant='h3' className='lookbookSectionTitle'>Senior men&apos;s haircuts</Typography>
      </Container>
      <Box className='pgScrollRow'>
        {seniorMaleStyles.map((style) => (
          <Box key={style.id} className='pgScrollCard'>
            <Box className='pgScrollCardImgBox'>
              <Image src={style.featureImage} alt={style.title} fill className='pgCoverImg' />
            </Box>
            <Box className='pgScrollCardBody'>
              <Typography variant='h6' className='pgBoldTitle'>{style.title}</Typography>
              <Typography variant='body2' className='pgBodyMuted' sx={{ mb: 2, flexGrow: 1 }}>{style.tags.join(' • ')}</Typography>
              <Link href={`/hairstyles/${style.id}`} underline='hover' className='lookbookCardCheckout'>Check it out</Link>
            </Box>
          </Box>
        ))}
        <Box className='pgScrollCard'>
          <Link href='/hairstyles/add' className='lookbookAddLink'>
            <Box className='pgScrollCardBody' sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', border: '2px dashed #ccc', borderRadius: 3, width: '100%', minHeight: 260 }}>
              <Typography variant='h2' color='primary' fontWeight={300}>+</Typography>
              <Typography variant='body2'>Add Hairstyle</Typography>
            </Box>
          </Link>
        </Box>
      </Box>

      {/* Senior Female */}
      <Container maxWidth='lg'>
        <Typography variant='h3' className='lookbookSectionTitle'>Senior women&apos;s haircuts</Typography>
      </Container>
      <Box className='pgScrollRow'>
        {seniorFemaleStyles.map((style) => (
          <Box key={style.id} className='pgScrollCard'>
            <Box className='pgScrollCardImgBox'>
              <Image src={style.featureImage} alt={style.title} fill className='pgCoverImg' />
            </Box>
            <Box className='pgScrollCardBody'>
              <Typography variant='h6' className='pgBoldTitle'>{style.title}</Typography>
              <Typography variant='body2' className='pgBodyMuted' sx={{ mb: 2, flexGrow: 1 }}>{style.tags.join(' • ')}</Typography>
              <Link href={`/hairstyles/${style.id}`} underline='hover' className='lookbookCardCheckout'>Check it out</Link>
            </Box>
          </Box>
        ))}
        <Box className='pgScrollCard'>
          <Link href='/hairstyles/add' className='lookbookAddLink'>
            <Box className='pgScrollCardBody' sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', border: '2px dashed #ccc', borderRadius: 3, width: '100%', minHeight: 260 }}>
              <Typography variant='h2' color='primary' fontWeight={300}>+</Typography>
              <Typography variant='body2'>Add Hairstyle</Typography>
            </Box>
          </Link>
        </Box>
      </Box>

      <Box className='footerWrapper'>
        <FooterContent />
      </Box>
    </Box>
  )
}
