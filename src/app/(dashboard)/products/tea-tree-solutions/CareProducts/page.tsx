'use client'

import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import dynamic from 'next/dynamic'

import '../../products-page.css'

const FooterContent = dynamic(() => import('@/components/layout/horizontal/FooterContent'), {
  loading: () => <Box sx={{ height: 200 }} />
})

const expandIcon = (
  <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <polyline points='6 9 12 15 18 9' />
  </svg>
)

const accordionRows = [
  {
    label: 'Benefits',
    content:
      'Cleanses the scalp deeply while soothing irritation with the natural antibacterial power of tea tree oil. Leaves hair refreshed, balanced and infused with an invigorating tingle of spearmint and peppermint.'
  },
  {
    label: 'Instructions for Use',
    content:
      'Massage into wet hair and scalp, working into a rich lather. Allow the formula to sit for 1–2 minutes to let the tea tree oil activate, then rinse thoroughly. Use daily or as needed for a revitalizing cleanse.'
  },
  {
    label: 'Ingredients',
    content:
      'Aqua, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Melaleuca Alternifolia (Tea Tree) Leaf Oil, Mentha Spicata (Spearmint) Oil, Mentha Piperita (Peppermint) Oil, Panthenol, Glycerin, Citric Acid, Sodium Chloride.'
  }
]

export default function TeaTreeCareProductsPage() {
  return (
    <Box className='productsScrollContainer' sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Main product detail section */}
      <Container maxWidth='lg' sx={{ py: { xs: 6, md: 10 }, flex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            alignItems: { xs: 'stretch', md: 'center' },
            gap: { xs: 4, md: 8 }
          }}
        >
          {/* ── Left: content ───────────────────────────────── */}
          <Box sx={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
            {/* Sub heading */}
            <Typography variant='subtitle1' className='pgPrimaryLabel' sx={{ mb: 0 }}>
              Solutions by Bob Mulet
            </Typography>

            {/* Product name heading */}
            <Typography variant='h3' className='pgBoldTitle' sx={{ mb: 1 }}>
              Tea Tree Special Shampoo
            </Typography>

            {/* Intro text */}
            <Typography variant='body1' className='pgBodyMuted' sx={{ mb: 2 }}>
              A holistic blend of tea tree, spearmint and peppermint oils that cleanses, refreshes and energises the scalp. Formulated for all hair types, this invigorating shampoo turns your daily wash into a spa-like ritual.
            </Typography>

            {/* Accordion table — 1 column, 3 rows */}
            <Box sx={{ mb: 2 }}>
              {accordionRows.map((row, i) => (
                <Accordion key={i} disableGutters>
                  <AccordionSummary expandIcon={expandIcon}>
                    <Typography fontWeight={600}>{row.label}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant='body2' color='text.secondary' lineHeight={1.8}>
                      {row.content}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>

            {/* Text after table */}
            <Typography variant='body2' className='pgBodyMuted' sx={{ mb: 3 }}>
              Available exclusively at Bob Mulet salons and select online retailers. Ask your stylist which formula is right for your hair type.
            </Typography>

            {/* Action buttons */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              <Button
                variant='contained'
                size='large'
                href='/services/check-in'
                className='pgRoundBtn'
              >
                Find a Salon
              </Button>
              <Button
                variant='outlined'
                size='large'
                href='https://www.amazon.com'
                target='_blank'
                rel='noopener noreferrer'
                className='pgRoundBtn'
              >
                Buy it on Amazon
              </Button>
            </Box>
          </Box>

          {/* ── Right: image ────────────────────────────────── */}
          <Box
            sx={{
              flex: 1,
              minWidth: 0,
              position: 'relative',
              aspectRatio: '4 / 3',
              borderRadius: 4,
              overflow: 'hidden'
            }}
          >
            <Image
              src='/images/salon/greatClips-products-teaTreeSolutions.jpg'
              alt='Tea Tree Special Shampoo'
              fill
              className='pgCoverImg'
            />
          </Box>
        </Box>
      </Container>

      <Box className='footerWrapper' sx={{ mt: 'auto' }}>
        <FooterContent />
      </Box>
    </Box>
  )
}
