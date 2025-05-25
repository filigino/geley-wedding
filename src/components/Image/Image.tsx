import React from 'react'

import { SxProps } from '@mui/material'
import Box from '@mui/material/Box'

export interface ImageProps {
  src: string
  sx?: SxProps
}

export const Image = ({ src, sx }: ImageProps) => (
  <Box component="img" src={src} sx={{ display: 'block', ...sx }} />
)
