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

const RETURN_TO = '/products/tea-tree-solutions'

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
              <Typography variant='h3' className='pgBoldTitle'>Tea Tree Solutions by Bob Mulet</Typography>
              <Typography variant='body1' className='pgBodyMuted'>
                Hair products with a holistic perspective on body, beauty and style. With their medicinal powers, all-natural tea tree oils intertwine with spearmint and peppermint fragrances for a rejuvenating lift in your daily ritual. For all hair types.
              </Typography>
              <Button variant='contained' size='large' href='/services/check-in' className='pgRoundBtn' sx={{ mt: 4 }}>
                Check In Now
              </Button>
            </Box>
            <Box className='pgImgBox43'>
              <Image src='/images/salon/greatClips-products-teaTreeSolutions.jpg' alt='Tea Tree Solutions' fill className='pgCoverImg' />
            </Box>
          </Box>
        </Container>
      </Box>

      <Box className='productsCenterSection'>
        <Typography variant='h2' className='productsCenterTitle'>
          Nature&apos;s best for your hair and body
        </Typography>
        <Typography variant='body1' className='pgBodyMuted' sx={{ maxWidth: 700 }}>
          Our Tea Tree collection harnesses the natural power of tea tree oil combined with invigorating spearmint and peppermint to refresh your daily hair care routine.
        </Typography>
      </Box>

      <Container maxWidth='lg' className='pgSection'>
        <ProductSection
          title='Tea Tree Collection'
          categoryId='cat-tea-tree-collection'
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