// Type Imports
import type { HorizontalMenuDataType } from '@/types/menuTypes'

const horizontalMenuData = (): HorizontalMenuDataType[] => [
  {
    label: 'Home',
    href: '/home',
    icon: 'tabler-smart-home'
  },
  {
    label: 'Services',
    icon: 'tabler-briefcase',
    children: [
      {
        istitle: 'true',
        label: 'Haircut for Everyone'
      },
      {
        label: 'Hair Services Overview',
        href: '/services/overview'
      },
      {
        label: 'Men',
        href: '/services/men'
      },
      {
        label: 'Women',
        href: '/services/women'
      },
      {
        label: 'Kids',
        href: '/services/kids'
      },
      {
        label: 'Seniors',
        href: '/services/seniors'
      },
      {
        label: 'Additional Services',
        href: '/services/additional'
      },
      {
        istitle: 'true',
        label: 'More from Bob Mulet'
      },
      {
        label: 'Online Check-In',
        href: '/services/check-in'
      },
      {
        label: 'Clip Notes',
        href: '/services/clip-notes'
      },
      {
        label: 'Lookbook',
        href: '/services/lookbook'
      },
      {
        label: 'Blog',
        href: '/services/blog'
      }
    ]
  },
  {
    label: 'Products',
    icon: 'tabler-package',
    children: [
      {
        label: 'Product Overview',
        href: '/products/overview'
      },
      {
        label: 'Solution by Bob Mulet',
        href: '/products/solution'
      },
      {
        label: 'Tea Tree Solutions by Bob Mulet',
        href: '/products/tea-tree-solutions'
      },
      {
        label: 'Latitude by Bob Mulet',
        href: '/products/latitude'
      },
      {
        label: 'Other Salon Products',
        href: '/products/other'
      }
    ]
  },
  {
    label: 'Promotions',
    icon: 'tabler-discount-2',
    children: [
      {
        label: 'Promotion Overview',
        href: '/promotions/overview'
      },
      {
        label: 'Senior Discounts',
        href: '/promotions/senior-discounts'
      },
      {
        label: 'Haircare Sale',
        href: '/promotions/haircare-sale'
      },
      {
        istitle: 'true',
        label: 'Partnership'
      },
      {
        label: 'College Football Playoff',
        href: '/promotions/college-football-playoff'
      },
      {
        label: 'NCAA',
        href: '/promotions/ncaa'
      },
      {
        label: 'NHL',
        href: '/promotions/nhl'
      }
    ]
  },
  {
    label: 'Book Now',
    href: '/FindSalon',
  }
]

export default horizontalMenuData
