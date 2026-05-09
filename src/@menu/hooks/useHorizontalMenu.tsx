// React Imports
import { useContext } from 'react'

// Type Imports
import type { HorizontalMenuContextProps } from '../components/horizontal-menu/Menu'

// Context Imports
import { HorizontalMenuContext } from '../components/horizontal-menu/Menu'

const useHorizontalMenu = (): HorizontalMenuContextProps => {
  // Hooks
  const context = useContext(HorizontalMenuContext)

  if (context === undefined) {
    throw new Error(
      'useHorizontalMenu must be used within a HorizontalMenuProvider. ' +
      'Make sure your component is wrapped with the Menu component.'
    )
  }

  return context
}

export default useHorizontalMenu
