import React from 'react'

import { SxProps } from '@mui/material'

import logoDivider from 'assets/invitation/logoDivider.png'
import { Image } from 'components/Image/Image'

interface LogoDividerProps {
  sx?: SxProps
}

export const LogoDivider = ({ sx }: LogoDividerProps) => (
  <Image
    src={logoDivider}
    sx={{ my: ['32px', '64px'], width: '36%', alignSelf: 'center', ...sx }}
  />
)
