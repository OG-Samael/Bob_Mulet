// MUI Imports
import Button from '@mui/material/Button'
import dynamic from 'next/dynamic'

// Type Imports
import type { ChildrenType } from '@core/types'

// Layout Imports
import LayoutWrapper from '@layouts/LayoutWrapper'
import VerticalLayout from '@layouts/VerticalLayout'
import HorizontalLayout from '@layouts/HorizontalLayout'

// Component Imports
import Providers from '@components/Providers'
import Navigation from '@components/layout/vertical/Navigation'
import Navbar from '@components/layout/vertical/Navbar'
import Header from '@components/layout/horizontal/Header'

// Lazy load below-fold and non-critical components
const VerticalFooter = dynamic(() => import('@components/layout/vertical/Footer'))
const ScrollToTop = dynamic(() => import('@core/components/scroll-to-top'))

// Util Imports
import { getMode, getSystemMode } from '@core/utils/serverHelpers'

const Layout = async (props: ChildrenType) => {
  const { children } = props

  // Vars
  const direction = 'ltr'
  const mode = await getMode()
  const systemMode = await getSystemMode()

  const verticalLayout = (
    <VerticalLayout navigation={<Navigation mode={systemMode} />} navbar={<Navbar />} footer={<VerticalFooter />}>
      {children}
    </VerticalLayout>
  )

  const horizontalLayout = (
    <HorizontalLayout header={<Header />}>
      {children}
    </HorizontalLayout>
  )

  return (
    <Providers direction={direction}>
      <LayoutWrapper systemMode={systemMode} verticalLayout={verticalLayout} horizontalLayout={horizontalLayout} />
      <ScrollToTop className='mui-fixed'>
        <Button variant='contained' className='is-10 bs-10 rounded-full p-0 min-is-0 flex items-center justify-center'>
          <i className='tabler-arrow-up' />
        </Button>
      </ScrollToTop>
    </Providers>
  )
}

export default Layout
