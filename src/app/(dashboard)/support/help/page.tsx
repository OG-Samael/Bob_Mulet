import dynamic from 'next/dynamic'

import Box from '@mui/material/Box'
import MaintenancePage from '@/components/MaintenancePage'

const FooterContent = dynamic(() => import('@/components/layout/horizontal/FooterContent'), {
  loading: () => <Box sx={{ height: 200 }} />
})

export default function Page() {
  return (
    <>
      <MaintenancePage title="Help Center" icon="❓" />
      <Box className='footerWrapper'>
        <FooterContent />
      </Box>
    </>
  )
}
