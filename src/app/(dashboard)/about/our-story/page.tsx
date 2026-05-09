import dynamic from 'next/dynamic'

import Box from '@mui/material/Box'
import MaintenancePage from '@/components/MaintenancePage'

const FooterContent = dynamic(() => import('@/components/layout/horizontal/FooterContent'), {
  loading: () => <Box sx={{ height: 200 }} />
})

import './about.css'

export default function Page() {
  return (
    <>
      <div className='aboutContainer'>
        <div className='aboutContent'>
          <MaintenancePage title="Our Story" icon="📜" />
        </div>
      </div>
      <Box className='footerWrapper'>
        <FooterContent />
      </Box>
    </>
  )
}
