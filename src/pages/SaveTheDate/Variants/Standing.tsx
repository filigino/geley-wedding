import React, { useEffect, useState } from 'react'

import saveTheDateStandingDesktop1 from 'assets/saveTheDate/saveTheDateStandingDesktop1.png'
import saveTheDateStandingDesktop2 from 'assets/saveTheDate/saveTheDateStandingDesktop2.png'
import saveTheDateStandingMobile1 from 'assets/saveTheDate/saveTheDateStandingMobile1.png'
import saveTheDateStandingMobile2 from 'assets/saveTheDate/saveTheDateStandingMobile2.png'
import { Image } from 'components/Image/Image'
import { useIsMobile } from 'hooks/useIsMobile'

type ImageList = [string, string]

const DESKTOP_IMAGES: ImageList = [
  saveTheDateStandingDesktop1,
  saveTheDateStandingDesktop2,
]

const MOBILE_IMAGES: ImageList = [
  saveTheDateStandingMobile1,
  saveTheDateStandingMobile2,
]

export const Standing = () => {
  const isMobile = useIsMobile()
  const [imageIndex, setImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % MOBILE_IMAGES.length)
    }, 500) // switch every 500ms

    return () => clearInterval(interval) // cleanup on unmount
  }, [])

  return (
    <Image
      src={isMobile ? MOBILE_IMAGES[imageIndex] : DESKTOP_IMAGES[imageIndex]}
      sx={{
        width: '100dvw',
        height: '100dvh',
        objectFit: 'contain',
      }}
    />
  )
}
