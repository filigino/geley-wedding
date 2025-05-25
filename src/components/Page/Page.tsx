import React, { ReactNode } from 'react'

import { SxProps } from '@mui/material'
import Box from '@mui/material/Box'

export interface PageProps {
  children: ReactNode
  sx?: SxProps
}

export const Page = ({ children, sx }: PageProps) => (
  <Box sx={{ minHeight: '100vh', ...sx }}>{children}</Box>
)
