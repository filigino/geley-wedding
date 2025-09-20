import React from 'react'

import { SxProps } from '@mui/material'

import flowerDivider from 'assets/invitation/flowerDivider.png'
import { Image } from 'components/Image/Image'

interface FlowerDividerProps {
  sx?: SxProps
}

export const FlowerDivider = ({ sx }: FlowerDividerProps) => (
  <Image
    src={flowerDivider}
    sx={{ width: '25%', alignSelf: 'center', ...sx }}
  />
)
