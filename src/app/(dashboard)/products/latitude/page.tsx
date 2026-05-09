'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'
import dynamic from 'next/dynamic'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import '../products-page.css'

import ProductSection from '@/components/products/ProductSection'

const FooterContent = dynamic(() => import('@/components/layout/horizontal/FooterContent'), {
  loading: () => <Box sx={{ height: 200 }} />
})

const RETURN_TO = '/products/latitude'

export default function Page() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data.products ?? []));
  }, []);

  return (
    <Box className='productsScrollContainer'>
      <Box className='productsHero'>
        <Container maxWidth='lg' className='pgHeroContainer'>
          <Box className='pgTwoColForward'>
            <Box className='pgCol'>
              <Typography variant='subtitle1' className='pgPrimaryLabel'>Haircare Products</Typography>
              <Typography variant='h3' className='pgBoldTitle'>Latitude by Bob Mulet</Typography>
              <Typography variant='body1' className='pgBodyMuted'>
                Discover the freedom to express your style. Latitude hair products are uniquely formulated to hydrate, strengthen, protect, restore, and volumize hair.
              </Typography>
              <Button variant='contained' size='large' href='/services/check-in' className='pgRoundBtn' sx={{ mt: 4 }}>
                Check In Now
              </Button>
            </Box>
            <Box className='pgImgBox43'>
              <Image src='/images/salon/firmStyleLatitude.jpg' alt='Latitude Products' fill className='pgCoverImg' />
            </Box>
          </Box>
        </Container>
      </Box>

      <Box className='productsCenterSection'>
        <Typography variant='h2' className='productsCenterTitle'>
          Premium performance at a great price
        </Typography>
        <Typography variant='body1' className='pgBodyMuted' sx={{ maxWidth: 700 }}>
          Latitude products deliver professional-quality results for every hair type, designed to hydrate, strengthen, and protect so your hair always looks its best.
        </Typography>
      </Box>

      <Container maxWidth='lg' className='pgSection'>
        <ProductSection
          title='Shampoo & Conditioner'
          categoryId='cat-latitude-shampoo'
          products={products}
          returnTo={RETURN_TO}
        />
      </Container>

      <Container maxWidth='lg' className='pgSection'>
        <ProductSection
          title='Styling'
          categoryId='cat-latitude-styling'
          products={products}
          returnTo={RETURN_TO}
        />
      </Container>

      <Box className='footerWrapper'>
        <FooterContent />
      </Box>
    </Box>
  )
}
