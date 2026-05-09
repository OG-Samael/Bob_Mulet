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

const RETURN_TO = '/products/solution'

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
              <Typography variant='h3' className='pgBoldTitle'>Solutions by Bob Mulet</Typography>
              <Typography variant='body1' className='pgBodyMuted'>
                Solutions is our signature line of haircare and styling products created exclusively for Bob Mulet customers with stylists professional recommendations in mind.
              </Typography>
              <Button variant='contained' size='large' href='/services/check-in' className='pgRoundBtn' sx={{ mt: 4 }}>
                Check In Now
              </Button>
            </Box>
            <Box className='pgImgBox43'>
              <Image src='/images/salon/greatClips-products-solutions.jpg' alt='Solutions Products' fill className='pgCoverImg' />
            </Box>
          </Box>
        </Container>
      </Box>

      <Box className='productsCenterSection'>
        <Typography variant='h2' className='productsCenterTitle'>
          Salon-grade quality, made for you
        </Typography>
        <Typography variant='body1' className='pgBodyMuted' sx={{ maxWidth: 700 }}>
          Every Solutions product is developed with professional stylists to deliver the best results at home, from everyday shampoos to styling essentials.
        </Typography>
      </Box>

      <Container maxWidth='lg' className='pgSection'>
        <ProductSection
          title='Shampoo & Conditioner'
          categoryId='cat-solution-shampoo'
          products={products}
          returnTo={RETURN_TO}
        />
      </Container>

      <Container maxWidth='lg' className='pgSection'>
        <ProductSection
          title='Styling'
          categoryId='cat-solution-styling'
          products={products}
          returnTo={RETURN_TO}
        />
      </Container>

      <Container maxWidth='lg' className='pgSection'>
        <ProductSection
          title='Curl'
          categoryId='cat-solution-curl'
          products={products}
          returnTo={RETURN_TO}
        />
      </Container>

      <Container maxWidth='lg' className='pgSection'>
        <ProductSection
          title='Kids'
          categoryId='cat-solution-kids'
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