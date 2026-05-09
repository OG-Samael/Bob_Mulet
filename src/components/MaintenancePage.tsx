'use client'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface MaintenancePageProps {
  title: string
  icon?: string
}

const MaintenancePage = ({ title, icon = '🚧' }: MaintenancePageProps) => {
  return (
    <Box className='flex flex-col items-center justify-center min-h-screen text-center px-8 py-8'>
      <Typography className='text-4xl font-bold mb-2'>
        {icon} {title}
      </Typography>
      <Typography className='text-lg text-gray-600 mb-4'>
        🚧 Under Maintenance
      </Typography>
    </Box>
  )
}

export default MaintenancePage
