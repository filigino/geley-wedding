import React, { useEffect, useState } from 'react'

import landscape from 'assets/landscape.jpg'
import landscapeAlt from 'assets/landscape-alt.jpg'
import { Image } from 'components/Image/Image'

export const Standing = () => {
  const [shouldShowFirstImage, setShouldShowFirstImage] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShouldShowFirstImage((prev) => !prev)
    }, 500) // switch every 500ms

    return () => clearInterval(interval) // cleanup on unmount
  }, [])

  return (
    <Image
      src={shouldShowFirstImage ? landscape : landscapeAlt}
      sx={{ height: '100vh', margin: 'auto' }}
    />
  )
}
