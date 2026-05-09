'use client'

// Next Imports
import Link from 'next/link'

// Style Imports
import './footer.css'

// Footer links data
const footerLinks = {
  about: {
    title: 'About',
    links: [
      { label: 'Our Story', href: '/about/our-story' },
      { label: 'Careers', href: '/about/career' },
      { label: 'Press', href: '/about/press' },
      { label: 'Blog', href: '/services/blog' }
    ]
  },
  opportunity: {
    title: 'Opportunity',
    links: [
      { label: 'Franchise', href: '/opportunity/franchising' },
      { label: 'Partnerships', href: '/opportunity/partnerships' },
      { label: 'Investors', href: '/opportunity/investors' }
    ]
  },
  support: {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/support/help' },
      { label: 'Contact Us', href: '/support/contact' },
      { label: 'FAQs', href: '/support/faqs' }
    ]
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/legal/privacy' },
      { label: 'Terms of Service', href: '/legal/terms' },
      { label: 'Cookie Policy', href: '/legal/cookies' }
    ]
  }
}

const FooterContent = () => {
  return (
    <div className='footerContainer'>
      {/* Right Section - Footer Links */}
      <div className='linksSectionCentered'>
        {Object.values(footerLinks).map((category) => (
          <div key={category.title} className='linkColumn'>
            <span className='columnTitle'>{category.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FooterContent
