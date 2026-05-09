'use client'

// Third-party Imports
import classnames from 'classnames'
import dynamic from 'next/dynamic'

// Component Imports
import LoginButton from '@components/layout/shared/LoginButton'
import NavToggle from './NavToggle'

// Lazy load non-critical components

// Util Imports
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'

const NavbarContent = () => {
  return (
    <div className={classnames(verticalLayoutClasses.navbarContent, 'flex items-center justify-between gap-4 is-full')}>
      <div className='flex items-center gap-4'>
        <NavToggle />
      </div>
      <div className='flex items-center'>
        <LoginButton />
      </div>
    </div>
  )
}

export default NavbarContent
