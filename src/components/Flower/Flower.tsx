import React from 'react'

import { SxProps } from '@mui/material'

import flower from 'assets/invitation/flower.png'
import { Image } from 'components/Image/Image'

interface FlowerProps {
  sx?: SxProps
}

export const Flower = ({ sx }: FlowerProps) => (
  <Image src={flower} sx={{ width: '18%', ...sx }} />
)
