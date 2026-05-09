// React Imports
import { useContext } from 'react'

// Context Imports
import HorizontalNavContext from '../contexts/horizontalNavContext'

const useHorizontalNav = () => {
  // Hooks
  const context = useContext(HorizontalNavContext)

  if (context === undefined) {
    throw new Error(
      'useHorizontalNav must be used within a HorizontalNavProvider. ' +
      'Make sure your component is wrapped with the HorizontalNav component.'
    )
  }

  return context
}

export default useHorizontalNav
