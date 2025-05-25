import { ComponentType, useEffect, useState } from 'react'

import { getLocalStorage, setLocalStorage } from 'utils/localStorage'
import { getRandomItem } from 'utils/random'

export interface UseRandomComponentProps {
  components: ComponentType[]
  localStorageKey: string
}

export const useRandomComponent = ({
  components,
  localStorageKey,
}: UseRandomComponentProps) => {
  const [componentIndex] = useState(() => {
    const lastSeenIndex = parseInt(getLocalStorage(localStorageKey) ?? '', 10)
    return getRandomItem(
      components.map((_component, i) => i).filter((i) => i !== lastSeenIndex)
    )
  })

  useEffect(() => {
    setLocalStorage(localStorageKey, `${componentIndex}`)
  }, [])

  return components[componentIndex]
}
