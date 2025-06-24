import React from 'react'

import saveTheDateStandingDesktop1 from 'assets/saveTheDate/saveTheDateStandingDesktop1.png'
import saveTheDateStandingMobile1 from 'assets/saveTheDate/saveTheDateStandingMobile1.png'
import { Image } from 'components/Image/Image'
import { useIsMobile } from 'hooks/useIsMobile'

export const CivilWedding = () => {
  const isMobile = useIsMobile()

  return (
    <Image
      src={isMobile ? saveTheDateStandingMobile1 : saveTheDateStandingDesktop1}
      sx={{
        width: '100dvw',
        height: '100dvh',
        objectFit: 'contain',
        backgroundColor: '#f8f8f8',
      }}
    />
  )
}
