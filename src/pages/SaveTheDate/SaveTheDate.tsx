import React from 'react'

import { useRandomComponent } from 'hooks/useRandomComponent'
import { Dancing } from 'pages/SaveTheDate/Variants/Dancing/Dancing'
import { Standing } from 'pages/SaveTheDate/Variants/Standing'

const VARIANTS = [Dancing, Standing]

export const SaveTheDate = () => {
  const Variant = useRandomComponent({
    components: VARIANTS,
    localStorageKey: 'saveTheDateVariantIndex',
  })
  return <Variant />
}
