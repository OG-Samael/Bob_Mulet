'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import NextLink from 'next/link'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import dynamic from 'next/dynamic'
import '../products-page.css'

const FooterContent = dynamic(() => import('@/components/layout/horizontal/FooterContent'), {
  loading: () => <Box sx={{ height: 200 }} />
})

// Which parent categories to show on the overview, and their display config
const BRAND_CONFIG: Record<string, { href: string; btnLabel: string; boxClass: string; subtitle: string; btnSx?: object }> = {
  'cat-solution': {
    href: '/products/solution',
    btnLabel: 'See all Solution Products',
    boxClass: 'pgProductBox',
    subtitle: 'Solutions is our signature line of haircare and styling products created exclusively for Bob Mulet customers with stylists professional recommendations in mind.'
  },
  'cat-tea-tree': {
    href: '/products/tea-tree-solutions',
    btnLabel: 'See all Tea Tree Products',
    boxClass: 'pgProductBoxGreen',
    subtitle: 'Hair products with a holistic perspective on body, beauty and style. With their medicinal powers, all-natural tea tree oils intertwine with spearmint and peppermint fragrances for a rejuvenating lift in your daily ritual.',
    btnSx: { color: 'success.dark', borderColor: 'success.dark' }
  },
  'cat-latitude': {
    href: '/products/latitude',
    btnLabel: 'See all Latitude Products',
    boxClass: 'pgProductBox',
    subtitle: 'Latitude offers premium performance at a great price. Hair products are uniquely formulated to hydrate, strengthen, protect, restore, and volumize hair.'
  }
}

const BRAND_ORDER = ['cat-solution', 'cat-tea-tree', 'cat-latitude']

function pickRandom<T>(arr: T[], count: number): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy.slice(0, count)
}

interface BrandSection {
  parentId: string
  name: string
  products: any[]
}

export default function Page() {
  const [sections, setSections] = useState<BrandSection[]>([])

  const loadData = useCallback(async () => {
    const [catRes, prodRes] = await Promise.all([
      fetch('/api/categories'),
      fetch('/api/products')
    ])
    const { categories } = await catRes.json()
    const { products } = await prodRes.json()

    const result: BrandSection[] = BRAND_ORDER
      .filter(parentId => BRAND_CONFIG[parentId])
      .map(parentId => {
        const parent = categories.find((c: any) => c.id === parentId)
        if (!parent) return null

        // collect all sub-category IDs for this parent
        const subIds = new Set<string>(
          categories
            .filter((c: any) => c.parentId === parentId)
            .map((c: any) => c.id)
        )

        const eligible = products.filter((p: any) => subIds.has(p.categoryId))
        return {
          parentId,
          name: parent.name,
          products: pickRandom(eligible, 4)
        }
      })
      .filter(Boolean) as BrandSection[]

    setSections(result)
  }, [])

  useEffect(() => { loadData() }, [loadData])

  return (
    <Box className='productsScrollContainer'>
      {/* Hero */}
      <Box className='productsHeroGreen'>
        <Image src='/images/pages/GreenScreen.png' alt='Green Screen Background' fill className='pgHeroOverlayImg' priority />
        <Container maxWidth='lg' className='pgHeroContainer'>
          <Box className='pgTwoColForward'>
            <Box className='productsHeroWhiteBox'>
              <Typography variant='subtitle1' className='pgPrimaryLabel'>Haircare Products</Typography>
              <Typography variant='h3' className='pgBoldTitle'>Products for everyone</Typography>
              <Typography variant='body1' className='pgBodyMuted'>
                Whatever your hair type, style, mood or look, we have the perfect product for you. Find the products that help you look and feel your best, from our signature professional-quality haircare and hairstyling products to favorites from brands you know and love.
              </Typography>
            </Box>
            <Box className='pgImgBox43'>
              <Image src='/images/salon/gc-products-hero-updated.png' alt='Products Overview' fill className='pgCoverImg' />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Dynamic brand sections */}
      {sections.map(({ parentId, name, products }) => {
        const config = BRAND_CONFIG[parentId]
        return (
          <Container key={parentId} maxWidth='lg' className='pgSection'>
            <Box className={config.boxClass}>
              <Box sx={{ textAlign: 'center', mb: 8 }}>
                <Typography variant='h3' className='pgBoldTitle'>{name}</Typography>
                {config.subtitle && (
                  <Typography variant='body1' className='productsSubtitleText'>{config.subtitle}</Typography>
                )}
              </Box>

              <Box className='pgProductGrid'>
                {products.length > 0 ? (
                  products.map((product) => (
                    <NextLink
                      key={product.id}
                      href={`/products/manage/details/${product.id}?returnTo=/products/overview`}
                      className='pgProductLink'
                    >
                      <Box className='pgProductCard' sx={{ cursor: 'pointer', '&:hover': { boxShadow: 6 } }}>
                        {product.image && (
                          <Box className='pgProductCardImg' sx={{ position: 'relative', overflow: 'hidden' }}>
                            <img
                              src={product.image}
                              alt={product.name}
                              className='pgProductCardImgFill'
                            />
                          </Box>
                        )}
                        <Box className='pgProductCardBody'>
                          <Typography variant='h6' className='pgBoldTitle' sx={{ textAlign: 'center' }}>
                            {product.name}
                          </Typography>
                          {product.shortDescription && (
                            <Typography variant='body2' color='text.secondary' sx={{ textAlign: 'center', mt: 0.5 }}>
                              {product.shortDescription}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                    </NextLink>
                  ))
                ) : (
                  <Typography variant='body2' color='text.secondary' sx={{ gridColumn: '1 / -1', textAlign: 'center', py: 4 }}>
                    No products added yet.
                  </Typography>
                )}
              </Box>

              <Box sx={{ textAlign: 'center', mt: 8 }}>
                <Button variant='outlined' className='productsCatalogBtn' href={config.href} sx={config.btnSx ?? {}}>
                  {config.btnLabel}
                </Button>
              </Box>
            </Box>
          </Container>
        )
      })}

      {/* Salon products */}
      <Container maxWidth='lg' className='pgSection' id='salon-products'>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant='h3' className='pgBoldTitle'>Salon products</Typography>
          <Typography variant='body1' className='productsSubtitleText'>
            Elevate your style with premium products from beloved haircare brands, available at Bob Mulet salons for your convenience.
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Button variant='contained' href='/products/other'>View Salon Products</Button>
        </Box>
      </Container>

      <Box className='footerWrapper'>
        <FooterContent />
      </Box>
    </Box>
  )
}
