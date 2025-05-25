import React from 'react'

import landscape from 'assets/landscape.jpg'
import { Image } from 'components/Image/Image'
import { useIsMobile } from 'hooks/useIsMobile'
import { DancingCarousel } from 'pages/SaveTheDate/Variants/Dancing/DancingCarousel/DancingCarousel'

export const Dancing = () => {
  const isMobile = useIsMobile()
  return isMobile ? (
    <DancingCarousel />
  ) : (
    <Image src={landscape} sx={{ height: '100vh', margin: 'auto' }} />
  )
}
