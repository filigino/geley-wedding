import React from 'react'

import { SxProps } from '@mui/material'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { BLUE, BLACK, MAROON } from 'constants/colours'
import { LATO, LINOTYPE_DIDOT } from 'constants/fonts'

interface RsvpProps {
  sx?: SxProps
}

export const Rsvp = ({ sx }: RsvpProps) => (
  <Stack
    sx={{
      backgroundColor: BLUE,
      textAlign: 'center',
      px: '20px',
      py: '12px',
      ...sx,
    }}
  >
    <Typography variant="h5" sx={{ color: MAROON, fontFamily: LINOTYPE_DIDOT }}>
      RSVP
    </Typography>
    <Typography sx={{ color: BLACK, fontFamily: LATO, fontSize: '11px' }}>
      Kindly email <b>ginoandlesleywedding@gmail.com</b> to confirm your
      attendance.
      <br />
      Please note the deadline to RSVP is November 26, 2025.
    </Typography>
  </Stack>
)
