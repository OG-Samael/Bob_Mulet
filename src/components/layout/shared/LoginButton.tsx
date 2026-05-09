'use client'

import Link from 'next/link'

import Button from '@mui/material/Button'

const LoginButton = () => {
    return (
        <div className='flex items-center gap-4'>
            <Button component={Link} href='/login' variant='contained' size='medium'
            sx={{ textTransform: 'none', borderRadius: '8px', px: 5}}
            style={{ objectFit: 'cover', borderRadius: '500px' }}>
                Sign Up
            </Button>
            <Button component={Link} href='/login' variant='contained' size='medium'
            sx={{ textTransform: 'none', borderRadius: '8px', px: 3}}
            style={{ objectFit: 'cover', borderRadius: '500px' }}>
                Login
            </Button>
        </div>
    )
}

export default LoginButton
