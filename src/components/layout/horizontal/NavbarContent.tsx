'use client'

// Third-party Imports
import classnames from 'classnames'
import dynamic from 'next/dynamic'

// Component Imports
import LoginButton from '@components/layout/shared/LoginButton'

import NavToggle from './NavToggle'
import Logo from '@components/layout/shared/Logo'

// Lazy load non-critical navbar components
const HorizontalMenu = dynamic(() => import('./HorizontalMenu'), { ssr: false })

// Hook Imports
import useHorizontalNav from '@menu/hooks/useHorizontalNav'

// Util Imports
import { horizontalLayoutClasses } from '@layouts/utils/layoutClasses'

const NavbarContent = () => {
  // Hooks
  const { isBreakpointReached } = useHorizontalNav()

  return (
    <div
      className={classnames(horizontalLayoutClasses.navbarContent, 'flex items-center justify-between gap-4 is-full')}
    >
      <div className='flex items-center gap-4' style={{ flex: '0 0 auto' }}>
        <NavToggle />
        {/* Hide Logo on Smaller screens */}
        {!isBreakpointReached && <Logo />}
      </div>
      {/* Show menu items inline on desktop */}
      {!isBreakpointReached && (
        <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
          <HorizontalMenu />
        </div>
      )}
      <div className='flex items-center' style={{ flex: '0 0 auto' }}>
        <LoginButton />
      </div>
    </div>
  )
}

export default NavbarContent
