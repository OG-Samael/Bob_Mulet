import type { ChildrenType } from '@core/types'

import Providers from '@components/Providers'

export default async function BlogLayout({ children }: ChildrenType) {
  return (
    <Providers direction='ltr'>
      {children}
    </Providers>
  )
}
