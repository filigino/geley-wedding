import React from 'react'

import { SxProps } from '@mui/material'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { BLUE, BLACK, MAROON } from 'constants/colours'
import {
  FONT_SIZE_CONTENT,
  FONT_SIZE_H5,
  LATO,
  LINOTYPE_DIDOT,
} from 'constants/fonts'

interface RsvpProps {
  sx?: SxProps
}

export const Rsvp = ({ sx }: RsvpProps) => (
  <Stack
    sx={{
      backgroundColor: BLUE,
      textAlign: 'center',
      px: '20px',
      py: ['12px', '32px'],
      ...sx,
    }}
  >
    <Typography
      variant="h5"
      sx={{
        color: MAROON,
        fontFamily: LINOTYPE_DIDOT,
        transform: 'scaleX(.9)',
        fontSize: FONT_SIZE_H5,
      }}
    >
      RSVP
    </Typography>
    <Typography
      sx={{ color: BLACK, fontFamily: LATO, fontSize: FONT_SIZE_CONTENT }}
    >
      Kindly email <b>ginoandlesleywedding@gmail.com</b> to confirm your
      attendance.
      <br />
      Please note the deadline to RSVP is November 26, 2025.
    </Typography>
  </Stack>
)
